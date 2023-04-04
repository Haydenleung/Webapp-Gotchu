import React from 'react'
import styles from "../styles/Start.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Start() {
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>Hi</h4>
                        </div>
                        {/* Replace by Aniamte Shape Components */}
                        <div className={styles.shape}>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomGraphic}>
                    {/* Replace by Animated Graphic and Buttons Components */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}
