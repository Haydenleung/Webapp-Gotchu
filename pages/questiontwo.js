import React from 'react'
import styles from "../styles/QuestionPage.module.css"
import Option from '@/components/Option'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackButton from '@/components/BackButton'
import NextButton from '@/components/NextButton'
import AnswerButton from '@/components/AnswerButton'
import QuestionIndicator from '@/components/QuestionIndicator'

export default function QuestionTwo() {

  // const [answer, setAnswer] = useState([
  //   answer1 = "",
  //   answer2 = "",
  //   answer3 = '',
  //   answer4 = ''
  // ])

  const [answerTwo, setAnswerTwo] = useState();

  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const color = query.color;
  const answerOne = query.answerOne;

  // const storeAnswers = () => {
  //   setAnswer({ ...answer, answer1: { optionText } })
  // }

  const [isClickP, setIsClickP] = useState(false);
  const [isClickG, setIsClickG] = useState(false);
  const [isClickO, setIsClickO] = useState(false);
  const [next, setNext] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/');
  // });

  return (
    <>
      {/* <option onClick={() => storeAnswers()} />{optionText} //option 1
         <option onClick={() => storeAnswers()} />{optionText} //option 2 */}
      {/* passing the answer array to next page */}
      {/* <option onClick={() => storeAnswers() infoPassing={answer}} />{optionText} */}
      {/* in next page: Q2({infoPassing}) */}
      <Head>
        <title>Question Two</title>
        <meta name="description" content="Anti-Bully App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.empty} />
        <Navbar />
        <div className={styles.main_container}>
          <div className={styles.pageContent}>
            <div className={styles.pageIndicator}>
              <QuestionIndicator status={2} ini_wd={25} fin_wd={25} />
            </div>
            <motion.div
              className={styles.topContent}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 1, ease: "easeInOut", duration: 0.8 }}
            >

              <div className={styles.question}>
                <h6>Question 2</h6>
                <h4>What kind of bullying is happening?</h4>
              </div>
              <div className={styles.answer}>
                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false); setNext(true); setAnswerTwo("A") }}>
                  <AnswerButton img={'/answer/two_brain.png'} txt={'Emotional Psychological'} color={'purple'} isClickP={isClickP} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false); setNext(true); setAnswerTwo("B") }}>
                  <AnswerButton img={'/answer/two_physic.png'} txt={'Physical'} color={'green'} isClickG={isClickG} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(false); setIsClickO(true); setNext(true); setAnswerTwo("C") }}>
                  <AnswerButton img={'/answer/two_verbal.png'} txt={'Verbal'} color={'orange'} isClickO={isClickO} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.bottomGraphic}>
            <motion.img
              src={'/walkingBG_long.svg'}
              className={styles.walkingImg}
              width={1000}
              height={1000}
              initial={{ x: -1080 }}
            />
            <motion.div
              className={styles.walkingCharacter}
              initial={{ x: "120%" }}
            >
              <motion.img
                src={'/character/walkingHugo.svg'}
                width={80}
                height={80}
                initial={{ y: "10%", rotate: 5 }}
              />
            </motion.div>
            <motion.div
              className={styles.bottomButton}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 1, ease: "easeInOut", duration: 0.8 }}
            >
              <Link href={{ pathname: "/questionpage", query: { name, color, answerOne } }}>
                <BackButton />
              </Link>
              {
                next ?
                  <Link href={{ pathname: "/transitiontwo", query: { name, color, answerOne, answerTwo } }}>
                    <NextButton />
                  </Link> : <></>
              }
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
