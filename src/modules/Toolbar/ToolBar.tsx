import CategoryBar from '@/modules/Toolbar/ui/CategoryBar';
import FilterBar from '@/modules/Toolbar/ui/FilterBar';

export default function ToolBar() {
  return (
    <div className='space-y-4'>
      <CategoryBar />
      <FilterBar />
    </div>
  );
}
