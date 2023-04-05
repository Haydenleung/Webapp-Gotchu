import React from 'react'
import { useRouter } from 'next/router'
import styles from "../styles/Start.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import BackButton from '@/components/BackButton'
import { motion } from 'framer-motion'

export default function Start() {
    return (
        <div className={styles.main}>
            <div className={styles.empty} />
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>Hi </h4>
                        </div>
                        {/* Replace by Aniamte Shape Components */}
                        <Link href="/questionpage" className={styles.shape}>
                            <motion.div
                                className={styles.box}
                                initial={{ borderRadius: "70% 60% 45% 68% / 68% 68% 35% 38%", rotate: 0 }}
                                whileTap={{
                                    scale: [1, 0.6],
                                    rotate: [0, 90],
                                    height: ["22rem", "28rem"],

                                    borderRadius: ["70% 60% 45% 68% / 68% 68% 35% 38%", "99% 99% 99% 99% / 99% 99% 99% 99%"]
                                }}
                                transition={{
                                    duration: 15,
                                    // ease: "easeInOut",
                                    ease: "linear"
                                }}
                            />
                            <p className={styles.shapeText}>Keep Pressing and
                                take a Deep Breathe<br /><br />
                                Release your finger
                                when you are Ready to Go</p>
                        </Link>

                    </div>
                </div>
                <div className={styles.bottomGraphic}>
                    {/* Replace by Animated Graphic and Buttons Components */}
                    <div className={styles.bottomContent}>
                        <Link href="/personal">
                            <BackButton />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.empty} />
        </div>
    )
}
