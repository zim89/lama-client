import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import ProductList from '@/components/ProductList'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { productService } from '@/shared/services/product.service'

interface Props {
  searchParams: { [key: string]: string | undefined }
}

export default async function Page({ searchParams }: Props) {
  const page = searchParams?.page ? Number(searchParams.page) - 1 : 0
  const category = searchParams?.category ? searchParams.category : ''
  const section = searchParams?.section ? searchParams.section : ''

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, page, category, section],
    queryFn: async () => productService.getProducts(page, category, section)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductList page={page} />
    </HydrationBoundary>
  )
}
