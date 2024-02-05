import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function HeartIcon({
  width = '18',
  height = '16',
  stroke = '1.5',
  fill = 'none',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 16'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 15C9 15 1 10.5455 1 5.13637C1.00016 4.18034 1.33332 3.25387 1.94284 2.51448C2.55235 1.7751 3.40059 1.26843 4.34335 1.08062C5.28611 0.89281 6.26519 1.03546 7.11412 1.4843C7.96306 1.93315 8.62945 2.6605 9.00001 3.54268C9.37056 2.6605 10.0369 1.93316 10.8859 1.48431C11.7348 1.03546 12.7139 0.892811 13.6566 1.08062C14.5994 1.26843 15.4477 1.7751 16.0572 2.51448C16.6667 3.25387 16.9998 4.18034 17 5.13637C17 10.5455 9 15 9 15Z'
        stroke={'currentColor'}
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
