'use client'

import Link from 'next/link'
import type { Product } from '@/shared/types/product.types'
import { ChevronRightIcon } from '../IconsPack'

export default function ProductCardEmpty({ product }: { product: Product }) {
  return (
    <div className='flex justify-center items-center h-[252px] w-[164px] sm:h-[296px] sm:w-[210px] md:h-[310px] md:w-[229px] lg:h-[306px] lg:w-[225px] xl:h-[338px] xl:w-[282px]'>
      <Link
        href={'/'}
        className='whitespace-nowrap btn-tertiary'
      >
        Дивитись все
        <ChevronRightIcon />
      </Link>
    </div>
  )
}
