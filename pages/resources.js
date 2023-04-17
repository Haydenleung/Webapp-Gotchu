import React from 'react'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Resources.module.css'
import ResourcesButton from '@/components/ResourcesButton'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/primary-use-logo.png'
import desktop from '/public/icons/desktop.svg'
import phone from '/public/icons/phone.svg'
import book from '/public/icons/book.svg'
import quiz from '/public/icons/quizIcon.svg'
import Head from 'next/head'
import { useRouter } from "next/router";

export default function Resources() {

    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const answerOne = query.answerOne;
    const answerTwo = query.answerTwo;
    const answerThree = query.answerThree;
    const answerFour = query.answerFour;

    return (
        <>
            <Head>
                <title>Resources</title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <div className={styles.main_container}>
                    <div className={styles.pageContent}>
                        <Image className={styles.logo} src={logo} width={310} height={124} />
                        <section className={styles.externalSupport}>
                            <p className={styles.sectionHead}>External Support</p>
                            <p className={styles.sectionText}>Here are some resources available to help you deal with bullying. You will find many online resources are available, including websites, blogs, and social media groups that provide information and support for those dealing with bullying.</p>
                            <div className={styles.row}>
                                <Image className={styles.img} src={'/resources/externalHelp.svg'} width={168} height={351} />
                                <div className={styles.buttons}>
                                    <Link href={'https://www2.gov.bc.ca/gov/content/erase'}>
                                        <ResourcesButton text='ERASE Bullying' imgSrc={desktop} color='var(--resources-purple)' /></Link>
                                    <Link href={'http://www.youthagainstviolenceline.com/'}>
                                        <ResourcesButton text='Youth Against Violence' imgSrc={phone} color='var(--resources-purple)' /></Link>
                                    <Link href={'https://kidshelpphone.ca/'}>
                                        <ResourcesButton text='Kids Help Phone' imgSrc={phone} color='var(--resources-purple)' /></Link>
                                    <Link href={'https://www.talkspace.com/blog/category/bullying/'}>
                                        <ResourcesButton text='Free Bullying Treatment' imgSrc={desktop} color='var(--resources-purple)' /></Link>

                                </div>
                            </div>
                        </section>
                        <section className={styles.referenceReading}>
                            <p className={styles.sectionHead}>Reference Reading</p>
                            <p className={styles.sectionText}>We offer Reference Reading resources for those looking to learn more about the effects of bullying. Our selection includes a range of materials, including articles, books, and research papers from reputable sources.</p>
                            <div className={styles.row}>
                                <div className={styles.buttons}>
                                    <Link href={'https://momlovesbest.com/bullying-prevention'}>
                                        <ResourcesButton text='How to Prevent Bullying' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link href={'https://www.psychologytoday.com/ca/blog/counseling-keys/201606/recovery-bullying-is-lifelong-process'}>
                                        <ResourcesButton text='Recovering from Bullying' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link href={'https://www.goodtherapy.org/blog/how-therapy-helps-heal-scars-of-childhood-bullying-1012164'}>
                                        <ResourcesButton text='How Therapy Helps' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link href={'https://www.bullyfreeatwork.com/'}>
                                        <ResourcesButton text='Bully Free at Work' imgSrc={book} color='var(--resources-red)' /></Link>
                                </div>
                                <Image className={styles.img} src={'/resources/referenceReading.svg'} width={168} height={351} />
                            </div>
                        </section>
                        <section className={styles.externalQuiz}>
                            <p className={styles.sectionHead}>External Quiz</p>
                            <p className={styles.sectionText}>Many websites offer quizzes to help test your knowledge and understanding of the effects of bullying. By taking these quizzes, you can assess your own understanding of the issue and identify areas where you may need to learn more.</p>
                            <div className={styles.row}>
                                <Image className={styles.img} src={'/resources/externalQuiz.svg'} width={168} height={351} />
                                <div className={styles.buttons}>
                                    <Link href={'https://www.quizony.com/are-you-a-bully/index.html'}>
                                        <div className={styles.quizButton}>
                                            <Image src={quiz} />
                                            Am I A Bully?
                                        </div>
                                    </Link>
                                    <Link href={'https://www.psycom.net/bullying-test'}>
                                        <div className={styles.quizButton}>
                                            <Image src={quiz} />
                                            Am I Being Bullied?
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <div className={styles.actionButton}>
                            <Link href={{ pathname: '/result', query: { name, answerOne, answerTwo, answerThree, answerFour }}}>
                                <Button text='Return to Result' color='var(--burgundy)' />
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={styles.empty} />

            </div>
        </>
    )
}
