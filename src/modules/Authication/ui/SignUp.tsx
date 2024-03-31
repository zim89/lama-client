'use client';
import eye from '@/assets/icons/additional/eye.svg';
import eyeClose from '@/assets/icons/additional/eyeClose.svg';
import { AuthService } from '@/shared/services/auth.service';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './button';
import CheckBox from './checkbox';
import Input from './input';
import InfoText from './textInfo';
import { validate } from './validate';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [errorClick, setErrorClick] = useState<string>('');
  const [errorColor, setErrorColor] = useState<string>('');
  const [formValid, setFormValid] = useState<boolean>(false);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  function blurHandler(e: any) {
    const validDate = validate({ email, password });
    switch (e.target.name) {
      case 'email':
        setEmailError(validDate.email as string);
        setErrorColor('');
        setErrorClick('');
        break;
      case 'password':
        setPasswordError(validDate.password as string);
        setErrorColor('');
        setErrorClick('');
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

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = {
      email,
      password,
    };
    const data = AuthService.registration(value);
    data
      .then((data) => {
        console.log(data);
      })
      .catch(function (error) {
        const status = error.response.status;
        if (status === 400 || status === 401) {
          setErrorClick('Цей емейл вже зайнятий');
          setErrorColor('#F50711');
        }
      });
  };
  return (
    <form
      className='w-[23.44rem] px-5 sm:w-[30rem] md:w-auto lg:px-8'
      onSubmit={registrationHandler}
      id='authForm'>
      <Input
        title={'Електронна пошта*'}
        name='email'
        values={email}
        type='email'
        placeholder={'Введіть свою пошту'}
        handleChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => blurHandler(e)}
        error={emailError}
        errorClick={errorClick}
        topError={'220px'}
        topErrorCLick={'155px'}
        borderColor={errorColor}
      />
      <div className='relative mb-14 mt-6'>
        <Input
          title={'Пароль*'}
          name='password'
          values={password}
          type={passwordShown ? 'text' : 'password'}
          placeholder={'Введіть свій пароль'}
          handleChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => blurHandler(e)}
          error={passwordError}
          topError={'65px'}
          topErrorCLick={'0'}
          borderColor={errorColor}
        />
        <Image
          className='absolute right-[15px] top-[35px] cursor-pointer'
          src={passwordShown ? eyeClose : eye}
          onClick={togglePassword}
          alt={'eye'}
        />
      </div>
      <p className='later mb-4 text-xs font-normal tracking-[.06em]'>
        Реєструючись на сайті, Ви погоджуєтесь з
        <Link
          href={'/rules'}
          className='pl-1 text-xs font-normal text-blue-500 underline underline-offset-4'>
          правилами магазину
        </Link>
      </p>
      <CheckBox title='Хочу отримувати комерційні пропозиції магазину Lama на вказаний вище email' />
      <Button
        title={'Зареєструватися'}
        marginTop='2.25rem'
        disabled={!formValid}
      />
      <InfoText />
    </form>
  );
}
