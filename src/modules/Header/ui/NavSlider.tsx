import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import {
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { cn } from '@/shared/lib/utils'

function NextBtn({
  className,
  onClick
}: {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={className}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3.25 11.75H19.75M19.75 11.75L13 5M19.75 11.75L13 18.5'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}

function PrevBtn({
  className,
  onClick
}: {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.75 11.75L3.25 11.75M3.25 11.75L10 18.5M3.25 11.75L10 5'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </button>
  )
}

export default function NavSlider({
  items
}: {
  items: readonly {
    label: string
    href: string
    image: StaticImageData
    image_large: StaticImageData
  }[]
}) {
  const settings = {
    className: 'navSlider',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  }
  return (
    <NavigationMenuContent className='p-0 w-full border-0'>
      <div className={cn('relative container py-8 xl:py-11')}>
        <div className=' absolute inset-y-0 bg-white w-[52px] xl:w-[140px] z-10 top-0 right-0' />

        <Slider {...settings}>
          {items.map(item => (
            <div key={item.label}>
              <Link
                href={item.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink>
                  <div className='text-sm font-medium text-center space-y-2'>
                    <div className='xl:hidden'>
                      <Image
                        alt={item.label}
                        src={item.image}
                        width={140}
                        height={140}
                      />
                    </div>
                    <div className='relative hidden xl:block'>
                      <Image
                        alt={item.label}
                        src={item.image_large}
                        width={180}
                        height={180}
                      />
                    </div>

                    <p>{item.label}</p>
                  </div>
                </NavigationMenuLink>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </NavigationMenuContent>
  )
}
