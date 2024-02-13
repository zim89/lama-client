'use client';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { categoryLinks, serviceLinks } from '../lib/data';

function FooterAccordion() {
  const [isOpenPopular, setIsOpenPopular] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const onCloseAll = () => {
    setIsOpenPopular(false);
    setIsOpenHelp(false);
    setIsOpenContact(false);
  };

  return (
    <>
      <Collapsible open={isOpenPopular} onOpenChange={setIsOpenPopular}>
        <CollapsibleTrigger className='group flex w-full items-center justify-between border-t border-t-gray-500 px-4 py-3 text-start text-xs font-medium sm:px-5'>
          Популярні категорії
          <ChevronDown className='h-4 w-4 text-gray-900 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-black' />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='px-4 sm:px-5'>
            <ul className={'flex flex-col gap-1'}>
              {categoryLinks.map((link) => (
                <li key={link.label} className={'text-xs'}>
                  <Link
                    href={link.href}
                    className='block py-3'
                    onClick={onCloseAll}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isOpenHelp} onOpenChange={setIsOpenHelp}>
        <CollapsibleTrigger className='group flex w-full items-center justify-between border-t border-t-gray-500 px-4 py-3 text-start text-xs font-medium sm:px-5'>
          Допомога
          <ChevronDown className='h-4 w-4 text-gray-900 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-black' />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='px-4 sm:px-5'>
            <ul className={'flex flex-col gap-1'}>
              {serviceLinks.map((link) => (
                <li key={link.label} className={'text-xs'}>
                  <Link
                    href={link.href}
                    className='block py-3'
                    onClick={onCloseAll}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isOpenContact} onOpenChange={setIsOpenContact}>
        <CollapsibleTrigger className='group flex w-full items-center justify-between border-t border-t-gray-500 px-4 py-3 text-start text-xs font-medium sm:px-5'>
          Контакти
          <ChevronDown className='h-4 w-4 text-gray-900 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-black' />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='px-4 sm:px-5'>
            <ul>
              <li className='py-3 text-xs'>
                місто Київ, вул. Димитрівська 112/2
              </li>
              <li className='py-3 text-xs'>Пн-Сб 09:00-19:00</li>
              <li className='py-3 text-xs'>Неділя - вихідний</li>
              <li className='py-3 text-xs'>0800-353-55-88</li>
              <li className='py-3 text-xs'>
                <a href='mailto:lamastore@lama.com' className='decoration-0'>
                  lamastore@lama.com
                </a>
              </li>
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

export default FooterAccordion;
