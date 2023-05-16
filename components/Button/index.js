import React from 'react'
import styles from './Button.module.css'

export default function Button({
    text = "",
    color = "purple",


}) {
    return (
        <div>
            {
                text === "Get Started" || text === "Acknowledge" || text === "Commencer" || text === "Admettre" ?
                    <button className={styles.purpleButton}
                        style={{ backgroundColor: `${color}` }}>
                        {text}
                    </button> :
                    text === "Tutorial" || text === "Tutoriel" ?
                        <button className={styles.greenButton}
                            style={{ backgroundColor: `${color}` }}>
                            {text}
                        </button> :
                        text === "Find Support" || text === "Return to Result" || text === "Trouver du soutien" || text === "Retour au résultat" ?
                            <button className={styles.redButton}
                                style={{ backgroundColor: `${color}` }}>
                                {text}
                            </button> :
                            text === "Quiz Again" || text === "Refaire le quiz" ?
                                <button className={styles.brownButton}
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
