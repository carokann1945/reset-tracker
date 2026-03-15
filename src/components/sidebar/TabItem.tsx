'use client';

import type { Tab } from '@/lib/types';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';

export default function TabItem({ tab }: { tab: Tab }) {
  const { state, setActiveTab } = useAppStore();
  const isActive = state.activeTabId === tab.id;

  // 버튼 클릭 시 실행될 함수
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모의 onClick(setActiveTab)이 실행되지 않도록 막음
    console.log('메뉴 열기 로직 실행');
    // 여기에 드롭다운 메뉴를 여는 로직을 넣으시면 됩니다.
  };

  return (
    <li
      onClick={() => setActiveTab(tab.id)}
      className={cn(
        'group w-full',
        'py-[4px] pl-[10px]',
        'flex justify-between items-center',
        'rounded-md cursor-pointer',
        !isActive && 'hover:bg-gray-100',
        'typo-1 text-start',
        isActive ? 'bg-accent-blue/10 text-accent-blue' : 'bg-white text-black',
      )}>
      <div className={cn('truncate')}>
        <span className={cn('text-gray-500')}>#</span>
        <span> {tab.name}</span>
      </div>
      <button
        type="button"
        onClick={handleMenuClick}
        className={cn(
          'w-[30px] h-[30px]',
          'flex justify-center items-center shrink-0',
          'opacity-0 group-hover:opacity-100 hover:bg-gray-200 cursor-pointer rounded-md',
        )}>
        <MoreHorizontal className={cn('w-[25px] h-[15px]')} />
      </button>
    </li>
  );
}
