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
import Suggestion from '@/components/Suggestion'
import result from '../data/results.json'
import resulthugo from '../data/resulthugo.json'
import { motion } from "framer-motion";
import { useIntl } from 'react-intl'


export default function Result() {

    const { locales } = useRouter();
    const intl = useIntl();
    const pageTitle = intl.formatMessage({ id: "page.result.pageTitle" })
    const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
    const headingOne = intl.formatMessage({ id: 'page.result.headingOne' });
    const headingTwo = intl.formatMessage({ id: 'page.result.headingTwo' });
    const headingThree = intl.formatMessage({ id: 'page.result.headingThree' });
    const summaryTitle = intl.formatMessage({ id: 'page.result.summaryTitle' });
    const suggestionTitle = intl.formatMessage({ id: 'page.result.suggestionTitle' });
    const subTitleOne = intl.formatMessage({ id: 'page.result.subTitleOne' });
    const subTitleTwo = intl.formatMessage({ id: 'page.result.subTitleTwo' });
    const subTitleThree = intl.formatMessage({ id: 'page.result.subTitleThree' });
    const buttonOne = intl.formatMessage({ id: 'page.result.buttonOne' });
    const buttonTwo = intl.formatMessage({ id: 'page.result.buttonTwo' });

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
    const [pic, setPic] = useState([...resulthugo]);

    const currentLang = router.locale;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDes} />
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
                                            name !== '' ? <>{headingOne}, {name}. </> : null
                                        }
                                        {headingTwo}</h6>
                                    <h3>{headingThree}</h3>
                                </div>
                                <div className={styles.resultImg}>
                                    {
                                        pic && pic.map((obj, index) => {
                                            if (obj.id == concatenatedString) {
                                                return (
                                                    <motion.img key={index} src={obj.url} width={280} height={280}
                                                        animate={{
                                                            rotate: [3, -3],
                                                            transition: {
                                                                repeat: Infinity,
                                                                repeatType: "reverse",
                                                                duration: 2,
                                                                ease: "easeInOut"
                                                            }
                                                        }} />
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className={styles.userAns}>
                                    <p className={styles.sectionHead}>{summaryTitle}</p>
                                    <div className={styles.ans}>
                                        <div>
                                            <div className={styles.ansContainer}>
                                                {/* <p className={styles.ansHeading}>You have chosen</p> */}
                                                {/* {
                                                    info && info.map((obj, index) => {
                                                        if (obj.id == concatenatedString) {
                                                            return (
                                                                <Response key={index} text={obj.summary} />
                                                            )
                                                        }
                                                    })
                                                } */}
                                                {
                                                    info && info.map((obj, index) => {
                                                        if (obj.id === concatenatedString && currentLang == "fr") {
                                                            return (
                                                                <Response key={index} text={obj.summary_fr} />
                                                            )
                                                        } else if (obj.id === concatenatedString) {
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
                            <p className={styles.sectionHead}>{suggestionTitle}</p>
                            <div className={styles.response}>
                                {
                                    info && info.map((obj, index) => {
                                        if (obj.id === concatenatedString && currentLang == "fr") {
                                            return (
                                                <>
                                                    <Suggestion key={index} color='purple' heading={subTitleOne} text={obj.coping_fr} />
                                                    <Suggestion key={index} color='green' heading={subTitleTwo} text={obj.selfcare_fr} />
                                                    <Suggestion key={index} color='orange' heading={subTitleThree} text={obj.phone_fr} />
                                                </>
                                            )
                                        } else if (obj.id === concatenatedString) {
                                            return (
                                                <>
                                                    <Suggestion key={index} color='purple' heading={subTitleOne} text={obj.coping} />
                                                    <Suggestion key={index} color='green' heading={subTitleTwo} text={obj.selfcare} />
                                                    <Suggestion key={index} color='orange' heading={subTitleThree} text={obj.phone} />
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
                                    text={buttonOne}
                                    className={styles.actionBtn}
                                />
                            </Link>
                            <Link href='/personal'>
                                <Button color='#A18481'
                                    text={buttonTwo}
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
