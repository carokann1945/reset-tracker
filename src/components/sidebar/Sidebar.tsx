import TabList from './TabList';
import TabButton from './TabButton';
import { cn } from '@/lib/utils';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        'z-20 w-[300px] h-screen',
        'p-[15px]',
        'fixed top-0 left-0',
        'bg-white text-black shadow-sm transition-transform duration-300',
        'translate-x-full md:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}>
      <div className={cn('w-full', 'flex justify-between items-center', 'mb-[20px]')}>
        <h2 className="typo-2">비로그인 상태</h2>
        <button className={cn('md:hidden')} onClick={() => setIsOpen(!isOpen)}>
          닫기
        </button>
      </div>
      <TabButton />
      <TabList />
    </aside>
  );
}
