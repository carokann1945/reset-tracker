'use client';

import type { Tab } from '@/lib/types';
import { useAppStore } from '@/lib/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';
import type { MouseEvent } from 'react';

export default function TabItem({ tab }: { tab: Tab }) {
  const { state, deleteTab, renameTab, setActiveTab } = useAppStore();
  const isActive = state.activeTabId === tab.id;

  const handleMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const handleRename = () => {
    const nextName = window.prompt('탭 이름을 입력하세요', tab.name);
    if (nextName === null) return;
    if (!nextName.trim()) return;
    renameTab(tab.id, nextName);
  };

  const handleDelete = () => {
    deleteTab(tab.id);
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label={`${tab.name} 메뉴 열기`}
            onClick={handleMenuClick}
            className={cn(
              'w-[30px] h-[30px]',
              'flex justify-center items-center shrink-0',
              'opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 data-[state=open]:bg-gray-200 hover:bg-gray-200',
              'cursor-pointer rounded-md',
            )}>
            <MoreHorizontal className={cn('w-[25px] h-[15px]')} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={handleRename}>수정</DropdownMenuItem>
          <DropdownMenuItem onSelect={handleDelete}>삭제</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
