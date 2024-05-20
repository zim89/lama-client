import Image from 'next/image'
import React from 'react'
import { features } from '@/shared/data/features.data'

export default function Features() {
  return (
    <div className='section'>
      <div className='container'>
        <h2 className='heading-2 mb-8 sm:mb-10 md:mb-11 xl:mb-12'>
          Що робить <br className='sm:hidden' /> нас унікальними
        </h2>

        <ul className='grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6'>
          {features.map(item => (
            <li
              key={item.title}
              className='py-6 px-4 bg-accent-300 rounded-md flex gap-2 sm:gap-4 md:rounded-lg md:gap-6 md:py-7 lg:py-8 xl:py-9 xl:px-6'
            >
              <div className='flex-none'>
                <Image
                  src={item.icon_sm}
                  alt={item.title}
                  width={48}
                  height={44}
                  className='sm:hidden'
                />
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={78}
                  height={70}
                  className='hidden sm:block'
                />
              </div>
              <div className='grow space-y-2 md:space-y-3 lg:space-y-4'>
                <h3 className='heading-3'>{item.title}</h3>
                <ul className='space-y-1 md:space-y-2'>
                  {item.desc.map(el => (
                    <li
                      key={el}
                      className='flex gap-1 items-start text-sm'
                    >
                      <div className='flex-none'>
                        <svg
                          width='16'
                          height='20'
                          viewBox='0 0 16 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.875 7L6.625 12.25L4 9.625'
                            stroke='black'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>

                      <p>{el}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
