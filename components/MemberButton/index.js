import React from 'react'
import styles from './MemberButton.module.css'

export default function MemberButton({
    img = '/group_fill.png',
    color = 'var(--ash-red)',
    width = '48px',
    imgWidth = '28px',
    imgHeight = '22px'

}) {
    return (
        <div>
            <button className={styles.button}
                style={{ backgroundColor: `${color}`, width: { width } }}>
                <img src={img} style={{ width: `${imgWidth}`, height: `${imgHeight}` }} />
            </button>
        </div>
    )
}
