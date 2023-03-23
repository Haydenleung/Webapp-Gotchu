import React, { useEffect } from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import navbarLogo from "@/public/NavbarLogo.svg"
import hamburger from "@/public/hamburger.svg"
import homeLogo from "@/public/icons/home.svg"
import quizLogo from "@/public/icons/quiz.svg"
import resultLogo from "@/public/icons/result.svg"
import { useState } from 'react'

export default function Navbar() {

  const [popup, setPopup] = useState(false);
  const [reverse, setReverse] = useState();

  useEffect(() => {
    reverse === true && popup === true ? (setPopup(false), setReverse(false)) : <></>;
    reverse === true && popup === false ? (setPopup(true), setReverse(false)) : <></>;
  })

  return (
    <section className={styles.navbar}>
      <div className={styles.headbar}>
        <Image src={navbarLogo} className={styles.navbarLogo} />
        <Image src={hamburger} onClick={() => setReverse(true)} className={styles.hamburger} />
      </div>
      {
        popup === true ?
          <div className={styles.extendbar}>
            <div className={styles.extendtab}>
              <Image src={homeLogo} className={styles.hamburger} />
              <h4>Home</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={quizLogo} className={styles.hamburger} />
              <h4>Quiz</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={resultLogo} className={styles.hamburger} />
              <h4>Result</h4>
            </div>
          </div>
          : <></>
      }
    </section>
  )
}
