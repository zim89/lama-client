'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDownIcon } from '@/components/IconsPack';
import { cn } from '@/shared/lib/utils';
import { serviceLinks } from '@/shared/lib/data';

export default function AdditionalCollapsible() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className='border-y border-y-gray-500'>
      <CollapsibleTrigger className='relative flex w-full items-center justify-between text-sm font-medium'>
        Статті в цьому розділі
        <span
          className={cn(
            'flex h-10 w-10 items-center justify-center',
            isOpen && 'rotate-180 transition-transform duration-300'
          )}>
          <ChevronDownIcon />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='pb-2'>
        {serviceLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              'flex items-center gap-2 rounded-[4px] px-3 py-2',
              path === link.href && 'bg-amber-500'
            )}>
            {<link.icon />}
            {link.label}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
