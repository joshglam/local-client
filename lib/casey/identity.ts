const SESSION_TTL_MS = 60 * 60 * 1000; // 1 hour

export function getVisitorId(): string {
  let id = localStorage.getItem('casey_visitor_id');
  if (!id) {
    id = 'v_' + crypto.randomUUID();
    localStorage.setItem('casey_visitor_id', id);
  }
  return id;
}

export function getSessionId(): string {
  const raw = localStorage.getItem('casey_session');
  if (raw) {
    try {
      const { id, expires } = JSON.parse(raw);
      if (Date.now() < expires) return id;
    } catch {
      // corrupt entry — fall through to create a new one
    }
  }
  const id = 's_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  localStorage.setItem('casey_session', JSON.stringify({ id, expires: Date.now() + SESSION_TTL_MS }));
  return id;
}

export function resetSessionId(): void {
  localStorage.removeItem('casey_session');
}

export function hasActiveSession(): boolean {
  const raw = localStorage.getItem('casey_session');
  if (!raw) return false;
  try {
    const { expires } = JSON.parse(raw);
    return Date.now() < expires;
  } catch {
    return false;
  }
}
