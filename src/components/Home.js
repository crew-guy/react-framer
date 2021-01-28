import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Loader from './Loader'

const containerVariant = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: 'spring', stiffness: 140 },
  },
  hover: {},
  exit: {
    x:'-100vw'
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px #ffffff',
    boxShadow: '0px 0px 8px #ffffff',
    transition: {
      yoyo:Infinity
    }
  }
}

const Home = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"  
      whileHover="hover"
      exit="exit"
      className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;