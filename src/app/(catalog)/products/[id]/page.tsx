export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className='container'>
      <h2 className='text-xl text-red-500'>Product Details {params.id}</h2>
    </div>
  )
}
