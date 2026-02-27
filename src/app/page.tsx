import { HOME_PAGE_DATA } from '@/data/homepage.data';
import WidgetRenderer from '@/lib/common/WidgetRenderer';
import { Widget } from '@/types/types';

export default function Home() {
  return (
    <main className="min-h-screen">
      {' '}
      <WidgetRenderer widgets={HOME_PAGE_DATA.widgets as Widget[]} />
    </main>
  );
}
