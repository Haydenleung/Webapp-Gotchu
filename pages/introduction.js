import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'
import IntroductionCard from '@/components/IntroductionCard'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function Introduction({ dir }) {

    var pageTitle = process.env.NEXT_PUBLIC_TITLE;

    const { locales } = useRouter();
    const intl = useIntl();
    const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
    const acknowledgeButton = intl.formatMessage({ id: "page.intro.button" })

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
                            <div className={styles.pageTitle}>
                                <h4>{pageTitle}</h4>
                            </div>

                            <div className={styles.introCard}>
                                <IntroductionCard />
                            </div>
                        </div>
                        <div className={styles.bottomContent}>
                            <Link href='/personal'>
                                <Button color='#896686'
                                    text={acknowledgeButton}
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
