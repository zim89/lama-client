'use client'

import { PopoverClose } from '@radix-ui/react-popover'
import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { CategoryFormData, CategoryName } from '@/shared/types/filter.types'
import { cn } from '@/shared/lib/utils'
import { categoryList } from '@/shared/data/filter.data'

export default function CategoryForm() {
  const searchParams = useSearchParams()
  const path = usePathname()
  const { replace } = useRouter()

  const form = useForm<CategoryFormData>({
    defaultValues: {
      clothes: [],
      shoes: [],
      accessories: []
    }
  })

  useEffect(() => {
    const categories = searchParams.get('category')?.split(', ') || []
    const sections = searchParams.get('section')?.split(', ') || []

    if (categories.length) {
      categories.forEach(item => {
        const category = categoryList.find(cat => cat.label === item)
        form.setValue(category?.name as CategoryName, ['Дивитись все'])

        if (sections.length) {
          category?.items.forEach(item => {
            if (sections.includes(item.label)) {
              form.setValue(
                category.name,
                [...form.getValues(category.name), item.id].filter(
                  value => value !== 'Дивитись все'
                )
              )
            }
          })
        }
      })
    }
  }, [])

  const onSubmit = () => {
    const { clothes, shoes, accessories } = form.getValues()
    const categoryData = []
    const sectionData = []

    if (clothes.length > 0) {
      categoryData.push('Одяг')
      if (!clothes.includes('Дивитись все')) {
        sectionData.push(...clothes)
      }
    }

    if (shoes.length > 0) {
      categoryData.push('Взуття')
      if (!shoes.includes('Дивитись все')) {
        sectionData.push(...shoes)
      }
    }

    if (accessories.length > 0) {
      categoryData.push('Аксесуари')
      if (!accessories.includes('Дивитись все')) {
        sectionData.push(...accessories)
      }
    }

    const params = new URLSearchParams(searchParams.toString())
    if (params.has('category')) params.delete('category')
    if (params.has('section')) params.delete('section')
    if (categoryData.length) params.set('category', categoryData.join(', '))
    if (sectionData.length) params.set('section', sectionData.join(', '))

    replace(`${path}?${params.toString()}`)
  }

  const onClear = (name: CategoryName) => {
    form.resetField(name)
    onSubmit()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-2'
      >
        <div className='grid grid-cols-3 gap-2'>
          {categoryList.map(cat => (
            <Popover key={cat.name}>
              <PopoverTrigger className='group flex w-full items-center justify-between rounded-b-lg rounded-t-lg border border-gray-300 bg-gray-100 px-3 py-[14px] text-xs font-medium  data-[state=open]:rounded-b-none'>
                {cat.label}
                <ChevronDown className='size-4 text-gray-900 transition-transform duration-300 group-data-[state=open]:rotate-180' />
              </PopoverTrigger>

              <PopoverContent
                align={cat.name === 'accessories' ? 'end' : 'start'}
                sideOffset={-1}
                className={cn(
                  'w-fit space-y-3 rounded-lg border border-gray-300 px-2 py-3',
                  cat.name === 'accessories'
                    ? 'rounded-tr-none'
                    : 'rounded-tl-none'
                )}
              >
                <FormField
                  control={form.control}
                  name='clothes'
                  render={() => (
                    <FormItem>
                      <FormField
                        control={form.control}
                        name={cat.name as CategoryName}
                        render={({ field }) => {
                          return (
                            <FormItem className='flex items-center gap-2 py-2'>
                              <FormControl>
                                <Checkbox
                                  className='border-gray-300'
                                  checked={field.value?.includes(
                                    'Дивитись все'
                                  )}
                                  onCheckedChange={checked => {
                                    return checked
                                      ? field.onChange(['Дивитись все'])
                                      : null
                                  }}
                                />
                              </FormControl>
                              <FormLabel className='!m-0 text-xs'>
                                Дивитись все
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                      {cat.items.map(item => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name={cat.name as CategoryName}
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className='flex items-center gap-2 py-2'
                              >
                                <FormControl>
                                  <Checkbox
                                    className='border-gray-300'
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={checked => {
                                      return checked
                                        ? field.onChange(
                                            [...field.value, item.id].filter(
                                              value => value !== 'Дивитись все'
                                            )
                                          )
                                        : field.onChange(
                                            field.value?.filter(
                                              value => value !== item.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className='!m-0 text-xs'>
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      <div>
                        <PopoverClose
                          onClick={onSubmit}
                          className='group w-full rounded-xl bg-violet-500 py-3 text-center text-sm transition-colors duration-300 hover:bg-violet-700 disabled:bg-gray-300 disabled:text-gray-900'
                          disabled={
                            form.getValues(cat.name as CategoryName).length ===
                            0
                          }
                        >
                          Зберегти
                        </PopoverClose>

                        <PopoverClose
                          type='button'
                          onClick={() => onClear(cat.name as CategoryName)}
                          disabled={
                            form.getValues(cat.name as CategoryName).length ===
                            0
                          }
                          className='w-full rounded-xl py-3 text-center text-xs text-gray-900 transition-colors duration-300 hover:text-black disabled:text-gray-500'
                        >
                          Очистити обране
                        </PopoverClose>
                      </div>
                    </FormItem>
                  )}
                />
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </form>
    </Form>
  )
}
