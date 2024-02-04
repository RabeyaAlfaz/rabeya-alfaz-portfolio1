import React, { useRef } from 'react'
import './Portfolio.scss';
import {motion,useScroll,useSpring, useTransform} from 'framer-motion';
const items  = [
  {
  id:1,
  title:"Speed Type",
  img:"https://i.postimg.cc/wjpyrJck/speed-Type.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://reverent-borg-f6d302.netlify.app/"
},
  {
  id:2,
  title:"ecommerce with js",
  img:"https://i.postimg.cc/ZnDmpyDC/ecommerce.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://first-e-commerce-site.netlify.app/"
},
  {
  id:3,
  title:"news Bulletin with React",
  img:"https://i.postimg.cc/L83yWM2V/bulletin.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://bulletin-today.netlify.app/"
},
  {
  id:4,
  title:"Currency master With Js",
  img:"https://i.postimg.cc/8zfpdtGD/currency-Master.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://roaring-parfait-0b029e.netlify.app/"
},
  {
  id:5,
  title:"World Cup Update",
  img:"https://i.postimg.cc/J4GMmPGJ/worldCup.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://world-cup-update.netlify.app/"
}
,
  {
  id:6,
  title:"Convention Center",
  img:"https://i.postimg.cc/9Q046djN/convention-center.png",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsum assumenda quas qui unde at eligendi nulla omnis, earum in voluptates vitae eos, veritatis optio maxime debitis distinctio tempora voluptatem.",
  link:"https://reverent-borg-f6d302.netlify.app/"
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
      <button><a href={item.link}>see demo</a></button>
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
