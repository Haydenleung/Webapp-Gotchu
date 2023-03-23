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
        <Image src={'NavbarLogo.svg'} className={styles.navbarLogo} width={40} height={40} />
        <Image src={'hamburger.svg'} onClick={() => setReverse(true)} className={styles.hamburger} width={40} height={40} />
      </div>
      {
        popup === true ?
          <div className={styles.extendbar}>
            <div className={styles.extendtab}>
              <Image src={'/icons/home.svg'} className={styles.tabIcon} width={20} height={20} />
              <h4>Home</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={'/icons/quiz.svg'} className={styles.tabIcon} width={20} height={20} />
              <h4>Quiz</h4>
            </div>
            <div className={styles.extendtab}>
              <Image src={'/icons/result.svg'} className={styles.tabIcon} width={20} height={20} />
              <h4>Result</h4>
            </div>
          </div>
          : <></>
      }
    </section>
  )
}
