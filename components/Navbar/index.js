import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import navbarLogo from "@/public/navbarLogo.jpg"
import hamburger from "@/public/hamburger.png"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image scr={navbarLogo} className={styles.navbarLogo} />
      <Image scr={hamburger} />
    </div>
  )
}
