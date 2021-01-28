import React from 'react'
import {motion, useCycle} from 'framer-motion'


const Loader = () =>
{
    const loaderVar = {
        animationOne: {
            x: [-20, 20],
            y: [0, -30],
            transition: {
                x: {
                    yoyo: Infinity,
                    duration:0.5
                },
                y: {
                    yoyo: Infinity,
                    duration: 0.25,
                    ease:"easeOut"
                },
            }
        },
        animationTwo: {
            x: 0,
            y: [0, -40],
            transition: {
                y: {
                    yoyo: Infinity,
                    duration: 0.15,
                    ease:"easeOut"
                },
            }
        }
    }

    const [anim, cycleAnim] = useCycle("animationOne", "animationTwo")
    return (
        <>
        <motion.div
            variants={loaderVar}
            animate={anim}
            className="loader"
        >
        </motion.div>
        <button onClick={()=>cycleAnim()}>Change Loader</button>
        </>
    )
}

export { Loader as default }