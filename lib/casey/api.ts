import type { GuidedIntake, ChatMessage } from './types';
import { caseyWidgetConfig } from './config';

interface CaseyAPIRequest {
  visitor_id: string;
  session_id: string;
  context: {
    category: string | null;
    service: string | null;
    urgency: string | null;
    problemDetails: string | null;
  };
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
  }>;
}

function buildRequestBody(
  visitorId: string,
  sessionId: string,
  intake: GuidedIntake,
  messages: ChatMessage[],
): string {
  return JSON.stringify({
    visitor_id: visitorId,
    session_id: sessionId,
    context: {
      category: intake.category,
      service: intake.serviceName,
      urgency: intake.urgency,
      problemDetails: intake.details,
    },
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  } satisfies CaseyAPIRequest);
}

function buildHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(caseyWidgetConfig.apiKey ? { Authorization: `Bearer ${caseyWidgetConfig.apiKey}` } : {}),
  };
}

export async function sendCaseyMessage(
  visitorId: string,
  sessionId: string,
  intake: GuidedIntake,
  messages: ChatMessage[],
): Promise<string> {
  const response = await fetch(caseyWidgetConfig.apiUrl, {
    method: 'POST',
    headers: buildHeaders(),
    body: buildRequestBody(visitorId, sessionId, intake, messages),
  });

  if (!response.ok) {
    throw new Error(`Casey API error: ${response.status}`);
  }

  const data = await response.json();
  return data.message;
}
