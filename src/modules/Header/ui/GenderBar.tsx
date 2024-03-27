import BurgerMenu from './BurgerMenu';
import SearchMenu from './SearchMenu';
import Link from 'next/link';
import { BoyIcon, GirlIcon } from '@/components/icons';

export default function GenderBar() {
  return (
    <>
      <div className='flex sm:gap-1 md:gap-2 lg:hidden'>
        <BurgerMenu />
        <SearchMenu />
      </div>

      <div className='hidden lg:flex lg:gap-6'>
        <Link href={'/catalog/girl'} className='flex gap-2 text-base font-bold'>
          <GirlIcon />
          <span>Дівчатам</span>
        </Link>
        <Link href={'/catalog/boy'} className='flex gap-2 text-base font-bold'>
          <BoyIcon />
          <span>Хлопчикам</span>
        </Link>
      </div>
    </>
  );
}
