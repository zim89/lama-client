import Link from 'next/link';

/*TODO: add logic to breadcrumbs*/

export default function Breadcrumbs() {
  return (
    <div className='hidden py-3 text-sm text-gray-900 md:flex md:gap-1 lg:mb-1 lg:py-1.5 lg:text-base xl:mb-3'>
      <Link href={'/'}>Головна</Link>
      <span className='pr-1 text-base/[20px] font-bold lg:text-base'>/</span>
      <span className='font-bold'>Каталог</span>
    </div>
  );
}
