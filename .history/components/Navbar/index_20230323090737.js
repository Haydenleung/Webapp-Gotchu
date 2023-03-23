import React, { useEffect } from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
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
        <Image src={'NavbarLogo.svg'} className={styles.navbarLogo} fill />
        <Image src={'hamburger.svg'} onClick={() => setReverse(true)} className={styles.hamburger} fill />
      </div>
      {
        popup === true ?
          <div className={styles.extendbar}>
            <div className={styles.extendtab}>
              <Image src={'/icons/home.svg'} className={styles.hamburger} fill />
              <h4>Home</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={'/icons/quiz.svg'} className={styles.hamburger} fill />
              <h4>Quiz</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={'/icons/result.svg'} className={styles.hamburger} fill />
              <h4>Result</h4>
            </div>
          </div>
          : <></>
      }
    </section>
  )
}
