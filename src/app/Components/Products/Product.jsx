import { DiTechcrunch } from "react-icons/di"; 
import { SiMicrostrategy } from "react-icons/si"; 
import { IoMdBusiness } from "react-icons/io"; 
import { BsFillRocketTakeoffFill } from "react-icons/bs"; 
// "use client";
import React from 'react'
import './Product.scss'
import Image from 'next/image'
import Footer from "../Footer/Footer";

async function getData() {

    const res = await fetch("https://dummyjson.com/products");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

const Product = async () => {
    const data = await getData();
    console.log(data?.products);
    let Data = data?.products?.slice(0,6).map(product => (
        <div className="cart" key={product.id}>
        <Image className='cart_img' src= {product.images[0]} alt={product.title} width={200} height={100}/>
        <p>By John Doe l Aug 23, 2021</p>
        <h3>{product.title}</h3>
        <p id='l'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </div>
    ))
    
  return (
    <>
    <h3>Popular blogs</h3>
    
    <div className="Wrapper__cards">
        {Data}
    </div>
    <h3 id="centr">Choose A Catagory</h3> 

    <div className="box">

        <div className="box__1">
            <div className="icon"><IoMdBusiness /></div>
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="box__1" id="yelow">
            <div className="icon"><BsFillRocketTakeoffFill /></div>
            <h3>Startup</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="box__1">
            <div className="icon"><SiMicrostrategy /></div>
            <h3>Economy</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div className="box__1">
            <div className="icon"><DiTechcrunch /></div>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
    </div>
    
    
    <Footer/>
    
    </>
  )
}

export default Product