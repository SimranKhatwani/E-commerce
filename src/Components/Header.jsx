import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-white mt-5 flex flex-col md:flex-row items-center px-5 gap-4 md:gap-8 border-orange-300 border-b-2 pb-4'>
     
     

      {/* logo */}
      <Link to ='/' className='text-2xl md:text-3xl font-bold text-orange-300 px-5 '> BookBazaar</Link>
      
      {/* search bar */}
       
        <input type ="text" placeholder=" 🔍 Search for books , authors or ISBN...." className=' flex-1 w-full md:max-w-3xl text-black bg-transparent border border-gray-300 rounded py-2 px-4   ' />
       
      {/* icons */}

      <div className='flex gap-4'>
      <div className='flex gap-4'>
  <Link 
    to="/Account" 
    className='text-xl md:text-2xl text-gray-500'
  >
    👤 Account
  </Link>
</div>
   <Link 
    to="/Cart" 
    className='text-xl md:text-2xl text-gray-500'
  >
   🛒 Cart
  </Link>
      
      </div>
    
</div>






  )
}

export default Header
