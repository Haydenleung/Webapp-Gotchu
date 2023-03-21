import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import navbarLogo from "@/public/NavbarLogo.svg"
import hamburger from "@/public/hamburger.svg"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image src={navbarLogo} className={styles.navbarLogo} />
      <Image src={hamburger} className={styles.hamburger} />
    </div>
  )
}
