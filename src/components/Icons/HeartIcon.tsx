import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function HeartIcon({
  width = '20',
  height = '18',
  stroke = '1.5',
  fill = 'none',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10 17C10 17 1 11.9091 1 5.72728C1.00018 4.63467 1.37499 3.57585 2.06069 2.73084C2.74639 1.88582 3.70067 1.30677 4.76127 1.09214C5.82187 0.877498 6.92334 1.04052 7.87839 1.55349C8.83344 2.06646 9.58314 2.89771 10 3.90591L9.99999 3.90592C10.4169 2.89772 11.1666 2.06647 12.1216 1.55349C13.0767 1.04052 14.1781 0.877498 15.2387 1.09214C16.2993 1.30677 17.2536 1.88582 17.9393 2.73084C18.625 3.57585 18.9998 4.63467 19 5.72728C19 11.9091 10 17 10 17Z'
        stroke='currentColor'
        fill={fill}
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
