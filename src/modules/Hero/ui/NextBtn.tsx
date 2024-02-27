import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NextBtn({ onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={
        'absolute right-0 top-[168px] z-10 flex h-11 w-11 items-center justify-center rounded-l-3xl bg-violet-300 pl-1 text-gray-900 transition-colors duration-300 hover:text-black md:top-1/2 md:-translate-y-1/2'
      }>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M3.25 11.75H19.75M19.75 11.75L13 5M19.75 11.75L13 18.5'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
