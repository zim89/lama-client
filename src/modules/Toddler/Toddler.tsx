import Image from 'next/image';
import arrow from '../../assets/icons/additional/arrow.svg';
import bodies from '../../assets/images/toddler/bodies.png';
import envelopes from '../../assets/images/toddler/envelopes.png';
import hats from '../../assets/images/toddler/hats.png';
import TextContent from './ui/text';

export default function Toddler() {
  return (
    <div className='px-5 pt-20'>
      <div className='flex justify-between xs:pb-8 sm:pb-10 md:pb-11 xl:pb-14'>
        <TextContent
          className={'font-medium xs:text-2xl sm:text-3xl'}
          text={'Самим маленьким'}
        />
        <div className='cursor-pointer xs:hidden md:flex md:items-center'>
          <TextContent
            className={'pr-2.5 text-sm font-normal text-gray-900'}
            text={'Дивитись все'}
          />
          <Image src={arrow} alt='arrow' className='' />
        </div>
      </div>
      <div className='grid gap-5 xs:grid-cols-2 md:xs:grid-cols-3'>
        <div>
          <Image src={bodies} alt='Bodies' className='rounded-t-3xl' />
          <div className='flex flex-row justify-between rounded-b-3xl bg-violet-300 py-[1.1rem] pl-4 pr-2.5'>
            <TextContent
              className={'font-medium xs:text-xs sm:text-sm md:text-base'}
              text={'Боді, повзунки'}
            />
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
        <div>
          <Image src={hats} alt='Envelopes' className='rounded-t-3xl' />
          <div className='flex flex-row justify-between rounded-b-3xl bg-violet-300 py-[1.1rem] pl-4 pr-2.5'>
            <TextContent
              className={'font-medium xs:text-xs sm:text-sm md:text-base'}
              text={'Шапочки, царапки'}
            />
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
        <div>
          <Image src={envelopes} alt='Envelopes' className='rounded-t-3xl' />
          <div className='flex justify-between rounded-b-3xl bg-violet-300 py-[1.1rem] pl-4 pr-2.5'>
            <TextContent
              className={'font-medium xs:text-xs sm:text-sm md:text-base'}
              text={'Конверти'}
            />
            <Image src={arrow} alt='arrow' />
          </div>
        </div>
        <div className='flex cursor-pointer items-center justify-center md:hidden'>
          <TextContent
            className={'text-sm font-normal text-gray-900'}
            text={'Дивитись все'}
          />
        </div>
      </div>
    </div>
  );
}
