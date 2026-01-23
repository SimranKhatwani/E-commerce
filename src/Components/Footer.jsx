import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-900 '>
      <div className='flex flex-col items-center justify-center'>
       <h1 className='text-4xl font-serif text-white'>Stay Updated</h1>
      <p className='text-xl font-normal  text-white mt-6'>Get weekly book recommendations, exclusive deals, and be the first to know 
        about new arrivals</p>
    </div>
      
      <div className='flex flex-col md:flex-row'>
     <div className='mt-16 pl-8 w-full md:w-1/4'>
        <Link to ='/' className='text-2xl md:text-3xl font-bold text-orange-300 px-5 '> BookBazaar</Link>
        <p className='text-white font-normal mt-4 '>Your trusted destination for discovering <br/> amazing books. From bestsellers to <br/> hidden gems, we curate the finest <br/> collection for every reader.</p>

     </div>


     <div className='w-full md:w-1/4 pl-8 mt-10 '>
          <h3 className='text-white mt-6'> Quick Links </h3>
          <ul className='text-white mt-4  space-y-2 '>
            <li >Bestsellers</li>
            <li>New Arrivals</li>
            <li>Fiction</li>
            <li>Non-Fiction</li>
            <li>Gift Cards</li>
           
          </ul>
          </div>

<div className='w-full md:w-1/4 pl-8 mt-10'>
  <h3 className='text-white mt-6'> Customer Services  </h3>
          <ul className='text-white mt-4  space-y-2'>
            <li >Contact Us </li>
            <li>Shipping Info</li>
            <li>Returns & Exchange </li>
            <li>FAQs</li>
            <li>Size Guide</li>
            </ul>
           
</div>

<div className='w-full md:w-1/4 pl-8 mt-10'>
  <h3 className='text-white mt-6'>Stay Connected </h3>
  <p className='text-white mt-4 text-sm'>Get the latest book recommendations and
     exclusive offers delivered to your inbox.</p>
</div>

</div>

    </div>
  )
}

export default Footer
