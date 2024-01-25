import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrevBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        'absolute left-0 top-[108px] z-10 flex h-12 w-11 items-center justify-center rounded-r-3xl bg-gray-300 pr-1 text-gray-900 transition-colors duration-300 hover:text-black'
      }>
      <svg
        width='19'
        height='16'
        viewBox='0 0 19 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17.75 7.75L1.25 7.75M1.25 7.75L8 14.5M1.25 7.75L8 1'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
