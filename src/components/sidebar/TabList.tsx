'use client';

import { useAppStore } from '@/lib/store';
import TabItem from './TabItem';
import { cn } from '@/lib/utils';
import TabButton from './TabButton';

export default function TabList() {
  const { state } = useAppStore();

  const tabs = [...state.tabs].sort((a, b) => a.position - b.position);

  return (
    <ul>
      <div
        className={cn('w-full', 'flex justify-between items-center', 'px-[5px] py-[5px] rounded-md hover:bg-gray-100')}>
        <p className={cn('typo-1')}>탭 목록</p>
        <TabButton />
      </div>
      {tabs.map((tab) => (
        <TabItem key={tab.id} tab={tab} />
      ))}
    </ul>
  );
}
