import React,{useState, useEffect} from 'react';
import {motion, AnimatePresence } from 'framer-motion'

const Order = ({ pizza, setShowModal }) =>
{

  useEffect(() => {
    setTimeout(() =>
    {
      setShowModal(true)
    }, 4000)
  }, [setShowModal])

  const [showTitle, setShowTitle] = useState(true)

  setTimeout(() =>
  {
    setShowTitle(false)
  },4000)

  const containerVariant = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 140,
        mass: 2,
        damping: 20,
        when: 'beforeChildren',
        staggerChildren:0.4
      },
    },
    hover: {},
    exit: {
      x:'-100vw'
    }
  }

  const childVar = {
    hidden:{opacity:0},
    visible:{opacity:1},
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      exit="exit"
      className="container order">

      <AnimatePresence>
      {showTitle && (
          <motion.h2
          exit={{
            y:-1000
          }}
          >Thank you for your order...</motion.h2>
      )}
      </AnimatePresence>
      <motion.p variants={childVar} >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVar}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;