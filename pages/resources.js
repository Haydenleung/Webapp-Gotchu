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
import { useIntl } from 'react-intl'

export default function Resources() {

    const { locales } = useRouter();
    const intl = useIntl();
    const pageTitle = intl.formatMessage({ id: "page.nav.resources" })
    const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
    const headingOne = intl.formatMessage({ id: 'page.resource.headingOne' });
    const contentOne = intl.formatMessage({ id: 'page.resource.contentOne' });
    const headingTwo = intl.formatMessage({ id: 'page.resource.headingTwo' });
    const contentTwo = intl.formatMessage({ id: 'page.resource.contentTwo' });
    const headingThree = intl.formatMessage({ id: 'page.resource.headingThree' });
    const contentThree = intl.formatMessage({ id: 'page.resource.contentThree' });

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
                        <Image className={styles.logo} src={logo} width={310} height={124} />
                        <section className={styles.externalSupport}>
                            <p className={styles.sectionHead}>{headingOne}</p>
                            <p className={styles.sectionText}>{contentOne}</p>
                            <div className={styles.row}>
                                <Image className={styles.img} src={'/resources/externalHelp.png'} width={168} height={351} />
                                <div className={styles.buttons}>

                                    <Link target='_blank' href={'https://www2.gov.bc.ca/gov/content/erase'}>
                                        <ResourcesButton text='ERASE Bullying' imgSrc={desktop} color='var(--resources-purple)' /></Link>
                                    <Link target='_blank' href={'http://www.youthagainstviolenceline.com/'}>
                                        <ResourcesButton text='Youth Against Violence' imgSrc={phone} color='var(--resources-purple)' /></Link>
                                    <Link target='_blank' href={'https://kidshelpphone.ca/'}>
                                        <ResourcesButton text='Kids Help Phone' imgSrc={phone} color='var(--resources-purple)' /></Link>
                                    <Link target='_blank' href={'https://www.talkspace.com/blog/category/bullying/'}>

                                        <ResourcesButton text='Free Bullying Treatment' imgSrc={desktop} color='var(--resources-purple)' /></Link>
                                </div>
                            </div>
                        </section>
                        <section className={styles.referenceReading}>
                            <p className={styles.sectionHead}>{headingTwo}</p>
                            <p className={styles.sectionText}>{contentTwo}</p>
                            <div className={styles.row}>
                                <div className={styles.buttons}>

                                    <Link target='_blank' href={'https://momlovesbest.com/bullying-prevention'}>
                                        <ResourcesButton text='How to Prevent Bullying' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link target='_blank' href={'https://www.psychologytoday.com/ca/blog/counseling-keys/201606/recovery-bullying-is-lifelong-process'}>
                                        <ResourcesButton text='Recovering from Bullying' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link target='_blank' href={'https://www.goodtherapy.org/blog/how-therapy-helps-heal-scars-of-childhood-bullying-1012164'}>
                                        <ResourcesButton text='How Therapy Helps' imgSrc={book} color='var(--resources-red)' /></Link>
                                    <Link target='_blank' href={'https://www.bullyfreeatwork.com/'}>

                                        <ResourcesButton text='Bully Free at Work' imgSrc={book} color='var(--resources-red)' /></Link>
                                </div>
                                <Image className={styles.img} src={'/resources/referenceReading.png'} width={168} height={351} />
                            </div>
                        </section>
                        <section className={styles.externalQuiz}>
                            <p className={styles.sectionHead}>{headingThree}</p>
                            <p className={styles.sectionText}>{contentThree}</p>
                            <div className={styles.row}>
                                <Image className={styles.img} src={'/resources/externalQuiz.png'} width={168} height={351} />
                                <div className={styles.buttons}>

                                    <Link target='_blank' href={'https://www.quizony.com/are-you-a-bully/index.html'}>

                                        <div className={styles.quizButton}>
                                            <Image src={quiz} />
                                            Am I A Bully?
                                        </div>
                                    </Link>

                                    <Link target='_blank' href={'https://www.psycom.net/bullying-test'}>

                                        <div className={styles.quizButton}>
                                            <Image src={quiz} />
                                            Am I Being Bullied?
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        {
                            color ?
                                <div className={styles.actionButton}>
                                    <Link href={{ pathname: '/result', query: { name, color, answerOne, answerTwo, answerThree, answerFour } }}>
                                        <Button text='Return to Result' color='var(--burgundy)' />
                                    </Link>
                                </div> : <></>
                        }

                    </div>
                </div>
                <div className={styles.empty} />

            </div>
        </>
    )
}
