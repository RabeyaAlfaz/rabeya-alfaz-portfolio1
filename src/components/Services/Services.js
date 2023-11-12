import React from 'react'
import {motion} from 'framer-motion';
import './Services.scss'
const variants = {
    initial:{
        x:-500,y:100,
        opacity:0
    },
    animate:{
              x:0,
              opacity:1,y:0,
              transition:{
                    duration:1,
                    staggerChildren:0.1
              }
    }
}
const Services = () => {
    return (
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>for your </motion.b>business</h1>
                    <button>What We Do</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Branding</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero at perferendis mollitia repellat. Voluptate dolore inventore sequi repellendus, magnam at quaerat tempora impedit, quasi, natus ullam ab exercitationem temporibus neque?
                    </p>
                    <button>button</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Branding</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero at perferendis mollitia repellat. Voluptate dolore inventore sequi repellendus, magnam at quaerat tempora impedit, quasi, natus ullam ab exercitationem temporibus neque?
                    </p>
                    <button>button</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Branding</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero at perferendis mollitia repellat. Voluptate dolore inventore sequi repellendus, magnam at quaerat tempora impedit, quasi, natus ullam ab exercitationem temporibus neque?
                    </p>
                    <button>button</button>
                </motion.div>
                <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                    <h1>Branding</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero at perferendis mollitia repellat. Voluptate dolore inventore sequi repellendus, magnam at quaerat tempora impedit, quasi, natus ullam ab exercitationem temporibus neque?
                    </p>
                    <button>button</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;