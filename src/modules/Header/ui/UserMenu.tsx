import React from 'react';
import HeartIcon from '@/components/Icons/HeartIcon';
import { BasketIcon, UserIcon } from '@/components/Icons';

export default function UserMenu() {
  return (
    <div className={'flex'}>
      <button
        type={'button'}
        aria-label={'Open cart'}
        className={'actionBtn relative'}>
        <BasketIcon />
        <span
          className={
            'absolute right-[2px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px]/none font-medium text-black'
          }>
          99
        </span>
      </button>
      <button
        type={'button'}
        aria-label={'Open favorites'}
        className={'actionBtn relative'}>
        <HeartIcon />
        <span
          className={
            'absolute right-[2px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px]/none font-medium text-black'
          }>
          99
        </span>
      </button>

      <button
        type={'button'}
        aria-label={'Open user profile'}
        className={'actionBtn'}>
        <UserIcon />
      </button>
    </div>
  );
}
