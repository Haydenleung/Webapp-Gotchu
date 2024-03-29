import React from 'react'
import styles from './BackButton.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function BackButton({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();
  const backText = intl.formatMessage({ id: "page.button.back" })

  const variants = {
    over: { x: ["0%", "10%"] },
    noOver: { x: ["0%", "0%"] }
  }

  const [isOver, setIsOver] = useState(false)

  return (
    <div>
      <div className={styles.buttonContainer} onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
        <motion.img
          src='/icons/prevArrow.svg'
          width={20}
          height={17}
          animate={isOver ? "over" : "noOver"}
          variants={variants}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
          }}
        />
        <div className={styles.button}>{backText}</div>
      </div>
    </div>

  )
}
