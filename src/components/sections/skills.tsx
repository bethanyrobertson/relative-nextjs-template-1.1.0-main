import {
    Code,
    Database,
    Figma,
    Github,
    Globe,
    Network,
    PenTool,
    Palette,
    Server,
    Smartphone,
    Terminal,
    MessageSquare,
    Wrench,
    PencilLine,
    Heart,
    Wand,

  } from "lucide-react";
  import { Badge } from "@/components/ui/badge";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { cn } from "@/lib/utils";

  import SectionHeader from "../section-header";

  

  
  // Tools categorized by type
  const tools = [
     {
      category: "Design & Prototyping",
      icon: <Smartphone className="h-5 w-5" />,
      items: [
        { name: "Figma", icon: <Figma /> },
        { name: "Adobe Creative Suite", icon: <PenTool /> },
        { name: "Cursor", icon: <Wand /> },
        { name: "Claude", icon: <Wand /> },
        { name: "Illustration", icon: <PencilLine /> },
      ],
    },
    {
      category: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      items: [
        { name: "React", icon: <Code /> },
        { name: "Next.js", icon: <Code /> },
        { name: "Javascript", icon: <Code /> },
        { name: "Tailwind CSS", icon: <Palette /> },
        { name: "Material UI", icon: <Palette /> },
        { name: "HTML/CSS", icon: <Code /> },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      items: [
        { name: "Node.js", icon: <Server /> },
        { name: "Express", icon: <Server /> },
        { name: "MongoDB", icon: <Database /> },
        { name: "REST API", icon: <Globe /> },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="h-5 w-5" />,
      items: [
        { name: "Git & GitHub", icon: <Github /> },
        { name: "Storybook", icon: <Terminal /> },
        { name: "VS Code", icon: <Terminal /> },
        { name: "Figma", icon: <Figma /> },
      ],
    },

  ];

  // Sample services data
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "End-to-end design and prototyping",
      icon: <PenTool className="h-5 w-5" />,

    },
    {
      id: 2,
      title: "Design Systems",
      description: "Connecting design and development",
      icon: <Network className="h-5 w-5" />,

    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Workshop facilitation and sharing of resources",
      icon: <Heart className="h-5 w-5" />,

    },
    {
      id: 4,
      title: "Visual Design",
      description: "Consistent and intentional application of design principles",
      icon: <Palette className="h-5 w-5" />,

    },
    {
      id: 5,
      title: "Clear Communication",
      description: "Active alignment on goals and expectations",
      icon: <MessageSquare className="h-5 w-5" />,

    },
    {
      id: 6,
      title: "Front End Development",
      description: "Deepening understanding of Javascript and React",
      icon: <Code className="h-5 w-5" />,

    },
  ];

  // IconListOverview component
  function IconListOverview() {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 2xl:max-w-[1400px]">
          {/* Services List - Horizontal layout for larger screens, vertical for mobile */}
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-4 rounded-lg border border-transparent p-3"
                >
                  <div className="bg-[#DCE9E7] dark:bg-[#002E34] rounded-full p-3">
                    <div className="text-foreground">{service.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default function SkillsDisplay() {
    // Function to determine skill level label

  
    return (
      <div className="bg-background py-16 md:py-24">
        <SectionHeader
            category="Skills"
            title="My Skillset and Tools"
            icon={Wrench}
            description= "Some of the tools and skills I use regularly"
            className="border-none"
        />
  
          <Tabs defaultValue="skills" className="max-w-4x mx-auto">
            <TabsList className="grid h-fit rounded-xl w-full grid-cols-1 md:grid-cols-2">

            <TabsTrigger value="tools">Tools</TabsTrigger>  
            <TabsTrigger value="skills">Skills</TabsTrigger>  

            </TabsList>


  
            {/* Tools & Technologies Tab */}
            <TabsContent value="tools" className="mt-6">
              <div className="bg-muted rounded-xl border p-6">
  
                <div className="grid gap-8 sm:grid-cols-2">
                  {tools.map((toolCategory) => (
                    <div
                      key={toolCategory.category}
                      className="space-y-4 rounded-lg border p-4"
                    >
                      <h4 className="flex items-center gap-2 font-bold font-mono">
                        {toolCategory.icon}
                        {toolCategory.category}
                      </h4>
  
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {toolCategory.items.map((tool) => (
                          <div
                            key={tool.name}
                            className="bg-[#ECF3F3] dark:bg-[#002E34] flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-sm transition-colors"
                          >
                            <span className="text-foreground">{tool.icon}</span>
                            {tool.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-6">
              <div className="bg-muted dark:bg-transparent rounded-xl border p-6">
                <div className="mt-6">
                  <IconListOverview />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
    );
  }
  