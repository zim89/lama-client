'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { type ReactNode, useState } from 'react'
import Slider from 'react-slick'
import { number } from 'zod'
import Title from '@/components/Title'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/shared/lib/utils'
import styles from './styles/Hero.module.css'
import NextBtn from './ui/NextBtn'
import PrevBtn from './ui/PrevBtn'
import { PriceBgImage } from './ui/PriceBgImage'
import { heroSlides } from '@/shared/data/hero.data'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

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
        <ul className='flex gap-4'>{dots}</ul>
      </div>
    ),
    customPaging: (index: number) => (
      <div
        className={cn(
          'h-2.5 rounded-full transition-all duration-500 hover:bg-gray-900',
          index === activeSlide ? 'w-7 bg-gray-900' : 'w-2.5 bg-gray-100'
        )}
      ></div>
    ),
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next)
    }
  }

  const slidesBg = [
    'bg-gradient-to-r from-slide-purple-300 to-slide-purple-400',
    'bg-gradient-to-r from-slide-green-300 to-slide-green-400',
    'bg-gradient-to-r from-slide-yellow-300 to-slide-yellow-400'
  ]

  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles.wrap}>
          <Slider {...settings}>
            {heroSlides.map((item, index) => (
              <div
                key={item.id}
                className={cn(slidesBg[index])}
              >
                <div className='relative flex h-full'>
                  <Image
                    className={styles.imageWrap}
                    src={item.url}
                    alt={item.alt}
                    priority
                  />
                  <div className={styles.sliderContent}>
                    <h2
                      className={cn(
                        'heading-2 max-w-[380px] sm:text-balance',
                        item.id === 1
                          ? 'order-1'
                          : item.id === 3
                            ? 'order-2 max-w-[119px] sm:mt-0 lg:mt-[80px] md:mt-[80px] xl:mt-[99px] [&>span]:hidden md:[&>span]:block'
                            : 'sm:[&>br]:hidden md:[&>br]:block order-2 sm:mt-0 lg:mt-[88px] md:mt-[80px] xl:mt-[108px]'
                      )}
                    >
                      {item.title}
                    </h2>
                    <div
                      className={cn(
                        'relative',
                        item.id === 1
                          ? styles.hightLightSlide1
                          : item.id === 2
                            ? styles.hightLightSlide2
                            : styles.hightLightSlide3
                      )}
                    >
                      <PriceBgImage
                        index={item.id}
                        className={styles.priceBg}
                      />
                      <span
                        className={cn(
                          'relative z-10 pt-1',
                          item.id === 1
                            ? 'block heading-2 pt-0 sm:pt-1'
                            : item.id === 3
                              ? 'block max-w-[120px] pt-[5px] text-center text-balance md:pl-3 xl:pl-4 text-[12px]/[16px] md:text-sm/[20px] lg:text-sm/[20px] text-gray-900'
                              : 'md:text-sm/[20px] font-medium'
                        )}
                      >
                        {item.priceText}
                      </span>
                    </div>
                    {item.text ? (
                      <p className='order-4 mt-8 hidden md:block sm:text-sm/5 lg:text-base'>
                        {item.text}
                      </p>
                    ) : null}
                    {item.additionalPrice && (
                      <div className={styles.additionalPrice}>
                        <Image
                          src={item.additionalPrice}
                          alt={item.alt}
                          priority
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <button className={styles.hero_btn}>До каталогу</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
