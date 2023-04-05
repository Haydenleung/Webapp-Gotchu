import styles from "../styles/Team.module.css";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import TeamBio from '@/components/TeamBio';

export default function Team() {


  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.pageContent}>
          <div className={styles.contentContainer}>
            <img src='/group_fill.png' />
            <h3>Our Team</h3>
          </div>
        </div>

        <div className={styles.row}>
          <TeamBio imgSrc='green_blob.png' name='Hayden' position='UX/UI Designer'  />

          <TeamBio imgSrc='purple_blob.png' name='Kiona' position='UX/UI Designer'  />
        </div>

        <div className={styles.row}>
          <TeamBio imgSrc='red_blob.png' name='Sara' position='UX/UI Designer' />


      <TeamBio imgSrc='orange_blob.png' name='Evan' position='UX/UI Designer' />
    </div>

    <Link href="/"><button className={styles.actionBtn}>Back to Home</button></Link>

   
  </div>
</div>
  )}
