'use client';
import eye from '@/assets/icons/additional/eye.svg';
import eyeClose from '@/assets/icons/additional/eyeClose.svg';
import facebook from '@/assets/icons/additional/facebook.svg';
import google from '@/assets/icons/additional/google.svg';
import { useModals } from '@/shared/config/ModalProvider';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Endpoint from '../lib/endpoint';
import Recovery from './Recovery';
import Button from './button';
import Input from './input';
import { validate } from './validate';

export default function SignIn() {
  const dataModal = useModals();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [formValid, setFormValid] = useState(false);

  function blurHandler(e: any) {
    const validDate = validate({ email, password });
    switch (e.target.name) {
      case 'email':
        setEmailError(validDate.email as string);
        break;
      case 'password':
        setPasswordError(validDate.password as string);
        break;
    }
  }
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else if (email == '' || password == '') {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, email, password]);

  const handleClickShowRecovery = () => {
    dataModal?.setRecovery(!dataModal.recovery);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = {
      email,
      password,
    };
    validate;
    axios
      .post(Endpoint.AUTH.LOGIN, value)
      .then(function (response) {
        const validDate = validate(value);
        if (response.status === 200) {
          const Token = response.data.access;
          localStorage.setItem('access', Token);
          dataModal?.setShowModal(!dataModal.showModal);
        } else if (response.status === 400 || response.status === 401) {
          setEmailError(validDate.email as string);
          setPasswordError(validDate.password as string);
        }
      })
      .catch(function (error) {
        const validDate = validate(value);
        if (error.response.status === 400 || error.response.status === 401) {
          setEmailError('Не правильний email або пароль');
          setPasswordError('Не правильний email або пароль');
        }
        console.log(error);
      });
  };
  return (
    <div className='px-8'>
      {dataModal?.recovery ? (
        <Recovery />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <Input
              title={'Електронна пошта*'}
              name='email'
              values={email}
              type='email'
              placeholder={'Введіть свою пошту'}
              handleChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => blurHandler(e)}
              error={emailError}
            />
            <div className='relative mt-6'>
              <Input
                title={'Пароль*'}
                name='password'
                values={password}
                type={passwordShown ? 'text' : 'password'}
                placeholder={'Введіть свій пароль'}
                handleChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => blurHandler(e)}
                error={passwordError}
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
                onClick={handleClickShowRecovery}
                className='text-xs font-normal text-blue-500 underline underline-offset-4'>
                Відновити пароль
              </Link>
            </div>
            <Button
              title={'Увійти'}
              marginTop='2.25rem'
              disabled={!formValid}
            />
          </form>
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
      )}
    </div>
  );
}
