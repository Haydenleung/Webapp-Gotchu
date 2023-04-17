import styles from "../styles/Team.module.css";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import TeamBio from '@/components/TeamBio';
import TeamBioPopup from "@/components/TeamBioPopUp";
import { useState } from "react";
import Head from "next/head";

export default function Team() {

  const [popup, setPopup] = useState(false);

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Anti-Bully App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.empty} />
        <Navbar />
        <div className={styles.main_container}>
          <div className={styles.pageContent}>
            <div className={styles.contentContainer}>
              <img src='/icons/aboutus.svg' />
              <h3>Our Team</h3>
            </div>
            <div className={styles.topRow}>
              <TeamBio imgSrc='green_blob.png' name='Hayden' position='UX/UI Designer' description="Hayden is an outstanding UX/UI Designer and Developer from Hong Kong. He is a creative designer who keeps up with the latest design trends. Hayden has an eye for detail and consistently produces exceptional work!" />
              <TeamBio imgSrc='purple_blob.png' name='Kiona' position='UX/UI Designer' description='Kiona is a talented and dedicated UX/UI Designer and Developer from Kaiping. She is a quick learner with a passion for detail. She is always eager to learn and improve her skills!' />
            </div>
            <div className={styles.bottomRow}>
              <TeamBio imgSrc='red_blob.png' name='Sara' position='UX/UI Designer' description='Sara, a UX/UI Designer and Developer from Toronto, who is a highly motivated and passionate individual. She has a great aptitude for problem-solving and is always eager to create high-quality applications!' />
              <TeamBio imgSrc='orange_blob.png' name='Evan' position='UX/UI Designer' description='Evan is an artistic and innovative UX/UI Designer from Vietnam. He has an eye for detail and is always creating new and innovative designs. Evan uses a combination of technical and creative skills to produce exceptional work!' />
            </div>
          </div>
          {/* <Link href="/"><button className={styles.actionBtn}>Back to Home</button></Link> */}
        </div>
        <div className={styles.empty} />
      </div >
    </>
  )
}