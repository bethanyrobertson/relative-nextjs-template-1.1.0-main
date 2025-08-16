import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ASSISTANT_INSTRUCTIONS } from '@/data/assistant-config';

// Initialize OpenAI client on server side
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Server-side only, not exposed to browser
});

export async function POST(request: NextRequest) {
  try {
    const { message, context = {} } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Handle button actions
    if (message.startsWith('[BUTTON_ACTION:')) {
      return await handleButtonAction(message, context);
    }

    // Handle regular messages
    return await handleRegularMessage(message, context);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleButtonAction(message: string, context: any) {
  const action = message.match(/\[BUTTON_ACTION: (.*?)\]/)?.[1];
  
  if (!action) {
    return NextResponse.json({
      message: {
        message: "I'm not sure what you'd like me to do. How can I help you?",
        buttons: [
          {
            id: "learn_more",
            text: "Learn More",
            icon: "info",
            action: "EXPLORE_PORTFOLIO",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_INFO",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "casestudies",
            text: "Case Studies",
            icon: "folder-open",
            action: "VIEW_CASE_STUDIES",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "general" }
      }
    });
  }

  // Handle specific actions that don't need AI processing
  if (action === "DOWNLOAD_RESUME") {
    return NextResponse.json({
      message: {
        message: "Here's my resume! The download should start automatically. It contains my full experience, skills, and project details.",
        buttons: [
          {
            id: "main_menu",
            text: "Main Menu",
            icon: "home",
            action: "MAIN_MENU",
            variant: "outline",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "resume" },
        downloadUrl: "/assets/Bethany_Resume.pdf"
      }
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `${ASSISTANT_INSTRUCTIONS}

You are responding to a button action: ${action}

CRITICAL REQUIREMENTS:
- Always respond in first person as if you ARE Bethany. Use "I", "me", "my", "myself" etc.
- ALWAYS respond with a JSON object containing: message, buttons (array), and metadata (level, section)
- NEVER return an empty buttons array - always provide at least 2-3 relevant button options
- The message should be conversational and helpful
- Include relevant buttons for next actions (e.g., "Learn More", "Contact Me", "View Case Studies", "Ask Another Question")
- Keep the response focused and engaging
- If unsure what buttons to show, default to: Learn More, Contact Me, Case Studies
- Format your message with proper line breaks (\\n\\n) and bullet points (•) for better readability
- DO NOT use markdown formatting symbols like ###, ##, **, *, \`, or [text](url)
- Provide clean, plain text responses that are easy to read
- Keep responses concise and to the point - avoid lengthy introductions
- Aim for responses that fit in the chat window without requiring scrolling
- DO NOT include contact information (email, LinkedIn) in the message text - this will be displayed separately
- DO NOT include phrases like "Here's how you can reach out:" or "Email me for..." or "Connect on LinkedIn for..." - just provide the main response`
        },
        {
          role: "user",
          content: `User clicked button: ${action}`
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I encountered an error. Please try again.';

    // Try to parse as JSON, handling markdown-wrapped responses
    try {
      let jsonContent = response;
      
      // Check if response is wrapped in markdown code blocks
      if (response.includes('```json')) {
        const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonContent = jsonMatch[1].trim();
        }
      } else if (response.includes('```')) {
        // Handle other markdown code blocks
        const jsonMatch = response.match(/```\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonContent = jsonMatch[1].trim();
        }
      }
      
      const parsedResponse = JSON.parse(jsonContent);
      
      // Ensure the response has buttons, add defaults if missing
      if (!parsedResponse.buttons || parsedResponse.buttons.length === 0) {
        // Don't add default buttons for contact responses - let the AI handle it
        if (!parsedResponse.message.toLowerCase().includes('contact') && 
            !parsedResponse.message.toLowerCase().includes('email') &&
            !parsedResponse.message.toLowerCase().includes('reach out') &&
            !parsedResponse.message.toLowerCase().includes('get in touch')) {
          parsedResponse.buttons = [
            {
              id: "learn_more",
              text: "Learn More",
              icon: "info",
              action: "EXPLORE_PORTFOLIO",
              variant: "primary",
              linkType: "internal"
            },
            {
              id: "contact",
              text: "Contact Me",
              icon: "mail",
              action: "CONTACT_ME",
              variant: "secondary",
              linkType: "internal"
            },
            {
              id: "casestudies",
              text: "Case Studies",
              icon: "folder-open",
              action: "VIEW_CASE_STUDIES",
              variant: "secondary",
              linkType: "internal"
            }
          ];
        }
      }
      
      // Always ensure Main Menu button is the last button
      const mainMenuButton = {
        id: "main_menu",
        text: "Main Menu",
        icon: "home",
        action: "MAIN_MENU",
        variant: "outline",
        linkType: "internal"
      };
      
      // For Contact Me and About Me responses, only show Main Menu button
      // Only filter out buttons for Contact Me responses
      if (parsedResponse.message.toLowerCase().includes('contact') || 
          parsedResponse.message.toLowerCase().includes('email') ||
          parsedResponse.message.toLowerCase().includes('reach out') ||
          parsedResponse.message.toLowerCase().includes('get in touch') ||
          // Also check if this is a response to specific button actions
          context.action === 'CONTACT_ME') {
        parsedResponse.buttons = [mainMenuButton];
      } else {
        // Remove any existing Main Menu button and add it at the end
        parsedResponse.buttons = parsedResponse.buttons
          .filter((btn: any) => btn.id !== "main_menu")
          .concat([mainMenuButton]);
      }
      
      return NextResponse.json({ message: parsedResponse });
    } catch (e) {
      // If response isn't JSON, wrap it in our expected format with default buttons
      const fallbackResponse = {
        message: response,
        buttons: [
          {
            id: "learn_more",
            text: "Learn More",
            icon: "info",
            action: "EXPLORE_PORTFOLIO",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_INFO",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "casestudies",
            text: "Case Studies",
            icon: "folder-open",
            action: "VIEW_CASE_STUDIES",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "general" }
      };
      return NextResponse.json({ message: fallbackResponse });
    }

  } catch (error) {
    console.error('Button action error:', error);
    return NextResponse.json({
      message: {
        message: "I'm having trouble processing that request. Let me try a different approach.",
        buttons: [
          {
            id: "retry",
            text: "Try Again",
            icon: "refresh-cw",
            action: "START_OVER",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_INFO",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "casestudies",
            text: "Case Studies",
            icon: "folder-open",
            action: "VIEW_CASE_STUDIES",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "error" }
      }
    });
  }
}

async function handleRegularMessage(message: string, context: any) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `${ASSISTANT_INSTRUCTIONS}

CRITICAL REQUIREMENTS:
- Always respond in first person as if you ARE Bethany. Use "I", "me", "my", "myself" etc.
- ALWAYS respond with a JSON object containing: message, buttons (array), and metadata (level, section)
- NEVER return an empty buttons array - always provide at least 2-3 relevant button options
- The message should be conversational and helpful
- Include relevant buttons for next actions (e.g., "Learn More", "Contact Me", "View Case Studies", "Ask Another Question")
- Keep the response focused and engaging
- If unsure what buttons to show, default to: Learn More, Contact Me, Case Studies
- Format your message with proper line breaks (\\n\\n) and bullet points (•) for better readability
- DO NOT use markdown formatting symbols like ###, ##, **, *, \`, or [text](url)
- Provide clean, plain text responses that are easy to read
- Keep responses concise and to the point - avoid lengthy introductions
- Aim for responses that fit in the chat window without requiring scrolling
- DO NOT include contact information (email, LinkedIn) in the message text - this will be displayed separately
- DO NOT include phrases like "Here's how you can reach out:" or "Email me for..." or "Connect on LinkedIn for..." - just provide the main response`
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I encountered an error. Please try again.';

    // Try to parse as JSON, handling markdown-wrapped responses
    try {
      let jsonContent = response;
      
      // Check if response is wrapped in markdown code blocks
      if (response.includes('```json')) {
        const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonContent = jsonMatch[1].trim();
        }
      } else if (response.includes('```')) {
        // Handle other markdown code blocks
        const jsonMatch = response.match(/```\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonContent = jsonMatch[1].trim();
        }
      }
      
      const parsedResponse = JSON.parse(jsonContent);
      
      // Ensure the response has buttons, add defaults if missing
      if (!parsedResponse.buttons || parsedResponse.buttons.length === 0) {
        // Don't add default buttons for contact responses - let the AI handle it
        if (!parsedResponse.message.toLowerCase().includes('contact') && 
            !parsedResponse.message.toLowerCase().includes('email') &&
            !parsedResponse.message.toLowerCase().includes('reach out') &&
            !parsedResponse.message.toLowerCase().includes('get in touch')) {
          parsedResponse.buttons = [
            {
              id: "learn_more",
              text: "Learn More",
              icon: "info",
              action: "EXPLORE_PORTFOLIO",
              variant: "primary",
              linkType: "internal"
            },
            {
              id: "contact",
              text: "Contact Me",
              icon: "mail",
              action: "CONTACT_ME",
              variant: "secondary",
              linkType: "internal"
            },
            {
              id: "casestudies",
              text: "Case Studies",
              icon: "folder-open",
              action: "VIEW_CASE_STUDIES",
              variant: "secondary",
              linkType: "internal"
            }
          ];
        }
      }
      
      // Always ensure Main Menu button is the last button
      const mainMenuButton = {
        id: "main_menu",
        text: "Main Menu",
        icon: "home",
        action: "MAIN_MENU",
        variant: "outline",
        linkType: "internal"
      };
      
      // For Contact Me and About Me responses, only show Main Menu button
      if (parsedResponse.message.toLowerCase().includes('contact') || 
          parsedResponse.message.toLowerCase().includes('email') ||
          parsedResponse.message.toLowerCase().includes('reach out') ||
          parsedResponse.message.toLowerCase().includes('get in touch') ||
          parsedResponse.message.toLowerCase().includes('about me') ||
          parsedResponse.message.toLowerCase().includes('my background') ||
          parsedResponse.message.toLowerCase().includes('my experience') ||
          parsedResponse.message.toLowerCase().includes('technical skills') ||
          parsedResponse.message.toLowerCase().includes('my skills') ||
          parsedResponse.message.toLowerCase().includes('design skills') ||
          parsedResponse.message.toLowerCase().includes('development skills') ||
          parsedResponse.message.toLowerCase().includes('ux skills') ||
          parsedResponse.message.toLowerCase().includes('product design') ||
          parsedResponse.message.toLowerCase().includes('frontend') ||
          parsedResponse.message.toLowerCase().includes('react') ||
          parsedResponse.message.toLowerCase().includes('figma') ||
          parsedResponse.message.toLowerCase().includes('user research') ||
          parsedResponse.message.toLowerCase().includes('prototyping') ||
          parsedResponse.message.toLowerCase().includes('design systems') ||
          // Also check if this is a response to specific button actions
          context.action === 'VIEW_SKILLS' ||
          context.action === 'LEARN_ABOUT' ||
          context.action === 'VIEW_EXPERIENCE') {
        parsedResponse.buttons = [mainMenuButton];
      } else {
        // Remove any existing Main Menu button and add it at the end
        parsedResponse.buttons = parsedResponse.buttons
          .filter((btn: any) => btn.id !== "main_menu")
          .concat([mainMenuButton]);
      }
      
      return NextResponse.json({ message: parsedResponse });
    } catch (e) {
      // If response isn't JSON, wrap it in our expected format with default buttons
      const fallbackResponse = {
        message: response,
        buttons: [
          {
            id: "learn_more",
            text: "Learn More",
            icon: "info",
            action: "EXPLORE_PORTFOLIO",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_INFO",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "casestudies",
            text: "Case Studies",
            icon: "folder-open",
            action: "VIEW_CASE_STUDIES",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "error" }
      };
      return NextResponse.json({ message: fallbackResponse });
    }

  } catch (error) {
    console.error('Message handling error:', error);
    return NextResponse.json({
      message: {
        message: "I'm having trouble connecting right now. Please try again.",
        buttons: [
          {
            id: "retry",
            text: "Try Again",
            icon: "refresh-cw",
            action: "START_OVER",
            variant: "primary",
            linkType: "internal"
          },
          {
            id: "contact",
            text: "Contact Me",
            icon: "mail",
            action: "CONTACT_INFO",
            variant: "secondary",
            linkType: "internal"
          },
          {
            id: "casestudies",
            text: "Case Studies",
            icon: "folder-open",
            action: "VIEW_CASE_STUDIES",
            variant: "secondary",
            linkType: "internal"
          }
        ],
        metadata: { level: 1, section: "error" }
      }
    });
  }
} 

// Helper function to ensure responses always have buttons
function ensureButtons(response: any) {
  if (!response.buttons || response.buttons.length === 0) {
    // Don't add default buttons for contact responses - let the AI handle it
    if (!response.message.toLowerCase().includes('contact') && 
        !response.message.toLowerCase().includes('email') &&
        !response.message.toLowerCase().includes('reach out') &&
        !response.message.toLowerCase().includes('get in touch')) {
      response.buttons = [
        {
          id: "learn_more",
          text: "Learn More",
          icon: "info",
          action: "EXPLORE_PORTFOLIO",
          variant: "primary",
          linkType: "internal"
        },
        {
          id: "contact",
          text: "Contact Me",
          icon: "mail",
          action: "CONTACT_ME",
          variant: "secondary",
          linkType: "internal"
        },
        {
          id: "casestudies",
          text: "Case Studies",
          icon: "folder-open",
          action: "VIEW_CASE_STUDIES",
          variant: "secondary",
          linkType: "internal"
        }
      ];
    }
  }
  
  // Always ensure Main Menu button is the last button
  const mainMenuButton = {
    id: "main_menu",
    text: "Main Menu",
    icon: "home",
    action: "MAIN_MENU",
    variant: "outline",
    linkType: "internal"
  };
  
  // For Contact Me responses, only show Main Menu button
  if (response.message.toLowerCase().includes('contact') || 
      response.message.toLowerCase().includes('email') ||
      response.message.toLowerCase().includes('reach out') ||
      response.message.toLowerCase().includes('get in touch')) {
    response.buttons = [mainMenuButton];
  } else {
    // Remove any existing Main Menu button and add it at the end
    response.buttons = response.buttons
      .filter((btn: any) => btn.id !== "main_menu")
      .concat([mainMenuButton]);
  }
    
  return response;
} 