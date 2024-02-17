'use client';
import React, { type ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { cn } from '@/shared/lib/utils';

import NextBtn from './ui/NextBtn';
import PrevBtn from './ui/PrevBtn';
import { heroSlides } from '@/modules/Hero/lib/data';
import styles from './styles/Hero.module.css';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: 'heroSlider',
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    appendDots: (dots: ReactNode) => (
      <div>
        <ul className='flex gap-2'>{dots}</ul>
      </div>
    ),
    customPaging: (index: number) => (
      <div
        className={cn(
          'h-2.5 rounded-full transition-all duration-500 hover:bg-gray-900',
          index === activeSlide ? 'w-7 bg-gray-900' : 'w-2.5 bg-gray-100'
        )}></div>
    ),
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
    },
  };

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrap}>
          <Slider {...settings}>
            {heroSlides.map((item) => (
              <div key={item.id} className='h-auto'>
                <div className='flex flex-col md:flex-row-reverse'>
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.images[0].url}
                      alt={item.images[0].alt}
                      priority={true}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.additionalWrap}>
                    <p>{item.desc}</p>
                    <div className={styles.additionalThumb}>
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill={true}
                        sizes='25vw'
                        className='object-contain'
                      />
                    </div>
                    <Link href={'/catalog'} className='btnSecondary'>
                      До каталогу
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
