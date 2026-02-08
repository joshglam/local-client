'use client';

import type { ChatMessage } from '@/lib/casey/types';

export function CaseyMessage({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-accent-500 text-white rounded-br-md'
            : 'bg-brand-50 text-brand-900 rounded-bl-md'
        }`}
      >
        {!isUser && (
          <p className="mb-1 text-xs font-semibold text-brand-600">Casey</p>
        )}
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
