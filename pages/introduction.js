import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'
import IntroductionCard from '@/components/IntroductionCard'
import Button from '@/components/Button'
import dots from '@/public/carouselIndicator.svg'


export default function introduction() {

    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>Introduction</h4>
                        </div>
                        {/* Replace by Cards Components */}
                        <div className={styles.introCard}>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        {/* Replace by Buttons Components */}
                        <div></div>
                    </div>
                </div>


            </div>

        </div>
    )
}
