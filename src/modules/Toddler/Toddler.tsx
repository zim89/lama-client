import Bodies from '@/assets/images/toddler/bodies.png';
import Envelopes from '@/assets/images/toddler/envelopes.png';
import Heats from '@/assets/images/toddler/hats.png';
import Title from '@/components/Title';
import ToddlerCarCard from '@/components/ToddlerCard';
import Link from 'next/link';

export default function Toddler() {
  return (
    <div className='section m-[0_auto] grid xs:max-w-[375px] xs:px-4 sm:max-w-[480px] sm:px-5 md:max-w-[768px] lg:max-w-[1024px] lg:px-8 xl:max-w-[1440px] xl:px-[7.5rem]'>
      <Title title={'Самим маленьким'} titleLinkHidden={'Дивитись все'} />
      <div className='grid gap-4 xs:grid-cols-2 xs:items-center md:grid-cols-3 md:gap-5 xl:gap-6'>
        <div className='xs:h-[10.63rem] sm:h-[12.5rem] md:h-[13.75rem]'>
          <ToddlerCarCard title={'Боді, повзунки'} src={Bodies} />
        </div>
        <div className='xs:h-[10.63rem] sm:h-[12.5rem] md:h-[13.75rem]'>
          <ToddlerCarCard title={'Конверти'} src={Envelopes} />
        </div>
        <div className='xs:h-[10.63rem] xs:[word-spacing:1.1rem] sm:h-[12.5rem] sm:[word-spacing:normal] md:h-[13.75rem] md:[word-spacing:2.1rem] lg:[word-spacing:normal]'>
          <ToddlerCarCard title={'Шапочки, царапки'} src={Heats} />
        </div>
        <Link
          href={'#'}
          className='flex justify-center text-sm text-[#727076] md:hidden'>
          Дивитись все
        </Link>
      </div>
    </div>
  );
}
