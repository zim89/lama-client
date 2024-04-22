import { APP_PAGES } from '../config/pages-url.config'

// FIXME: Query params in href
export const footerCategoryLinks = [
  { label: 'Дівчатам', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Хлопчикам', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Для мам', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Для татусів', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Самим маленьким', href: `${APP_PAGES.CATALOG}?` }
]

// FIXME: Query params in href
export const helpLinks = [
  { label: 'Доставка і оплата', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Обмін та повернення', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Таблиці розмірів', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Правила магазину', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Зв’язатися з нами', href: `${APP_PAGES.CATALOG}?` }
]
