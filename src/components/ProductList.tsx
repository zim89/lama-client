'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { QUERY_KEYS } from '@/shared/constants/query.constants'
import { productService } from '@/shared/services/product.service'

interface Props {
  page: number
}

export default function ProductList({ page }: Props) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')?.toString() || ''
  const section = searchParams.get('section')?.toString() || ''

  // useEffect(() => {
  //   console.log(category);
  //   console.log(section);
  // }, [category, section]);

  // useEffect(() => {
  //   const category = searchParams.get('category')?.toString();
  //   const section = searchParams.get('section')?.toString();
  //
  //   if (category) setCategory(category);
  //   if (section) setSection(section);
  // }, [searchParams]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, page, category, section],
    queryFn: async () => productService.getProducts(page, category, section)
  })

  useEffect(() => {
    // console.log(data)
    // const params = new URLSearchParams(searchParams);
    // if (params.has('page') && Number(params.get('page')) !== page + 1) {
    //   setPage(Number(params.get('page')) - 1);
    // }
  }, [data])

  return (
    <>
      {!isLoading && data && (
        <ul className='mb-6 grid grid-cols-2 gap-4'>
          {data.results.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}

      <Pagination
        count={data?.count || 0}
        page={page}
      />
    </>
  )
}
