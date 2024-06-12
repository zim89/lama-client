'use client'

import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductCardEmpty from '@/components/ProductCard/ProductCardEmpty'
import ProductListSkeleton from '@/components/skeletons/ProductListSkeleton'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { Product } from '@/shared/types/product.types'
import { productService } from '@/shared/services/product.service'

export default function OnSaleList() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [QUERY_KEYS.SALE],
    queryFn: () => productService.getOnSaleProducts()
  })

  return (
    <>
      {isLoading && <ProductListSkeleton />}

      {isError && (
        <div className='relative'>
          <ProductListSkeleton />
          <div className='absolute inset-0 bg-white/60 px-10 py-10'>
            <h3 className='text-base'>
              <span className='font-bold text-red-500'>Error: </span>
              {error?.message}
            </h3>
          </div>
        </div>
      )}

      {!isLoading && !isError && data && (
        <>
          <ul className='grid grid-cols-2 gap-4 md:hidden'>
            {data?.slice(0, 3).map((product: Product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
            <li>
              <ProductCardEmpty product={data[3]} />
            </li>
          </ul>
          <ul className='hidden md:grid md:grid-cols-3 md:gap-5 lg:hidden'>
            {data?.slice(0, 6).map((product: Product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
          <ul className='hidden lg:grid lg:grid-cols-4 lg:gap-5 xl:gap-6'>
            {data?.slice(0, 4).map((product: Product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}
