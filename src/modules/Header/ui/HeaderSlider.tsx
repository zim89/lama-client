'use client';
import Slider from 'react-slick';

import HeaderNextBtn from '@/modules/Header/ui/HeaderNextBtn';
import HeaderPrevBtn from '@/modules/Header/ui/HeaderPrevBtn';
import { featureSlides } from '@/modules/Header/lib/data';

export default function HeaderSlider() {
  const settings = {
    dots: false,
    fade: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HeaderNextBtn />,
    prevArrow: <HeaderPrevBtn />,
  };

  return (
    <Slider {...settings}>
      {featureSlides.map((item) => (
        <div key={item.id} className='text-center text-sm'>
          {item.label}
        </div>
      ))}
    </Slider>
  );
}
