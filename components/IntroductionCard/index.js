import React from 'react'
import styles from './IntroductionCard.module.css'
import Image from 'next/image'
import introImg from '@/public/IntroImg.svg'
import tutorialImg from '@/public/tutorial.svg'
import disclaimerImg from '@/public/disclaimer.png'
import dots from '@/public/carouselIndicator.svg'
import { useState } from 'react'


export default function IntroductionCard() {
    const introText = "Gotchu is an innovative anti-bullying app that creates a safe, supportive environment for individuals experiencing or witnessing bullying. Gotchu provides emotional tools and support to connect users with the right resources and understand the potential impacts of bullying. Join our community of supportive individuals committed to promoting kindness and empathy."
    const tutorialText = "";
    const disclaimerText = "";
    const purple = "#896686";

    const [count, setCount] = useState(1);
    const [fill, setFill] = useState(false);

    function handleClick() {
        setCount(count + 1);
        setFill(true);
    }
    return (
        <div className={styles.card}>

            {
                count == 1 ?
                    <>
                        <Image src={introImg} className={styles.cardImg} />
                        <p className={styles.cardText}>{introText}</p>
                    </> :
                    count == 2 ?
                        <>
                            <Image src={tutorialImg} className={styles.cardImg} />
                            <p className={styles.cardText}>{tutorialText}</p>
                        </> :
                        count == 3 ?
                            <>
                                <Image src={disclaimerImg} className={styles.disclaimerImg} />
                                <p className={styles.cardText}>{disclaimerText}</p>
                            </> :
                            <p className={styles.cardText}>{introText}</p>
            }

            {/* <Image src={dots} /> */}
            <div className={styles.carouselDots}>
                <div onClick={() => setCount(1)} style={{ backgroundColor: `${purple}` }} className={styles.dot}></div>
                <div onClick={() => handleClick()} className={styles.dot}></div>
                <div onClick={() => handleClick()} className={styles.dot}></div>
                {
                    fill == true ? <div className={styles.dot} style={{ backgroundColor: `${purple}` }}></div> : null
                }
            </div>

        </div>
    )
}
