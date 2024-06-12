import { cn } from '@/shared/lib/utils'

export default function AddToFavoritesBtn({ styles }: { styles?: string }) {
  return (
    <button
      className={cn(
        'flex size-10 items-center justify-center text-white transition-all duration-300 hover:text-secondary-700 lg:opacity-0 lg:group-hover:opacity-100 md:size-11',
        styles
      )}
    >
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='md:hidden'
      >
        <path
          d='M10 17.5C10 17.5 1.5 12.7273 1.5 6.93182C1.50017 5.90751 1.85416 4.91486 2.50176 4.12266C3.14937 3.33046 4.05063 2.7876 5.05231 2.58638C6.05399 2.38515 7.09426 2.53799 7.99626 3.0189C8.89825 3.49981 9.60629 4.2791 10 5.2243L9.99999 5.2243C10.3937 4.27911 11.1017 3.49981 12.0037 3.0189C12.9057 2.53799 13.946 2.38515 14.9477 2.58638C15.9494 2.7876 16.8506 3.33046 17.4982 4.12266C18.1458 4.91486 18.4998 5.90751 18.5 6.93182C18.5 12.7273 10 17.5 10 17.5Z'
          fill='currentColor'
          stroke='#6BBFB2'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='hidden md:block'
      >
        <path
          d='M12 22C12 22 1 15.6364 1 7.9091C1.00022 6.54334 1.45832 5.21982 2.2964 4.16355C3.13448 3.10728 4.30082 2.38347 5.59711 2.11517C6.8934 1.84687 8.23963 2.05065 9.40692 2.69186C10.5742 3.33308 11.4905 4.37214 12 5.63239L12 5.6324C12.5095 4.37215 13.4258 3.33308 14.5931 2.69187C15.7604 2.05065 17.1066 1.84687 18.4029 2.11517C19.6992 2.38347 20.8655 3.10728 21.7036 4.16355C22.5417 5.21982 22.9998 6.54334 23 7.9091C23 15.6364 12 22 12 22Z'
          fill='currentColor'
          stroke='#6BBFB2'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}
