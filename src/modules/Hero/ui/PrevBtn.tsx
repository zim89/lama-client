import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrevBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        'absolute left-0 top-[168px] z-10 flex h-11 w-11 items-center justify-center rounded-r-3xl bg-violet-300 pr-1 text-gray-900 transition-colors duration-300 hover:text-black md:top-1/2 md:-translate-y-1/2'
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
