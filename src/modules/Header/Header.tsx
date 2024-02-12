import Link from 'next/link';
import { HeartWithHandIcon, SearchIcon } from '@/components/icons';
import { cn } from '@/shared/lib/utils';
import Logo from './ui/Logo';
import Toolbar from './ui/Toolbar';
import UserMenu from './ui/UserMenu';
import HeaderSlider from './ui/HeaderSlider';

export default function Header() {
  return (
    <header>
      {/*Header Slider*/}
      <div className='hidden bg-amber-500 lg:block'>
        <div className='container'>
          <div className='mx-auto w-[400px] py-2'>
            <HeaderSlider />
          </div>
        </div>
      </div>

      {/*Main Navbar*/}
      <div className='bg-amber-300'>
        <div className='container'>
          <nav className='flex items-center justify-between pb-2 pt-11 sm:pt-[61px] md:pt-2 lg:items-end lg:pb-5 lg:pt-6'>
            <Toolbar />
            <Logo />
            <UserMenu />
          </nav>
        </div>
      </div>

      {/*Additional Navbar*/}
      <div className='hidden bg-gray-100 lg:block'>
        <div className='container'>
          <div className='flex items-center justify-between py-2.5'>
            <ul className='flex gap-6 text-sm'>
              <li>
                <Link href={'/catalog/new'}>Нові надходження</Link>
              </li>
              <li>
                <Link href={'/catalog/sale'}>Розпродаж</Link>
              </li>
              <li>
                <Link href={'/loyalty'}>Бонусна програма</Link>
              </li>
              <li>
                <Link
                  href={'/small-clothes'}
                  className='btn-icon flex items-center gap-1'>
                  <HeartWithHandIcon />
                  <span className='text-black'>Є речі, з яких виросли?</span>
                </Link>
              </li>
            </ul>

            <form action='' className='relative w-[242px]'>
              <input
                type='text'
                placeholder='Я шукаю'
                className='w-full rounded-lg border border-gray-500 bg-gray-100 py-2 pl-3 pr-[38px] text-base placeholder:text-base placeholder:text-gray-900 focus:outline-0'
              />
              <button
                type='submit'
                className={cn(
                  'btn-icon',
                  'absolute right-3 top-1/2 -translate-y-1/2'
                )}>
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
