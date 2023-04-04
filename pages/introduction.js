import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'
import IntroductionCard from '@/components/IntroductionCard'
import Button from '@/components/Button'
import dots from '@/public/carouselIndicator.svg'


export default function Introduction() {

    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>Introduction</h4>
                        </div>

                        <div className={styles.introCard}>
                            <IntroductionCard />
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <Link href='/personal'>
                            <Button color='#896686'
                                hoverColor='#6E526B'
                                text='Acknowledge'
                                className={styles.actionBtn}

                            />
                        </Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
