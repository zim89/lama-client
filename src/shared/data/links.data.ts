// Boy
import boy_accessories from '@/assets/images/navbar/boy/1024/accessories.png'
import boy_all from '@/assets/images/navbar/boy/1024/all.png'
import boy_clothes from '@/assets/images/navbar/boy/1024/clothes.png'
import boy_family from '@/assets/images/navbar/boy/1024/family.png'
import boy_accessories_xl from '@/assets/images/navbar/boy/1440/accessories.png'
import boy_all_xl from '@/assets/images/navbar/boy/1440/all.png'
import boy_clothes_xl from '@/assets/images/navbar/boy/1440/clothes.png'
import boy_family_xl from '@/assets/images/navbar/boy/1440/family.png'
// Father
import father_all from '@/assets/images/navbar/father/1024/all.png'
import father_shorts from '@/assets/images/navbar/father/1024/shorts.png'
import father_sports from '@/assets/images/navbar/father/1024/sports.png'
import father_t_shirts from '@/assets/images/navbar/father/1024/t-shirts.png'
import father_vests from '@/assets/images/navbar/father/1024/vests.png'
import father_all_xl from '@/assets/images/navbar/father/1440/all.png'
import father_shorts_xl from '@/assets/images/navbar/father/1440/shorts.png'
import father_sports_xl from '@/assets/images/navbar/father/1440/sports.png'
import father_t_shirts_xl from '@/assets/images/navbar/father/1440/t-shirts.png'
import father_vests_xl from '@/assets/images/navbar/father/1440/vests.png'
// Girl
import girl_accessories from '@/assets/images/navbar/girl/1024/accessories.png'
import girl_all from '@/assets/images/navbar/girl/1024/all.png'
import girl_clothes from '@/assets/images/navbar/girl/1024/clothes.png'
import girl_family from '@/assets/images/navbar/girl/1024/family.png'
import girl_accessories_xl from '@/assets/images/navbar/girl/1440/accessories.png'
import girl_all_xl from '@/assets/images/navbar/girl/1440/all.png'
import girl_clothes_xl from '@/assets/images/navbar/girl/1440/clothes.png'
import girl_family_xl from '@/assets/images/navbar/girl/1440/family.png'
// Mother
import mother_all from '@/assets/images/navbar/mother/1024/all.png'
import mother_shirts from '@/assets/images/navbar/mother/1024/shirts.png'
import mother_sports from '@/assets/images/navbar/mother/1024/sports.png'
import mother_suits from '@/assets/images/navbar/mother/1024/suits.png'
import mother_t_shirts from '@/assets/images/navbar/mother/1024/t-shirts.png'
import mother_all_xl from '@/assets/images/navbar/mother/1440/all.png'
import mother_shirts_xl from '@/assets/images/navbar/mother/1440/shirts.png'
import mother_sports_xl from '@/assets/images/navbar/mother/1440/sports.png'
import mother_suits_xl from '@/assets/images/navbar/mother/1440/suits.png'
import mother_t_shirts_xl from '@/assets/images/navbar/mother/1440/t-shirts.png'
// Toddler
import toddler_all from '@/assets/images/navbar/toddler/1024/all.png'
import toddler_bandages from '@/assets/images/navbar/toddler/1024/bandages.png'
import toddler_body from '@/assets/images/navbar/toddler/1024/body.png'
import toddler_denims from '@/assets/images/navbar/toddler/1024/denims.png'
import toddler_dresses from '@/assets/images/navbar/toddler/1024/dresses.png'
import toddler_hats from '@/assets/images/navbar/toddler/1024/hats.png'
import toddler_manikin from '@/assets/images/navbar/toddler/1024/manikin.png'
import toddler_panama from '@/assets/images/navbar/toddler/1024/panama.png'
import toddler_pants from '@/assets/images/navbar/toddler/1024/pants.png'
import toddler_sandblasters from '@/assets/images/navbar/toddler/1024/sandblasters.png'
import toddler_sets from '@/assets/images/navbar/toddler/1024/sets.png'
import toddler_shirts from '@/assets/images/navbar/toddler/1024/shirts.png'
import toddler_sport_suits from '@/assets/images/navbar/toddler/1024/sport-suits.png'
import toddler_sweaters from '@/assets/images/navbar/toddler/1024/sweaters.png'
import toddler_vests from '@/assets/images/navbar/toddler/1024/vests.png'
import toddler_all_xl from '@/assets/images/navbar/toddler/1440/all.png'
import toddler_bandages_xl from '@/assets/images/navbar/toddler/1440/bandages.png'
import toddler_body_xl from '@/assets/images/navbar/toddler/1440/body.png'
import toddler_denims_xl from '@/assets/images/navbar/toddler/1440/denims.png'
import toddler_dresses_xl from '@/assets/images/navbar/toddler/1440/dresses.png'
import toddler_hats_xl from '@/assets/images/navbar/toddler/1440/hats.png'
import toddler_manikin_xl from '@/assets/images/navbar/toddler/1440/manikin.png'
import toddler_panama_xl from '@/assets/images/navbar/toddler/1440/panama.png'
import toddler_pants_xl from '@/assets/images/navbar/toddler/1440/pants.png'
import toddler_sandblasters_xl from '@/assets/images/navbar/toddler/1440/sandblasters.png'
import toddler_sets_xl from '@/assets/images/navbar/toddler/1440/sets.png'
import toddler_shirts_xl from '@/assets/images/navbar/toddler/1440/shirts.png'
import toddler_sport_suits_xl from '@/assets/images/navbar/toddler/1440/sport-suits.png'
import toddler_sweaters_xl from '@/assets/images/navbar/toddler/1440/sweaters.png'
import toddler_vests_xl from '@/assets/images/navbar/toddler/1440/vests.png'
// Other
import { APP_PAGES } from '../config/pages-url.config'

