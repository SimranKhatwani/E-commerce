import React from 'react'

function  BookCard ({title,author,price,image,genre}) {
  return (
    <div  className="bg-white  shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className='w-full h-48 object-contain bg-gray-100 '/>
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{title} </h2>
        <h3 className='text-sm font-semibold text-gray-500'>{author}</h3>
        <h1 className='text-lg font-bold'>{price}</h1>
        <p className='text-sm font-semibold text-gray-500'>{genre}</p>

      </div>
    </div>
  )
}

export default BookCard
