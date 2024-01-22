import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function SearchIcon({
  width = '20',
  height = '20',
  stroke = '1.5',
  fill = 'none',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.4436 14.4437L19 19M16.7505 8.87496C16.7505 13.2242 13.2246 16.7499 8.87524 16.7499C4.52587 16.7499 1 13.2242 1 8.87496C1 4.52574 4.52587 1 8.87524 1C13.2246 1 16.7505 4.52574 16.7505 8.87496Z'
        stroke='currentColor'
        fill={fill}
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
