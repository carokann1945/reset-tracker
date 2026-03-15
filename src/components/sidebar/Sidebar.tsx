import TabList from './TabList';
import { cn } from '@/lib/utils';
import { PanelLeft } from 'lucide-react';
import Image from 'next/image';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMounted: boolean;
  onTabSelect: (tabId: string) => void;
};

export default function Sidebar({ isOpen, setIsOpen, isMounted, onTabSelect }: SidebarProps) {
  return (
    <aside
      className={cn(
        'z-20 w-[300px] h-screen',
        'p-[15px]',
        'fixed top-0 left-0',
        'bg-white text-black border border-gray-200',
        'translate-x-full',
        isMounted && 'transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}>
      {/* 사이트 로고 제목 */}
      <div className={cn('w-full h-[40px]', 'flex justify-between items-center', 'mb-[20px]')}>
        <div className={cn('w-[250px]', 'flex items-center gap-[8px]')}>
          <figure className={cn('w-[30px] h-[30px]', 'relative')}>
            <Image src="images/cube.svg" alt="site logo" fill className={cn('object-cover')} />
          </figure>
          <h1 className={cn('typo-2')}>Reset Tracker</h1>
        </div>
        <div
          className={cn(
            'w-[30px] h-[30px] rounded-md',
            'flex justify-center items-center',
            'cursor-pointer hover:bg-gray-100',
            'transition-color duration-100',
          )}
          onClick={() => setIsOpen(!isOpen)}>
          <PanelLeft className={cn('w-[20px] h-[20px] text-gray-700')} />
        </div>
      </div>
      {/* 로그인 상태 */}
      <div className={cn('w-full', 'flex justify-between items-center', 'mb-[20px]')}>
        <h2 className="typo-2">비로그인 상태</h2>
      </div>
      <TabList onTabSelect={onTabSelect} />
    </aside>
  );
}
