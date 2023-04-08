import React from 'react'
import styles from "../styles/QuestionPage.module.css"
import Option from '@/components/Option'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import AnswerButton from '@/components/AnswerButton'

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

  const [isClickP, setIsClickP] = useState(false);
  const [isClickG, setIsClickG] = useState(false);
  const [isClickO, setIsClickO] = useState(false);

  return (
    <>
      {/* <option onClick={() => storeAnswers()} />{optionText} //option 1
         <option onClick={() => storeAnswers()} />{optionText} //option 2 */}
      {/* passing the answer array to next page */}
      {/* <option onClick={() => storeAnswers() infoPassing={answer}} />{optionText} */}
      {/* in next page: Q2({infoPassing}) */}
      <Head>
        <title>Question One</title>
        <meta name="description" content="Anti-Bully App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.empty} />
        <Navbar />
        <div className={styles.main_container}>
          <div className={styles.pageContent}>
            <motion.div
              className={styles.topContent}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 8, ease: "easeInOut", duration: 0.8 }}
            >
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
                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false) }}>
                  <AnswerButton img={'/answer/one_me.png'} txt={'Me'} color={'purple'} isClickP={isClickP} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false) }}>
                  <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'green'} isClickG={isClickG} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(false); setIsClickO(true) }}>
                  <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'orange'} isClickO={isClickO} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.bottomGraphic}>
            {/* Replace by Animated Graphic and Buttons Components */}
            <motion.img
              src={'/walkingBG.svg'}
              className={styles.walkingImg}
              width={1000}
              height={1000}
              initial={{ x: -20 }}
              animate={{ x: -240 }}
              transition={{
                duration: 7,
                ease: "linear",
                delay: 0.5
              }}
            />
            <motion.div
              className={styles.walkingCharacter}
              // transition={{
              //   duration: 6,
              //   delay: 1
              // }}
              initial={{ x: "120%" }}
            // animate={{
            //   x: ["-180%", "120%"],
            // }}
            >
              <motion.img
                src={'/character/walkingHugo.svg'}
                width={80}
                height={80}
                transition={{
                  duration: 0.5,
                  repeat: 13,
                  repeatType: "reverse",
                  ease: "easeOut",
                  delay: 0.5
                }}
                initial={{ y: "10%" }}
                animate={{
                  y: ["10%", "-30%"]
                }}

              />
            </motion.div>
            <motion.div
              className={styles.bottomButton}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 8.5, ease: "easeInOut", duration: 0.8 }}
            >
              <Link href={{ pathname: "/start" }}>
                <BackButton />
              </Link>
              <Link href={{ pathname: "/start" }}>
                {/* <NextButton /> */}
              </Link>
            </motion.div >
          </div>
        </div>
        <div className={styles.empty} />
      </div>
    </>
  )
}

// const array = []
// create a array with 4 elements in the first page
//update the value by useState of each element 
// pass this array to next page 
