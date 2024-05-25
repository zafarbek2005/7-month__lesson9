import React from 'react'
import './login.scss'
import Footer from '@/app/Components/Footer/Footer'

const Login = () => {
  return (
    <>
    <div className="login container">
        <h3>Account</h3>
        <div className="INPUTS">
            <input type="text"  placeholder='ZAFARBEK'/>
            <input type="text"  placeholder='Programmer'/>
            <input type="text"  placeholder='zafarbekProgrammer'/>
            <input type="text"  placeholder='Password'/>
            <input type="text"  placeholder='Confirm password'/>
            <button>Save</button>
        </div>
    
    </div>
       
    <div className="container">
        <Footer/>
    </div>
    
    
    </>
  )
}

export default Login