import Link from 'next/link'
import { ChevronRightIcon } from '@/components/IconsPack'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

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

export default function GirlAccordion({
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
        className='pl-5 py-[14px] text-xs text-gray-900 border-b border-gray-300 block'
      >
        Дивитись все
      </Link>
      {categoryList.map(cat => (
        <AccordionItem
          key={cat.label}
          value={cat.label}
          className='border-none'
        >
          <AccordionTrigger className='group py-[14px] text-xs hover:no-underline text-gray-900 border-b border-gray-300 flex items-center gap-1 data-[state=open]:text-black justify-start font-normal'>
            <span className='transition-transform duration-300 group-data-[state=open]:rotate-90'>
              <ChevronRightIcon />
            </span>
            {cat.label}
          </AccordionTrigger>
          <AccordionContent>
            <ul className=''>
              {cat.items.map(item => (
                <li
                  key={item.label}
                  className='border-b border-gray-300'
                >
                  <Link
                    href={item.href}
                    onClick={() => close(false)}
                    className='pl-5 py-[14px] text-xs text-gray-900 inline-block'
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
