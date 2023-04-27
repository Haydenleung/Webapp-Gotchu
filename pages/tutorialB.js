import React from 'react'
import styles from "../styles/TutorialB.module.css"
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import AnswerButton from '@/components/AnswerButton'
import QuestionIndicator from '@/components/QuestionIndicator'

export default function TutorailB() {

    return (
        <>
            <Head>
                <title>Tutorial</title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <Link href="/" className={styles.filterB} />
                <div className={styles.filter} />
                <div className={styles.main_container}>
                    <div className={styles.clickIndicator}>
                        <Image src={'click_dot.svg'} width={65} height={65} className={styles.clickDot} />
                        <motion.img
                            src={'click_hand.svg'}
                            width={100}
                            height={100}
                            className={styles.clickHand}
                            animate={{ x: ["0%", "5%"], y: ["0%", "5%"] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeOut"
                            }}
                        />
                    </div>
                    <Image src={"/icons/SelectArrow.svg"} width={25} height={57} className={styles.selectionArrow} />
                    <h4 className={styles.tutorialText}>Select Answer</h4>
                    <Image src={"/icons/BackArrow.svg"} width={25} height={57} className={styles.backArrow} />
                    <h4 className={styles.tutorialTextTwo}>Back Button</h4>
                    <div className={styles.pageContent}>
                        <div
                            className={styles.topContent}
                        >
                            <div className={styles.pageIndicator}>
                                <QuestionIndicator />
                            </div>
                            <div className={styles.question}>
                                <h6>Question 1</h6>
                                <h4>Are you or someone else being bullied?</h4>
                            </div>
                            <div className={styles.answer}>
                                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false); setNext(true); setAnswerOne("A") }}>
                                    <AnswerButton img={'/answer/one_me.png'} txt={'Me'} color={'purple'} />
                                </div>
                                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false); setNext(true); setAnswerOne("B") }}>
                                    <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'green'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomGraphic}>
                        <motion.img
                            src={'/walkingBG_long.svg'}
                            className={styles.walkingImg}
                            width={500}
                            height={500}
                            initial={{ x: -540 }}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            initial={{ x: "120%" }}
                        >
                            <motion.img
                                src={'/character/walkingHugo_p.svg'}
                                width={80}
                                height={80}
                                initial={{ y: "10%", rotate: 5 }}
                            />
                        </motion.div>
                        <motion.div
                            className={styles.bottomButton}
                            initial={{ opacity: "1000%" }}
                        >
                            <Link href={{ pathname: "/start" }}>
                                <BackButton />
                            </Link>
                            <Link href={{ pathname: "/transition" }}>
                                <NextButton />
                            </Link>
                        </motion.div >
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}

