import React from 'react'
import Link from 'next/link'
import styles from './NextButton.module.css'
import Image from 'next/image'

export default function NextButton() {
    return (
        <div className={styles.buttonContainer}>
            <div className={styles.button}>Next</div>
            <Image src='/icons/nextArrow.svg' width={20} height={17} /> 
        </div>
    )
}

