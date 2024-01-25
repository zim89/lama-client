'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import { brandList } from '@/modules/Brands/lib/data';

export default function Brands() {
  const settings = {
    dots: false,
    arrows: false,
    draggable: false,
    swipe: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'brandsSlider',
  };
  return (
    <div className={'section'}>
      <div className={'container'}>
        <Slider {...settings}>
          {brandList.map((item) => (
            <div key={item.label} className={''}>
              <Image
                src={item.iconUrl}
                alt={item.label}
                height={24}
                width={76}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
