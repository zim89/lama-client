import truckIcon from '@/assets/icons/additional/truck.svg';
import articleIcon from '@/assets/icons/additional/article.svg';
import labelIcon from '@/assets/icons/additional/label.svg';
import giftIcon from '@/assets/icons/additional/gift.svg';

import visaImg from '@/assets/images/additional/visa.png';
import mastercardImg from '@/assets/images/additional/mastercard.png';
import applePayImg from '@/assets/images/additional/payApple.png';
import googlePayImg from '@/assets/images/additional/payGoogle.png';

import {
  TiktokIcon,
  InstagramIcon,
  FacebookIcon,
} from '../../../components/icons';

export const featureList = [
  {
    id: 1,
    icon: truckIcon,
    desc: 'Бескоштовна доставка на покупки від 1000 ₴',
  },
  {
    id: 2,
    icon: articleIcon,
    desc: '30 днів на обмін та повернення',
  },
  {
    id: 3,
    icon: labelIcon,
    desc: 'Тільки оригінальні бренди',
  },
  {
    id: 4,
    icon: giftIcon,
    desc: 'Програми лояльності для постійних клієнтів',
  },
] as const;

export const categoryList = [
  { label: 'Дівчинка', link: '/' },
  { label: 'Хлопчик', link: '/' },
  { label: 'Одяг', link: '/' },
  { label: 'Взуття', link: '/' },
  { label: 'Аксесуари', link: '/' },
  { label: 'Фемілі лук', link: '/' },
  { label: 'Тематичні костюми', link: '/' },
  { label: 'Самим маленьким', link: '/' },
  { label: 'Шкільна форма', link: '/' },
] as const;

export const serviceList = [
  { label: 'Доставка і оплата', link: '/' },
  { label: 'Обмін та повернення', link: '/' },
  { label: 'Таблиці розмірів', link: '/' },
  { label: 'Бонусна програма', link: '/' },
  { label: 'Правила магазину', link: '/' },
  { label: 'Зв’язатися з нами', link: '/' },
] as const;

export const socialList = [
  {
    label: 'TikTok',
    icon: TiktokIcon,
    link: 'https://www.tiktok.com/',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/',
  },
  {
    label: 'facebook',
    icon: FacebookIcon,
    link: 'https://www.facebook.com/',
  },
] as const;

export const payList = [
  { label: 'visa', image_src: visaImg },
  { label: 'mastercard', image_src: mastercardImg },
  { label: 'applePay', image_src: applePayImg },
  { label: 'googlePay', image_src: googlePayImg },
] as const;
