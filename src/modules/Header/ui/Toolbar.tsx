import React from 'react';
import { BurgerIcon, SearchIcon } from '@/components/Icons';

export default function Toolbar() {
  return (
    <div className={'flex'}>
      <button
        type={'button'}
        aria-label={'Open mobile menu'}
        className={'actionBtn'}>
        <BurgerIcon />
      </button>
      <button
        type={'button'}
        aria-label={'Open search panel'}
        className={'actionBtn'}>
        <SearchIcon />
      </button>
    </div>
  );
}
