'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { LayoutGroup, motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState<string>(navs[0]?.name ?? 'Home');

  return (
    <header className="mx-auto max-w-5xl py-10">
      <div className="mx-auto flex w-full items-center justify-center">
        <LayoutGroup>
          {/* 
            Added explicit border color (border-slate-300) and 
            a neutral background so the pill stands out.
          */}
          <div className="relative flex w-fit items-center rounded-full border border-slate-300 bg-white p-1.5 shadow-sm dark:border-slate-600 dark:bg-neutral-900">
            {navs.map(option => (
              <button
                key={option.name}
                onClick={() => setActiveTab(option.name)}
                className="relative px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {activeTab === option.name && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700"
                    transition={{
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      velocity: 2,
                    }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span
                  className={cn(
                    'relative block',
                    activeTab === option.name ? 'font-semibold text-slate-900 dark:text-white' : 'text-inherit',
                  )}
                  style={{ zIndex: 1 }}
                >
                  {option.name}
                </span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </header>
  );
}
