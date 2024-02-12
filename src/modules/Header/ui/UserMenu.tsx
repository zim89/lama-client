import { BasketIcon, UserIcon, HeartIcon } from '@/components/icons';
import Indicator from './Indicator';
import { cn } from '@/shared/lib/utils';

export default function UserMenu() {
  return (
    <div className='flex sm:gap-1 lg:gap-2 xl:gap-5'>
      <Indicator value={99}>
        <button
          type='button'
          aria-label='Open cart'
          className={cn('btn-action', 'xl:w-auto xl:gap-2')}>
          <BasketIcon />
          <span className='hidden text-base font-bold xl:inline'>
            Кошик (0)
          </span>
        </button>
      </Indicator>

      <Indicator value={2}>
        <button
          type='button'
          aria-label='Open favorites'
          className={cn('btn-action', 'xl:w-auto xl:gap-2')}>
          <HeartIcon />
          <span className='hidden text-base font-bold xl:inline'>
            Обране (0)
          </span>
        </button>
      </Indicator>

      <button
        type='button'
        aria-label='Open user profile'
        className={cn('btn-action', 'xl:w-auto xl:gap-2')}>
        <UserIcon />
        <span className='hidden text-base font-bold xl:inline'>
          Авторизація
        </span>
      </button>
    </div>
  );
}
