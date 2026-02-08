'use client';

import { useEffect } from 'react';
import { useCasey } from './CaseyProvider';
import type { ServiceCategorySlug } from '@/lib/casey/types';

export function CaseyTriggerListener() {
  const { open } = useCasey();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const trigger = (e.target as HTMLElement).closest('[data-casey-trigger="true"]');
      if (!trigger) return;

      e.preventDefault();

      const category = trigger.getAttribute('data-casey-category') ?? undefined;
      const service = trigger.getAttribute('data-casey-service') ?? undefined;

      open({
        category: category as ServiceCategorySlug | undefined,
        service,
      });
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return null;
}
