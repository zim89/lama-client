import Link from 'next/link'
import { ChevronRightIcon } from '@/components/IconsPack'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/shared/lib/utils'
import styles from '../styles/SubAccordion.module.css'

const categoryList = [
  {
    label: 'Одяг',
    items: [
      { label: 'Дивитись все', href: '/catalog' },
      { label: 'Сорочки', href: '/catalog' },
      { label: 'Спортивні костюми', href: '/catalog' },
      { label: 'Футболки', href: '/catalog' }
    ]
  },
  {
    label: 'Фемілі лук',
    items: [
      { label: 'Дивитись все', href: '/catalog' },
      { label: 'Сорочки', href: '/catalog' },
      { label: 'Спортивні костюми', href: '/catalog' },
      { label: 'Футболки', href: '/catalog' }
    ]
  },
  {
    label: 'Аксесуари',
    items: [
      { label: 'Дивитись все', href: '/catalog' },
      { label: 'Сорочки', href: '/catalog' },
      { label: 'Спортивні костюми', href: '/catalog' },
      { label: 'Футболки', href: '/catalog' }
    ]
  }
]

export default function BoyAccordion({
  close
}: {
  close: (value: boolean) => void
}) {
  return (
    <Accordion
      type='single'
      collapsible
    >
      <Link
        href='/'
        onClick={() => close(false)}
        className={cn(styles.link, 'w-full')}
      >
        Дивитись все
      </Link>
      {categoryList.map(cat => (
        <AccordionItem
          key={cat.label}
          value={cat.label}
          className={styles.accordionItem}
        >
          <AccordionTrigger className={cn('group', styles.accordionTrigger)}>
            <span
              className={cn(
                styles.accordionIcon,
                'group-data-[state=open]:rotate-90'
              )}
            >
              <ChevronRightIcon />
            </span>
            {cat.label}
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {cat.items.map(item => (
                <li
                  key={item.label}
                  className={styles.item}
                >
                  <Link
                    href={item.href}
                    onClick={() => close(false)}
                    className={styles.itemLink}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
