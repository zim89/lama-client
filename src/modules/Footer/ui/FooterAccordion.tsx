'use client';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

import { categoryLinks } from '../lib/data';
import styles from '../styles/FooterAccordion.module.css';
import { serviceLinks } from '@/shared/lib/data';

function FooterAccordion() {
  const [isOpenPopular, setIsOpenPopular] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  const onCloseAll = () => {
    setIsOpenPopular(false);
    setIsOpenHelp(false);
    setIsOpenContact(false);
  };

  return (
    <>
      <Collapsible open={isOpenPopular} onOpenChange={setIsOpenPopular}>
        <CollapsibleTrigger className={cn('group', styles.trigger)}>
          Популярні категорії
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className={styles.content}>
          <ul>
            {categoryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.link}
                  onClick={onCloseAll}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isOpenHelp} onOpenChange={setIsOpenHelp}>
        <CollapsibleTrigger className={cn('group', styles.trigger)}>
          Допомога
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className={styles.content}>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={styles.link}
                  onClick={onCloseAll}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={isOpenContact} onOpenChange={setIsOpenContact}>
        <CollapsibleTrigger className={cn('group', styles.trigger)}>
          Контакти
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className={styles.content}>
          <ul>
            <li className={styles.link}>місто Київ, вул. Димитрівська 112/2</li>
            <li className={styles.link}>Пн-Сб 09:00-19:00</li>
            <li className={styles.link}>Неділя - вихідний</li>
            <li className={styles.link}>0800-353-55-88</li>
            <li className={styles.link}>
              <a href='mailto:lamastore@lama.com' className='decoration-0'>
                lamastore@lama.com
              </a>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

export default FooterAccordion;
