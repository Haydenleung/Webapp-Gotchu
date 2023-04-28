import React from 'react'
import styles from './AnswerButton.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AnswerButton({
    img = "",
    txt = "",
    color = "",
    isClickP = false,
    isClickG = false,
    isClickO = false
}) {

    const variants = {
        over: { x: ["-15%", "15%"] },
        noOver: { x: ["0%", "0%"] }
    }

    const [isOver, setIsOver] = useState(false)
    const [isOverG, setIsOverG] = useState(false)
    const [isOverO, setIsOverO] = useState(false)

    return (
        <>
            {
                color == 'purple' ?
                    <div
                        className={styles.contentP}
                        onMouseEnter={() => setIsOver(true)}
                        onMouseLeave={() => setIsOver(false)}
                        style={isClickP ? { backgroundColor: `#896686` } : { backgroundColor: `` }}  >
                        <Image className={styles.graphic} src={img} width={100} height={100} />
                        <p
                            className={styles.text}
                            style={isClickP ? { color: `white` } : { color: `` }}>
                            {txt}
                        </p>
                        {/* <motion.img className={styles.arrowP} src={'/answer/answerArrow.svg'} width={100} height={100}
                            animate={isOver ? "over" : "noOver"}
                            style={isClickP ? { filter: `invert(95%) sepia(1%) saturate(85%) hue-rotate(319deg) brightness(117%) contrast(100%)` } : {}}
                            variants={variants}
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeOut",
                            }} /> */}
                    </div > :
                    color == 'green' ?
                        <div
                            className={styles.contentG}
                            onMouseEnter={() => setIsOverG(true)}
                            onMouseLeave={() => setIsOverG(false)}
                            style={isClickG ? { backgroundColor: `#b1bfa9` } : { backgroundColor: `` }}  >
                            <Image className={styles.graphic} src={img} width={100} height={100} />
                            <p
                                className={styles.text}
                                style={isClickG ? { color: `white` } : { color: `` }}>
                                {txt}
                            </p>
                            {/* <motion.img className={styles.arrowG} src={'/answer/answerArrow.svg'} width={100} height={100}
                                style={isClickG ? { filter: `invert(95%) sepia(1%) saturate(85%) hue-rotate(319deg) brightness(117%) contrast(100%)` } : {}}
                                animate={isOverG ? "over" : "noOver"}
                                variants={variants}
                                transition={{
                                    duration: 0.4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeOut",
                                }} /> */}
                        </div> :
                        <div
                            className={styles.contentO}
                            onMouseEnter={() => setIsOverO(true)}
                            onMouseLeave={() => setIsOverO(false)}
                            style={isClickO ? { backgroundColor: `#D88D70` } : { backgroundColor: `` }}  >
                            <Image className={styles.graphic} src={img} width={100} height={100} />
                            <p
                                className={styles.text}
                                style={isClickO ? { color: `white` } : { color: `` }}>
                                {txt}</p>
                            {/* <motion.img className={styles.arrowO} src={'/answer/answerArrow.svg'} width={100} height={100}
                                style={isClickO ? { filter: `invert(95%) sepia(1%) saturate(85%) hue-rotate(319deg) brightness(117%) contrast(100%)` } : {}}
                                animate={isOverO ? "over" : "noOver"}
                                variants={variants}
                                transition={{
                                    duration: 0.4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeOut",
                                }} /> */}
                        </div>
            }
        </>
    );
}

