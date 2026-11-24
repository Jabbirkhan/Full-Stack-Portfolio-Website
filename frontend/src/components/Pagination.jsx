import React from 'react'

const Pagination = ({totalPages, page, setPage}) => {

  const pages = [];
  for(let i=1; i<=totalPages; i++){
    pages.push(i);
  }

  return (
    <div className='flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-5'>
      {page > 1 && (
        <button onClick={()=>setPage(prev => Math.max(prev - 1, 1))} className='px-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
          Prev
        </button>
      )}
        {
          pages.map((p, index)=> (
            <button key={index} onClick={()=>setPage(p)} className={`${page === p ? 'bg-blue-500 text-white' : ''} px-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer`}>
              {p}
            </button>
          ))
      }
      { page < totalPages && (
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} className='px-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
        Next
        </button>
      )}
      {page < totalPages && (
        <button onClick={() => setPage(totalPages)} className='px-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer'>
          Last
        </button>
      )}
    </div>
  )
}

export default Pagination
