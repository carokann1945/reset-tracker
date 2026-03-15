'use client';

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import TabItem from './TabItem';
import TabButton from './TabButton';

type TabListProps = {
  onTabSelect: (tabId: string) => void;
};

export default function TabList({ onTabSelect }: TabListProps) {
  const { state, reorderTabs } = useAppStore();

  const tabs = [...state.tabs].sort((a, b) => a.position - b.position);
  const tabIds = tabs.map((tab) => tab.id);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const oldIndex = tabIds.findIndex((tabId) => tabId === active.id);
    const newIndex = tabIds.findIndex((tabId) => tabId === over.id);
    if (oldIndex < 0 || newIndex < 0) return;

    reorderTabs(arrayMove(tabIds, oldIndex, newIndex));
  };

  return (
    <div>
      <div
        className={cn('w-full', 'flex justify-between items-center', 'px-[5px] py-[5px] rounded-md hover:bg-gray-100')}>
        <p className={cn('typo-1')}>탭 목록</p>
        <TabButton />
      </div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tabIds} strategy={verticalListSortingStrategy}>
          <ul>
            {tabs.map((tab) => (
              <TabItem key={tab.id} tab={tab} onTabSelect={onTabSelect} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
}
