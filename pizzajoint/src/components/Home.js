import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './loader';
import NameRevel from './nameRevel';

const hoverVariant = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition : { delay: 2 }
  },
  hover: {
    scale:1.1, 
    textShadow: '0px 0px 8px rgd(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition :{
      duration: 0.3,
      yoyo: Infinity
    }
  }
  
}

const Home = () => {
  return (
    // animate={{marginTop: 200, opacity: 0.2, rotateZ: 180}}
    <>
      <NameRevel />
      <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1}} 
    transition={{delay:1.5, duration:1.5}}
    className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button 
        variants={hoverVariant}
        animate="visible"
        whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
    </>
    
  )
}

export default Home;