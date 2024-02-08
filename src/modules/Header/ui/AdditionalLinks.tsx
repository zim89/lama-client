import { mobileAdditionalLinks } from '@/modules/Header/lib/data';
import Link from 'next/link';

export default function AdditionalLinks() {
  return (
    <ul className='px-4'>
      {mobileAdditionalLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className='block py-3 text-xs'>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
