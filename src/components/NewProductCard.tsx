'use client';
import Image from 'next/image';
import { ReactNode } from 'react';
import arrow from '../assets/icons/additional/arrow.svg';

type TNewProductCardProps = {
  textPin?: string;
  title: ReactNode;
  src: any;
  imgSIze?: string;
  imgPosition?: string;
};

const NewProductCard: React.FC<TNewProductCardProps> = ({
  title,
  src,
  textPin,
  imgPosition,
  imgSIze,
}) => {
  return (
    <div className='relative grid h-full cursor-pointer grid-rows-1 rounded-3xl bg-amber-300 hover:bg-amber-500'>
      {textPin && (
        <h3 className='absolute left-3 top-3 rounded-3xl bg-amber-500 px-6 py-1.5 text-lg font-medium'>
          {textPin}
        </h3>
      )}
      <div
        className='h-full rounded-t-3xl bg-[length:100%_100%] bg-no-repeat'
        style={{
          backgroundImage: `url(${src.src})`,
          backgroundPosition: `${imgPosition}`,
          backgroundSize: `${imgSIze}`,
        }}></div>
      <div className='peer flex justify-between rounded-b-3xl py-3.5 pl-6 pr-4'>
        <h2 className='text-lg font-medium xs:text-sm md:xs:text-base lg:text-lg'>
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
export default NewProductCard;
