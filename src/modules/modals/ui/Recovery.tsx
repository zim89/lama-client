'use client';

import arrowLeft from '@/assets/icons/additional/arrowLeft.svg';
import { useModals } from '@/shared/config/ModalProvider';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import Endpoint from '../lib/endpoint';
import Button from './button';
import Input from './input';

export default function Recovery() {
  const [email, setEmail] = useState('');

  const dataModal = useModals();
  function handleCLickHideRecovery() {
    dataModal?.setRecovery(!dataModal.recovery);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(Endpoint.AUTH.RECOVERY, { email })
      .then(function (response) {
        if (response.status === 200) {
          const Token = response.data.refresh;
          localStorage.setItem('refresh', Token);
          dataModal?.setShowModal(!dataModal.showModal);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        className='flex items-center pb-[3.25rem] pt-8'
        onClick={handleCLickHideRecovery}>
        <Image src={arrowLeft} alt={'arrow'} />
        <p className='pl-2.5 text-base font-medium'>Назад</p>
      </button>
      <div>
        <h5 className='pb-4 text-2xl font-medium'>Відновити пароль</h5>
        <p className='w-full pb-8 text-sm font-normal tracking-wide [word-spacing:5px]'>
          Введіть пошту, вказану під час реєстрації, і ми відразу надішлемо
          інструкцію, як змінити пароль
        </p>
      </div>
      <Input
        title={'Електронна пошта*'}
        name='email'
        values={email}
        type='email'
        placeholder={'Введіть свою пошту'}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <Button title={'Надіслати'} marginTop='3.13rem' />
    </form>
  );
}