// FIXME: Query params in href
export const additionalLinks = [
  { label: 'Розпродаж', href: `${APP_PAGES.CATALOG}?` },
  { label: 'Подарункові сертифікати', href: `${APP_PAGES.CATALOG}?` }
] as const

// FIXME: Query params in href
export const categoryLinks = [
  {
    label: 'Дівчатам',
    href: `${APP_PAGES.GIRLS}`,
    items: [
      {
        label: 'Дивитись все',
        href: `${APP_PAGES.GIRLS}`,
        image: girl_all,
        image_large: girl_all_xl
      },
      {
        label: 'Одяг',
        href: `${APP_PAGES.GIRLS}`,
        image: girl_clothes,
        image_large: girl_clothes_xl
      },
      {
        label: 'Фемілі лук',
        href: `${APP_PAGES.GIRLS}`,
        image: girl_family,
        image_large: girl_family_xl
      },
      {
        label: 'Аксесуари',
        href: `${APP_PAGES.GIRLS}`,
        image: girl_accessories,
        image_large: girl_accessories_xl
      }
    ]
  },
  {
    label: 'Хлопчикам',
    href: `${APP_PAGES.BOYS}`,
    items: [
      {
        label: 'Дивитись все',
        href: `${APP_PAGES.BOYS}`,
        image: boy_all,
        image_large: boy_all_xl
      },
      {
        label: 'Одяг',
        href: `${APP_PAGES.BOYS}`,
        image: boy_clothes,
        image_large: boy_clothes_xl
      },
      {
        label: 'Фемілі лук',
        href: `${APP_PAGES.BOYS}`,
        image: boy_family,
        image_large: boy_family_xl
      },
      {
        label: 'Аксесуари',
        href: `${APP_PAGES.BOYS}`,
        image: boy_accessories,
        image_large: boy_accessories_xl
      }
    ]
  },
  {
    label: 'Самим маленьким',
    href: `${APP_PAGES.BABIES}`,
    items: [
      {
        label: 'Дивитись все',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_all,
        image_large: toddler_all_xl
      },
      {
        label: 'Боді',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_body,
        image_large: toddler_body_xl
      },
      {
        label: 'Жилетки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_vests,
        image_large: toddler_vests_xl
      },
      {
        label: 'Комбінезони',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_denims,
        image_large: toddler_denims_xl
      },
      {
        label: 'Комплекти',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_sets,
        image_large: toddler_sets_xl
      },
      {
        label: 'Кофтинки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_sweaters,
        image_large: toddler_sweaters_xl
      },
      {
        label: 'Панамки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_panama,
        image_large: toddler_panama_xl
      },
      {
        label: 'Повʼязки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_bandages,
        image_large: toddler_bandages_xl
      },
      {
        label: 'Пісочники',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_sandblasters,
        image_large: toddler_sandblasters_xl
      },
      {
        label: 'Сорочки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_shirts,
        image_large: toddler_shirts_xl
      },
      {
        label: 'Спортивні костюми',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_sport_suits,
        image_large: toddler_sport_suits_xl
      },
      {
        label: 'Сукні',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_dresses,
        image_large: toddler_dresses_xl
      },
      {
        label: 'Чоловічки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_manikin,
        image_large: toddler_manikin_xl
      },
      {
        label: 'Шапочки',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_hats,
        image_large: toddler_hats_xl
      },
      {
        label: 'Штани',
        href: `${APP_PAGES.BABIES}`,
        image: toddler_pants,
        image_large: toddler_pants_xl
      }
    ]
  },
  {
    label: 'Для мам',
    href: `${APP_PAGES.MOMS}`,
    items: [
      {
        label: 'Дивитись все',
        href: `${APP_PAGES.MOMS}`,
        image: mother_all,
        image_large: mother_all_xl
      },
      {
        label: 'Спортивні костюми',
        href: `${APP_PAGES.MOMS}`,
        image: mother_sports,
        image_large: mother_sports_xl
      },
      {
        label: 'Літні комплекти ',
        href: `${APP_PAGES.MOMS}`,
        image: mother_suits,
        image_large: mother_suits_xl
      },
      {
        label: 'Сорочки',
        href: `${APP_PAGES.MOMS}`,
        image: mother_shirts,
        image_large: mother_shirts_xl
      },
      {
        label: 'Футболки',
        href: `${APP_PAGES.MOMS}`,
        image: mother_t_shirts,
        image_large: mother_t_shirts_xl
      }
    ]
  },
  {
    label: 'Для татусів',
    href: `${APP_PAGES.DADS}`,
    items: [
      {
        label: 'Дивитись все',
        href: `${APP_PAGES.DADS}`,
        image: father_all,
        image_large: father_all_xl
      },
      {
        label: 'Жилетки',
        href: `${APP_PAGES.DADS}`,
        image: father_vests,
        image_large: father_vests_xl
      },
      {
        label: 'Спортивні костюми',
        href: `${APP_PAGES.DADS}`,
        image: father_sports,
        image_large: father_sports_xl
      },
      {
        label: 'Футболки',
        href: `${APP_PAGES.DADS}`,
        image: father_t_shirts,
        image_large: father_t_shirts_xl
      },
      {
        label: 'Шорти',
        href: `${APP_PAGES.DADS}`,
        image: father_shorts,
        image_large: father_shorts_xl
      }
    ]
  }
] as const

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
