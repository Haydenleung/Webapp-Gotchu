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
import data from '../data/walking.json'
import { useIntl } from 'react-intl'

export default function QuestionPage({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: 'page.questionOne.heading' });
  const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
  const number = intl.formatMessage({ id: 'page.questionOne.number' });
  const title = intl.formatMessage({ id: 'page.questionOne.title' });
  const ansOne = intl.formatMessage({ id: 'page.questionOne.ansOne' });
  const ansTwo = intl.formatMessage({ id: 'page.questionOne.ansTwo' });

  const [colorUrl, setColorUrl] = useState([...data]);
  const [answerOne, setAnswerOne] = useState();

  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const color = query.color;


  const [isClickP, setIsClickP] = useState(false);
  const [isClickG, setIsClickG] = useState(false);
  const [isClickO, setIsClickO] = useState(false);
  const [next, setNext] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDes} />
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
              transition={{ delay: 0.2, ease: "easeInOut", duration: 0.8 }}
            >
              <div className={styles.pageIndicator}>
                <QuestionIndicator />
              </div>
              <div className={styles.question}>
                <h6>{number}</h6>
                <h4>{title}</h4>
              </div>
              <div className={styles.answer}>
                <div className={styles.answerBox} onClick={() => { setIsClickP(true); setIsClickG(false); setIsClickO(false); setNext(true); setAnswerOne("A") }}>
                  <AnswerButton img={'/answer/one_me.png'} txt={ansOne} color={'purple'} isClickP={isClickP} />
                </div>
                <div className={styles.answerBox} onClick={() => { setIsClickP(false); setIsClickG(true); setIsClickO(false); setNext(true); setAnswerOne("B") }}>
                  <AnswerButton img={'/answer/one_someone.png'} txt={ansTwo} color={'green'} isClickG={isClickG} />
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

