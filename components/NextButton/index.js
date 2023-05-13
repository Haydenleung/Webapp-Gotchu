import React from 'react'
import styles from './NextButton.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function NextButton({ dir }) {

    const { locales } = useRouter();
    const intl = useIntl();
    const nextText = intl.formatMessage({ id: "page.button.next" })

    const variants = {
        // over: { x: ["-10%", "0%"] },
        // noOver: { x: ["0%", "0%"] }
    }

    const [isOver, setIsOver] = useState(false)

    return (
        <div className={styles.buttonContainer} onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
            <div className={styles.button}>{nextText}</div>
            <motion.img
                src='/icons/nextArrow.svg'
                width={20}
                height={17}
                animate={{ x: ["-10%", "0%"] }}
                variants={variants}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeIn",
                }}
            />
        </div>
    )
}

