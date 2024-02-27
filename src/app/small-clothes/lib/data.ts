import kengurushIcon from '@/assets/icons/companies/kengurush.svg';
import murahiIcon from '@/assets/icons/companies/murahi.svg';
import caritasIcon from '@/assets/icons/companies/caritas.svg';

export const organizationList = [
  {
    logoSrc: kengurushIcon,
    desc: 'Кенгуруш. Соціальний проєкт',
    link: 'https://www.kengurush.org.ua',
    address: 'Київ, пр-т Миру, 15а',
    phone: '+380 67 458 10 03',
    novaPoshta: 'Київ, Відділення №14',
  },
  {
    logoSrc: murahiIcon,
    desc: 'Мурахи. Перша благодійна торгова платформа',
    link: 'https://www.murahy.com',
    address: 'м. Київ, вул. Кирилівська, 14-18',
    phone: '+380 44 331 62 29',
    novaPoshta: 'Київ, Відділення №29',
  },
  {
    logoSrc: caritasIcon,
    desc: 'Карітас Україна. Благодійний Фонд',
    link: 'https://www.caritas.ua',
    address: 'м. Львів, вул. Бойківська, 30б, оф. 68',
    phone: '+380 800 336 734',
    novaPoshta: 'Львів, Відділення №20',
  },
] as const;
