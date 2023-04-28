import React from 'react';
import styles from "./DynamicMessage.module.css";
import { motion } from 'framer-motion';

export default function DynamicMessage({
    txt = "",
    txt2 = "",
    txt3 = "",
    txt4 = "",
    txt5 = ""
}) {

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05
            },
        }
    }

    const letter = {
        hidden: { opacity: 0, y: "10%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1
            }
        }
    }

    return (
        <>
            {
                txt !== "" || txt2 !== "" ?
                    <motion.h3
                        className={styles.textContainer}
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {
                            txt.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter} className={styles.text}>
                                        {char}
                                    </motion.span>
                                )
                            })
                        }
                        {
                            txt2 !== "" ?
                                <>
                                    <br />
                                    {
                                        txt2.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} className={styles.normal}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                                    }
                                </> : <></>
                        }
                        {
                            txt3 !== "" ?
                                <>
                                    <br />
                                    {
                                        txt3.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} className={styles.normal}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                                    }
                                </> : <></>
                        }
                        {
                            txt4 !== "" ?
                                <>
                                    <br /><br />
                                    {
                                        txt4.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} className={styles.normal}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                                    }
                                </> : <></>
                        }
                        {
                            txt5 !== "" ?
                                <>
                                    <br /><br />
                                    {
                                        txt5.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} className={styles.normal}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })
                                    }
                                </> : <></>
                        }
                    </motion.h3> : <></>
            }
        </>
    );
}
