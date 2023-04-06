import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from "../styles/Start.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import BackButton from '@/components/BackButton'
import { motion } from 'framer-motion'

export default function Start() {

    const router = useRouter();
    const query = router.query;
    const name = query.name;

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
                        <div className={styles.topContent}>
                            <div className={styles.pageTitle}>
                                <h4>Hello <span>{name}</span></h4>
                            </div>
                            {/* Replace by Aniamte Shape Components */}
                            <Link href="/questionpage" className={styles.shape}>
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
                            </Link>

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
                            animate={{ x: -100 }}
                            transition={{
                                duration: 12.5,
                                ease: "linear"
                            }}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            transition={{
                                duration: 6,
                            }}
                            animate={{
                                x: ["-120%", "120%"],
                            }}
                        >
                            <motion.img
                                src={'/character/walkingHugo.svg'}
                                width={80}
                                height={80}
                                transition={{
                                    duration: 0.5,
                                    repeat: 24,
                                    repeatType: "reverse",
                                    ease: "easeIn"
                                }}
                                initial={{ y: "10%" }}
                                animate={{
                                    y: ["-30%", "10%"],
                                }}
                            />
                        </motion.div>
                        <div>
                            {/* <Link href="/personal">
                                <BackButton />
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}
