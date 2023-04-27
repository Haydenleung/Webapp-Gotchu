import React from 'react'
import styles from './Suggestion.module.css'

export default function Suggestion({
    color = 'purple',
    heading = '',
    text = ''
}) {
    return (
        <div className={styles.container}>
            {
                color == 'green' ? <div className={styles.headingContainerG}>
                    {heading}
                </div> : color == 'orange' ? <div className={styles.headingContainerO}>
                    {heading}
                </div> : <div className={styles.headingContainer}>
                    {heading}
                </div>
            }
            <div className={styles.bodyContainer}>
                {text}
            </div>
        </div>

    )
}
