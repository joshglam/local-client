'use client';

import { createContext, useContext, useReducer, useCallback, useEffect, type ReactNode } from 'react';
import type { CaseyState, CaseyOpenOptions, ServiceCategorySlug, GuidedIntake, ChatMessage } from '@/lib/casey/types';
import { caseyReducer, initialState, type CaseyAction } from '@/lib/casey/reducer';
import { sendCaseyMessage } from '@/lib/casey/api';
import { getVisitorId, getSessionId, resetSessionId, hasActiveSession } from '@/lib/casey/identity';
import { getServicesByCategory } from '@/lib/services';

async function callCaseyAPI(
  dispatch: React.Dispatch<CaseyAction>,
  intake: GuidedIntake,
  messages: ChatMessage[],
) {
  dispatch({ type: 'SET_LOADING', payload: true });
  try {
    const response = await sendCaseyMessage(getVisitorId(), getSessionId(), intake, messages);
    dispatch({ type: 'ADD_ASSISTANT_MESSAGE', payload: response });
  } catch (error) {
    dispatch({
      type: 'SET_ERROR',
      payload: error instanceof Error ? error.message : 'Unknown error',
    });
    dispatch({
      type: 'ADD_ASSISTANT_MESSAGE',
      payload: 'Sorry, I encountered an error. Please try again.',
    });
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false });
  }
}

export interface CaseyContextValue {
  state: CaseyState;
  dispatch: React.Dispatch<CaseyAction>;
  open: (options?: CaseyOpenOptions) => void;
  close: () => void;
  toggle: () => void;
  sendMessage: (content: string) => Promise<void>;
  submitIntake: (details: string) => Promise<void>;
  reset: () => void;
}

const CaseyContext = createContext<CaseyContextValue | null>(null);

export function useCasey(): CaseyContextValue {
  const ctx = useContext(CaseyContext);
  if (!ctx) throw new Error('useCasey must be used within <CaseyProvider>');
  return ctx;
}

export function CaseyProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(caseyReducer, initialState);

  // If a session already exists (within 24h), skip the intake form and go straight to chat
  useEffect(() => {
    if (hasActiveSession()) {
      dispatch({ type: 'SUBMIT_DETAILS', payload: '' });
    }
  }, []);

  const open = useCallback(
    (options?: CaseyOpenOptions) => {
      dispatch({ type: 'OPEN' });

      if (options?.category) {
        dispatch({ type: 'SELECT_CATEGORY', payload: options.category });

        if (options.service) {
          const services = getServicesByCategory(options.category as ServiceCategorySlug);
          const match = services.find((s) => s.slug === options.service);
          if (match) {
            dispatch({
              type: 'SELECT_SERVICE',
              payload: { slug: match.slug, name: match.name },
            });
          }
        }
      }
    },
    [],
  );

  const close = useCallback(() => dispatch({ type: 'CLOSE' }), []);
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), []);
  const reset = useCallback(() => {
    resetSessionId();
    dispatch({ type: 'RESET' });
  }, []);

  const submitIntake = useCallback(
    async (details: string) => {
      dispatch({ type: 'SUBMIT_DETAILS', payload: details });

      const intake = { ...state.intake, details: details || null };

      // Build an initial user message from the intake so the backend
      // has a {role:"user"} entry to store as the lead event text.
      const lines = ['[Form Submission]'];
      if (intake.category) lines.push(`Category: ${intake.category}`);
      if (intake.serviceName) lines.push(`Service: ${intake.serviceName}`);
      if (intake.urgency) lines.push(`Urgency: ${intake.urgency}`);
      if (intake.details) lines.push(`Additional Details: ${intake.details}`);
      const initialMessage = lines.join('\n');

      const messages = [
        { id: '', role: 'user' as const, content: initialMessage, timestamp: Date.now() },
      ];

      await callCaseyAPI(dispatch, intake, messages);
    },
    [state.intake],
  );

  const sendMessage = useCallback(
    async (content: string) => {
      dispatch({ type: 'ADD_USER_MESSAGE', payload: content });

      // Only send the latest message — backend builds conversation from DB
      const latestMessage = [
        { id: '', role: 'user' as const, content, timestamp: Date.now() },
      ];

      await callCaseyAPI(dispatch, state.intake, latestMessage);
    },
    [state.intake],
  );

  return (
    <CaseyContext.Provider value={{ state, dispatch, open, close, toggle, sendMessage, submitIntake, reset }}>
      {children}
    </CaseyContext.Provider>
  );
}
