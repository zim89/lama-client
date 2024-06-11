import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatImageUrl = (url: string) => {
  const formattedUrl = url.replace('http://localhost:8000', '')

  return process.env.NEXT_PUBLIC_MEDIA_URL + formattedUrl
}
