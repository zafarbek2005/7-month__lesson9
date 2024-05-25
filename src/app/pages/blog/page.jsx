import React from 'react'
import'./blog.scss'
import Image from 'next/image'
import Rasm from '@/app/Components/Products/img.svg'
import Footer from '@/app/Components/Footer/Footer'

const Blog = () => {
  return (
   <>
   
   <div className="busnes container">
            <div className="text">
                <h3>Business</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.z</p>
                <p id='tr'>Blog  Business</p>
            </div>
   </div>
   
   <div className="search container">
        <input type="text" placeholder='Searching ...' />
   </div>
   <div className="busnes__batom container">
        <div className="rasm">
        <Image className='Hero__img' src={Rasm} alt='kk' width={200} height={100}/>
        </div>

        <div className="txt">
            <p>Business</p>
            <h3>Top 6 free website mockup tools 2022</h3>
            <p id='pp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            
        </div>
      
   </div>
   <div className="busnes__batom container">
        <div className="rasm">
        <Image className='Hero__img' src={Rasm} alt='kk' width={200} height={100}/>
        </div>

        <div className="txt">
            <p>Business</p>
            <h3>Top 6 free website mockup tools 2022</h3>
            <p id='pp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            
        </div>
      
   </div>
   <div className="busnes__batom container">
        <div className="rasm">
        <Image className='Hero__img' src={Rasm} alt='kk' width={200} height={100}/>
        </div>

        <div className="txt">
            <p>Business</p>
            <h3>Top 6 free website mockup tools 2022</h3>
            <p id='pp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            
        </div>
      
   </div>
   <div className="busnes__batom container">
        <div className="rasm">
        <Image className='Hero__img' src={Rasm} alt='kk' width={200} height={100}/>
        </div>

        <div className="txt">
            <p>Business</p>
            <h3>Top 6 free website mockup tools 2022</h3>
            <p id='pp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            
        </div>
      
   </div>
   
   
   
   <div className="container">
   <Footer/>
   
   </div>
   
   </>
  )
}

export default Blog