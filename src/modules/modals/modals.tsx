'use client';

import exit from '@/assets/icons/additional/exit.svg';
import { useModals } from '@/shared/config/ModalProvider';
import Image from 'next/image';
import { useState } from 'react';
import SignIn from './ui/SignIn';
import SignUp from './ui/SignUp';
import AuthButton from './ui/authButton';

type TModalsProps = {
  show?: any;
};

export default function Modals({ show }: TModalsProps) {
  const dataModal = useModals();
  const [authorization, setAuthorization] = useState('login');

  const handleClickAuthorization = (authorizationValue: string) => {
    setAuthorization(authorizationValue);
  };

  function handleClickOutSide() {
    dataModal?.setShowModal(!dataModal.showModal);
    setAuthorization('login');
    if (dataModal?.recovery == true) {
      dataModal?.setRecovery(!dataModal.recovery);
    }
  }

  return (
    <>
      {dataModal?.showModal && (
        <div
          className='fixed right-0 top-0 z-40 flex size-full flex-col bg-black bg-opacity-50'
          onClick={handleClickOutSide}>
          <div className='fixed right-0 top-0 z-20 m-[0_auto] flex h-full w-full flex-col bg-white md:w-[23.5rem] md:items-stretch lg:w-[30rem]'>
            <div onClick={(e) => e.stopPropagation()}>
              <div className='flex w-full justify-between border-b border-gray-500 bg-gray-100'>
                <h4 className='text-grey-900 py-5 pl-5 text-sm font-normal'>
                  Авторизація
                </h4>
                <Image
                  src={exit}
                  alt={'exit'}
                  className='mr-4 cursor-pointer lg:hidden'
                  onClick={handleClickOutSide}
                />
              </div>
              {!dataModal.recovery && (
                <div className='m-[1rem_auto_2.25rem_auto] flex w-[19.13rem] flex-row rounded-3xl bg-amber-300'>
                  <AuthButton
                    backgroundColor={authorization == 'login' ? '#F0D2AC' : ''}
                    textColor={authorization == 'login' ? '' : '#99969C'}
                    onClick={() => handleClickAuthorization('login')}
                    title={'Я тут вже свій'}
                  />
                  <AuthButton
                    backgroundColor={
                      authorization == 'registration' ? '#F0D2AC' : ''
                    }
                    textColor={authorization == 'registration' ? '' : '#99969C'}
                    onClick={() => handleClickAuthorization('registration')}
                    title={'Я - новенький'}
                  />
                </div>
              )}
              <div className='m-[0_auto] flex flex-col items-center sm:w-[23.5rem] md:w-auto md:items-stretch'>
                {authorization == 'login' && <SignIn />}
                {authorization == 'registration' && <SignUp />}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
