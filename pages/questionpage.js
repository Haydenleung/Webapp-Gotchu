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
import data from '../data/walking.json'


export default function QuestionThree() {

  const [answerThree, setAnswerThree] = useState();
  const [colorUrl, setColorUrl] = useState([...data]);

  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const color = query.color;
  const answerOne = query.answerOne;
  const answerTwo = query.answerTwo;



  const [isClickP, setIsClickP] = useState(false);
  const [isClickG, setIsClickG] = useState(false);
  const [isClickO, setIsClickO] = useState(false);
  const [next, setNext] = useState(false);



  return (
    <>

      <Head>
        <title>Question Three</title>
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
              <QuestionIndicator status={3} ini_wd={50} fin_wd={50} />
            </div>
            <motion.div
              className={styles.topContent}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 0.2, ease: "easeInOut", duration: 0.8 }}
            >

              <div className={styles.question}>
                <h6>Question 3</h6>
                <h4>How does it impact your daily life?</h4>
              </div>
              <div className={styles.answer}>
                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false); setNext(true); setAnswerThree("A") }}>
                  <AnswerButton img={'/answer/three_affect.png'} txt={'It does affect me'} color={'purple'} isClickP={isClickP} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false); setNext(true); setAnswerThree("B") }}>
                  <AnswerButton img={'/answer/three_notaffect.png'} txt={'It does not affect me'} color={'green'} isClickG={isClickG} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(false); setIsClickO(true); setNext(true) }}>
                  {/* <AnswerButton img={'/answer/one_someone.png'} txt={'Someone Else'} color={'orange'} isClickO={isClickO} /> */}
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
              initial={{ x: -1620 }}
            // animate={{ x: -240 }}
            // transition={{
            //   duration: 7,
            //   ease: "linear",
            //   delay: 0.5
            // }}
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
                src={'/character/shadow.png'}
                width={100}
                height={100}
                className={styles.walkingShadow}
                initial={{ y: "30px", x: "-10px", scaleY: "0.5", opacity: "0.5" }}
              />
              {
                colorUrl && colorUrl.map((info, index) => {
                  if (info.color == color) {
                    return (
                      <motion.img
                        key={index}
                        src={info.url}
                        width={80}
                        height={80}
                        initial={{ y: "10%", rotate: 5 }}
                      />
                    )
                  }
                })
              }

            </motion.div>
            <motion.div
              className={styles.bottomButton}
              initial={{ opacity: "0%" }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 1, ease: "easeInOut", duration: 0.8 }}
            >
              <Link href={{ pathname: "/questiontwo", query: { name, color, answerOne, answerTwo } }}>
                <BackButton />
              </Link>
              {
                next ?
                  <Link href={{ pathname: "/transitionthree", query: { name, color, answerOne, answerTwo, answerThree } }}>
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
