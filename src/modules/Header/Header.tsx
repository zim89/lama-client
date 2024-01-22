import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Toolbar from '@/modules/Header/ui/Toolbar';
import UserMenu from '@/modules/Header/ui/UserMenu';
import logoImg from '@/assets/images/logo/logo.png';

export default function Header() {
  return (
    <header>
      <div className={'bg-amber-300'}>
        <div className={'container'}>
          <div className={'flex items-center justify-between pb-1 pt-12'}>
            <Toolbar />
            <Link href={'/'}>
              <Image src={logoImg} alt={'Lama logo'} width={39} height={20} />
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
