import React from 'react';
import { IconProps } from '@/shared/types/types';

export default function FacebookIcon({
  width = '18',
  height = '18',
  fill = 'currentColor',
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.3021 3.58314H13.0258C12.1546 3.58314 11.4098 3.89227 10.7916 4.51054C10.2014 5.12881 9.90632 5.87354 9.90632 6.74473V8.97892H8.09368V11.6768H9.90632V17.9578H12.6042V11.6768H15.3021V8.97892H12.6042V7.16628C12.6042 6.94145 12.6885 6.74473 12.8571 6.57611C13.0258 6.37939 13.2365 6.28103 13.4895 6.28103H15.3021V3.58314ZM0 1C0 0.447717 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V16.9578C18 17.5101 17.5523 17.9578 17 17.9578H1C0.447716 17.9578 0 17.5101 0 16.9578V1Z'
        fill={fill}
      />
    </svg>
  );
}
