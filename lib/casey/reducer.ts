import type { CaseyState, ServiceCategorySlug, UrgencyLevel, GuidedStep } from './types';

export type CaseyAction =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'TOGGLE' }
  | { type: 'SET_INLINE_ACTIVE'; payload: boolean }
  | { type: 'SELECT_CATEGORY'; payload: ServiceCategorySlug }
  | { type: 'SELECT_SERVICE'; payload: { slug: string; name: string } }
  | { type: 'SELECT_URGENCY'; payload: UrgencyLevel }
  | { type: 'SUBMIT_DETAILS'; payload: string }
  | { type: 'ADD_USER_MESSAGE'; payload: string }
  | { type: 'ADD_ASSISTANT_MESSAGE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'GO_BACK' }
  | { type: 'RESET' };

export const initialState: CaseyState = {
  isOpen: false,
  isInlineActive: false,
  guidedStep: 'category',
  intake: {
    category: null,
    serviceSlug: null,
    serviceName: null,
    urgency: null,
    details: null,
  },
  messages: [],
  isLoading: false,
  error: null,
};

const stepOrder: GuidedStep[] = ['category', 'service', 'urgency', 'details', 'complete'];

function previousStep(step: GuidedStep): GuidedStep {
  const idx = stepOrder.indexOf(step);
  return idx > 0 ? stepOrder[idx - 1] : step;
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function caseyReducer(state: CaseyState, action: CaseyAction): CaseyState {
  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true };

    case 'CLOSE':
      return { ...state, isOpen: false };

    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen };

    case 'SET_INLINE_ACTIVE':
      return { ...state, isInlineActive: action.payload };

    case 'SELECT_CATEGORY':
      return {
        ...state,
        guidedStep: 'service',
        intake: { ...state.intake, category: action.payload },
      };

    case 'SELECT_SERVICE':
      return {
        ...state,
        guidedStep: 'urgency',
        intake: {
          ...state.intake,
          serviceSlug: action.payload.slug,
          serviceName: action.payload.name,
        },
      };

    case 'SELECT_URGENCY':
      return {
        ...state,
        guidedStep: 'details',
        intake: { ...state.intake, urgency: action.payload },
      };

    case 'SUBMIT_DETAILS':
      return {
        ...state,
        guidedStep: 'complete',
        intake: { ...state.intake, details: action.payload || null },
      };

    case 'GO_BACK': {
      const prev = previousStep(state.guidedStep);
      const intake = { ...state.intake };
      // Clear the field for the step we're going back from
      if (state.guidedStep === 'service') intake.category = null;
      if (state.guidedStep === 'urgency') {
        intake.serviceSlug = null;
        intake.serviceName = null;
      }
      if (state.guidedStep === 'details') intake.urgency = null;
      return { ...state, guidedStep: prev, intake };
    }

    case 'ADD_USER_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: generateId(),
            role: 'user',
            content: action.payload,
            timestamp: Date.now(),
          },
        ],
      };

    case 'ADD_ASSISTANT_MESSAGE':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: generateId(),
            role: 'assistant',
            content: action.payload,
            timestamp: Date.now(),
          },
        ],
      };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'RESET':
      return { ...initialState, isOpen: state.isOpen, isInlineActive: state.isInlineActive };

    default:
      return state;
  }
}
