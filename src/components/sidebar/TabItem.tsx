'use client';

import type { Tab } from '@/lib/types';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function TabItem({ tab }: { tab: Tab }) {
  const { state, setActiveTab } = useAppStore();
  const isActive = state.activeTabId === tab.id;

  return (
    <li>
      <button
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={cn(
          'w-full',
          'py-[12px] pl-[10px]',
          'rounded-md cursor-pointer',
          !isActive && 'hover:bg-gray-100',
          'typo-1 text-start',
          isActive ? 'bg-accent-blue/10 text-accent-blue' : 'bg-white text-black',
        )}>
        <span className={cn('text-gray-500')}>#</span> {tab.name}
      </button>
    </li>
  );
}
