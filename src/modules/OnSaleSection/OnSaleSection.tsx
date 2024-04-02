import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import OnSaleList from '@/modules/OnSaleSection/ui/OnSaleList'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { productService } from '@/shared/services/product.service'

export default async function OnSaleSection() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.SALE],
    queryFn: () => productService.getOnSaleProducts()
  })

  return (
    <div className='section'>
      <div className='container'>
        <h2 className='title'>Розпродаж</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <OnSaleList />
        </HydrationBoundary>
      </div>
    </div>
  )
}
