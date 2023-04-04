import React from 'react'
import styles from "../styles/Personal.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'

export default function Personal() {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>What's your name?</h4>
                            <p>(Optional)</p>
                        </div>
                        {/* Replace by Input Components */}
                        <div className={styles.nameInput}>
                        </div>
                        <div className={styles.pagePick}>
                            <h4>Pick a color you like</h4>
                        </div>
                        {/* Replace by Characters Components */}
                        <div className={styles.character}>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        {/* Replace by Buttons Components */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
