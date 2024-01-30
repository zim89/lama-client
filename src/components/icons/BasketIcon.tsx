import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function BasketIcon({
  width = '16',
  height = '16',
  stroke = '1.5',
  fill = 'none',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.08333 4.04348C5.08333 3.2363 5.39062 2.46218 5.93761 1.89141C6.48459 1.32065 7.22645 1 8 1C8.77355 1 9.51541 1.32065 10.0624 1.89141C10.6094 2.46218 10.9167 3.2363 10.9167 4.04348M1.58333 4.04348H14.4167C14.7388 4.04348 15 4.316 15 4.65217V14.3913C15 14.7275 14.7388 15 14.4167 15H1.58333C1.26117 15 1 14.7275 1 14.3913V4.65217C1 4.316 1.26117 4.04348 1.58333 4.04348Z'
        stroke={'currentColor'}
        strokeWidth={stroke}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
