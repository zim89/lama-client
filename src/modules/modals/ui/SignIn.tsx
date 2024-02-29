'use client';
import eye from '@/assets/icons/additional/eye.svg';
import eyeClose from '@/assets/icons/additional/eyeClose.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import facebook from '../../../assets/icons/additional/facebook.svg';
import google from '../../../assets/icons/additional/google.svg';
import { ChangeContext } from './function';
import Input from './input';

export default function SignIn() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <form className='px-8'>
      {ChangeContext ? (
        <>
          <Input
            title={'Електронна пошта*'}
            name={'email'}
            values={'email'}
            type={'email'}
            placeholder={'Введіть свою пошту'}
          />
          <div className='relative mt-6'>
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
          <div className='flex justify-end pt-1'>
            <Link
              href={'#'}
              onClick={() => ChangeContext(true)}
              className='text-xs font-normal text-blue-500 underline underline-offset-4'>
              Відновити пароль
            </Link>
          </div>
          <button className='mt-9 h-12 w-full rounded-2xl bg-gray-300'>
            Увійти
          </button>
          <div className='flex justify-center pt-12'>
            <p className='text-sm font-normal text-gray-900'>
              або продовжити за допомогою
            </p>
          </div>
          <div className='flex flex-row gap-4 pt-9'>
            <button className='flex h-12 w-full flex-row items-center justify-center rounded-2xl border border-gray-700 bg-violet-300'>
              <p className='pr-2.5'>Google</p>
              <Image src={google} alt={'google'} />
            </button>
            <button className='flex h-12 w-full flex-row items-center justify-center rounded-2xl border border-gray-700 bg-violet-300'>
              <p className='pr-2.5'>Facebook</p>
              <Image src={facebook} alt={'Facebook'} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <h5>Відновити пароль</h5>
            <p>
              Введіть пошту, вказану під час реєстрації, і ми відразу
              <br /> надішлемо інструкцію, як змінити пароль
            </p>
          </div>
          <Input
            title={'Електронна пошта*'}
            name={'email'}
            values={''}
            type={'email'}
            placeholder={'Введіть свою пошту'}
          />
          <button>Надіслати</button>
        </>
      )}
    </form>
  );
}
