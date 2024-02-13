'use client';
import Image from 'next/image';
import { ReactNode } from 'react';
import arrow from '../assets/icons/additional/arrow.svg';

type TToddlerCarCardProps = {
  textPin?: string;
  title: ReactNode;
  src: any;
  imgSIze?: string;
  imgPosition?: string;
};

const ToddlerCarCard: React.FC<TToddlerCarCardProps> = ({
  title,
  src,
  textPin,
  imgPosition,
  imgSIze,
}) => {
  return (
    <div className='relative grid h-full cursor-pointer grid-rows-1 rounded-2xl bg-violet-300 hover:bg-violet-500'>
      {textPin && (
        <h3 className='absolute left-3 top-3 rounded-2xl bg-amber-500 px-6 py-1.5 text-lg font-medium'>
          {textPin}
        </h3>
      )}
      <div
        className='h-full rounded-t-2xl bg-[length:100%_100%] bg-no-repeat'
        style={{
          backgroundImage: `url(${src.src})`,
          backgroundPosition: `${imgPosition}`,
          backgroundSize: `${imgSIze}`,
        }}></div>
      <div className='flex items-center justify-between rounded-b-2xl pl-2.5 xs:h-[2.75rem] xs:pr-3.5 sm:pl-4 sm:pr-[1.4rem] md:h-[3.75rem] md:pl-8'>
        <h2 className='font-medium xs:text-xs sm:text-sm md:text-base lg:text-lg'>
          {title}
        </h2>
        <Image
          src={arrow}
          alt={'next__baton'}
          width={16.5}
          height={13.5}
          className='md:cursor-pointer'
        />
      </div>
    </div>
  );
};
export default ToddlerCarCard;
