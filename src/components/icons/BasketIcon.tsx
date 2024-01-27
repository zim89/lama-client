import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function BasketIcon({
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
        d='M6.25 4.91304C6.25 3.87524 6.64509 2.87994 7.34835 2.1461C8.05161 1.41227 9.00544 1 10 1C10.9946 1 11.9484 1.41227 12.6517 2.1461C13.3549 2.87994 13.75 3.87524 13.75 4.91304M1.75 4.91304H18.25C18.6642 4.91304 19 5.26343 19 5.69565V18.2174C19 18.6496 18.6642 19 18.25 19H1.75C1.33579 19 1 18.6496 1 18.2174V5.69565C1 5.26343 1.33579 4.91304 1.75 4.91304Z'
        stroke='currentColor'
        fill={fill}
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
