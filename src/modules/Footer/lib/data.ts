import visaImg from '@/assets/icons/additional/payVisa.png';
import mastercardImg from '@/assets/icons/additional/payMastercard.png';
import applePayImg from '@/assets/icons/additional/payApple.png';
import googlePayImg from '@/assets/icons/additional/payGoogle.png';

import { TiktokIcon, InstagramIcon, FacebookIcon } from '@/components/icons';

export const featureList = [
  {
    label: 'truck',
    desc: 'Бескоштовна доставка на покупки від 1000 ₴',
  },
  {
    label: 'article',
    desc: '30 днів на обмін та повернення',
  },
  {
    label: 'label',
    desc: 'Тільки оригінальні бренди',
  },
  {
    label: 'gift',
    desc: 'Програми лояльності для постійних клієнтів',
  },
] as const;

export const categoryLinks = [
  { label: 'Дівчинка', href: '/catalog/girl' },
  { label: 'Хлопчик', href: '/catalog/boy' },
  { label: 'Одяг', href: '/catalog/clothes' },
  { label: 'Взуття', href: '/catalog/clothes' },
  { label: 'Аксесуари', href: '/catalog/clothes' },
  { label: 'Фемілі лук', href: '/catalog/clothes' },
  { label: 'Тематичні костюми', href: '/catalog/clothes' },
  { label: 'Самим маленьким', href: '/catalog/clothes' },
  { label: 'Шкільна форма', href: '/catalog/clothes' },
] as const;

export const serviceLinks = [
  { label: 'Доставка і оплата', href: '/shipping&payment' },
  { label: 'Обмін та повернення', href: '/exchange&returns' },
  { label: 'Таблиці розмірів', href: '/sizes' },
  { label: 'Бонусна програма', href: '/loyalty' },
  { label: 'Правила магазину', href: '/rules' },
  { label: 'Зв’язатися з нами', href: '/contact' },
] as const;

export const socialLinks = [
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
