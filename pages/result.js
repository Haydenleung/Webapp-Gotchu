import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/Result.module.css"
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'
import Response from '@/components/Response'
import { useRouter } from 'next/router'


export default function Result() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;
    const answerOne = query.answerOne;
    const answerTwo = query.answerTwo;
    const answerThree = query.answerThree;
    const answerFour = query.answerFour;

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
                                    <div className={styles.userName}>
                                        {
                                            name != '' ? <h5>Hi, {name}</h5> : null
                                        }
                                    </div>
                                    <h6 div className={styles.encouragingText}>We know it is not easy.</h6>
                                    <h3>You did a great job!</h3>
                                </div>

                                <div className={styles.resultImg}>
                                    <Image src={'/result/result-blob.svg'} width={300} height={169} />
                                </div>

                                <div className={styles.userAns}>
                                    <p className={styles.sectionHead}>Result Summary</p>
                                    <div className={styles.ans}>
                                        <div>
                                            <p className={styles.ansContainer}>You have chosen {answerOne} , {answerTwo}, {answerThree} and {answerFour}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Replace by Animated Arrow with Text*/}
                            {/* <div className={styles.readMore}></div> */}
                        </div>
                        <div className={styles.middleContent}>
                            <p className={styles.sectionHead}>Customized Suggestions</p>
                            <div className={styles.response}></div>
                        </div>

                        <div className={styles.bottomContent}>
                            <Link href='/resources'>
                                <Button color='#8B4A51'
                                    text='Get Help'
                                    className={styles.actionBtn}
                                />
                            </Link>
                            <Link href='/personal'>
                                <Button color='#A18481'
                                    text='Quiz Again'
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
