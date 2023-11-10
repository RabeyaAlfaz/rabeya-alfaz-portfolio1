import React from 'react'
import './Hero.scss';
import{motion} from 'framer-motion';
const textVariants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVariants = {
  initial:{
    x:0
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20
    }
  }
}
export default function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="text-container" variants={textVariants} initial="initial" animate='animate'>
          <motion.h2  variants={textVariants}>Rabeya Alfaz</motion.h2>
          <motion.h1  variants={textVariants}>Web Developer and UI designer</motion.h1>
         <motion.div variants={textVariants} className="buttons">
            <motion.button  variants={textVariants}>See the latest Works</motion.button>
            <motion.button  variants={textVariants}>Contact me</motion.button>
         </motion.div>
         <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="sliding-text-container" variants={sliderVariants} initial="initial" animate="animate" >
          Web Developer and UI designer
        </motion.div>
        <div className="img-container">
          <img src="hero.png" alt="" />
        </div>
      </div>
    </div>
  )
}
