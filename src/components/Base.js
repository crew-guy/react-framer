import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];


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
      className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              variants={itemVariant}
              whileHover="hover"
              key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
            variants={nextVariant}
            whileHover="hoverBtn"
            >Next</motion.button>
          </Link>
        </div>
      )}

    </motion.div>
  )
}

export default Base;