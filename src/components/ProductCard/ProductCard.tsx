'use client'

import Image from 'next/image'
import Link from 'next/link'
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn'
import type { Product } from '@/shared/types/product.types'
import { cn, formatImageUrl } from '@/shared/lib/utils'
import ColorSelect from '../ColorSelect'
import styles from './ProductCard.module.css'
import { getColorsFromAttr } from '@/shared/helpers/color.helpers'
import {
  formatPrice,
  formatPriceWithDiscount
} from '@/shared/helpers/price.helpers'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={cn('group', styles.wrap)}>
      <AddToFavoritesBtn styles={styles.favButton} />
      <Link href={`products/${product.id}`}>
        <div className={styles.imageWrap}>
          <Image
            src={formatImageUrl(product.product_images[0].product_image)}
            alt={product.name}
            fill
            sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
            className='object-cover'
          />
        </div>
      </Link>
      <div
        className={cn(
          styles.content,
          'group-hover:top-[188px] transition-all duration-300 xl:group-hover:top-[212px]'
        )}
      >
        <Link
          href={`products/${product.id}`}
          className='space-y-1.5 lg:space-y-2.5 xl:space-y-3'
        >
          <h3
            className={cn(
              styles.title,
              'lg:group-hover:line-clamp-2 lg:group-hover:h-10'
            )}
          >
            {product.name}
          </h3>

          <div className='flex gap-1 items-baseline'>
            {product.discount ? (
              <>
                <p className={styles.textPrice}>
                  від {formatPrice(Number(product.price))}
                </p>
                <p className={styles.textDiscount}>
                  {formatPriceWithDiscount(
                    product.price,
                    product.discount.amount
                  )}
                </p>
              </>
            ) : (
              <p className={styles.textPrice}>
                від {formatPrice(Number(product.price))}
              </p>
            )}
          </div>
        </Link>
        <ColorSelect colors={getColorsFromAttr(product.attributes)} />
      </div>
    </div>
  )
}
