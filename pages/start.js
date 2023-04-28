import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from "../styles/Start.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import { motion } from 'framer-motion'
import data from '../data/walking.json'
import DynamicMessage from '@/components/DynamicMessage'


export default function Start() {
    const [colorUrl, setColorUrl] = useState([...data]);
    const [colorHex, setColorHex] = useState('#896686');
    const [isNext, setIsNext] = useState(false);
    const [isTap, setIsTap] = useState(false);
    const [counter, setCounter] = useState(15);

    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;



    useEffect(() => {
        const interval = setInterval(() => {
            isTap === true ? setCounter(counter - 1) : ""
        }, 1000);
        switch (color) {
            case "purple":
                return setColorHex('#896686')
            case "green":
                return setColorHex('#b1bfa9')
            case "orange":
                return setColorHex('#D88D70')
            case "red":
                return setColorHex('#894751')
            case "brown":
                return setColorHex('9E8C6F')
            case "tan":
                return setColorHex('#A08381')
            default:
                return setColorHex('#896686')
        }
    })

    const nextClick = (e) => {
        setTimeout(() => {
            router.push({
                pathname: "/questionpage",
                query: { name: name, color: color }
            },
                "/questionpage")
        }, 4800);
    }

    const mainVariants = {
        next: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
            }
        }
    }

    const shapeVariants = {
        start: {
            opacity: 1,
            transition: {
                delay: 10.5
            }
        },
        next: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
            }
        },
        tap: {
            opacity: [1, 1],
            scale: [1, 0],
            rotate: [0, 90],
            height: ["24rem", "28rem"],
            borderRadius: ["70% 60% 45% 68% / 68% 68% 35% 38%", "99% 99% 99% 99% / 99% 99% 99% 99%"],
            transition: {
                duration: 15,
                ease: "linear"
            }
        }
    }

    const textVariants = {
        start: {
            opacity: 1,
            transition: {
                delay: 10.5
            }
        },
        next: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
            }
        }
    }

    const countVariants = {
        next: {
            opacity: 0.7,
            transition: {
                duration: 1,
                ease: "linear",
            }
        }
    }

    const buttonsVariants = {
        start: {
            opacity: 1,
            transition: {
                delay: 10.5
            }
        },
        next: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
            }
        }
    }

    const walkingVariants = {
        start: {
            x: [550, -120],
            transition: {
                duration: 6.8,
                ease: "linear"
            }
        },
        next: {
            x: [-120, -540],
            transition: {
                duration: 4.8,
                ease: "linear",
            }
        }
    }

    const characterVariants = {
        start: {
            y: ["-30%", "10%"],
            rotate: [0, 5],
            transition: {
                duration: 0.4,
                repeat: 16,
                repeatType: "reverse",
                ease: "easeIn",
            }
        },
        next: {
            y: ["10%", "-30%"],
            rotate: [5, 0],
            transition: {
                duration: 0.4,
                repeat: 11,
                repeatType: "reverse",
                ease: "easeOut",
            }
        }
    }

    return (
        <>
            <Head>
                <title>Get Started</title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <div className={styles.main_container}>
                    <div className={styles.pageContent}>
                        <motion.div
                            className={styles.topContent}
                            variants={mainVariants}
                            animate={isNext ? "next" : ""}>
                            <motion.div
                                className={styles.pageTitle}
                                transition={{
                                    delay: 10.5
                                }}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                            >
                                <DynamicMessage
                                    txt={"Hello " + name + "!!!"}
                                    txt2={'          '}
                                    txt3={'Get ready to meet your new quiz buddy, Hugo!'}
                                    txt4={'It will be with you every step of the way as you take on the quiz.'}
                                    txt5={"Before we start, let's start a breathing exercise."}
                                />
                            </motion.div>
                            <div className={styles.shape} onMouseDown={() => setIsTap(true)} onClick={() => { setIsNext(true); nextClick() }}>
                                <motion.div
                                    className={styles.box}
                                    initial={{ borderRadius: "70% 60% 45% 68% / 68% 68% 35% 38%", rotate: 0, opacity: 0 }}
                                    variants={shapeVariants}
                                    animate={isTap ? "tap" : "start"}
                                    style={{ background: colorHex }}
                                >
                                </motion.div>
                                <motion.p
                                    className={styles.shapeText}
                                    variants={textVariants}
                                    initial={{ opacity: 0 }}
                                    animate={isTap ? "next" : "start"}
                                ><span>Breathing Exercise</span><br /><br />
                                    Press the shape behind and slowly breathing for 15 seconds. Release your finger when you are ready to start.
                                </motion.p>
                                <motion.p
                                    className={styles.shapeTextTwo}
                                    variants={countVariants}
                                    initial={{ opacity: 0 }}
                                    animate={isTap ? "next" : ""}
                                >{counter}
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                    <div className={styles.bottomGraphic}>
                        <motion.img
                            src={'/walkingBG_long.svg'}
                            className={styles.walkingImg}
                            width={500}
                            height={500}
                            // initial={{ x: 650 }}
                            variants={walkingVariants}
                            animate={isNext ? "next" : "start"}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            transition={{
                                duration: 6,
                                delay: 1
                            }}
                            animate={{
                                x: ["-200%", "120%"],
                            }}
                        >
                            <motion.img
                                src={'/character/shadow.png'}
                                width={100}
                                height={100}
                                className={styles.walkingShadow}
                                initial={{ y: "30px", x: "-10px", scaleY: "0.5", opacity: "0.5" }}
                            />
                            {
                                colorUrl && colorUrl.map((info, index) => {
                                    if (info.color == color) {
                                        return (
                                            <motion.img
                                                key={index}
                                                src={info.url}
                                                width={80}
                                                height={80}
                                                initial={{ y: "10%" }}
                                                variants={characterVariants}
                                                animate={isNext ? "next" : "start"}
                                            />
                                        )
                                    }
                                })
                            }

                        </motion.div>
                        <motion.div
                            className={styles.bottomButton}
                            initial={{ opacity: "0%" }}
                            variants={buttonsVariants}
                            animate={isNext ? "next" : "start"}
                        >
                            <Link href={{ pathname: "/personal", query: { name, color } }}>
                                <BackButton />
                            </Link>
                            {/* <Link href={{ pathname: "/start", query: { name, color } }}>
                                <NextButton />
                            </Link> */}
                        </motion.div >
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}
