import { cn } from '@/lib/utils';

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className={cn('z-10 h-[70px]', 'flex items-center', 'pl-[30px]', 'bg-white text-black shadow-sm')}>
      <button className={cn('md:hidden border border-gray-600 rounded')} onClick={() => setIsOpen(!isOpen)}>
        열기
      </button>
      <h1 className={cn('typo-2')}>선택된 탭</h1>
    </header>
  );
}
