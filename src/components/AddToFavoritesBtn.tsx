export default function AddToFavoritesBtn() {
  return (
    <button
      className={
        'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-violet-500 transition-colors duration-300 hover:text-violet-700'
      }>
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 11.002C6 11.002 1 8.13832 1 4.66105C1.0001 4.04646 1.20833 3.45087 1.58927 2.97555C1.97022 2.50023 2.50037 2.17451 3.08959 2.05378C3.67882 1.93305 4.29074 2.02475 4.82133 2.31329C5.35191 2.60184 5.76841 3.06942 6 3.63653L5.99999 3.63653C6.23159 3.06942 6.64809 2.60184 7.17867 2.31329C7.70926 2.02475 8.32118 1.93305 8.9104 2.05378C9.49963 2.17451 10.0298 2.50023 10.4107 2.97555C10.7917 3.45087 10.9999 4.04646 11 4.66105C11 8.13832 6 11.002 6 11.002Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
