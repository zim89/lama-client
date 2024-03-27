'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChevronLeft, ChevronRight } from '@/components/IconsPack'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { cn } from '@/shared/lib/utils'

export default function FilterFormGender({
  name,
  label
}: {
  name: string
  label: string
}) {
  const [opened, setOpened] = useState(false)
  const [gender, setGender] = useState('')
  const items = [
    { name: 'male', label: 'Хлопчик' },
    { name: 'female', label: 'Дівчинка' }
  ] as const

  const searchParams = useSearchParams()
  const path = usePathname()
  const { replace } = useRouter()

  const onSubmit = ({ gender }: { gender: string }) => {
    // const params = new URLSearchParams(searchParams.toString())
    // let section: string[] = params.get('section')?.split(', ') || []
    // if (section.length) {
    //   section = section.filter(item => item !== items[0] || item !== items[1])
    //   section.push(form.getValues('gender'))
    // } else {
    //   section.push(gender)
    // }
    // params.set('section', section.join(', '))
    // replace(`${path}?${params.toString()}`)
  }

  const onReset = () => {}

  return (
    <li>
      <button
        onClick={() => setOpened(true)}
        type='button'
        className='border-b border-b-gray-500 py-3 px-4 flex items-center justify-between text-lg/[24px] font-medium w-full'
      >
        <span className='flex gap-2 items-baseline'>{label}</span>

        <ChevronRight />
      </button>

      <div
        className={cn(
          'absolute inset-0 transition-transform duration-150 bg-white',
          opened ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          onClick={() => setOpened(false)}
          type='button'
          className='text-sm text-gray-900 py-3 px-4 flex items-center gap-1 bg-amber-300 border-y border-y-gray-500 w-full'
        >
          <ChevronLeft />
          {label}
        </button>

        <form className='w-full py-2 px-4 space-y-6'>
          {items.map(item => (
            <div
              key={item.name}
              className='flex items-center gap-2 py-2.5'
            >
              <Checkbox id={item.name} />
              <label
                htmlFor={item.name}
                className='text-sm'
              >
                {item.label}
              </label>
            </div>
          ))}

          {/*<FormField
              control={form.control}
              name='gender'
              render={() => (
                <FormItem>
                  {items.map((item: string) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name='gender'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className='flex items-center gap-2 py-2.5'
                          >
                            <FormControl>
                              <Checkbox
                                className='border-gray-300'
                                checked={field.value === item}
                                onCheckedChange={checked => {
                                  return checked
                                    ? field.onChange(item)
                                    : field.onChange('')
                                }}
                              />
                            </FormControl>
                            <FormLabel className='!m-0 text-xs'>
                              {item}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </FormItem>
              )}
            />*/}

          <div>
            <button
              type='submit'
              className='group w-full rounded-xl bg-violet-500 py-3 text-center text-sm transition-colors duration-300 hover:bg-violet-700 disabled:bg-gray-300 disabled:text-gray-900'
              disabled={!!gender}
            >
              Зберегти
            </button>
            <button
              onClick={() => onReset()}
              type='button'
              className='w-full rounded-xl py-3 text-center text-xs text-gray-900 transition-colors duration-300 hover:text-black disabled:text-gray-500'
              disabled={!!gender}
            >
              Очистити обране
            </button>
          </div>
        </form>
      </div>
    </li>
  )
}
