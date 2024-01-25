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
    imageUrl: slideImg_01,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_01,
    additionalDesc: 'Lama image',
    desc: '-10% на нову колекцію',
  },
  {
    id: 2,
    imageUrl: slideImg_02,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_01,
    additionalDesc: 'Lama image',
    desc: '-10% на нову колекцію',
  },
  {
    id: 3,
    imageUrl: slideImg_03,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_02,
    additionalDesc: 'Lama image',
    desc: '-25% на теплий одяг',
  },
  {
    id: 4,
    imageUrl: slideImg_04,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_02,
    additionalDesc: 'Lama image',
    desc: '-25% на теплий одяг',
  },
  {
    id: 5,
    imageUrl: slideImg_05,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_03,
    additionalDesc: 'Lama image',
    desc: 'Постійні знижки на аксесуари',
  },
  {
    id: 6,
    imageUrl: slideImg_06,
    imageDesc: 'Hero image with girls and boys',
    additionalUrl: lamaImg_03,
    additionalDesc: 'Lama image',
    desc: 'Постійні знижки на аксесуари',
  },
] as const;
