'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';
import { serviceLinks } from '@/shared/lib/data';

export default function AdditionalAsideNav() {
  const path = usePathname();
  return (
    <ul>
      {serviceLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            'flex items-center gap-2 rounded-[4px] px-3 py-2.5 text-sm',
            path === link.href && 'bg-amber-500'
          )}>
          {<link.icon />}
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
