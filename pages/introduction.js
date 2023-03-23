import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'
import IntroductionCard from '@/components/IntroductionCard'
import Button from '@/components/Button'
import introImg from '@/public/introImg.svg'
import dots from '@/public/carouselIndicator.svg'


export default function introduction() {

    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.contentContainer}>
                        <div className={styles.pageTitle}>
                            <p>Introduction</p>
                        </div>
                        <div className={styles.introCard}>
                            <IntroductionCard />
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.acknowledgeBtn}>Acknowledge</button>
                            <button className={styles.tutorialBtn}>Tutorial</button>
                            {/* <Button /> */}
                        </div>



                    </div>
                </div>

                <Link href="/">Landing page</Link>
            </div>

        </div>
    )
}
