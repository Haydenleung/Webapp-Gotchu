import React from 'react'
import styles from './Button.module.css'

export default function Button({
    text = "",
    color = purple,
    

}) {
    return (
        <div>
            <button className={styles.button}
                style={{ backgroundColor: `${color}`}}>
                {text}
            </button>
        </div>
    )
}
