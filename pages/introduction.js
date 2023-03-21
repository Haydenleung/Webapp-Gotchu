import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/introduction.module.css"
import Link from 'next/link'

export default function introduction() {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.contentContainer}>
                        <h3>Introduction</h3>
                    </div>
                </div>

                <Link href="/">Landing page</Link>
            </div>
            <div>

            </div>
        </div>
    )
}
