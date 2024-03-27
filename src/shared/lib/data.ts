import {
  TruckIcon,
  RefreshIcon,
  RouletteIcon,
  GiftIcon,
  ListIcon,
  ChatIcon,
} from '@/components/IconsPack';

export const serviceLinks = [
  { label: 'Доставка і оплата', href: '/shipping&payment', icon: TruckIcon },
  {
    label: 'Обмін та повернення',
    href: '/exchange&returns',
    icon: RefreshIcon,
  },
  { label: 'Таблиці розмірів', href: '/sizes', icon: RouletteIcon },
  { label: 'Бонусна програма', href: '/loyalty', icon: GiftIcon },
  { label: 'Правила магазину', href: '/rules', icon: ListIcon },
  { label: 'Зв’язатися з нами', href: '/contact', icon: ChatIcon },
] as const;
