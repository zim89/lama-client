import { ReactNode } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <div className='container'>
      <div className='pb-20 pt-5 sm:pb-[88px] sm:pt-6 md:pb-28 md:pt-2 lg:pb-[128px] lg:pt-5 xl:pb-40 xl:pt-6'>
        <Breadcrumbs />

        {/* Heading */}
        <div className='mb-5 flex flex-col gap-1 sm:gap-2 md:mb-6 md:flex-row md:items-end lg:mb-5 xl:mb-6'>
          <h1 className='heading'>Аксесуари</h1>
          {/*TODO: get number of products*/}
          <p className='text-xs text-gray-700 sm:text-sm lg:hidden'>
            Товарів: 1662
          </p>
        </div>

        <div className='flex flex-col lg:flex-row lg:gap-5 xl:gap-6'>
          <div className='bg-gray-300 lg:w-[225px] xl:w-[282px]'>Filterbar</div>
          <div className='grow'>{children}</div>
        </div>
      </div>
    </div>
  );
}
