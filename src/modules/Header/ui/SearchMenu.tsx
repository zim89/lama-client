import { SearchIcon } from '@/components/icons';
import { cn } from '@/shared/lib/utils';

export default function SearchMenu() {
  return (
    <>
      <button
        type='button'
        aria-label='Open mobile menu'
        className='btn-action md:hidden'>
        <SearchIcon />
      </button>

      <form action='' className='relative hidden w-[144px] md:block'>
        <input
          type='text'
          placeholder='Я шукаю'
          className='w-full rounded-lg border border-gray-500 bg-amber-300 py-2 pl-3 pr-[38px] text-base placeholder:text-base placeholder:text-gray-900 focus:outline-0'
        />
        <button
          type='submit'
          className={cn(
            'btn-icon',
            'absolute right-2 top-1/2 -translate-y-1/2'
          )}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
