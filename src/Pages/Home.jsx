import React from 'react'
import booksss from '../Photos/booksss.png'

import CategoryCard from '../Components/Categorycard'
import fiction from '../Photos/fiction.jpg'
import nonFiction from '../Photos/nonFiction.jpg'
import sciencefiction from '../Photos/sciencefiction.jpeg'
import selfhelp from '../Photos/selfhelp.jpg'
import mystrythriller from '../Photos/mystrythriller.webp'
import biography from '../Photos/biography.jpg'

import BookCard from '../Components/BookCard'
import fictionbookk from '../Photos/fictionbookk.jpeg' 
import atomichabits from '../Photos/atomichabits.jpg'
import thediaryofyounggirl from '../Photos/thediaryofyounggirl.jpg'
import thursdaymurderclub from '../Photos/thursdaymurderclub.jpg' 


const Home = () => {
  return (
    <div >
      <div className='flex bg-orange-50'>
      <div className='flex-1'>
       <h1 className='text-6xl font-serif text-left mt-10 px-6'>Discover Your Next</h1>
      <h1 className='text-6xl text-orange-600 mt-4 font-serif text-left px-6 '>Great Read</h1>
      <p className='px-6 mt-8 text-xl text-gray-600 '>Curated collection of bestsellers, hidden gems, and literary classics.<br/> From cozy mysteries to epic adventures, find books that speak to your soul.</p>
      

      <button 
      onClick={()=> navigate ('/home')}
      className='text-white text-xl bg-orange-400 px-6 py-3 rounded-xl mt-8 ml-6 hover:bg-orange-500 transition duration-300 ease-in-out'>
        Browse Collection ➡
      </button>

      <button
       className='text-orange-800 text-xl bg-white px-6 py-3 rounded-xl mt-8 ml-6 border-2 border-orange-400 hover:bg-orange-100 transition duration-300 ease-in-out'>
        View New Arrivals 
      </button>
      
      </div>

      <div>
      <img src={booksss} alt="books"  className='w-[600px] h-[500px] mr-6 mt-4 rounded-xl object-cover '/>
       </div>

      </div>

        <div className='flex flex-col items-center justify-center mt-12 mb-10'>
          
      <h1 className='text-4xl font-serif '>Browse By Category </h1>

      <p className='mt-4 text-xl text-gray-600'>Explore our carefully curated categories to find exactly what you're looking for</p>

        </div>

        {/* categorycards */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        <CategoryCard
          title="Fiction"
          books="1247"
          description="Literary fiction, contemporary novels, and timeless classics."
          image={fiction}
          link="/fiction"
        />
        <CategoryCard
          title="Non-Fiction"
          books="892"
          description="Biographies, memoirs, history, and true stories."
          image={nonFiction}
          link="/non-fiction"
        />
        <CategoryCard
          title="Science Fiction"
          books="634"
          description="Space adventures, dystopian futures, and marvels."
          image={sciencefiction}
          link="/science-fiction"
        />
        <CategoryCard
          title="Self-Help"
          books="1056"
          description="Personal development, motivation, and wellness."
          image={selfhelp}
          link="/selfhelp"
        />
        <CategoryCard
          title="Mystery & Thriller"
          books="721"
          description="Thrillers, detective stories, and crime novels."
          image={mystrythriller}
          link="/mysterythriller"
        />
        <CategoryCard
          title="Biography"
          books="308"
          description=" Life stories of remarkable individuals."
          image={biography}
          link="/biography"
        />
      </div>

      <div>
        <div  className='flex flex-col items-center justify-center mt-12 mb-10 bg-orange-50'>
          <h1 className='text-4xl font-serif '>Bestsellers </h1>

      <p className='mt-4 text-xl text-gray-600'>The most loved books by our community of readers</p>

        

          {/* bookcard  */}

           <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-10">
          <BookCard
           title= "The Physcology of Money"
           author= "Morgan Housel"
           price= "$15.99"
           genre="Non-Fiction"
           image= {fictionbookk}
          />

          <BookCard
           title= "Atomic Habits"
           author= "James Clear"
           price= "$12.99"
           genre="Self-Help"
           image= {atomichabits}
          />

          <BookCard
           title= "The Diary of a Young Girl "
            author= "Anne Frank "
           price= " $12 "
           genre="Biography "
           image= {thediaryofyounggirl}
          />

          <BookCard
            title ="Thursday Murder Club "
            author ="Ricard Osman "
            price = "$14 "
            genre = "  Mystrythriller "
            image= {thursdaymurderclub}
            />

           </div>
            <div>
              
            </div>
          <button 
         onClick={()=> navigate ('/home')}
      className= '  text-orange-800 text-sm bg-white px-6 py-3 rounded-xl mt-12 ml-6 border-2 border-orange-400 hover:bg-orange-100 transition duration-300 ease-in-out'>
        View All Bestsellers Collection ➡
      </button>

        </div>
      </div>
    </div>

       
  )
}

export default Home
