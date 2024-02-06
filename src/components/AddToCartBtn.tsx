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
          d='M3.91667 3.17587C3.91667 2.59931 4.13616 2.04637 4.52686 1.63868C4.91756 1.23099 5.44747 1.00195 6 1.00195C6.55253 1.00195 7.08244 1.23099 7.47314 1.63868C7.86384 2.04637 8.08333 2.59931 8.08333 3.17587M1.41667 3.17587H10.5833C10.8135 3.17587 11 3.37052 11 3.61065V10.5672C11 10.8073 10.8135 11.002 10.5833 11.002H1.41667C1.18655 11.002 1 10.8073 1 10.5672V3.61065C1 3.37052 1.18655 3.17587 1.41667 3.17587Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
