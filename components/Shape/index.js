import React from 'react'
import styles from './Shape.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Shape() {

    const mainVar = {
        start: {
            display: "flex",
        },
        finished: {
            display: "none",
            transition: {
                delay: 7.75,
                ease: "easeInOut"
            }
        }
    }

    const svgVariants = {
        start: {
            opacity: 1,
            pathLength: 0,
        },
        finished: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 5,
                ease: "easeInOut"
            }
        }
    }

    const svgVar = {
        start: {
            // opacity: 1
            x: 0,
            scale: 2.5
        },
        finished: {
            x: -79,
            fill: 'white',
            scale: 1,
            // opacity: 0,
            transition: {
                delay: 5.2,
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    }

    // const imgVar = {
    //     start: {
    //         opacity: 0,

    //     },
    //     finished: {
    //         opacity: 1,

    //         transition: {
    //             delay: 5,
    //             duration: 1,
    //             ease: "easeInOut"
    //         }
    //     }
    // }


    const imgVar = {
        start: {
            opacity: 0,
            x: -0,
        },
        finished: {
            opacity: 1,
            x: 28,
            transition: {
                delay: 5.2,
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div
            className={styles.svg}
            variants={mainVar}
            initial="start"
            animate="finished"
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 276.5 284.9"
                xmlSpace="preserve"
                stroke="#ffffff"
                variants={svgVar}
                initial="start"
                animate="finished"
                className={styles.loadingOne}
                fill="transparent"
            >
                <motion.path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    // d="M205,118.2c-2.2,5.1-12.3,28.8-36,40.8c-14.5,7.4-29.9,5.8-60.7,2.7c0,0-51.4-5.1-81.5-26.6
                    // c-5.9-4.2-10-9.5-10-9.5c-3.7-4.4-6.4-9.4-7.7-15.1c-3.6-14.9,4.2-35.8,4.2-35.8c9.9-26.1,28.3-41.1,35.9-47.1
                    // c6.7-5.3,12.3-8.5,13.4-9.3c3.2-1.7,21.1-11.7,44.7-13.4c7.3-0.6,47.7-2.5,78.1,27.3c6.1,5.9,24.9,24.4,26.4,52.3
                    // C212.6,100.2,207.7,112,205,118.2L205,118.2z"
                    d="M195.9,94.7c-4.7-9.4-12.2-15.9-21.6-20.6s-19.7-7.5-31.9-7.5c-21.6,0-38.4,7.5-51.6,21.6s-19.7,32.8-19.7,55.3
                    c0,25.3,6.6,44.1,19.7,58.1c13.1,14.1,31.9,20.6,56.2,20.6c15.9,0,30-3.7,40.3-12.2c11.2-8.4,19.7-19.7,24.4-35.6h-83.4v-48.7h143.4
                    v60.9c-4.7,16.9-13.1,31.9-25.3,45.9c-11.2,14.1-26.2,25.3-44.1,34.7c-17.8,8.4-38.4,13.1-60.9,13.1c-27.2,0-50.6-5.6-71.2-17.8
                    c-20.6-12.2-37.5-28.1-48.7-48.7s-16.9-45-16.9-71.2s5.6-50.6,16.9-71.2c12.2-20.6,28.1-37.5,48.7-48.7c20.6-12.2,45-17.8,71.2-17.8
                    c31.9,0,59,7.5,81.5,23.4s37.5,37.5,44.1,64.7L195.9,94.7L195.9,94.7z"
                    variants={svgVariants}
                    initial="start"
                    animate="finished" />
                {/* <motion.path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                    fill="white"
                    d="M205,118.2c-2.2,5.1-12.3,28.8-36,40.8c-14.5,7.4-29.9,5.8-60.7,2.7c0,0-51.4-5.1-81.5-26.6
                    c-5.9-4.2-10-9.5-10-9.5c-3.7-4.4-6.4-9.4-7.7-15.1c-3.6-14.9,4.2-35.8,4.2-35.8c9.9-26.1,28.3-41.1,35.9-47.1
                    c6.7-5.3,12.3-8.5,13.4-9.3c3.2-1.7,21.1-11.7,44.7-13.4c7.3-0.6,47.7-2.5,78.1,27.3c6.1,5.9,24.9,24.4,26.4,52.3
                    C212.6,100.2,207.7,112,205,118.2L205,118.2z"
                    variants={svgVar}
                    initial="start"
                    animate="finished" /> */}
            </motion.svg>
            {/* <motion.img
                src={'../loadingTwo.svg'}
                className={styles.loadingTwo}
                width={1000}
                height={1000}
                variants={imgVar}
                initial="start"
                animate="finished"
            /> */}
            <motion.img
                src={'../G_rest.svg'}
                className={styles.loadingThree}
                width={1000}
                height={1000}
                variants={imgVar}
                initial="start"
                animate="finished"
            />
        </motion.div >
    );
}