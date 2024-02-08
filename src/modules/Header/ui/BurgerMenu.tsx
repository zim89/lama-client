'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

import CatalogLinks from '@/modules/Header/ui/CatalogLinks';
import SocialLinks from '@/modules/Header/ui/SocialLinks';
import AdditionalLinks from '@/modules/Header/ui/AdditionalLinks';
import ActionLinks from '@/modules/Header/ui/ActionLinks';

import { CloseIcon } from '@/components/icons';
import { cn } from '@/shared/lib/utils';
import logoTabletImg from '@/assets/icons/logo/logo-tablet.png';

export default function BurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type='button'
          aria-label='Open mobile menu'
          className='btn-action'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2 4H22M2 12H22M2 20H22'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </SheetTrigger>

      <SheetContent side='left' className='top-11 border-none p-0'>
        <SheetClose asChild>
          <button className={cn('btn-action', 'absolute right-0 top-0')}>
            <CloseIcon />
          </button>
        </SheetClose>

        <div className='mb-4 border-b border-b-gray-500 py-3'>
          <div className='px-4'>
            <h3 className='text-xs text-gray-900'>Меню</h3>
          </div>
        </div>

        <ScrollArea className='h-[calc(100%-101px)] w-full'>
          <div className='px-4'>
            <CatalogLinks />
          </div>

          <div className='border-b border-b-gray-500 py-4'>
            <ActionLinks />
          </div>

          <div className='border-b border-b-gray-500 py-3'>
            <AdditionalLinks />
          </div>

          <div className='space-y-4 py-4'>
            <Image
              src={logoTabletImg}
              alt={'Lama logo'}
              width={51}
              height={26}
              className='mx-auto'
            />

            <div className='space-y-1 text-center text-xs text-black'>
              <p>0800-353-55-88</p>
              <a href='mailto:lamastore@lama.com'>lamastore@lama.com</a>
            </div>

            <SocialLinks />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
