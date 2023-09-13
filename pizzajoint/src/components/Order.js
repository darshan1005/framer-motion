import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible:{
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      mass: 0.4,
      damping: 10,
      // delay:0.2,
      when : 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}

const childVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Order = ({ pizza , setShowModel}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setShowModel(!setShowModel);
    },5000)
  })
    const [showTitle, setTitle] = useState(true)
  setTimeout(()=>{
    setTitle(false)
  },4000)
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order">
      <AnimatePresence>
        {showTitle && (<motion.h2 exit={{x:'-100vw'}}>Thank you for your order 🤗</motion.h2>)}
      </AnimatePresence>
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;