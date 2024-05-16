import Link from 'next/link'
import { additionalLinks } from '@/shared/data/links.data'

export default function AdditionalMenu({
  close
}: {
  close: (value: boolean) => void
}) {
  return (
    <ul className='py-4 border-b border-gray-300'>
      {additionalLinks.map(item => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={() => close(false)}
            className='inline-block py-2.5 text-sm text-gray-900 font-medium'
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
