import Link from 'next/link';
import { ArrowRightIcon, HeartWithHandIcon } from '@/components/icons';
import { SheetClose } from '@/components/ui/sheet';

export default function ActionLinks() {
  return (
    <ul className='px-4'>
      <li>
        <SheetClose asChild>
          <Link
            href={'/catalog/new'}
            className='flex w-full cursor-pointer items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
            <ArrowRightIcon />
            <span>Нові надходження</span>
          </Link>
        </SheetClose>
      </li>
      <li>
        <SheetClose asChild>
          <Link
            href={'/catalog/sale'}
            className='flex w-full cursor-pointer items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
            <ArrowRightIcon />
            <span>Розпродаж</span>
          </Link>
        </SheetClose>
      </li>
      <li>
        <SheetClose asChild>
          <Link
            href={'/small-clothes'}
            className='flex w-full cursor-pointer items-center gap-2.5 px-1 py-2.5 text-sm font-bold text-black'>
            <HeartWithHandIcon />
            <span>Є речі, з яких виросли?</span>
          </Link>
        </SheetClose>
      </li>
    </ul>
  );
}
