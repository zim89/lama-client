import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NextBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        'absolute right-0 top-[108px] z-10 flex h-12 w-11 items-center justify-center rounded-l-3xl bg-gray-300 pl-1 text-gray-900 transition-colors duration-300 hover:text-black'
      }>
      <svg
        width='19'
        height='16'
        viewBox='0 0 19 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.25 8.25L17.75 8.25M17.75 8.25L11 15M17.75 8.25L11 1.5'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
