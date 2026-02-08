'use client';

import { useState } from 'react';
import type { ServiceCategorySlug, UrgencyLevel } from '@/lib/casey/types';
import {
  categoryOptions,
  getServiceOptions,
  urgencyOptions,
} from '@/lib/casey/guided-flow-data';

const categoryIcons: Record<string, React.ReactNode> = {
  snowflake: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
    </svg>
  ),
  flame: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  ),
  droplet: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-6.75 8.25-6.75 12.75a6.75 6.75 0 0 0 13.5 0C18.75 10.5 12 2.25 12 2.25Z" />
    </svg>
  ),
  zap: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  cooling: 'text-blue-600',
  heating: 'text-orange-600',
  plumbing: 'text-cyan-600',
  electrical: 'text-yellow-600',
};

const urgencyIcons: Record<UrgencyLevel, React.ReactNode> = {
  emergency: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  ),
  soon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  planning: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  ),
};

// --- Step: Category Selection ---
export function CategoryStep({
  onSelect,
}: {
  onSelect: (slug: ServiceCategorySlug) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-brand-900">
        What do you need help with?
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {categoryOptions.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => onSelect(cat.slug)}
            className="flex flex-col items-center gap-2 rounded-xl border border-brand-200 bg-white p-4 text-center transition-all hover:border-brand-400 hover:shadow-md"
          >
            <span className={categoryColors[cat.slug] ?? 'text-brand-600'}>{categoryIcons[cat.icon]}</span>
            <span className="text-sm font-semibold text-brand-900">{cat.name}</span>
            <span className="text-xs text-brand-500">{cat.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Step: Service Selection ---
export function ServiceStep({
  category,
  onSelect,
}: {
  category: ServiceCategorySlug;
  onSelect: (slug: string, name: string) => void;
}) {
  const services = getServiceOptions(category);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-brand-900">
        What type of service do you need?
      </h3>
      <div className="flex flex-col gap-2">
        {services.map((svc) => (
          <button
            key={svc.slug}
            type="button"
            onClick={() => onSelect(svc.slug, svc.name)}
            className="rounded-xl border border-brand-200 bg-white px-4 py-3 text-left text-sm font-medium text-brand-900 transition-all hover:border-brand-400 hover:shadow-md"
          >
            {svc.name}
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Step: Urgency Selection ---
export function UrgencyStep({
  onSelect,
}: {
  onSelect: (urgency: UrgencyLevel) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-brand-900">
        How urgent is this?
      </h3>
      <div className="flex flex-col gap-2">
        {urgencyOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 text-left transition-all hover:border-brand-400 hover:shadow-md"
          >
            <span className="text-brand-600">{urgencyIcons[opt.value]}</span>
            <div>
              <span className="text-sm font-semibold text-brand-900">{opt.label}</span>
              <p className="text-xs text-brand-500">{opt.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- Step: Details Input ---
export function DetailsStep({
  onSubmit,
}: {
  onSubmit: (details: string) => void;
}) {
  const [text, setText] = useState('');
  const [consented, setConsented] = useState(false);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-brand-900">
        Any additional details?
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Optional — describe the issue in a few words"
        rows={3}
        className="w-full resize-none rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none"
      />

      <label className="flex cursor-pointer items-start gap-2">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-300 text-brand-600 focus:ring-brand-500"
        />
        <span className="text-[11px] leading-relaxed text-brand-700">
          I consent to receive SMS messages from Local Answer at the number
          provided about project details, estimates, follow-ups, scheduling,
          and missed-call notifications. Message frequency varies. Std
          message &amp; data rates may apply. Reply STOP to opt out, HELP
          for help.{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-brand-900"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-brand-900"
          >
            Terms of Service
          </a>
          .
        </span>
      </label>

      <button
        type="button"
        onClick={() => onSubmit(text)}
        disabled={!consented}
        className="w-full rounded-xl bg-accent-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-50"
      >
        Start Chat
      </button>
    </div>
  );
}
