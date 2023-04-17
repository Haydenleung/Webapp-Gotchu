import React from 'react'
import styles from './SuggestionCard.module.css'
import PieChart  from '../Piechart'

export default function SuggestionCard({
    text=''
}) {
  return (
      <div className={styles.container}>
          <div className={styles.chartContainer}>
              <PieChart />
          </div>
          <div className={styles.textContainer}>
              {text}
          </div>
    </div>
  )
}
