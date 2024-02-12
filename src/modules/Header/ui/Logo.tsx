import Image from 'next/image';
import Link from 'next/link';
import logoMobileImg from '@/assets/icons/logo/logo-mobile.png';
import logoTabletImg from '@/assets/icons/logo/logo-tablet.png';
import logoDesktopImg from '@/assets/icons/logo/logo-desktop.png';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src={logoMobileImg}
        alt={'Lama logo'}
        width={34}
        height={18}
        className='md:hidden'
      />
      <Image
        src={logoTabletImg}
        alt={'Lama logo'}
        width={51}
        height={26}
        className='hidden md:block lg:hidden'
      />
      <Image
        src={logoDesktopImg}
        alt={'Lama logo'}
        width={80}
        height={40}
        className='hidden lg:block'
      />
    </Link>
  );
}
