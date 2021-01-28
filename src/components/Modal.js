import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'

const Modal = ({showModal}) => {
    const modalVariant = {
        hidden: {
            opacity: 0,
            y:'-100vh'
        },
        visible: {
            opacity: 1,
            y: '200px',
            transition: {
                delay:0.6,
                type: 'spring',
                damping:20
            }
        },
        
    }

    const backdropVar = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    
    return (
        <AnimatePresence>
        { showModal && (
                <motion.div
                    variants={backdropVar}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="backdrop">
                        <motion.div
                            variants={modalVariant}
                            className="modal">
                            <p>Want to make another pizza ?</p>
                            <Link to="/">
                                <button>Start again</button>
                            </Link>   
                        </motion.div>
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export {Modal as default}