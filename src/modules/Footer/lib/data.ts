import { FacebookIcon, InstagramIcon, TiktokIcon } from '@/components/icons'

export const featureList = [
  {
    label: 'truck',
    desc: 'Бескоштовна доставка на покупки від 1000 ₴'
  },
  {
    label: 'article',
    desc: '30 днів на обмін та повернення'
  },
  {
    label: 'label',
    desc: 'Тільки оригінальні бренди'
  },
  {
    label: 'gift',
    desc: 'Програми лояльності для постійних клієнтів'
  }
] as const

export const categoryLinks = [
  { label: 'Дівчинка', href: '/catalog/girl' },
  { label: 'Хлопчик', href: '/catalog/boy' },
  { label: 'Одяг', href: '/catalog/clothes' },
  { label: 'Взуття', href: '/catalog/clothes' },
  { label: 'Аксесуари', href: '/catalog/clothes' },
  { label: 'Фемілі лук', href: '/catalog/clothes' },
  { label: 'Тематичні костюми', href: '/catalog/clothes' },
  { label: 'Самим маленьким', href: '/catalog/clothes' },
  { label: 'Шкільна форма', href: '/catalog/clothes' }
] as const

export const socialLinks = [
  {
    label: 'TikTok',
    icon: TiktokIcon,
    link: 'https://www.tiktok.com/'
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    link: 'https://www.instagram.com/'
  },
  {
    label: 'facebook',
    icon: FacebookIcon,
    link: 'https://www.facebook.com/'
  }
] as const
