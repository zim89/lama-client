'use client'

import { Circle } from 'lucide-react'
import { useState } from 'react'
import type { Attributes } from '@/shared/types/product.types'
import { cn } from '@/shared/lib/utils'

export default function ColorSelect({ colors }: { colors: Attributes[] }) {
  const [currentColor, setCurrentColor] = useState(colors[0].value)

  return (
    <ul className='flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
      {colors.map(item => {
        return (
          <button
            key={item.id}
            className={cn(
              'flex size-4 items-center justify-center rounded-full',
              currentColor === item.value && 'border border-gray-700'
            )}
            onClick={() => setCurrentColor(item.value)}
          >
            <Circle
              size={10}
              color={item.value}
              fill={item.value}
            />
          </button>
        )
      })}
    </ul>
  )
}
