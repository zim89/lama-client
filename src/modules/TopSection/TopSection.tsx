import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import TopList from '@/modules/TopSection/ui/TopList';
import { fetchTopProducts } from '@/shared/api/product-api';
import { queryKeys } from '@/shared/lib/constats';

export default async function TopSection() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.TOP],
    queryFn: fetchTopProducts,
  });

  return (
    <div className={'section'}>
      <div className={'container'}>
        <h2 className={'title'}>Наш топ</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TopList />
        </HydrationBoundary>
      </div>
    </div>
  );
}
