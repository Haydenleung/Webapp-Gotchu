import React from 'react'
import styles from './BackButton.module.css'
import Image from 'next/image'

export default function BackButton() {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Image src='/icons/prevArrow.svg' width={20} height={17} />
        <div className={styles.button}>Back</div>
      </div>
    </div>
  )
}
