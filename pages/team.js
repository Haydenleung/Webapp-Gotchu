import React from 'react'
import styles from "../styles/Team.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

export default function Team() {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.contentContainer}>
                        <img src='/icons/fill/group.png' />
                        <h3>Our Team</h3>
                    </div>
                </div>


                <Card />

                <Link href="/"><button className={styles.actionBtn}>Back to Home</button>
                </Link>

            </div>
        </div>
    )
}
