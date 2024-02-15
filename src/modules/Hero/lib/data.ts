import slideImg_01 from '@/assets/images/hero/hero-img-01.jpg';
import slideImg_02 from '@/assets/images/hero/hero-img-02.jpg';
import slideImg_03 from '@/assets/images/hero/hero-img-03.jpg';
import slideImg_04 from '@/assets/images/hero/hero-img-04.jpg';
import slideImg_05 from '@/assets/images/hero/hero-img-05.jpg';
import slideImg_06 from '@/assets/images/hero/hero-img-06.jpg';

import lamaImg_01 from '@/assets/images/hero/lama-01.png';
import lamaImg_02 from '@/assets/images/hero/lama-02.png';
import lamaImg_03 from '@/assets/images/hero/lama-03.png';

export const heroSlides = [
  {
    id: 1,
    url: lamaImg_01,
    alt: 'Lama image',
    desc: '-10% на нову колекцію',
    images: [
      {
        id: 1,
        url: slideImg_01,
        alt: 'Hero image with girls and boys',
      },
      {
        id: 2,
        url: slideImg_02,
        alt: 'Hero image with girls and boys',
      },
    ],
  },
  {
    id: 2,
    url: lamaImg_02,
    alt: 'Lama image',
    desc: '-25% на теплий одяг',
    images: [
      {
        id: 1,
        url: slideImg_03,
        alt: 'Hero image with girls and boys',
      },
      {
        id: 2,
        url: slideImg_04,
        alt: 'Hero image with girls and boys',
      },
    ],
  },
  {
    id: 3,
    url: lamaImg_03,
    alt: 'Lama image',
    desc: 'Постійні знижки на аксесуари',
    images: [
      {
        id: 5,
        url: slideImg_05,
        alt: 'Hero image with girls and boys',
      },
      {
        id: 6,
        url: slideImg_06,
        alt: 'Hero image with girls and boys',
      },
    ],
  },
] as const;
