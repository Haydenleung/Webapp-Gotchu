import React from 'react'
import styles from "./Characters.module.css"
import Image from 'next/image'


export default function memberCard() {
    return (
        <>
            <div className={styles.row}>
                <img src='/purple_character.png' />
                <img src='/green_character.png' />
            </div>
            <div className={styles.row}>
                <img src='/orange_character.png' />
                <img src='/red_character.png' />
            </div>
            <div className={styles.row}>
                <img src='/brown_character.png' />
                <img src='/tan_character.png' />
            </div>

        </>
    )
}
