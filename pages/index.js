import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import landingImg from "@/public/largeHugo.svg"
import bubbleLarge from "@/public/hugDotOne.svg"
import bubbleSmall from "@/public/hugDotTwo.svg"
import landingLogo from "@/public/logo.svg"
import Button from '@/components/Button'
import { motion, AnimatePresence } from "framer-motion";


export default function Home() {
  return (
    <>
      <Head>
        <title>Gotchu</title>
        <meta name="description" content="Anti-Bully App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.pageImg}>
            <div className={styles.bubble}>
              <motion.div
                className={styles.bubbleOne}
                animate={{ y: 15 }}
                transition={{
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                }}>
                <Image src={bubbleLarge} />
              </motion.div>
              <motion.div
                className={styles.bubbleTwo}
                animate={{ y: -15 }}
                transition={{
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3,
                }}>
                <Image src={bubbleSmall} />
              </motion.div>
            </div>
            <Image src={landingImg} className={styles.landingImg} />
          </div>
          <div className={styles.pageContent}>
            <div className={styles.appLogo}>
              <Image src={landingLogo} className={styles.landingLogo} />
            </div>
            <div className={styles.action}>
              <Link href='/introduction'>
                <Button color='#896686'
                  text='Get Started'
                // className={styles.acknowledgeBtn}
                />
              </Link>
              {/* change destination to tutorial once the page is created */}
              <Link href=''>
                <Button color='#B1BFA9'
                  text='Tutorial'
                // className={styles.tutorialBtn}
                />
              </Link>

            </div>
          </div>

        </div>
      </main >
    </>
  )
}
