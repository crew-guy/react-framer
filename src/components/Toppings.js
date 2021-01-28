import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Toppings = ({ addTopping, pizza }) =>
{
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

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

  const itemVariant = {
    hidden: {},
    visible: {
      transition: {type:'spring', stiffness:150},
    },
    hover:{ scale: 1.3, color: '#ffc671', originX: 0 }
  }

  const nextVariant = {
    hidden: { x: '-100vw' },
    visible: {
      x: 0,
      transition: {duration:0.2, type:'spring', stiffness:50},
    },
    hoverBtn: {
      scale: 1.1,
      textShadow: '0px 0px 8px #ffffff',
      boxShadow: '0px 0px 8px #ffffff',
      transition: {
        yoyo:Infinity
      }
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              variants={itemVariant}
              whileHover="hover"
              key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={nextVariant}
          whileHover="hoverBtn"
        transition={{duration:0.2, type:'spring', stiffness:50}}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;