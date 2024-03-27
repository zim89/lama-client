'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import ReactPaginate from 'react-paginate'
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/IconsPack'

interface Props {
  count: number
  page: number
}

export default function Pagination({ count, page }: Props) {
  const searchParams = useSearchParams()
  const pageCount = Math.ceil(count / 12)
  const path = usePathname()
  const { replace } = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handlePageClick = (data: { selected: number }) => {
    const params = createQueryString('page', (data.selected + 1).toString())
    replace(`${path}?${params}`)
  }
  return (
    <>
      {pageCount > 1 ? (
        <ReactPaginate
          containerClassName='pagination'
          activeClassName='active-page'
          previousClassName='nav-item'
          pageClassName='page-item'
          nextClassName='nav-item'
          previousLabel={<ArrowLeftIcon />}
          nextLabel={<ArrowRightIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          breakLabel='...'
          renderOnZeroPageCount={null}
          forcePage={page}
        />
      ) : null}
    </>
  )
}
