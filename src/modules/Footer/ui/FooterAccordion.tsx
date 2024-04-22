'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ClockIcon, MailIcon, MapPinIcon } from '@/components/IconsPack'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import { cn } from '@/shared/lib/utils'
import styles from '../styles/FooterAccordion.module.css'
import { footerCategoryLinks, helpLinks } from '@/shared/data/links.data'

export default function FooterAccordion() {
  const [isOpenPopular, setIsOpenPopular] = useState(false)
  const [isOpenHelp, setIsOpenHelp] = useState(false)
  const [isOpenSupport, setIsOpenSupport] = useState(false)

  const onCloseAll = () => {
    setIsOpenPopular(false)
    setIsOpenHelp(false)
    setIsOpenSupport(false)
  }

  return (
    <div>
      {/* Популярні категорії */}
      <Collapsible
        open={isOpenPopular}
        onOpenChange={setIsOpenPopular}
      >
        <CollapsibleTrigger
          className={cn(
            'group',
            styles.trigger,
            isOpenPopular ? 'border-0' : 'border-b border-b-gray-300'
          )}
        >
          Популярні категорії
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn(
            styles.content,
            isOpenPopular ? 'border-b border-b-gray-300' : 'border-0'
          )}
        >
          <ul className={styles.list}>
            {footerCategoryLinks.map(link => (
              <li
                key={link.label}
                className={styles.item}
              >
                <Link
                  href={link.href}
                  className='textLink'
                  onClick={onCloseAll}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      {/* Допомога */}
      <Collapsible
        open={isOpenHelp}
        onOpenChange={setIsOpenHelp}
      >
        <CollapsibleTrigger
          className={cn(
            'group',
            styles.trigger,
            isOpenHelp ? 'border-0' : 'border-b border-b-gray-300'
          )}
        >
          Допомога
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn(
            styles.content,
            isOpenHelp ? 'border-b border-b-gray-300' : 'border-0'
          )}
        >
          <ul className={styles.list}>
            {helpLinks.map(link => (
              <li
                key={link.label}
                className={styles.item}
              >
                <Link
                  href={link.href}
                  onClick={onCloseAll}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>

      {/* Служба підтримки */}
      <Collapsible
        open={isOpenSupport}
        onOpenChange={setIsOpenSupport}
      >
        <CollapsibleTrigger className={cn('group', styles.trigger)}>
          Служба підтримки
          <ChevronDown
            className={cn(
              styles.triggerIcon,
              'group-data-[state=open]:rotate-180 group-data-[state=open]:stroke-black'
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className={styles.content}>
          <ul>
            <li className={styles.item}>
              <p className='flex gap-2'>
                <a
                  href='tel:380636235212'
                  className='decoration-0'
                >
                  +380 63 623 52 12
                </a>
                <span>Відділ продажу</span>
              </p>
            </li>
            <li className={styles.item}>
              <p className='flex gap-2'>
                <a
                  href='tel:380636235212'
                  className='decoration-0'
                >
                  +380 63 623 52 12
                </a>
                <span>Контакт для співпраці</span>
              </p>
            </li>
            <li className={styles.item}>
              <p className='flex gap-1 items-center'>
                <MailIcon />
                <a
                  href='mailto:babbystore@gmail.com'
                  className='decoration-0'
                >
                  babbystore@gmail.com
                </a>
              </p>
            </li>
            <li className={styles.item}>
              <p className='flex gap-1 items-center'>
                <ClockIcon />
                <span>Пн-Нд 10:00-18:00</span>
              </p>
            </li>
            <li className={styles.item}>
              <p className='flex gap-1 items-center'>
                <MapPinIcon />

                <span>вул. Кожедуба, 3а, м. Буча, Київська обл.</span>
              </p>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
