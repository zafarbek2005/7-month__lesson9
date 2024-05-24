"use client";
import React from 'react'
import './Product.scss'
import Image from 'next/image'

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
    
    
    
    
    </>
  )
}

export default Product