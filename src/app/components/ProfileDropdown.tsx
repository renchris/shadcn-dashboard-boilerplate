'use client';

import { useState, useRef, useEffect } from 'react';

type Props = {
  user: { name: string; email: string };
};

export default function ProfileDropdown({ user }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {user.name.charAt(0)}
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-48 rounded-md border border-black/10 dark:border-white/10 bg-background shadow-lg p-2 z-10"
        >
          <div className="px-2 py-1 text-xs text-foreground/70">Signed in as</div>
          <div className="px-2 pb-2 text-sm">{user.email}</div>
          <button className="w-full text-left px-2 py-1.5 rounded hover:bg-foreground/10 text-sm">Settings</button>
          <button className="w-full text-left px-2 py-1.5 rounded hover:bg-foreground/10 text-sm">Sign out</button>
        </div>
      ) : null}
    </div>
  );
}