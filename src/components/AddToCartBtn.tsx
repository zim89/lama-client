import { cn } from '@/shared/lib/utils'

export default function AddToCartBtn({ styles }: { styles?: string }) {
  return (
    <button
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-white text-accent-500 transition-colors duration-300 hover:text-accent-700',
        styles
      )}
    >
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6 11C6 11 1 8.13637 1 4.65909C1.0001 4.0445 1.20833 3.44892 1.58927 2.9736C1.97022 2.49828 2.50037 2.17256 3.08959 2.05183C3.67882 1.93109 4.29074 2.02279 4.82133 2.31134C5.35191 2.59988 5.76841 3.06746 6 3.63458L5.99999 3.63458C6.23159 3.06747 6.64809 2.59989 7.17867 2.31134C7.70926 2.02279 8.32118 1.93109 8.9104 2.05183C9.49963 2.17256 10.0298 2.49828 10.4107 2.9736C10.7917 3.44892 10.9999 4.0445 11 4.65909C11 8.13637 6 11 6 11Z'
          stroke='#currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}
