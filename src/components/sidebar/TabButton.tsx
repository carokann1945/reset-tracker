'use client';

import { useAppStore } from '@/lib/store';

export default function AddTabButton() {
  const { addTab } = useAppStore();

  return (
    <button
      type="button"
      onClick={() => {
        const name = window.prompt('탭 이름을 입력하세요');
        if (!name) return;
        addTab(name);
      }}
      className="rounded-md border px-3 py-1">
      +
    </button>
  );
}
