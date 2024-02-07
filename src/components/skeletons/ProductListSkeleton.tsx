function ProductSkeleton() {
  return (
    <div className='relative h-[252px] overflow-hidden rounded-md border border-gray-300 bg-gray-100 sm:h-[296px] md:h-[310px] lg:h-[306px] xl:h-[338px]'>
      {/*Top content*/}
      <div className='relative h-[180px] animate-pulse bg-gray-300 sm:h-[220px] md:h-[224px] lg:h-[220px] xl:h-[272px]'>
        {' '}
      </div>

      {/*Bottom content*/}
      <div className='h-full space-y-1 p-2 md:px-3 md:py-2'>
        <p className='animate-pulse rounded-l-full rounded-r-full bg-gray-300 text-xs/none sm:text-sm/none md:text-sm/none'>
          &nbsp;
        </p>
        <p className='animate-pulse rounded-l-full rounded-r-full bg-gray-300 text-xs/none sm:text-sm/none md:text-sm/none xl:hidden'>
          &nbsp;
        </p>
        <p className='w-1/2 animate-pulse rounded-l-full rounded-r-full bg-gray-300 text-sm font-medium'>
          &nbsp;
        </p>
      </div>
    </div>
  );
}

export default function ProductListSkeleton() {
  return (
    <>
      <ul
        className={
          'grid grid-cols-2 gap-4 md:hidden lg:grid lg:grid-cols-4 lg:gap-5 xl:gap-6'
        }>
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <ProductSkeleton />
          </li>
        ))}
      </ul>

      <ul className={'hidden md:grid md:grid-cols-3 md:gap-4 lg:hidden'}>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>
            <ProductSkeleton />
          </li>
        ))}
      </ul>
    </>
  );
}
