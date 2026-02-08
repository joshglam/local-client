'use client';

import { useCasey } from './CaseyProvider';
import { CategoryStep, ServiceStep, UrgencyStep, DetailsStep } from './CaseyGuidedStep';

const stepLabels = ['Service', 'Type', 'Urgency', 'Details'];

export function CaseyGuidedFlow() {
  const { state, dispatch, submitIntake } = useCasey();
  const { guidedStep, intake } = state;

  const currentIdx =
    guidedStep === 'category' ? 0
    : guidedStep === 'service' ? 1
    : guidedStep === 'urgency' ? 2
    : 3;

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Progress indicator */}
      <div className="flex items-center gap-1 px-4 pb-3 pt-1">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`h-1 w-full rounded-full transition-colors ${
                i <= currentIdx ? 'bg-accent-500' : 'bg-brand-200'
              }`}
            />
            <span
              className={`text-[10px] font-medium ${
                i <= currentIdx ? 'text-brand-700' : 'text-brand-400'
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Back button */}
      {guidedStep !== 'category' && (
        <button
          type="button"
          onClick={() => dispatch({ type: 'GO_BACK' })}
          className="mx-4 mb-2 flex items-center gap-1 self-start text-xs font-medium text-brand-500 hover:text-brand-700"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back
        </button>
      )}

      {/* Step content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {guidedStep === 'category' && (
          <CategoryStep
            onSelect={(slug) => dispatch({ type: 'SELECT_CATEGORY', payload: slug })}
          />
        )}

        {guidedStep === 'service' && intake.category && (
          <ServiceStep
            category={intake.category}
            onSelect={(slug, name) =>
              dispatch({ type: 'SELECT_SERVICE', payload: { slug, name } })
            }
          />
        )}

        {guidedStep === 'urgency' && (
          <UrgencyStep
            onSelect={(urgency) => dispatch({ type: 'SELECT_URGENCY', payload: urgency })}
          />
        )}

        {guidedStep === 'details' && (
          <DetailsStep
            onSubmit={(details) => submitIntake(details)}
          />
        )}
      </div>
    </div>
  );
}
