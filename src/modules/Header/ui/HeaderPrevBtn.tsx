import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function HeaderPrevBtn({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='absolute -left-8 top-1/2 -translate-y-1/2 text-black'>
      <svg
        width='25'
        height='24'
        viewBox='0 0 25 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.5 18L9.5 12L15.5 6'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
