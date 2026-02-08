export type ServiceCategorySlug = 'cooling' | 'heating' | 'plumbing' | 'electrical';

export type UrgencyLevel = 'emergency' | 'soon' | 'planning';

export type GuidedStep = 'category' | 'service' | 'urgency' | 'details' | 'complete';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface GuidedIntake {
  category: ServiceCategorySlug | null;
  serviceSlug: string | null;
  serviceName: string | null;
  urgency: UrgencyLevel | null;
  details: string | null;
}

export interface CaseyState {
  isOpen: boolean;
  isInlineActive: boolean;

  guidedStep: GuidedStep;
  intake: GuidedIntake;

  messages: ChatMessage[];
  isLoading: boolean;

  error: string | null;
}

export interface CaseyPanelProps {
  variant: 'floating' | 'inline';
}

export interface CaseyOpenOptions {
  category?: ServiceCategorySlug;
  service?: string;
}
