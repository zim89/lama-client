import React from 'react';
import { BasketIcon } from '@/components/icons';

function AddToFavoritesBtn() {
  return (
    <button
      className={
        'flex h-11 w-11 items-center justify-center rounded-full text-violet-500 transition-colors duration-300 hover:text-violet-700'
      }>
      <BasketIcon />
    </button>
  );
}

export default AddToFavoritesBtn;
