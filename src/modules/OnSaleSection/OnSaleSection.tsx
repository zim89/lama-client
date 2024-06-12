import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import Link from 'next/link'
import OnSaleList from '@/modules/OnSaleSection/ui/OnSaleList'
import { ChevronRightIcon } from '@/components/IconsPack'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { cn } from '@/shared/lib/utils'
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
        <h2 className='title flex items-center justify-between'>
          Розпродаж
          <Link
            href='/catalog/sale'
            className={cn('btn-tertiary', 'hidden whitespace-nowrap md:flex')}
          >
            Дивитись все
            <ChevronRightIcon />
          </Link>
        </h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <OnSaleList />
        </HydrationBoundary>
      </div>
    </div>
  )
}
