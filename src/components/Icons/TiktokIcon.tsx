import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function TiktokIcon({
  width = '16',
  height = '18',
  fill = 'currentColor',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.2372 0C11.5341 2.55445 12.9596 4.0774 15.438 4.23942V7.11251C14.0017 7.25292 12.7436 6.78307 11.2803 5.89739V11.2709C11.2803 18.0972 3.83978 20.2304 0.84844 15.3375C-1.0738 12.189 0.103304 6.66426 6.26958 6.44284V9.47254C5.79982 9.54815 5.29766 9.66696 4.8387 9.82357C3.46722 10.288 2.68968 11.1575 2.90566 12.6913C3.32143 15.6292 8.71017 16.4986 8.26201 10.7579V0.00540054H11.2372V0Z'
        fill={fill}
      />
    </svg>
  );
}
