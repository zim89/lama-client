import React from 'react';
import {
  categoryLinks,
  featureList,
  payList,
  serviceLinks,
  socialLinks,
} from '@/modules/Footer/lib/data';
import Image from 'next/image';

import FooterAccordion from './ui/FooterAccordion';
import logoMobileImg from '@/assets/icons/logo/logo-tablet.png';
import logoTabletImg from '@/assets/icons/logo/logo-desktop.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-300'>
      {/* TOP */}
      <div className='container'>
        <div className='space-y-6 pb-6 pt-8 sm:space-y-8 sm:py-8 md:space-y-10 md:py-10 lg:space-y-11 lg:pb-11 xl:space-y-16 xl:py-16'>
          {/* Features */}
          <ul className='grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 xl:gap-4'>
            {featureList.map((item) => (
              <li
                key={item.id}
                className='text-center text-xs font-medium sm:space-y-1 sm:text-sm md:space-y-2 lg:text-lg/[24px] xl:space-y-3'>
                <div className='relative mx-auto h-10 w-10 xl:h-14 xl:w-14'>
                  <Image
                    src={item.icon}
                    alt={item.desc}
                    priority={true}
                    sizes='50vw'
                    fill
                  />
                </div>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Image
            src={logoMobileImg}
            alt={'Lama logo'}
            width={51}
            height={26}
            className={'mx-auto md:hidden'}
          />
          <div className='relative hidden items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-[275px] before:-translate-y-1/2 before:bg-gray-500 after:absolute after:right-0 after:top-1/2 after:h-[1px] after:w-[275px] after:-translate-y-1/2 after:bg-gray-500 md:flex lg:before:w-[413px] lg:after:w-[413px] xl:before:w-[527px] xl:after:w-[527px]'>
            <Image
              src={logoTabletImg}
              alt={'Lama logo'}
              width={80}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className='md:hidden'>
        <FooterAccordion />

        {/* Social Links */}
        <ul className={'flex items-center justify-center gap-1 py-2 sm:py-3'}>
          {socialLinks.map((item) => {
            const LinkIcon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.link}
                  target={'_blank'}
                  className={
                    'flex h-10 w-10 items-center justify-center rounded-full text-black'
                  }>
                  <LinkIcon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='container hidden md:block'>
        <div className='mb-6 grid grid-cols-3 gap-11 px-8 lg:grid-cols-4 lg:gap-5 lg:px-0 xl:gap-40'>
          {/* Contacts */}
          <div className='flex h-full flex-col justify-between'>
            <div className='space-y-2'>
              <h3 className='text-base font-medium'>Контакти</h3>
              <ul className='space-y-2.5'>
                <li className='text-sm'>
                  місто Київ, <br /> вул. Димитрівська 112/2
                </li>
                <li className='text-sm'>Пн-Сб 09:00-19:00</li>
                <li className='text-sm'>Неділя - вихідний</li>
                <li className='text-sm'>0800-353-55-88</li>
                <li className='text-sm'>
                  <a href='mailto:lamastore@lama.com' className='decoration-0'>
                    lamastore@lama.com
                  </a>
                </li>
              </ul>
            </div>
            <ul className='flex items-center gap-4 lg:hidden'>
              {socialLinks.map((item) => {
                const LinkIcon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      target={'_blank'}
                      className={
                        'flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black'
                      }>
                      <LinkIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Socials */}
          <div className='hidden space-y-2 lg:block lg:space-y-4 xl:space-y-6'>
            <h3 className='text-base font-medium'>Слідкуйте за нами</h3>
            <ul className='flex items-center gap-4'>
              {socialLinks.map((item) => {
                const LinkIcon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      target={'_blank'}
                      className={
                        'flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors duration-300 hover:text-black'
                      }>
                      <LinkIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular */}
          <div className='space-y-2'>
            <h3 className='text-base font-medium'>Популярні категорії</h3>
            <ul className='space-y-1'>
              {categoryLinks.map((link) => (
                <li key={link.label} className='group text-sm'>
                  <Link href={link.href} className='block py-1.5'>
                    <span className='textLink'>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className='space-y-2'>
            <h3 className='text-base font-medium'>Допомога</h3>
            <ul className='space-y-1'>
              {serviceLinks.map((link) => (
                <li key={link.label} className='group text-sm'>
                  <Link href={link.href} className='block py-1.5'>
                    <span className='textLink'>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='flex items-center justify-between border-t border-t-gray-500 px-4 sm:px-5 md:mx-5 md:px-0 md:pb-4 md:pt-3 lg:mx-8 lg:py-3 xl:mx-[120px]'>
        <p className={'text-[10px]/[1.2] md:text-xs'}>&#169; 2023 Lama store</p>
        <ul className={'flex gap-4 md:gap-6'}>
          {payList.map((item) => (
            <li key={item.label}>
              <Image
                src={item.image_src}
                alt={item.label}
                width={24}
                height={24}
                className='lg:hidden'
              />
              <Image
                src={item.image_src}
                alt={item.label}
                width={40}
                height={40}
                className='hidden lg:block'
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
