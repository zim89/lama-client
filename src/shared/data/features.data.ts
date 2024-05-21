import caring_sm from '@/assets/icons/features/caring-375.svg'
import caring from '@/assets/icons/features/caring.svg'
import functionality_sm from '@/assets/icons/features/functionality-375.svg'
import functionality from '@/assets/icons/features/functionality.svg'
import loyalty_sm from '@/assets/icons/features/loyalty-375.svg'
import loyalty from '@/assets/icons/features/loyalty.svg'
import quality_sm from '@/assets/icons/features/quality-375.svg'
import quality from '@/assets/icons/features/quality.svg'

export const features = [
  {
    title: 'Функціональний дизайн',
    desc: [
      'Зручний одяг, який не сковує рухів дитини',
      'Речі «ростуть­» разом з вашими малюками'
    ],
    icon_sm: functionality_sm,
    icon: functionality
  },
  {
    title: 'Турбота про ваших дітей',
    desc: [
      'Працюємо тільки з натуральними тканинами',
      'Ретельний контроль якості на всіх етапах виробництва'
    ],
    icon_sm: caring_sm,
    icon: caring
  },
  {
    title: 'Вигідні ціни за високу якість',
    desc: [
      'Одяг не поступається якістю відомим світовим маркам',
      'Український бренд за доступними цінами'
    ],
    icon_sm: quality_sm,
    icon: quality
  },
  {
    title: 'Зручність та лояльність',
    desc: [
      'Зручні способи оплати та доставки',
      'Легкий обмін або повернення товару протягом 14 днів'
    ],
    icon_sm: loyalty_sm,
    icon: loyalty
  }
] as const
