import checkOk from '@/assets/icons/additional/checkOk.svg';
import Image from 'next/image';

export default function InfoText() {
  return (
    <section className='mt-11 flex flex-col justify-center sm:justify-stretch'>
      <h5 className='text-base font-medium'>Чому варто зареєструватися?</h5>
      <div className=' flex h-[7rem] w-[20.2rem] flex-col gap-2 overflow-y-auto overflow-x-hidden sm:h-[15rem] sm:w-[25.44rem] md:w-[20.7rem] lg:w-[25.44rem]'>
        <div className='mt-2 flex flex-row items-start'>
          <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
          <p className='text-sm font-normal '>
            Відстежуйте свої посилки і зберігайте історію замовлень
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
          <p className='text-sm font-normal'>
            Отримуйте бонуси та накопичуйте знижку
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
          <p className='text-sm font-normal'>
            Зберігайте товари для майбутніх покупок необмежений період
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
          <p className='text-sm font-normal'>Залишайте відгуки</p>
        </div>
        <div className='flex flex-row items-start'>
          <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
          <p className='text-sm font-normal'>
            Купуйте швидше завдяки збереженим даним
          </p>
        </div>
      </div>
    </section>
  );
}
