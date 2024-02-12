import { mobileAdditionalLinks } from '@/modules/Header/lib/data';
import Link from 'next/link';
import { SheetClose } from '@/components/ui/sheet';

export default function AdditionalLinks() {
  return (
    <ul className='px-4'>
      {mobileAdditionalLinks.map((link) => (
        <li key={link.label}>
          <SheetClose asChild>
            <Link
              href={link.href}
              className='block cursor-pointer py-3 text-xs'>
              {link.label}
            </Link>
          </SheetClose>
        </li>
      ))}
    </ul>
  );
}
