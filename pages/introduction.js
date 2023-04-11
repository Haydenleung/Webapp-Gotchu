import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'
import IntroductionCard from '@/components/IntroductionCard'
import Button from '@/components/Button'


export default function Introduction() {

    return (
        <>
            <Head>
                <title>Introduction</title>
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
                                <h4>Introduction</h4>
                            </div>

                            <div className={styles.introCard}>
                                <IntroductionCard />
                            </div>
                        </div>
                        <div className={styles.bottomContent}>
                            <Link href='/personal'>
                                <Button color='#896686'
                                    text='Acknowledge'
                                    className={styles.actionBtn}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}
