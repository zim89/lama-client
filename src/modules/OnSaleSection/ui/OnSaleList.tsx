'use client';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/shared/api/types';
import ProductCard from '@/components/ProductCard';
import { findAllOnSaleProducts } from '@/shared/api/product-api';
import { queryKeys } from '@/shared/lib/constats';

export default function OnSaleList() {
  const { isLoading, isFetching, isError, data, isFetched, error } = useQuery({
    queryKey: [queryKeys.SALE],
    queryFn: findAllOnSaleProducts,
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {isError && <h3>Error: {error.message}</h3>}

      {data && (
        <ul className={'grid grid-cols-2 gap-4'}>
          {data?.slice(0, 4).map((product: Product, index) => (
            <li key={product.id}>
              <ProductCard product={product} lastItem={index === 3} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
