import Link from 'next/link';
import { ArrowRightIcon, HeartWithHandIcon } from '@/components/icons';

export default function ActionLinks() {
  return (
    <ul className='px-4'>
      <li>
        <Link
          href='/'
          className='flex w-full items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
          <ArrowRightIcon />
          <span>Нові надходження</span>
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='flex w-full items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
          <ArrowRightIcon />
          <span>Розпродаж</span>
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='flex w-full items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
          <HeartWithHandIcon />
          <span>Є речі, з яких виросли?</span>
        </Link>
      </li>
    </ul>
  );
}
