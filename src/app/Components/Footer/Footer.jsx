import { AiFillLinkedin } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { AiFillFacebook } from "react-icons/ai"; 
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
    <footer>
    <section>
        <div className="left">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
        </div>

            <div className="right">
                <AiFillFacebook /><AiFillTwitterCircle /><AiFillInstagram /><AiFillLinkedin />
            </div>

    </section>




    </footer>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer