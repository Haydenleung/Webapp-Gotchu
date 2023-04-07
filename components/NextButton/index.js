import React from 'react'
import styles from './NextButton.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NextButton() {

    const variants = {
        over: { x: ["-10%", "0%"] }
    }

    const [isOver, setIsOver] = useState(false)

    return (
        <div className={styles.buttonContainer} onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
            <div className={styles.button}>Next</div>
            <motion.img
                src='/icons/nextArrow.svg'
                width={20}
                height={17}
                animate={isOver ? "over" : "noOver"}
                variants={variants}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeIn",
                }}
            />
        </div>
    )
}

