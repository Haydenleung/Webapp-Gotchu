import styles from "../styles/Team.module.css";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import TeamBio from '@/components/TeamBio';
import TeamBioPopup from "@/components/TeamBioPopUp";
import { useState } from "react";
import Head from "next/head";
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'


export default function Team() {

  const { locales } = useRouter();
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: "page.nav.about" })
  const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
  const title = intl.formatMessage({ id: 'page.team.title' });
  const oneDes = intl.formatMessage({ id: 'page.team.oneDes' });
  const oneLong = intl.formatMessage({ id: 'page.team.oneLong' });
  const twoDes = intl.formatMessage({ id: 'page.team.twoDes' });
  const twoLong = intl.formatMessage({ id: 'page.team.twoLong' });
  const threeDes = intl.formatMessage({ id: 'page.team.threeDes' });
  const threeLong = intl.formatMessage({ id: 'page.team.threeLong' });
  const fourDes = intl.formatMessage({ id: 'page.team.fourDes' });
  const fourLong = intl.formatMessage({ id: 'page.team.fourLong' });

  const [popup, setPopup] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDes} />
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
              <h3>{title}</h3>
            </div>
            <div className={styles.topRow}>
              <TeamBio imgSrc='../green_blob.png' name='Hayden' position={oneDes} description={oneLong} />
              <TeamBio imgSrc='../purple_blob.png' name='Kiona' position={twoDes} description={twoLong} />
            </div>
            <div className={styles.bottomRow}>
              <TeamBio imgSrc='../red_blob.png' name='Sara' position={threeDes} description={threeLong} />
              <TeamBio imgSrc='../orange_blob.png' name='Evan' position={fourDes} description={fourLong} />
            </div>
          </div>
          <p className={styles.bottomContent}>
            @2023 Gotchu Inc.
          </p>
        </div>
        <div className={styles.empty} />

      </div >


    </>
  )
}