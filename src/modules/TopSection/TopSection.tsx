import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import TopSlider from '@/modules/TopSection/ui/TopSlider'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { productService } from '@/shared/services/product.service'

export default async function TopSection() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TOP],
    queryFn: () => productService.getTopProducts()
  })

  return (
    <div className='section'>
      <div className='container'>
        <h2 className='title'>Наш топ</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <TopSlider />
        </HydrationBoundary>
      </div>
    </div>
  )
}
