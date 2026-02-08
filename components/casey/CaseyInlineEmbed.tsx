'use client';

import { useEffect } from 'react';
import { useCasey } from './CaseyProvider';
import { CaseyPanel } from './CaseyPanel';

export function CaseyInlineEmbed() {
  const { dispatch } = useCasey();

  useEffect(() => {
    dispatch({ type: 'SET_INLINE_ACTIVE', payload: true });
    return () => {
      dispatch({ type: 'SET_INLINE_ACTIVE', payload: false });
    };
  }, [dispatch]);

  return <CaseyPanel variant="inline" />;
}
