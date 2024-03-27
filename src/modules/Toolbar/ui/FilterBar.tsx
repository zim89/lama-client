'use client'

import { Fragment } from 'react'
import {
  ChevronRight,
  CloseIcon,
  DoubleVerticalArrowsIcon,
  FilterIcon
} from '@/components/IconsPack'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { filterList } from '@/shared/data/filter.data'

const items = [
  { label: 'Наш топ', value: 'Наш топ' },
  { label: 'Розпродаж', value: 'Розпродаж' },
  { label: 'Нові надходження', value: 'Нові надходження' },
  { label: 'Спочатку дорожчі', value: 'Спочатку дорожчі' },
  { label: 'Спочатку дешевші', value: 'Спочатку дешевші' }
] as const

export default function FilterBar() {
  const onSortChange = (value: string) => {
    console.log(value)
  }

  return (
    <div className='flex items-center justify-between'>
      {/* Filter Menu */}
      <Sheet modal={false}>
        <SheetOverlay hidden />
        <SheetTrigger className='flex items-center gap-2 py-2.5 pl-2 text-xs text-gray-900'>
          <FilterIcon />
          Фільтри
        </SheetTrigger>
        <SheetContent
          side='left'
          className='w-full p-0 overflow-hidden overscroll-none'
        >
          <div className='flex items-center justify-between py-1 pl-4 text-sm text-gray-900'>
            <p>Фільтр</p>
            <SheetClose className='flex size-10 items-center justify-center'>
              <CloseIcon />
            </SheetClose>
          </div>

          <div className='relative h-full'>
            <ul className='border-t border-t-gray-500 overflow-hidden'>
              {filterList.map(filter => (
                <Fragment key={filter.name}>
                  <filter.component
                    name={filter.name}
                    label={filter.label}
                  />
                </Fragment>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sort Menu */}
      <Select
        onValueChange={onSortChange}
        defaultValue={items[0].value}
      >
        <SelectTrigger className='flex w-fit items-center gap-2 border-none py-2.5 pl-2 pr-0 text-xs text-gray-900 focus:ring-0 data-[state=open]:text-black'>
          <DoubleVerticalArrowsIcon />
          <SelectValue placeholder='ddd' />
        </SelectTrigger>
        <SelectContent className='rounded-none border-none shadow-[0px_1px_20px_1px_rgba(127,124,131,0.1)]'>
          {items.map(item => (
            <SelectItem
              key={item.label}
              value={item.value}
              className='border-b border-b-gray-300 px-2.5 py-3 text-xs text-gray-900 last:border-none data-[state=checked]:text-black'
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
