import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/Result.module.css"
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'
import Response from '@/components/Response'
import { useState } from 'react'
import { useRouter } from 'next/router'
import SuggestionCard from '@/components/SuggestionCard'
import Suggestion from '@/components/Suggestion'
import result from '../data/results.json'

export default function Result() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;
    const answerOne = query.answerOne;
    const answerTwo = query.answerTwo;
    const answerThree = query.answerThree;
    const answerFour = query.answerFour;
    let arr = [answerOne, answerTwo, answerThree, answerFour];
    let concatenatedString = arr.join('').concat();
    /* console.log(arr);
    console.log(concatenatedString); */
    const [info, setInfo] = useState([...result]);

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
                                    <h6 div className={styles.encouragingText}>
                                        {
                                            name !== '' ? <>Hi, {name}. </> : null
                                        }
                                        We know it is not easy.</h6>
                                    <h3>You did a great job!</h3>
                                </div>
                                <div className={styles.resultImg}>
                                    <Image src={'/result/result-blob.svg'} width={300} height={169} />
                                </div>

                                <div className={styles.userAns}>
                                    <p className={styles.sectionHead}>Result Summary</p>
                                    <div className={styles.ans}>
                                        <div>
                                            <div className={styles.ansContainer}>
                                                <p className={styles.ansHeading}>You have chosen</p>
                                                {
                                                    info && info.map((obj, index) => {
                                                        if (obj.id == concatenatedString) {
                                                            return (
                                                                <Response key={index} text={obj.summary} />
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.middleContent}>
                            <p className={styles.sectionHead}>Suggestions for You</p>
                            <div className={styles.response}>
                                {
                                    info && info.map((obj, index) => {
                                        if (obj.id == concatenatedString) {
                                            return (
                                                <>
                                                    <Suggestion key={index} color='purple' heading={'Coping Tips'} text={obj.coping} />
                                                    <Suggestion key={index} color='green' heading={'Self Care Tips'} text={obj.selfcare} />
                                                    <Suggestion key={index} color='orange' heading={'Crisis Phone Numbers'} text={obj.phone} />
                                                    {/* <SuggestionCard key={index} text={obj.suggestion} /> */}
                                                </>
                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>

                        <div className={styles.bottomContent}>
                            <Link href={{ pathname: "/resources", query: { name, color, answerOne, answerTwo, answerThree, answerFour } }}>
                                <Button color='#8B4A51'
                                    text='Find Support'
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
