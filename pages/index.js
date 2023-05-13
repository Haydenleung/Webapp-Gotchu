import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import landingImg from "@/public/largeHugo.svg"
import bubbleLarge from "@/public/hugDotOne.svg"
import bubbleSmall from "@/public/hugDotTwo.svg"
import landingLogo from "@/public/logo.svg"
import Button from '@/components/Button'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import Shape from '@/components/Shape'


export default function Home({ dir }) {

  const { locales } = useRouter();
  const intl = useIntl();
  const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
  const startButton = intl.formatMessage({ id: "page.home.button.start" })
  const tutorialButton = intl.formatMessage({ id: "page.home.button.tutorial" })

  const router = useRouter();
  const query = router.query;
  const landing = query.landing;
  console.log(landing);

  return (
    <>
      <Head>
        <title>Gotchu</title>
        <meta name="description" content={pageDes} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.translation}>
      </div>
      <main className={styles.main}>
        <div className={styles.main_container}>
          {
            landing == 'true' ? <></> : <Shape />
          }
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
                  text={startButton}
                // className={styles.acknowledgeBtn}
                />
              </Link>
              <Link href='/tutorial'>
                <Button color='#B1BFA9'
                  text={tutorialButton}
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
