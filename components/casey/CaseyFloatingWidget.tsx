'use client';

import { useEffect } from 'react';
import { useCasey } from './CaseyProvider';
import { CaseyBubble } from './CaseyBubble';
import { CaseyPanel } from './CaseyPanel';

export function CaseyFloatingWidget() {
  const { state, open, close } = useCasey();

  // Auto-open on desktop only
  useEffect(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      open();
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!state.isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, close]);

  return (
    <>
      <CaseyBubble />

      {state.isOpen && !state.isInlineActive && (
        <>
          {/* Backdrop on mobile */}
          <div
            className="fixed inset-0 z-50 bg-black/20 sm:hidden"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel container */}
          <div className="fixed bottom-0 right-0 z-50 w-full sm:bottom-24 sm:right-6 sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-200">
            <CaseyPanel variant="floating" />
          </div>
        </>
      )}
    </>
  );
}
