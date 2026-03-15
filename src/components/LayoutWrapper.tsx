'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import Sidebar from './sidebar/Sidebar';
import Header from './Header';

export default function LayoutWrapper() {
  // 사이드바 상태
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useAppStore();
  const activeTabName = state.tabs.find((tab) => tab.id === state.activeTabId)?.name ?? '선택된 탭 없음';

  return (
    <div className={cn('w-full min-h-dvh', 'flex')}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/70 z-15" onClick={() => setIsOpen(false)} />}
      <div
        className={cn(
          'flex-1 h-full',
          'flex flex-col',
          isOpen ? 'md:ml-[300px]' : 'ml-0',
          'transition-all duration-300',
        )}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} activeTabName={activeTabName} />
        <main>
          <h1>메인</h1>
        </main>
      </div>
    </div>
  );
}
