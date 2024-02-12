import boyClothesImg from '@/assets/icons/category/boy/clothes.png';
import boyShoesImg from '@/assets/icons/category/boy/shoes.png';
import boyAccessoriesImg from '@/assets/icons/category/boy/accessories.png';
import boyFamilyImg from '@/assets/icons/category/boy/family.png';
import boyThematicImg from '@/assets/icons/category/boy/thematic.png';
import boyAllImg from '@/assets/icons/category/boy/all.png';

import girlClothesImg from '@/assets/icons/category/girl/clothes.png';
import girlShoesImg from '@/assets/icons/category/girl/shoes.png';
import girlAccessoriesImg from '@/assets/icons/category/girl/accessories.png';
import girlFamilyImg from '@/assets/icons/category/girl/family.png';
import girlThematicImg from '@/assets/icons/category/girl/thematic.png';
import girlAllImg from '@/assets/icons/category/girl/all.png';

export const featureSlides = [
  { id: 1, label: 'Тільки оригінальні бренди' },
  { id: 2, label: 'Програми лояльності для постійних клієнтів' },
  { id: 3, label: '30 днів на обмін та повернення' },
  { id: 4, label: 'Безкоштовна доставка на покупки від 1000 ₴' },
] as const;

export const mobileCategoryList = [
  { id: 1, label: 'Одяг', boyImg: boyClothesImg, girlImg: girlClothesImg },
  { id: 2, label: 'Взуття', boyImg: boyShoesImg, girlImg: girlShoesImg },
  {
    id: 3,
    label: 'Аксесуари',
    boyImg: boyAccessoriesImg,
    girlImg: girlAccessoriesImg,
  },
  { id: 4, label: 'Фемілі лук', boyImg: boyFamilyImg, girlImg: girlFamilyImg },
  {
    id: 5,
    label: 'Тематичні костюми',
    boyImg: boyThematicImg,
    girlImg: girlThematicImg,
  },
  { id: 6, label: 'Всі товари', boyImg: boyAllImg, girlImg: girlAllImg },
] as const;

export const mobileAdditionalLinks = [
  { label: 'Доставка і оплата', href: '/shipping&payment' },
  { label: 'Обмін та повернення', href: '/exchange&returns' },
  { label: 'Таблиці розмірів', href: '/sizes' },
  { label: 'Бонусна програма', href: '/loyalty' },
  { label: 'Правила магазину', href: '/rules' },
  { label: 'Зв’язатися з нами', href: '/contact' },
] as const;
