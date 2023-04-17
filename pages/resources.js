import React from 'react'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Resources.module.css'
import ResourcesButton from '@/components/ResourcesButton'
import Button from '@/components/Button'
import Image from 'next/image'
import logo from '/public/primary-use-logo.png'
import desktop from '/public/icons/desktop.svg'
import phone from '/public/icons/phone.svg'
import book from '/public/icons/book.svg'
import quiz from '/public/icons/quizIcon.svg'
import Head from 'next/head'
import Link from 'next/link'
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
                                    <ResourcesButton text='ERASE Bullying' imgSrc={desktop} color='var(--resources-purple)' />
                                    <ResourcesButton text='Youth Against Violence' imgSrc={phone} color='var(--resources-purple)' />
                                    <ResourcesButton text='Kids Help Phone' imgSrc={phone} color='var(--resources-purple)' />
                                    <ResourcesButton text='Healthy Schools BC' imgSrc={desktop} color='var(--resources-purple)' />

                                </div>
                            </div>
                        </section>
                        <section className={styles.referenceReading}>
                            <p className={styles.sectionHead}>Reference Reading</p>
                            <p className={styles.sectionText}>We offer Reference Reading resources for those looking to learn more about the effects of bullying. Our selection includes a range of materials, including articles, books, and research papers from reputable sources.</p>
                            <div className={styles.row}>
                                <div className={styles.buttons}>
                                    <ResourcesButton text='Article' imgSrc={book} color='var(--resources-red)' />
                                    <ResourcesButton text='Book' imgSrc={book} color='var(--resources-red)' />
                                    <ResourcesButton text='Article' imgSrc={book} color='var(--resources-red)' />
                                    <ResourcesButton text='Research' imgSrc={book} color='var(--resources-red)' />
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
                                    <div className={styles.quizButton}>
                                        <Image src={quiz} />
                                        Quiz
                                    </div>
                                    <div className={styles.quizButton}>
                                        <Image src={quiz} />
                                        Quiz
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className={styles.actionButton}>
                            <Link href={{ pathname: '/result', query: { name, answerOne, answerTwo, answerThree, answerFour } }}>
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
