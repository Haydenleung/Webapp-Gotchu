import React from 'react'
import Option from '@/components/Option'
import { useState } from 'react'

export default function QuestionPage() {

  const [answer, setAnswer] = useState([
    answer1 = "",
    answer2 = "",
    answer3 = '',
    answer4 = ''

  ])

  const storeAnswers = () => {
    setAnswer({ ...answer, answer1: { optionText } })
  }


  return (
      <div>
      <option onClick={() => storeAnswers()} />{optionText} //option 1
      <option onClick={() => storeAnswers()} />{optionText} //option 2
      //passing the answer array to next page
      {/* <option onClick={() => storeAnswers() infoPassing={answer}} />{optionText} */}
      {/* in next page: Q2({infoPassing}) */}
          
          
    </div>
  )
}

// const array = []
// create a array with 4 elements in the first page
//update the value by useState of each element 
// pass this array to next page 