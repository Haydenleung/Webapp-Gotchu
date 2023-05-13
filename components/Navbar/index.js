import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function Navbar({ dir }) {

  const [popup, setPopup] = useState(false);
  const { locales } = useRouter();
  const intl = useIntl();
  const { asPath } = useRouter();

  const homeMsg = intl.formatMessage({ id: 'page.nav.home' });
  const tutorialMsg = intl.formatMessage({ id: 'page.nav.tutorial' });
  const quizMsg = intl.formatMessage({ id: 'page.nav.quiz' });
  const resourcesMsg = intl.formatMessage({ id: 'page.nav.resources' });
  const aboutMsg = intl.formatMessage({ id: 'page.nav.about' });
  const [landing, setLanding] = useState('true');


  return (

    <section className={styles.navbar}>
      <div className={styles.headbar}>
        <Link href={{ pathname: "/", query: { landing } }} className={styles.navbarLogoContainer}><Image src={'../NavbarLogo.svg'} className={styles.navbarLogo} width={40} height={40} /></Link>
        <Image src={'../hamburger.svg'} onClick={() => setPopup(true)} className={styles.hamburger} width={30} height={30} />
      </div>
      {
        popup === true ?
          <motion.div className={styles.overlayMenu} onClick={() => setPopup(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{
              type: "tween",
              duration: 0.6
            }}>
            <motion.div
              className={styles.menu}
              initial={{ x: 300, opacity: 80 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{
                type: "tween",
                duration: 0.6
              }}
            >
              <div className={styles.close}>
                <Image src={'../icons/close.svg'} onClick={() => setPopup(false)} className={styles.closeIcon} width={30} height={30} />
              </div>
              <Link href={{ pathname: "/", query: { landing } }} >
                <div className={styles.tab}>
                  <Image src={'../icons/home.svg'} className={styles.icon} width={30} height={30} />
                  <h5>{homeMsg}</h5>
                </div>
              </Link>
              <Link href="/tutorial">
                <div className={styles.tab}>
                  <Image src={'../icons/tutorial.svg'} className={styles.icon} width={30} height={30} />
                  <h5>{tutorialMsg}</h5>
                </div>
              </Link>
              <Link href="/personal">
                <div className={styles.tab}>
                  <Image src={'../icons/quiz.svg'} className={styles.icon} width={30} height={30} />
                  <h5>{quizMsg}</h5>
                </div>
              </Link>
              {/* <Link href="/result">
                <div className={styles.tab}>
                  <Image src={'icons/result.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Result</h5>
                </div>
              </Link> */}
              <Link href="resources">
                <div className={styles.tab}>
                  <Image src={'../icons/resources.svg'} className={styles.icon} width={30} height={30} />
                  <h5>{resourcesMsg}</h5>
                </div>
              </Link>
              <Link href="/team">
                <div className={styles.tab}>
                  <Image src={'../icons/aboutus.svg'} className={styles.icon} width={30} height={30} />
                  <h5>{aboutMsg}</h5>
                </div>
              </Link>
              <div className={styles.lang}>
                {[...locales].sort().map((locale) => (
                  <Link key={locale} href={asPath} locale={locale}>
                    <div>{locale}</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          : <></>
      }
    </section>
  )
}
