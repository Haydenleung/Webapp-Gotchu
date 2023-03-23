import React from 'react'
import styles from './Button.module.css'

export default function Button({
    text="",
    color=purple,
    width='349'

}) {
    return (
        <div>
            <button className={styles.button}
                style={{ backgroundColor: `${color}`, width:{ width } }}>
                {text}
            </button>
        </div>
    )
}
