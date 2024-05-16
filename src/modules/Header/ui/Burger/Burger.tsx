'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon, CloseIcon, MenuIcon } from '@/components/IconsPack'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/shared/lib/utils'
import styles from './styles/Burger.module.css'
import AdditionalMenu from './ui/AdditionalMenu'
import BoyAccordion from './ui/BoyAccordion'
import ContactInfo from './ui/ContactInfo'
import GirlAccordion from './ui/GirlAccordion'
import { babyList, fatherList, motherList } from '@/shared/data/burger.data'

export default function Burger() {
  const [opened, setOpened] = useState(false)

  return (
    <Sheet
      open={opened}
      onOpenChange={setOpened}
    >
      <SheetTrigger className={cn('btn-icon', styles.sheetTrigger)}>
        {opened ? <CloseIcon /> : <MenuIcon />}
      </SheetTrigger>
      <SheetContent
        className={styles.sheetContent}
        side='left'
      >
        <Accordion
          type='single'
          collapsible
        >
          {/* GIRL */}
          <AccordionItem
            value='Дівчатам'
            className={styles.accordionItem}
          >
            <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
              Дівчатам
              <span
                className={cn(
                  styles.accordionIcon,
                  'group-data-[state=open]:rotate-180 group-data-[state=open]:text-black'
                )}
              >
                <ChevronDownIcon />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <GirlAccordion close={setOpened} />
            </AccordionContent>
          </AccordionItem>

          {/* BOY */}
          <AccordionItem
            value='Хлопчикам'
            className={styles.accordionItem}
          >
            <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
              Хлопчикам
              <span
                className={cn(
                  styles.accordionIcon,
                  'group-data-[state=open]:rotate-180 group-data-[state=open]:text-black'
                )}
              >
                <ChevronDownIcon />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <BoyAccordion close={setOpened} />
            </AccordionContent>
          </AccordionItem>

          {/* BABY */}
          <AccordionItem
            value='Самим маленьким'
            className={styles.accordionItem}
          >
            <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
              Самим маленьким
              <span
                className={cn(
                  styles.accordionIcon,
                  'group-data-[state=open]:rotate-180 group-data-[state=open]:text-black'
                )}
              >
                <ChevronDownIcon />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {babyList.map(item => (
                  <li
                    key={item.label}
                    className={styles.item}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpened(false)}
                      className={styles.itemLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* MOM */}
          <AccordionItem
            value='Для мам'
            className={styles.accordionItem}
          >
            <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
              Для мам
              <span
                className={cn(
                  styles.accordionIcon,
                  'group-data-[state=open]:rotate-180 group-data-[state=open]:text-black'
                )}
              >
                <ChevronDownIcon />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {motherList.map(item => (
                  <li
                    key={item.label}
                    className={styles.item}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpened(false)}
                      className={styles.itemLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* DAD */}
          <AccordionItem
            value='Для татусів'
            className={styles.accordionItem}
          >
            <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
              Для татусів
              <span
                className={cn(
                  styles.accordionIcon,
                  'group-data-[state=open]:rotate-180 group-data-[state=open]:text-black'
                )}
              >
                <ChevronDownIcon />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {fatherList.map(item => (
                  <li
                    key={item.label}
                    className={styles.item}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpened(false)}
                      className={styles.itemLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <AdditionalMenu close={setOpened} />
        <ContactInfo />
      </SheetContent>
    </Sheet>
  )
}
