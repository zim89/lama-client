import Image from 'next/image'
import Link from 'next/link'
import logoImageLarge from '@/assets/icons/logo/logo-lg.png'
import logoImageSmall from '@/assets/icons/logo/logo-sm.png'
import { APP_PAGES } from '@/shared/config/pages-url.config'
import Burger from './Burger/Burger'

export default function Logo() {
  return (
    <div className='flex items-center md:gap-1'>
      <Burger />

      <Link href={APP_PAGES.HOME}>
        <Image
          alt='Logo image'
          src={logoImageSmall}
          width={82}
          height={40}
          className='block lg:hidden'
        />
        <Image
          alt='Logo image'
          src={logoImageLarge}
          width={104}
          height={50}
          className='hidden lg:block'
        />
      </Link>
    </div>
  )
}
