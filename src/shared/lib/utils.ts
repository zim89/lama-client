import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (num: number, sufix = '₴') => {
  return `${new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(num)} ${sufix}`
}
