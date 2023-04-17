import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {

  const [popup, setPopup] = useState(false);

  return (

    <section className={styles.navbar}>
      <div className={styles.headbar}>
        <Image src={'NavbarLogo.svg'} className={styles.navbarLogo} width={40} height={40} />
        <Image src={'hamburger.svg'} onClick={() => setPopup(true)} className={styles.hamburger} width={30} height={30} />
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
                <Image src={'icons/close.svg'} onClick={() => setPopup(false)} className={styles.closeIcon} width={30} height={30} />
              </div>
              <Link href="/">
                <div className={styles.tab}>
                  <Image src={'icons/home.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Home</h5>
                </div>
              </Link>
              <Link href="/tutorial">
                <div className={styles.tab}>
                  <Image src={'icons/tutorial.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Tutorial</h5>
                </div>
              </Link>
              <Link href="/personal">
                <div className={styles.tab}>
                  <Image src={'icons/quiz.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Quiz</h5>
                </div>
              </Link>
              <Link href="/result">
                <div className={styles.tab}>
                  <Image src={'icons/result.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Result</h5>
                </div>
              </Link>
              <Link href="/resources">
                <div className={styles.tab}>
                  <Image src={'icons/resources.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Resources</h5>
                </div>
              </Link>
              <Link href="/team">
                <div className={styles.tab}>
                  <Image src={'icons/aboutus.svg'} className={styles.icon} width={30} height={30} />
                  <h5>About Us</h5>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          : <></>
      }
    </section>
  )
}
