'use client'

import Image from 'next/image'
import type { Product } from '@/shared/types/product.types'
import { formatImageUrl } from '@/shared/lib/utils'
import styles from './ProductCard.module.css'

export default function ProductCardEmpty({ product }: { product: Product }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.imageWrap}>
        <Image
          src={formatImageUrl(product.product_images[0].product_image)}
          alt={product.name}
          fill
          sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
          className='object-cover'
        />
      </div>
      <div className='absolute inset-0 z-10 flex items-end justify-center bg-white/40 pb-7'>
        <button className='whitespace-nowrap rounded-xl bg-accent-500 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:bg-accent-700'>
          Дивитись все
        </button>
      </div>
    </div>
  )
}
