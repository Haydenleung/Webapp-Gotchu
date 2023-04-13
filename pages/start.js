import React from 'react'
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


export default function Start() {

    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;

    const nextClick = (e) => {
        // e.preventDefault();
        // setLoading(true);
        setTimeout(() => {
            router.push({
                pathname: "/questionpage",
                query: { name: name, color: color }
            },
                "/questionpage")
        }, 4800);
    }

    const [isNext, setIsNext] = useState(false);

    const mainVariants = {
        next: {
            opacity: 0,
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
                delay: 7.3
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
                            <div className={styles.pageTitle}>
                                <h4>Hello <span>{name}</span></h4>
                            </div>
                            <div className={styles.shape} onClick={() => { setIsNext(true); nextClick() }}>
                                <motion.div
                                    className={styles.box}
                                    initial={{ borderRadius: "70% 60% 45% 68% / 68% 68% 35% 38%", rotate: 0 }}
                                    whileTap={{
                                        scale: [1, 0],
                                        rotate: [0, 90],
                                        height: ["24rem", "28rem"],
                                        borderRadius: ["70% 60% 45% 68% / 68% 68% 35% 38%", "99% 99% 99% 99% / 99% 99% 99% 99%"]
                                    }}
                                    transition={{
                                        duration: 15,
                                        ease: "linear"
                                    }}
                                />
                                <p className={styles.shapeText}><span>Keep Pressing</span> and
                                    take a Deep Breathe<br /><br />
                                    <span>Release</span> your finger
                                    when you are Ready to Go</p>
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
                                src={'/character/walkingHugo.svg'}
                                width={80}
                                height={80}
                                initial={{ y: "10%" }}
                                variants={characterVariants}
                                animate={isNext ? "next" : "start"}
                            />
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
