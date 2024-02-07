'use client';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '@/components/ProductCard';
import ProductListSkeleton from '@/components/skeletons/ProductListSkeleton';
import { fetchTopProducts } from '@/shared/api/product-api';
import { queryKeys } from '@/shared/lib/constats';
import type { Product } from '@/shared/api/types';

export default function TopList() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [queryKeys.TOP],
    queryFn: fetchTopProducts,
  });

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
          <ul
            className={
              'grid grid-cols-2 gap-4 md:hidden lg:grid lg:grid-cols-4 lg:gap-5 xl:gap-6'
            }>
            {data?.slice(0, 4).map((product: Product, index) => (
              <li key={product.id}>
                <ProductCard product={product} lastItem={index === 3} />
              </li>
            ))}
          </ul>

          <ul className={'hidden md:grid md:grid-cols-3 md:gap-4 lg:hidden'}>
            {data?.slice(0, 6).map((product: Product, index) => (
              <li key={product.id}>
                <ProductCard
                  product={product}
                  lastItem={index === 5}
                  heart={true}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
