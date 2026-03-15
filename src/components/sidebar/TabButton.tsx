'use client';

import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function TabButton() {
  const { addTab } = useAppStore();

  return (
    <button
      type="button"
      onClick={() => {
        const name = window.prompt('탭 이름을 입력하세요');
        if (!name) return;
        addTab(name);
      }}
      className={cn(
        'w-[35px] h-[35px]',
        'rounded-md',
        'cursor-pointer',
        'hover:bg-gray-200',
        'transition-color duration-100',
      )}>
      +
    </button>
  );
}
