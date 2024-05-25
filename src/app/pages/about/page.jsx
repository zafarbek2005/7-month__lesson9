import React from 'react'
import './about.scss'
import img from './img.svg'
import img2 from './img2.svg'
import Image from 'next/image'
import Footer from '@/app/Components/Footer/Footer'

const About = () => {
  return (
  <>
  <div className="card container">
      <div className="teext">
        <p>Our mision</p>
        <h3>Creating valuable content for  <br /> creatives all around the world</h3>
        <p id='f'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing.</p>
      </div>
      <div className="teext">
        <p>Our vision</p>
        <h3>Creating valuable content for  <br /> creatives all around the world</h3>
        <p id='f'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.  risus viverra adipiscing.</p>
      </div>
  </div>
  <div className="cart__flex container">
      <div className="tx">
        <h3>Our team of creatives</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat.</p>
      </div>

      <div className="cart__img">
      <Image className='Hero__img' src={img} alt='kk' width={200} height={100}/>
      </div>
  </div>
  <div className="cart__flex container">

    
  <div className="cart__img">
      <Image className='Hero__img' src={img2} alt='kk' width={200} height={100}/>
      </div>

      <div className="tx">
        <h3>Our team of creatives</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat.</p>
      </div>

  </div>
  
  
  <div className="container">
    <Footer/>
  </div>
  
  
  </>
  )
}

export default About