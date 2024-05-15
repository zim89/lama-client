type TCheckBoxProps = {
  title: string
}

export default function CheckBox({ title }: TCheckBoxProps) {
  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex cursor-pointer items-center rounded-full pr-2'
        htmlFor='link'
      >
        <input
          type='checkbox'
          className="before:content[''] before:bg-blue-gray-500 peer relative h-[1.625rem] w-[1.625rem] cursor-pointer appearance-none rounded-md border border-gray-700 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-700  checked:before:bg-gray-700"
          id='link'
        />
        <span className='pointer-events-none absolute left-[38%] top-2/4 -translate-x-2/4 -translate-y-2/4 text-[#080709] opacity-0 transition-opacity peer-checked:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='currentColor'
            stroke-width='1'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
      </label>
      <label
        className='mt-px cursor-pointer select-none font-light'
        htmlFor='link'
      >
        <p className='text-blue-gray-900 font-bases flex text-xs antialiased'>
          {title}
        </p>
      </label>
    </div>
  )
}
