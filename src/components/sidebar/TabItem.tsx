'use client';

import type { Tab } from '@/lib/types';
import { useAppStore } from '@/lib/store';

export default function TabItem({ tab }: { tab: Tab }) {
  const { state, setActiveTab } = useAppStore();
  const isActive = state.activeTabId === tab.id;

  return (
    <li>
      <button
        type="button"
        onClick={() => setActiveTab(tab.id)}
        className={`w-full rounded-lg px-3 py-2 text-left ${isActive ? 'bg-black text-white' : 'bg-gray-100'}`}>
        {tab.name}
      </button>
    </li>
  );
}
