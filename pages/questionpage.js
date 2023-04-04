import React from 'react'
import styles from "../styles/QuestionPage.module.css"
import Option from '@/components/Option'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function QuestionPage() {

  // const [answer, setAnswer] = useState([
  //   answer1 = "",
  //   answer2 = "",
  //   answer3 = '',
  //   answer4 = ''
  // ])

  const storeAnswers = () => {
    setAnswer({ ...answer, answer1: { optionText } })
  }

  return (
    //   {/* <option onClick={() => storeAnswers()} />{optionText} //option 1
    //     <option onClick={() => storeAnswers()} />{optionText} //option 2 */}
    //     {/* passing the answer array to next page */ }
    // {/* <option onClick={() => storeAnswers() infoPassing={answer}} />{optionText} */ }
    // {/* in next page: Q2({infoPassing}) */ }
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Navbar />
        <div className={styles.pageContent}>
          <div className={styles.topContent}>
            <div className={styles.pageIndicator}>
              {/* Replace by Indicator Components */}
            </div>
            {/* Replace by Question Components */}
            <div className={styles.question}>
              <h6>Question 1</h6>
              <h4>Are you or someone else being bullied?</h4>
            </div>
            {/* Replace by Answer Components */}
            <div className={styles.answer}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.bottomGraphic}>
          {/* Replace by Animated Graphic and Buttons Components */}
          <div className={styles.bottomBack}></div>
          <div className={styles.bottomNext}></div>
        </div>
      </div>
    </div>
  )
}

// const array = []
// create a array with 4 elements in the first page
//update the value by useState of each element 
// pass this array to next page 
