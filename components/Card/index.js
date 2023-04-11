import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'


export default function memberCard() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.member_row}>
                    <div className={styles.content}>
                        <img src='/purple_blob.png' />
                        <h2>Kiona</h2>
                        <p>UX/UI Designer</p>
                    </div>
                    <div className={styles.content}>
                        <img src='/green_blob.png' />
                        <h2>Sara</h2>
                        <p>UX/UI Designer</p>
                    </div>
                </div>

                <div className={styles.member_row}>
                    <div className={styles.content}>
                        <img src='/orange_blob.png' />
                        <h2>Hayden</h2>
                        <p>UX/UI Designer</p>
                    </div>
                    <div className={styles.content}>
                        <img src='/brown_blob.png' />
                        <h2>Evan</h2>
                        <p>UX/UI Designer</p>
                    </div>
                </div>
            </div>
        </>
    )
}
