import React from 'react'
import styles from "../styles/Personal.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'

export default function Team() {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.contentContainer}>
                        <h2>What's your name?</h2>
                    </div>
                </div>

                <h2>Pick a color you like</h2>
                <Characters />

                <Link href="/"><button className={styles.actionBtn}>Back to Home</button>
                </Link>

            </div>
        </div>
    )
}
