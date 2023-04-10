import React from 'react'
import styles from './Button.module.css'

export default function Button({
    text = "",
    color = "purple",


}) {
    return (
        <div>
            {
                text === "Get Started" || text === "Acknowledge" ?
                    <button className={styles.purpleButton}
                        style={{ backgroundColor: `${color}` }}>
                        {text}
                    </button> :
                    text === "Tutorial" ?
                        <button className={styles.greenButton}
                            style={{ backgroundColor: `${color}` }}>
                            {text}
                        </button> :
                        text === "Get Help" || text === "Return to Result" ?
                            <button className={styles.redButton}
                                style={{ backgroundColor: `${color}` }}>
                                {text}
                            </button> :
                            <button className={styles.purpleButton}
                                style={{ backgroundColor: `${color}` }}>
                                {text}
                            </button>


            }

        </div>
    )
}
