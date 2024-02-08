import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import OnSaleList from '@/modules/OnSaleSection/ui/OnSaleList';
import { fetchOnSaleProducts } from '@/shared/api/product-api';
import { queryKeys } from '@/shared/lib/constats';

export default async function OnSaleSection() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [queryKeys.SALE],
    queryFn: fetchOnSaleProducts,
  });

  return (
    <div className={'section'}>
      <div className={'container'}>
        <h2 className={'title'}>Розпродаж</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <OnSaleList />
        </HydrationBoundary>
      </div>
    </div>
  );
}
