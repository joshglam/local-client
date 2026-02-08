'use client';

import { useCasey } from './CaseyProvider';
import { CaseyGuidedFlow } from './CaseyGuidedFlow';
import { CaseyChatView } from './CaseyChatView';
import { caseyConfig } from '@/lib/config';
import type { CaseyPanelProps } from '@/lib/casey/types';

export function CaseyPanel({ variant }: CaseyPanelProps) {
  const { state, close } = useCasey();
  const isChat = state.guidedStep === 'complete';

  return (
    <div
      className={`flex flex-col bg-white ${
        variant === 'floating'
          ? 'h-[min(580px,calc(100vh-100px))] w-full rounded-2xl shadow-2xl sm:w-lg'
          : 'h-[500px] w-full rounded-2xl border border-brand-200 shadow-lg'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-brand-700 px-4 py-3">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <div>
            <h2 className="text-sm font-semibold text-white">Casey</h2>
            <p className="text-xs text-brand-200">{caseyConfig.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {variant === 'floating' && (
            <button
              type="button"
              onClick={close}
              title="Close"
              className="rounded-lg p-1.5 text-brand-200 transition-colors hover:bg-brand-600 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {isChat ? <CaseyChatView /> : <CaseyGuidedFlow />}

      {/* Powered by badge */}
      <div className="border-t border-gray-100 px-4 py-1.5 text-center text-[10px] text-gray-400">
        Powered by{' '}
        <a href="https://caseyresponse.com" target="_blank" rel="noopener" className="hover:text-gray-600">
          Casey Response AI
        </a>
      </div>
    </div>
  );
}
