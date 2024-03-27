import React from 'react';
import { cn } from '@/shared/lib/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdditionalAsideNav from '@/components/AdditionalAsideNav';
import AdditionalCollapsible from '@/components/AdditionalCollapsible';

const crumbs = [
  { text: 'Допомога', href: '/contact' },
  { text: 'Зв’язатися з нами' },
];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={cn('additional-wrap')}>
      <div className='container'>
        <Breadcrumbs crumbs={crumbs} />
        <h1 className={cn('heading-2', 'mb-5 lg:mb-6')}>Допомога</h1>
      </div>

      <div className='flex flex-col gap-11 sm:gap-12 md:gap-14 lg:hidden'>
        {/* Aside */}
        <div className={cn('container', 'flex-none lg:hidden')}>
          <AdditionalCollapsible />
        </div>
        <div className='hidden lg:block lg:w-[225px]'></div>

        {/* Content */}
        <div>{children}</div>
      </div>

      <div className='hidden lg:container lg:block'>
        <div className='flex flex-row gap-6'>
          {/* Aside */}
          <div className='w-[225px] flex-none xl:w-[282px]'>
            <AdditionalAsideNav />
          </div>

          {/* Content */}
          <div className='grow'>{children}</div>
        </div>
      </div>
    </div>
  );
}
