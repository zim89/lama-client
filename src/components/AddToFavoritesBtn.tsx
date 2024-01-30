import React from 'react';
import { HeartIcon } from '@/components/icons';

function AddToFavoritesBtn() {
  return (
    <button
      className={
        'flex h-11 w-11 items-center justify-center text-violet-500 transition-colors duration-300 hover:text-violet-700 '
      }
    >
      <span
        className={
          'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'
        }
      >
        <HeartIcon />
      </span>
    </button>
  );
}

export default AddToFavoritesBtn;
