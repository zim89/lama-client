import Image from 'next/image';
import arrow from '../../assets/icons/additional/arrow.svg';
import uniform from '../../assets/images/news/Children.jpg';
import uniform__375 from '../../assets/images/news/Children__375.png';
import glasses from '../../assets/images/news/Glasses.png';
import uniform__1024 from '../../assets/images/news/children__1024.png';
import uniform__768 from '../../assets/images/news/children__768.png';
import pajamas from '../../assets/images/news/t-shirts.png';
import TextContent from './ui/text';

export default function News() {
  return (
    <div className='xl:px-[7.5rem]'>
      <div className='flex xs:justify-between xs:px-4 xs:pb-8 sm:px-5 sm:pb-10 md:px-5 md:pb-11 lg:px-8 xl:pb-14  '>
        <TextContent
          text={'Цікаві новини'}
          className={'text-4xl font-medium xs:text-2xl sm:text-3xl'}
        />
        <div className='flex cursor-pointer items-center justify-around md:pr-2 lg:pr-[0.77rem] xl:pr-[1.3rem]'>
          <TextContent
            text={'Дивитись все'}
            className={
              'text-base font-medium text-gray-900 xs:text-sm md:pr-2.5'
            }
          />
          <Image src={arrow} alt={'src'} className='xs:hidden md:block' />
        </div>
      </div>
      <div className='flex xs:flex-col xs:content-center xs:px-4 sm:px-5 md:flex-row md:justify-around lg:px-8 xl:justify-center'>
        <div className='xs:size-full xs:pb-5 md:size-[59%] md:pb-0 md:pr-5 lg:min-h-[100%] xl:pr-6'>
          <div className='relative flex cursor-pointer flex-col rounded-3xl xs:pb-4 md:pb-5 xl:size-auto xl:pb-[1.75rem]'>
            <div className='absolute left-3 top-3 rounded-3xl bg-amber-500 px-6 py-1.5'>
              <TextContent text={'15%'} className={'text-lg font-medium'} />
            </div>
            <Image
              src={glasses}
              alt={'glasses'}
              className='size-full rounded-t-3xl'
            />
            <div className='flex justify-between rounded-b-3xl bg-amber-300 py-3.5 pl-6 pr-4'>
              <TextContent
                text={'Сонцезахистні окуляри'}
                className={'text-lg font-medium'}
              />
              <Image src={arrow} alt={'arrow'} />
            </div>
          </div>
          <div className='relative flex cursor-pointer flex-col rounded-3xl'>
            <div className='absolute left-3 top-3 rounded-3xl bg-amber-500 px-6 py-1.5	'>
              <TextContent text={'15%'} className={'text-lg font-medium'} />
            </div>
            <Image
              src={pajamas}
              alt={'pajamas'}
              className='size-full rounded-t-3xl'
            />
            <div className='flex justify-between rounded-b-3xl bg-amber-300 py-3.5 pl-6 pr-4'>
              <TextContent text={'Піжами'} className={'text-lg font-medium'} />
              <Image src={arrow} alt={'arrow'} />
            </div>
          </div>
        </div>
        <div className='relative flex cursor-pointer flex-col rounded-3xl md:min-h-[100%] md:w-[43.5%] xl:min-h-full'>
          <div className='absolute left-3 top-3 rounded-3xl bg-amber-500 px-6 py-1.5	'>
            <TextContent text={'15%'} className={'text-lg font-medium'} />
          </div>
          <Image
            src={uniform}
            alt={'uniform'}
            className='size-full rounded-t-3xl xs:hidden xl:block'
          />
          <Image
            src={uniform__375}
            alt={'uniform'}
            className='rounded-t-3xl  xs:size-full md:hidden'
          />
          <Image
            src={uniform__768}
            alt={'uniform'}
            className='rounded-t-3xl xs:hidden xs:size-full md:block lg:hidden'
          />
          <Image
            src={uniform__1024}
            alt={'uniform'}
            className='rounded-t-3xl xs:hidden xs:size-full lg:block xl:hidden'
          />
          <span className='flex justify-between rounded-b-3xl bg-amber-300 py-3.5 pl-6 pr-4'>
            <TextContent
              text={'Шкільна форма'}
              className={'text-lg font-medium'}
            />
            <Image src={arrow} alt={'arrow'} className='cursor-pointer' />
          </span>
        </div>
      </div>
    </div>
  );
}
