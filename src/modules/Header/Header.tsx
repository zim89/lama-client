import {
  BasketIcon,
  HeartIcon,
  SearchIcon,
  UserIcon
} from '@/components/IconsPack'
import AdditionalNavbar from './ui/AdditionalNavbar'
import Logo from './ui/Logo'
import Navbar from './ui/Navbar'

export default function Header() {
  return (
    <header className='pt-11 z-[60] bg-secondary-300 sm:pt-[53px] md:pt-0'>
      <AdditionalNavbar />

      <div className='container'>
        <div className='flex items-start justify-between pb-1 sm:py-1.5 sm:items-center lg:h-16 xl:gap-4'>
          <Logo />
          <Navbar />
          <div className='flex items-center md:gap-1 xl:gap-2'>
            <button
              type='button'
              className='btn-icon'
            >
              <SearchIcon />
            </button>
            <button
              type='button'
              className='btn-icon'
            >
              <BasketIcon />
            </button>
            <button
              type='button'
              className='btn-icon'
            >
              <HeartIcon />
            </button>
            <button
              type='button'
              className='btn-icon'
            >
              <UserIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
