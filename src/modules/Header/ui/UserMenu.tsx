'use client';
import { BasketIcon, HeartIcon, UserIcon } from '@/components/icons';
import Modals from '@/modules/modals';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import Indicator from './Indicator';

export default function UserMenu() {
  const [modalActive, setModalActive] = useState(false);
  const handleActive = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className='flex sm:gap-1 lg:gap-2 xl:gap-5'>
      <Indicator value={99}>
        <Link
          href={'/cart'}
          aria-label='Open cart'
          className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
          <BasketIcon />
          <span className='hidden text-base font-medium text-black xl:inline'>
            Кошик (0)
          </span>
        </Link>
      </Indicator>

      <Indicator value={2}>
        <Link
          href={'/favorites'}
          aria-label='Open favorites'
          className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
          <HeartIcon />
          <span className='hidden text-base font-medium text-black xl:inline'>
            Обране (0)
          </span>
        </Link>
      </Indicator>

      <Link
        href={'#'}
        onClick={handleActive}
        aria-label='Open user profile'
        className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
        <UserIcon />
        <span className='hidden text-base font-medium text-black xl:inline'>
          Авторизація
        </span>
      </Link>

      <Modals active={modalActive} setActive={setModalActive} />
    </div>
  );
}
