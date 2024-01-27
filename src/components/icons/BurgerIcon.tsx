import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function BurgerIcon({
  width = '22',
  height = '18',
  stroke = '1.5',
  fill = 'none',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 1H21M1 9H21M1 17H21'
        stroke='currentColor'
        fill={fill}
        strokeWidth={stroke}
        strokeLinecap='round'
      />
    </svg>
  );
}
