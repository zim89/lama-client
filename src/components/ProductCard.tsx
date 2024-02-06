'use client';
import Image from 'next/image';
import { Product } from '@/shared/api/types';

import { BoyIcon, GirlIcon } from '@/components/icons';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import AddToCartBtn from '@/components/AddToCartBtn';
import { cn, formatPrice } from '@/shared/lib/utils';
import lamaHeartIconXs from '@/assets/icons/logo/lamaHeart-xs.png';
import lamaHeartIconSm from '@/assets/icons/logo/lamaHeart-sm.png';

interface ProductCardProps {
  product: Product;
  lastItem: boolean;
  heart?: boolean;
}
export default function ProductCard({
  product,
  lastItem,
  heart,
}: ProductCardProps) {
  return (
    <div
      className='relative h-[252px] overflow-hidden rounded-md border border-gray-300 bg-gray-100 sm:h-[296px] md:h-[310px] lg:h-[306px] xl:h-[338px]'
      data-last={lastItem}>
      {/*Top content*/}
      <div className='relative h-[180px] bg-gray-300 sm:h-[220px] md:h-[224px] lg:h-[220px] xl:h-[272px]'>
        <Image
          src={product.product_images[0].product_image}
          alt={product.name}
          fill
          sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
          className='object-cover'
        />

        {!lastItem && (
          <div className='absolute inset-0 z-10'>
            {heart && (
              <>
                <Image
                  src={lamaHeartIconXs}
                  alt='Brand heart icon'
                  width={15}
                  height={12}
                  className='absolute left-1/2 top-0 -translate-x-1/2 sm:hidden'
                />
                <Image
                  src={lamaHeartIconSm}
                  alt='Brand heart icon'
                  width={41}
                  height={28}
                  className='absolute left-1/2 top-0 hidden -translate-x-1/2 sm:block'
                />
              </>
            )}

            <ul className='absolute left-2 top-2 flex flex-col gap-2 lg:left-3 lg:top-3'>
              <li>
                <AddToFavoritesBtn />
              </li>
              <li>
                <AddToCartBtn />
              </li>
            </ul>

            {product.discount && (
              <span className='absolute right-2 top-2 rounded-full bg-amber-500 px-1.5 py-1 text-xs font-medium md:px-3 md:text-sm lg:right-3 lg:top-3'>
                {`${product.discount.name}%`}
              </span>
            )}

            <span className='absolute bottom-2 right-2'>
              {product.male ? <BoyIcon /> : <GirlIcon />}
            </span>
          </div>
        )}
      </div>

      {/*Bottom content*/}
      {!lastItem && (
        <div className='space-y-1 p-2 md:px-3 md:py-2'>
          <div className='flex items-start justify-between'>
            <p className='line-clamp-2 h-8 text-xs sm:h-9 sm:text-sm/[18px] md:h-10 md:basis-full md:text-sm xl:line-clamp-1 xl:h-5'>
              {product.name}
            </p>
            <div className='hidden md:flex md:items-center'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.00359 11.0032L10.3314 12.537C10.6289 12.733 10.9984 12.4414 10.9101 12.0802L10.2375 9.32872C10.2186 9.25208 10.2208 9.17144 10.244 9.09608C10.2672 9.02071 10.3103 8.95367 10.3685 8.90268L12.4559 7.09579C12.7302 6.85837 12.5886 6.38497 12.2362 6.36118L9.51019 6.17719C9.43676 6.17173 9.36634 6.1447 9.30712 6.09923C9.24789 6.05376 9.20231 5.99173 9.17567 5.92036L8.15898 3.25765C8.13134 3.1819 8.0822 3.11669 8.01808 3.07067C7.95397 3.02465 7.87791 3 7.8 3C7.7221 3 7.64604 3.02465 7.58192 3.07067C7.5178 3.11669 7.46866 3.1819 7.44102 3.25765L6.42433 5.92036C6.39769 5.99173 6.35211 6.05376 6.29289 6.09923C6.23366 6.1447 6.16324 6.17173 6.08981 6.17719L3.36379 6.36118C3.0114 6.38497 2.86983 6.85837 3.14411 7.09579L5.23152 8.90268C5.2897 8.95367 5.33285 9.02071 5.35602 9.09608C5.37918 9.17144 5.38143 9.25208 5.36249 9.32872L4.73877 11.8804C4.63282 12.3139 5.07614 12.6638 5.4332 12.4285L7.59641 11.0032C7.65725 10.9629 7.72788 10.9415 7.8 10.9415C7.87212 10.9415 7.94275 10.9629 8.00359 11.0032V11.0032Z'
                  stroke='#F0D2AC'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='md:text-sm md:text-gray-900'>
                {product.rating}
              </span>
            </div>
          </div>

          {product.discount && (
            <p className='flex gap-2 text-sm font-medium'>
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
            <p className='text-sm font-medium'>{formatPrice(product.price)}</p>
          )}
        </div>
      )}

      {lastItem && (
        <>
          <div className='absolute inset-0 z-10 flex items-end justify-center bg-white/40 pb-3 sm:pb-3.5 md:pb-[18px] lg:pb-5 xl:pb-7'>
            <button className='whitespace-nowrap rounded-xl border border-violet-500 bg-violet-500 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-violet-700 hover:bg-violet-700 lg:px-6 lg:text-lg/[24px] xl:px-8 xl:py-4'>
              Дивитись все
            </button>
          </div>
        </>
      )}
    </div>
  );
}
