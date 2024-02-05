import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (num: number, sufix = '₴') => {
  // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(num)} ${sufix}`;
};
