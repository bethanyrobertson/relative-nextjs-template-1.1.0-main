export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  images?: string[];
  isLoading?: boolean;
  mode?: 'casestudies' | 'resume' | 'about' | 'default';
}

export interface AssistantState {
  isInitialized: boolean;
  isInitializing: boolean;
  error: string | null;
  assistantId: string | null;
  threadId: string | null;
}