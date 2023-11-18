import React, { useRef } from 'react'
import './Portfolio.scss';
import {motion,useScroll,useSpring, useTransform} from 'framer-motion';
const items  = [
  {
  id:1,
  title:"React Commerce",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIF-BInCbenZa1RTthWeYFxXv7R7WSR1sDQ&usqp=CAU",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem."
},
  {
  id:2,
  title:"ecommerce with next js",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSb_d0arDC3vW3zb-uBGCjV0yoPYZMmOdpA&usqp=CAU",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem."
},
  {
  id:3,
  title:"commerce with vanilla css and js",
  img:"https://images.fineartamerica.com/public/images/overview/homeDecor/throwPillows002.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem."
},
  {
  id:4,
  title:"Dragon news with react",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOiOe1Uz4FnSyvBxEeSEOb33O4apLnKqutPZcOFIVEjEbECApUE7-_YCOvriE7lzYQm0&usqp=CAU",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem."
},
  {
  id:5,
  title:"ecommerce with backend",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIF-BInCbenZa1RTthWeYFxXv7R7WSR1sDQ&usqp=CAU",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem."
}
]
const Single = ({item}) =>{
  console.log(item);
  const ref = useRef();
  const { scrollYProgress } = useScroll({target:ref,
    // offset:['start start','end start']
  });
  const y = useTransform(scrollYProgress,[0,1],[-300,300]);
  return (<section>
  <div className="container">
  <div className="wrapper">
    <div className="imgContainer" ref={ref}>
      <img src={item.img} alt="" />
    </div>
    <motion.div className="textContainer" style={{y}}>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <button>see demo</button>
    </motion.div>
  </div>
  </div>
  </section>)
}
export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({target:ref,offset:['end end','start start']});
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30
  })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
          <h1>Featured Work</h1>
          <motion.div style={{scaleX}} className="progressBar">

          </motion.div>
        </div>
        {
          items.map(item =><Single item={item} key={item.id} ></Single>)
        }
    </div>
  )
}
