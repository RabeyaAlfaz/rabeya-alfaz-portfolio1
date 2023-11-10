import React from 'react'
import {motion} from 'framer-motion';
import './Navbar.scss';
import Sidebar from '../Sidebar/Sidebar';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
          <Sidebar></Sidebar>
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:0.5}} transition={{duration:0.5}}>Rabeya Alfaz</motion.span>
            <div className="social-icon">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
