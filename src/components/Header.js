import React from 'react';
import {motion} from 'framer-motion'

const Header = () =>
{
  const svgVariants = {
    hidden: {
      rotate:-180,
    },
    visible: {
      rotate: 0,
      transition: {
        duration:1
      }
    }
  }

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity:0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease:"easeInOut"
      }
    }
  }
  
  return (
    <header>
      <motion.div className="logo"
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.6}
      >
        <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        initial= {{y:-250}}
        animate={{y:-10}}
        transition={{delay:0.4, duration:0.8, type:'spring', stiffness:120}}
        className="title">
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;