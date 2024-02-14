import arrow from '@/assets/icons/additional/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

type TTextProps = {
  titleLink?: string;
  titleLinkHidden?: string;
  title: string;
};

export default function Title({
  title,
  titleLink,
  titleLinkHidden,
}: TTextProps) {
  return (
    <div className='title flex flex-row items-start justify-between lg:mb-[2.75rem] xl:mb-[3.37rem]'>
      <h3>{title}</h3>
      <div className='cursor-pointe flex items-center pt-2 md:pr-2 lg:pr-[0.765rem] xl:pr-4'>
        {!titleLinkHidden ? (
          <Link
            href={'#'}
            className='text-sm font-medium text-gray-900 md:block md:pr-2.5 md:pt-1 lg:text-base'>
            {titleLink}
          </Link>
        ) : (
          <Link
            href={'#'}
            className='hidden text-sm font-medium text-gray-900 md:block md:pr-2.5 md:pt-1 lg:text-base'>
            {titleLinkHidden}
          </Link>
        )}
        <Image
          src={arrow}
          alt={'arrow'}
          className='mt-1.5 hidden h-[13.5px] w-[16.5px] md:block '
        />
      </div>
    </div>
  );
}
