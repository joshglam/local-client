import type { ChatMessage, GuidedIntake, GuidedStep } from './types';

const STORAGE_KEY_PREFIX = 'casey_chat_';
const STORAGE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export interface StoredChatState {
  sessionId: string;
  messages: ChatMessage[];
  intake: GuidedIntake;
  guidedStep: GuidedStep;
  expires: number;
}

/**
 * Save chat state to localStorage for a specific session
 */
export function saveChatHistory(
  sessionId: string,
  messages: ChatMessage[],
  intake: GuidedIntake,
  guidedStep: GuidedStep,
): void {
  if (typeof window === 'undefined') return;

  try {
    const state: StoredChatState = {
      sessionId,
      messages,
      intake,
      guidedStep,
      expires: Date.now() + STORAGE_TTL_MS,
    };
    localStorage.setItem(STORAGE_KEY_PREFIX + sessionId, JSON.stringify(state));
  } catch (error) {
    console.warn('Failed to save chat history:', error);
  }
}

/**
 * Load chat state from localStorage for a specific session
 */
export function loadChatHistory(sessionId: string): StoredChatState | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + sessionId);
    if (!raw) return null;

    const state = JSON.parse(raw) as StoredChatState;

    // Check if stored data has expired
    if (Date.now() > state.expires) {
      clearChatHistory(sessionId);
      return null;
    }

    return state;
  } catch (error) {
    console.warn('Failed to load chat history:', error);
    return null;
  }
}

/**
 * Clear chat history for a specific session
 */
export function clearChatHistory(sessionId: string): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY_PREFIX + sessionId);
  } catch (error) {
    console.warn('Failed to clear chat history:', error);
  }
}

/**
 * Clear all expired chat histories
 */
export function clearExpiredChatHistories(): void {
  if (typeof window === 'undefined') return;

  try {
    const now = Date.now();
    const keysToRemove: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_KEY_PREFIX)) {
        const raw = localStorage.getItem(key);
        if (raw) {
          try {
            const state = JSON.parse(raw) as StoredChatState;
            if (now > state.expires) {
              keysToRemove.push(key);
            }
          } catch {
            // If we can't parse it, remove it
            keysToRemove.push(key);
          }
        }
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
  } catch (error) {
    console.warn('Failed to clear expired chat histories:', error);
  }
}
