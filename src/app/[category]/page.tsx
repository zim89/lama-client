import { notFound } from 'next/navigation'

const categories = [
  { path: 'girls' },
  { path: 'boys' },
  { path: 'babies' },
  { path: 'moms' },
  { path: 'dads' }
]

export default function page({ params }: { params: { category: string } }) {
  const category = categories.find(
    cat => cat.path === decodeURIComponent(params.category)
  )

  if (!category) notFound()

  return <div className='uppercase'>{params.category} page</div>
}
