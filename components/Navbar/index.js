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
        <Image src={'hamburger.svg'} onClick={() => setPopup(true)} className={styles.hamburger} width={40} height={40} />
      </div>
      {
        popup === true ?
          <div className={styles.overlayMenu}>
            <motion.div
              className={styles.menu}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              transition={{
                type: "linear",
                duration: 0.5
              }}
            >
              <div className={styles.close}>
                <Image src={'icons/close.svg'} onClick={() => setPopup(false)} className={styles.hamburger} width={30} height={30} />
              </div>
              <Link href="/">
                <div className={styles.tab}>
                  <Image src={'icons/home.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Home</h5>
                </div>
              </Link>
              <Link href="">
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
              <Link href="">
                <div className={styles.tab}>
                  <Image src={'icons/result.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Result</h5>
                </div>
              </Link>
              <Link href="">
                <div className={styles.tab}>
                  <Image src={'icons/resources.svg'} className={styles.icon} width={30} height={30} />
                  <h5>Resources</h5>
                </div>
              </Link>
              <Link href="">
                <div className={styles.tab}>
                  <Image src={'icons/aboutus.svg'} className={styles.icon} width={30} height={30} />
                  <h5>About Us</h5>
                </div>
              </Link>
            </motion.div>
          </div>

          : <></>
      }
    </section>
  )
}
