import checkOk from '@/assets/icons/additional/checkOk.svg';
import Image from 'next/image';

export default function InfoText() {
  return (
    <div className='mt-11 flex flex-col gap-2'>
      <h5 className='text-base font-medium'>Чому варто зареєструватися?</h5>
      <div className='mt-2 flex flex-row items-start'>
        <Image src={checkOk} alt={'check'} className='mr-2.5 mt-1.5' />
        <p className='text-sm font-normal'>
          Відстежуйте свої посилки і зберігайте історію <br /> замовлень
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
          Зберігайте товари для майбутніх покупок <br /> необмежений період
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
  );
}
