'use client';
import { BasketIcon, HeartIcon, UserIcon } from '@/components/icons';
import AuthModal from '@/modules/Authication';
import Favorite from '@/modules/Favorite';
import { useModals } from '@/shared/config/ModalProvider';
import { cn } from '@/shared/lib/utils';
import { useAuthState } from '@/shared/store/store';
import Link from 'next/link';
import Indicator from './Indicator';

export default function UserMenu() {
  const dataModal = useModals();
  const storage = useAuthState();

  function handleShow() {
    dataModal?.setFavoriteShow(!dataModal.favoriteShow);
  }

  function handleChange() {
    if (storage.authToken !== '') {
      storage.logOut();
      localStorage.removeItem('token');
    } else {
      dataModal?.setShowModal(!dataModal.showModal);
      console.log(dataModal?.showModal);
    }
  }

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
        <button
          onClick={handleShow}
          aria-label='Open favorites'
          className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
          <HeartIcon />
          <span className='hidden text-base font-medium text-black xl:inline'>
            Обране (0)
          </span>
        </button>
      </Indicator>

      <button
        onClick={handleChange}
        aria-label='Open user profile'
        className={cn('btn-action', 'group xl:w-auto xl:gap-2')}>
        <UserIcon />
        <span className='hidden text-base font-medium text-black xl:inline'>
          {storage.authToken ? storage.userEmail : 'Авторизація'}
        </span>
      </button>
      {dataModal?.showModal && <AuthModal />}
      {dataModal?.favoriteShow && <Favorite />}
    </div>
  );
}
