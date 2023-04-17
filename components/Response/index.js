import React from 'react'
import Image from 'next/image'
import styles from './Response.module.css'

export default function Response({  
    text = ''
}) {
    return (
        <div className={styles.container}>
            
            {text}
        </div>
    )
}