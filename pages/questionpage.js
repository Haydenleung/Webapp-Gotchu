import React from 'react'
import styles from "../styles/QuestionPage.module.css"
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

export default function QuestionPage() {

  // const [answer, setAnswer] = useState([
  //   "answer1" = "",
  //   "answer2" = "",
  //   "answer3" = '',
  //   "answer4" = ''
  // ])

  const [answerOne, setAnswerOne] = useState();

  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const color = query.color;

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
              transition={{ delay: 0.5, ease: "easeInOut", duration: 0.8 }}
            >
              <div className={styles.pageIndicator}>
                <QuestionIndicator />
              </div>
              <div className={styles.question}>
                <h6>Question 1</h6>
                <h4>Are you or someone else being bullied?</h4>
              </div>
              <div className={styles.answer}>
                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false); setNext(true); setAnswerOne("A") }}>
                  <AnswerButton img={'/answer/one_me.png'} txt={'Me'} color={'purple'} isClickP={isClickP} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false); setNext(true); setAnswerOne("B") }}>
                  <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'green'} isClickG={isClickG} />
                </div>
                {/* <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(false); setIsClickO(true); setNext(true) }}>
                  <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'orange'} isClickO={isClickO} />
                </div> */}
              </div>
            </motion.div>
          </div>
          <div className={styles.bottomGraphic}>
            <motion.img
              src={'/walkingBG_long.svg'}
              className={styles.walkingImg}
              width={500}
              height={500}
              initial={{ x: -540 }}
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
              transition={{ delay: 0.5, ease: "easeInOut", duration: 0.8 }}
            >
              <Link href={{ pathname: "/start", query: { name, color } }}>
                <BackButton />
              </Link>
              {
                next ?
                  <Link href={{ pathname: "/transition", query: { name, color, answerOne } }}>
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
