import React from 'react'
import {motion} from 'framer-motion'
const variants = {
  open:{
   transition:{
   staggerChildren:0.1
}
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    }
  }
}

const itemVariants ={
  open:{
    y:0,opacity:1
  },
  closed:{
    y:50,opacity:0
  }
}
export default function Links() {
  const items = [
    'HomePage',
    'Services',
    'Portfolio',
    'Contact',
    'About'
  ]
  return (
    <motion.div className='links' variants={variants}>
      <a href='https://drive.google.com/file/d/16YOJahXlxOSgt-0KjKiW37Fq74tU9nmI/view?usp=drive_link'>Resume</a>
      {
        items.map((item)=>(
          <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.95}}>{item}</motion.a>
        ))
      }
    </motion.div>
  )
}
