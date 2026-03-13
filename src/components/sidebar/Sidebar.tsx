import TabList from './TabList';
import TabButton from './TabButton';

export default function Sidebar() {
  return (
    <aside className="w-72 border-r p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">탭</h2>
        <TabButton />
      </div>
      <TabList />
    </aside>
  );
}
