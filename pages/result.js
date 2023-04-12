import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/Result.module.css"
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'
import Response from '@/components/Response'


export default function Result() {

    return (
        <>
            <Head>
                <title>Your Result</title>
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
                            <div className={styles.top}>
                                <div className={styles.pageTitle}>
                                    <h6>We know it is not easy.</h6>
                                    <h3>You did a great job!</h3>
                                </div>
                                {/* Replace by Graphic Components */}
                                <div className={styles.resultImg}>
                                    <Image src={'/result/result-blob.svg'} width={300} height={169} />
                                </div>
                                {/* Replace by Answer Components */}
                                <div className={styles.userAns}>
                                    <div className={styles.ans}>
                                        <Response imgSrc='/result/R1.svg' text='User Response 1'/>
                                    </div>
                                    <div className={styles.ans}>
                                        <Response imgSrc='/result/R2.svg' text='User Response 2' />
                                    </div>
                                    <div className={styles.ans}>
                                        <Response imgSrc='/result/R3.svg' text='User Response 3' />
                                    </div>
                                    <div className={styles.ans}>
                                        <Response imgSrc='/result/R4.svg' text='User Response 4' /></div>
                                </div>
                            </div>
                            {/* Replace by Animated Arrow with Text*/}
                            <div className={styles.readMore}></div>
                        </div>
                        <div className={styles.middleContent}>
                            <h4 className={styles.userName}> Hi</h4>
                            <div className={styles.response}></div>
                        </div>

                        <div className={styles.bottomContent}>
                            <Link href='/personal'>
                                <Button color='#896686'
                                    text='Acknowledge'
                                    className={styles.actionBtn}
                                />
                            </Link>
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
            </div >
        </>
    )
}
