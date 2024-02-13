import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../../assets/icons/additional/arrow.svg';

type TextProps = {
  titleLink: string;
  title: string;
};

const Title: React.FC<TextProps> = (props) => {
  return (
    <div className='flex flex-row justify-between'>
      <h1 className='font-medium xs:text-2xl	sm:text-[28px] md:text-[32px] lg:text-4xl'>
        {props.title}
      </h1>
      <div className='cursor-pointe flex items-center xs:pt-2 md:pr-2 lg:pr-[0.765rem] xl:pr-4'>
        <Link
          href={'#'}
          className='text-base font-medium text-gray-900 xs:text-sm md:pr-2.5 lg:text-base'>
          {props.titleLink}
        </Link>
        <Image src={arrow} alt={'arrow'} className='xs:hidden md:block' />
      </div>
    </div>
  );
};
export default Title;
