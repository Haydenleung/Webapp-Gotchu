import React from 'react'
import Image from 'next/image'
import styles from './Response.module.css'

export default function Response({
    imgSrc = '',
    text =''
}) {
  return (
      <div className={styles.container}>
          <Image src={imgSrc} width={43} height={43} className={styles.img} />
          {text}
    </div>
  )
}
