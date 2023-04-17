import React from 'react'
import styles from './ResourcesButton.module.css'
import Image from 'next/image'

export default function ResourcesButton({
    text = '',
    color = "purple",
    imgSrc = ''

}) {
    return (
        <div>
            {
                color === 'var(--resources-purple)' ?
                    <div style={{ backgroundColor: `${color}` }} className={styles.purpleButton}>
                        <Image className={styles.img} src={imgSrc} width={19} height={17} />
                        <div className={styles.buttonText}>{text}</div>
                    </div> :
                    color === 'var(--resources-red)' ?
                        <div style={{ backgroundColor: `${color}` }} className={styles.redButton}>
                            <Image className={styles.img} src={imgSrc} width={21} height={16} />
                            <div className={styles.buttonText}>{text}</div>
                        </div> :

                        <div style={{ backgroundColor: `${color}` }} className={styles.purpleButton}>
                            <Image className={styles.img} src={imgSrc} />
                            <div className={styles.buttonText}>{text}</div>
                        </div>

            }

        </div>
    )
}
