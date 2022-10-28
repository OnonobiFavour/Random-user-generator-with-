import React from 'react'

const Paginate = ({totalPost, dataPerPage, setCurrentPage, currentPage}) => {

    let pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost/dataPerPage); i++){
        pageNumber.push[i]
    }
  return (
    <div className='btn'>
        {currentPage !== 1 && <button onClick={()=> setCurrentPage(currentPage -1)}>&larr;</button>}
        {currentPage !== 5 && <button onClick={()=> setCurrentPage(currentPage +1)}>&rarr;</button>}
    </div>
  )
}

export default Paginate