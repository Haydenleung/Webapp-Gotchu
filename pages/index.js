import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import landingImg from "@/public/landingPageHugo.png"
import landingLogo from "@/public/landingPageLogo.png"
import Button from '@/components/Button'
import MemberButton from '@/components/MemberButton'


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
          <div className={styles.bubble}>
            {/* Insert AnimateGraphic */}
          </div>
          <div className={styles.pageImg}>
            {/* Insert Graphic */}
          </div>
          <div className={styles.pageContent}>
            <div className={styles.appLogo}>
              {/* Insert Graphic */}
            </div>
            <div className={styles.action}>
              {/* Replace by Buttons Components */}
              <div></div>
              {/* Replace by Buttons Components */}
              <div></div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
