'use client'

import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductListSkeleton from '@/components/skeletons/ProductListSkeleton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { Product } from '@/shared/types/product.types'
import styles from '../styles/TopSlider.module.css'
import { productService } from '@/shared/services/product.service'

export default function TopSlider() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.TOP],
    queryFn: () => productService.getTopProducts()
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
          <Carousel
            opts={{
              align: 'start',
              slidesToScroll: 2
            }}
          >
            <CarouselContent>
              {data.map((product: Product) => (
                <CarouselItem
                  key={product.id}
                  className={styles.carouselItem}
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={styles.navBar}>
              <CarouselPrevious className={styles.navButton} />
              <CarouselNext className={styles.navButton} />
            </div>
          </Carousel>
        </>
      )}
    </>
  )
}
