import additionalPrice from '@/assets/images/hero/additionalPrice.png'
import heroSlide1 from '@/assets/images/hero/heroSlide1.png'
import heroSlide2 from '@/assets/images/hero/heroSlide2.png'
import heroSlide3 from '@/assets/images/hero/heroSlide3.png'

export const heroSlides = [
  {
    id: 1,
    url: heroSlide1,
    alt: 'Lama image',
    title: 'Спортивні костюми для хлопчиків',
    text: '',
    priceText: 'від 429 ₴',
    additionalPrice: additionalPrice,
    gradient: {
      from: '#C6CCF2',
      to: '#BEC5F2'
    }
  },
  {
    id: 2,
    url: heroSlide2,
    alt: 'Lama image',
    title: (
      <>
        Стильні <br />
        комплекти
        <br /> для дівчаток
      </>
    ),
    text: (
      <>
        Сорочка вільного крою та штани кльош
        <br /> Тканина муслін
      </>
    ),
    priceText: 'від 900 ₴',
    gradient: {
      from: '#B4F1E7',
      to: '#AEEAE0'
    }
  },
  {
    id: 3,
    url: heroSlide3,
    alt: 'Lama image',
    title: (
      <>
        Ромпери <br />
        самим маленьким <br />
        <span>від 499 ₴</span>
      </>
    ),
    text: 'Склад: 80% бавовна, 20% фліс',
    priceText: 'Продумано до дрібниць!',
    gradient: {
      from: '#F5ECCB',
      to: '#F2E6B5'
    }
  }
]
