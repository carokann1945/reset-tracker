'use client';

import { useAppStore } from '@/lib/store';
import TabItem from './TabItem';

export default function TabList() {
  const { state } = useAppStore();

  const tabs = [...state.tabs].sort((a, b) => a.position - b.position);

  return (
    <ul className="space-y-2">
      {tabs.map((tab) => (
        <TabItem key={tab.id} tab={tab} />
      ))}
    </ul>
  );
}
