import { AiOutlineRight } from "react-icons/ai"; 
import React from 'react';
import './Home.scss'
import Bg from './img/bg.svg'
import Image from 'next/image';
import Product from "../Products/Product";

const Home = () => {
  return (
    <>
 <div className='Main__hero container '>
      <Image className='Hero__img' src={Bg} alt='kk' width={200} height={100}/>
      
      <div className="Absolute">
          <p>Posted on startup</p>
          <h3>Step-by-step guide to choosing <br /> great font pairs</h3>
          <p id='pi'> By <mark id='mark'>James West</mark> | May 23, 2022</p>
          <p id='pl'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button>Read More<AiOutlineRight /> </button>
      </div>

    <Product/>

 </div>
      
    </>
  );
};

export default Home;
