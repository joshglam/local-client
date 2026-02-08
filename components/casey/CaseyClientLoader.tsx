'use client';

import dynamic from 'next/dynamic';

const CaseyFloatingWidget = dynamic(
  () => import('./CaseyFloatingWidget').then((m) => m.CaseyFloatingWidget),
  { ssr: false },
);
const CaseyTriggerListener = dynamic(
  () => import('./CaseyTriggerListener').then((m) => m.CaseyTriggerListener),
  { ssr: false },
);

export function CaseyClientLoader() {
  return (
    <>
      <CaseyFloatingWidget />
      <CaseyTriggerListener />
    </>
  );
}
