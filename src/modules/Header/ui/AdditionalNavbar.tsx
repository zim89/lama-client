'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { additionalLinks } from '@/shared/data/links.data'

export default function AdditionalNavbar() {
  const path = usePathname()

  return (
    <div className='hidden lg:block bg-secondary-500'>
      <div className='container'>
        <div className='flex items-center justify-between h-9'>
          <ul className='flex items-center gap-6'>
            {additionalLinks.map(({ label, href }) => (
              <li
                key={label}
                className='py-1.5 text-sm'
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          <button
            type='button'
            className='flex items-center gap-2 text-sm'
          >
            Служба підтримки
            <ChevronDown className='text-gray-900 size-4' />
          </button>
        </div>
      </div>
    </div>
  )
}
