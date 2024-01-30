'use client';
import Image from 'next/image';
import { Product } from '@/shared/api/types';

import { BoyIcon, GirlIcon } from '@/components/icons';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import AddToCartBtn from '@/components/AddToCartBtn';
import { cn, formatPrice } from '@/shared/lib/utils';
import lamaHeartIcon from '@/assets/icons/logo/lamaHeart.png';

interface ProductCardProps {
  product: Product;
  lastItem: boolean;
}
export default function ProductCard({ product, lastItem }: ProductCardProps) {
  return (
    <div
      className='relative h-[252px] overflow-hidden rounded-lg border border-gray-300'
      data-last={lastItem}>
      <div className='relative flex h-[184px] justify-between bg-gray-300'>
        {/*Background image*/}
        <Image
          src={product.product_images[0].product_image}
          alt={product.name}
          fill
          sizes='(max-width: 375px) 50vw'
          className='object-contain'
        />

        {/* Lama Heart Icon */}
        <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-full bg-gray-100'>
          <Image
            src={lamaHeartIcon}
            alt={'Brand heart icon'}
            height={10}
            width={11}
          />
        </div>

        {/*Left Side*/}
        {!lastItem && (
          <ul className='relative z-10'>
            <li>
              <AddToFavoritesBtn />
            </li>
            <li>
              <AddToCartBtn />
            </li>
          </ul>
        )}

        {/* Right Side */}
        {!lastItem && (
          <div className='relative z-10 flex flex-col justify-between px-2 py-2'>
            <span
              className={cn(
                product.discount
                  ? 'rounded-full bg-amber-500 px-1.5 py-1 text-xs'
                  : ''
              )}>
              {product.discount ? `${product.discount.name}%` : ''}
            </span>

            <span className='flex h-3 w-3 items-center justify-center self-end rounded-full bg-gray-100'>
              {product.male ? <BoyIcon /> : <GirlIcon />}
            </span>
          </div>
        )}
      </div>

      {!lastItem && (
        <div className='space-y-1 bg-gray-100 p-2'>
          <p className='line-clamp-2 h-8 text-xs'>{product.name}</p>
          {product.discount && (
            <p className='flex gap-2 text-sm/[1.14286] font-medium'>
              <span>
                {formatPrice(
                  product.price - (product.price * product.discount?.name) / 100
                )}
              </span>
              <span className='text-gray-500 line-through'>
                {formatPrice(product.price)}
              </span>
            </p>
          )}

          {!product.discount && (
            <p className='flex gap-2 text-sm/[1.14286] font-medium'>
              {formatPrice(product.price)}
            </p>
          )}
        </div>
      )}

      {lastItem && (
        <>
          <button className='absolute bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-[100px] border border-violet-500 bg-violet-500 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-violet-700 hover:bg-violet-700'>
            Дивитись все
          </button>
          <div className='absolute inset-0 bg-gray-500 bg-opacity-50'></div>
        </>
      )}
    </div>
  );
}
