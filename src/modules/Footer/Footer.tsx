import React from 'react';
import { featureList, payList, socialList } from '@/modules/Footer/lib/data';
import Image from 'next/image';

import FooterAccordion from './ui/FooterAccordion';
import logoImg from '@/assets/images/logo/logo-footer.png';

export default function Footer() {
  return (
    <footer className={'pt-10'}>
      <div className={'bg-gray-300 py-8'}>
        <div className={'container'}>
          {/* Features */}
          <ul className={'grid grid-cols-2 gap-4'}>
            {featureList.map((item) => (
              <li key={item.id} className={'text-center text-xs font-medium'}>
                <div className={'relative mx-auto h-16 w-16'}>
                  <Image src={item.icon} alt={item.desc} priority={true} fill />
                </div>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
          <Image
            src={logoImg}
            alt={'Lama logo'}
            width={51}
            height={26}
            className={'mx-auto my-7'}
          />
        </div>

        <FooterAccordion />

        {/* Social Links */}
        <ul className={'flex items-center justify-center gap-2 py-4'}>
          {socialList.map((item) => {
            const LinkIcon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.link}
                  target={'_blank'}
                  className={
                    'flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black transition-colors duration-300 hover:text-gray-900'
                  }>
                  <LinkIcon />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer bottom */}
        <div
          className={
            'flex items-center justify-between border-t border-t-gray-500 px-4'
          }>
          <p className={'text-[10px]/[1.2]'}>&#169; 2023 Lama store</p>
          <ul className={'flex gap-2'}>
            {payList.map((item) => (
              <li key={item.label}>
                <Image
                  src={item.image_src}
                  alt={item.label}
                  width={30}
                  height={30}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
