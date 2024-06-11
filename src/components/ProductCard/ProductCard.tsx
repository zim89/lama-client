'use client'

import Image from 'next/image'
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn'
import { Rating } from '@/components/Rating'
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
      <div className={styles.imageWrap}>
        <Image
          src={formatImageUrl(product.product_images[0].product_image)}
          alt={product.name}
          fill
          sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
          className='object-cover'
        />
      </div>
      <div
        className={cn(
          styles.content,
          'group-hover:top-[166px] transition-all duration-300 xl:group-hover:top-[184px]'
        )}
      >
        <h3
          className={cn(
            styles.title,
            'lg:group-hover:line-clamp-2 lg:group-hover:h-9 xl:group-hover:h-10'
          )}
        >
          {product.name}
        </h3>

        <Rating
          rating={product.rating}
          size={16}
          className='hidden transition-all duration-300 group-hover:block'
          showText={false}
          disabled={true}
        />
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

        <ColorSelect colors={getColorsFromAttr(product.attributes)} />
      </div>
    </div>
  )
}
