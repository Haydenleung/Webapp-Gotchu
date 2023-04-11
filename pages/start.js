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
        }, 8000);
    }

    const [isNext, setIsNext] = useState(false);

    const walkingVariants = {
        start: {
            x: -20,
            transition: {
                duration: 12.5,
                ease: "linear",
                delay: 1
            }
        },
        next: {
            x: -240,
            transition: {
                duration: 7,
                ease: "linear",
                delay: 0.5
            }
        }
    }

    const characterVariants = {
        start: {
            y: ["-30%", "10%"],
            rotate: [0, 5],
            transition: {
                duration: 0.5,
                repeat: 24,
                repeatType: "reverse",
                ease: "easeIn",
                delay: 1
            }
        },
        next: {
            y: ["10%", "-30%"],
            rotate: [5, 0],
            transition: {
                duration: 0.5,
                repeat: 13,
                repeatType: "reverse",
                ease: "easeOut",
                delay: 0.5
            }
        }
    }

    return (
        <>
            <Head>
                <title>Get Started{name}{color}</title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <div className={styles.main_container}>
                    <div className={styles.pageContent}>
                        <div className={styles.topContent}>
                            <div className={styles.pageTitle}>
                                <h4>Hello <span>{name}</span></h4>
                            </div>
                            {/* Replace by Aniamte Shape Components */}
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
                                        // ease: "easeInOut",
                                        ease: "linear"
                                    }}
                                />
                                <p className={styles.shapeText}><span>Keep Pressing</span> and
                                    take a Deep Breathe<br /><br />
                                    <span>Release</span> your finger
                                    when you are Ready to Go</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.bottomGraphic}>
                        {/* Replace by Animated Graphic and Buttons Components */}
                        <motion.img
                            src={'/walkingBG.svg'}
                            className={styles.walkingImg}
                            width={1000}
                            height={1000}
                            initial={{ x: 650 }}
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
                                x: ["-180%", "120%"],
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
                            animate={{
                                opacity: "100%"
                            }}
                            transition={{
                                delay: 14
                            }}
                        >
                            <Link href={{ pathname: "/personal", query: { name, color } }}>
                                <BackButton />
                            </Link>
                            <Link href={{ pathname: "/start", query: { name, color } }}>
                                {/* <NextButton /> */}
                            </Link>
                        </motion.div >
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}
