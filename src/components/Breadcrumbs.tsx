import Link from 'next/link';

export type Crumb = {
  text: string;
  href?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <ul className='hidden md:mb-2 md:flex md:gap-1 md:py-2 md:text-sm md:text-gray-900 lg:mb-1 xl:mb-3'>
      <li>
        <Link href={'/'}>Головна</Link>
      </li>
      {crumbs.map((crumb, index, arr) =>
        index !== arr.length - 1 ? (
          <li key={index} className='flex gap-2'>
            <span>/</span>
            <Link href={crumb.href!}>{crumb.text}</Link>
          </li>
        ) : (
          <li key={index} className='flex gap-2'>
            <span>/</span>
            <span key={index} className='text-brand-grey-600 font-bold'>
              {crumb.text}
            </span>
          </li>
        )
      )}
    </ul>
  );
}
