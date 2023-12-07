import React from 'react'
import './Contact.scss';
export default function Contact() {
  return (
    <div className='contact'>
       <div className="textContainer">
            <h1>Let's Work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>rabeyaalfaz3@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>Dhaka,Bangladesh</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>017222*****</span>
            </div>
       </div>
       <div className="formContainer">
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
          </form>
          
       </div>
    </div>
  )
}
