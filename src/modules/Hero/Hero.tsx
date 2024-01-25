'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import { heroSlides } from '@/modules/Hero/lib/data';
import NextBtn from '@/modules/Hero/ui/NextBtn';
import PrevBtn from '@/modules/Hero/ui/PrevBtn';

export default function Hero() {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    // appendDots: (dots: any) => (
    //   <div>
    //     <ul className='custom-dots'>{dots}</ul>
    //   </div>
    // ),
    // customPaging: () => <div className='custom-dot'></div>,
    //
    // beforeChange: (current: number, next: number) => {
    //   setActiveSlide(next);
    // },
  };

  return (
    <div className={'pb-10 pt-5'}>
      <div className={'container'}>
        <div className={'relative'}>
          <Slider {...settings}>
            {heroSlides.map((item) => (
              <div
                key={item.id}
                className={'overflow-hidden rounded-2xl bg-violet-300'}>
                <Image
                  src={item.imageUrl}
                  alt={item.imageDesc}
                  priority={true}
                  height={362}
                  style={{ width: 'auto' }}
                />

                {/* Additional info */}
                <div
                  className={'flex h-[90px] items-center justify-between px-3'}>
                  <p
                    className={
                      'w-[148px] text-center text-base/[1.25] font-medium'
                    }>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <Link href={'/'} className={'btn absolute bottom-[26px] right-3'}>
            До каталогу
          </Link>
        </div>
      </div>
    </div>
  );
}
