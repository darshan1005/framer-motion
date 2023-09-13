import React from "react";
import {motion} from 'framer-motion'

const divVariants = {
    hidden: {
        opacity : 1,
        width: ["100%","0%"],
        transition: {
            duration: .8,
            delay: .5,
        }
    },visible: {
        opacity: 1,
        width: '100%'
    }
}

const nameRevel= () =>{
    return(
        <>
        <motion.div className="parent">
            <h1 className="text-center">I love Pizza</h1>
            <motion.div className="scaling"
            variants={divVariants}
            initial='visible'
            animate='hidden'
            ></motion.div>
        </motion.div>
        
        </>
    )
    
}

export default nameRevel;