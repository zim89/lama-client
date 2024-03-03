'use client';
import { BasketIcon, HeartIcon, UserIcon } from '@/components/icons';
import { useAuth } from '@/shared/config/AuthProvider';
import { useModals } from '@/shared/config/ModalProvider';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Indicator from './Indicator';

export default function UserMenu() {
  const dataModal = useModals();
  const dataUser = useAuth();
  const [title, setTitle] = useState<boolean>(false);

  const handleClickShowModal = () => {
    dataModal?.ModalsShow(!dataModal.showModal);
  };

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (access !== null) {
      setTitle(true);
    } else {
      setTitle(false);
    }
  }, [setTitle]);

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

      <button
        onClick={handleClickShowModal}
        aria-label='Open user profile'
        className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
        <UserIcon />
        <span className='hidden text-base font-medium text-black xl:inline'>
          {title ? dataUser?.email : 'Авторизація'}
        </span>
      </button>
    </div>
  );
}
