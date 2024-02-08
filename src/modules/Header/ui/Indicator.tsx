import React from 'react';

interface Props {
  children: React.ReactNode;
  value: number;
}
export default function Indicator({ children, value = 0 }: Props) {
  return (
    <div className='relative'>
      {children}
      <span className='absolute right-0 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px]/[16px] font-medium text-black xl:hidden'>
        {value}
      </span>
    </div>
  );
}
