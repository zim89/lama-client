'use client';
import checkOk from '@/assets/icons/additional/chekOk.svg';
import eye from '@/assets/icons/additional/eye.svg';
import eyeClose from '@/assets/icons/additional/eyeClose.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Input from './input';

export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className='px-8'>
      <Input
        title={'Електронна пошта*'}
        name={'email'}
        values={'email'}
        type={'email'}
        placeholder={'Введіть свою пошту'}
      />
      <div className='relative mb-14 mt-6'>
        <Input
          title={'Пароль*'}
          name={'password'}
          values={'password'}
          type={passwordShown ? 'text' : 'password'}
          placeholder={'Введіть свій пароль'}
        />
        <Image
          className='absolute right-[15px] top-[35px] cursor-pointer'
          src={passwordShown ? eyeClose : eye}
          onClick={togglePassword}
          alt={'eye'}
        />
      </div>
      <p className='text-xs font-normal'>
        Реєструючись на сайті, Ви погоджуєтесь з
        <Link
          href={'#'}
          className='pl-1 text-xs font-normal text-blue-500 underline underline-offset-4'>
          правилами магазину
        </Link>
      </p>
      <label className='text-xs font-normal [word-spacing:4px]'>
        <input type='checkbox' className='size-6 rounded-2xl' /> Хочу отримувати
        комерційні пропозиції магазину Lama на <br />
        вказаний вище email
      </label>
      <button className='mt-9 h-12 w-full rounded-2xl bg-gray-300'>
        Зареєструватися
      </button>
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
    </form>
  );
}
