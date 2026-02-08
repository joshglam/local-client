'use client';

import { useState, useRef, useEffect } from 'react';
import { useCasey } from './CaseyProvider';
import { CaseyMessage } from './CaseyMessage';

export function CaseyChatView() {
  const { state, sendMessage } = useCasey();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  useEffect(() => {
    if (!state.isLoading) {
      inputRef.current?.focus();
    }
  }, [state.isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || state.isLoading) return;
    setInput('');
    inputRef.current?.focus();
    await sendMessage(trimmed);
  };

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {state.messages.map((msg) => (
          <CaseyMessage key={msg.id} message={msg} />
        ))}

        {state.isLoading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-brand-50 px-4 py-3">
              <div className="flex space-x-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-brand-100 px-3 pb-2 pt-3">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={state.isLoading}
              className="flex-1 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || state.isLoading}
              className="rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </form>

        <p className="mt-1.5 text-center text-[10px] leading-snug text-brand-400">
          Std message &amp; data rates may apply. Reply STOP to opt out.{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
            Privacy
          </a>{' '}
          &amp;{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
            Terms
          </a>
        </p>
      </div>
    </div>
  );
}
