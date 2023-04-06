import React from 'react'
import styles from './IntroductionCard.module.css'
import Image from 'next/image'
import dots from '@/public/carouselIndicator.svg'
import { useState } from 'react'


export default function IntroductionCard() {
    const [slideIndex, setSlideIndex] = useState(1);
    const [fill, setFill] = useState(false);
    const introText = "Gotchu is an innovative anti-bullying app that creates a safe, supportive environment for individuals experiencing or witnessing bullying. Gotchu provides emotional tools and support to connect users with the right resources and understand the potential impacts of bullying. Join our community of supportive individuals committed to promoting kindness and empathy.";
    const tutorialText = "Tutorial details";
    const disclaimerText = "Gotchu™ is intended to provide information, resources, and support to individuals who may be experiencing bullying or know someone who is being bullied. While the app aims to provide helpful tools and strategies to cope with bullying, it is not a substitute for professional help or advice from a qualified mental health professional. If you or someone you know is experiencing bullying and requires professional assistance, please seek help from a licensed mental health provider or other qualified professional.";
    const purple = '#896686'


    const changeImage = (direction) => {

        if (direction == 'backward') {
            if (slideIndex !== 1) {
                setSlideIndex(prev => prev - 1)
            } else { setSlideIndex(3) }
        }
        else {
            if (slideIndex !== 3) {
                setSlideIndex(prev => prev + 1)
            } else {
                setSlideIndex(1)
            }
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className={styles.card}>

            {
                slideIndex == 1 ?
                    <>
                        <Image src={'/IntroImg1.svg'} className={styles.cardImg} width={250} height={250} />
                        <p className={styles.cardText}>{introText}</p>
                    </> :
                    slideIndex == 2 ?
                        <>
                            <Image src={'/IntroImg2.svg'} className={styles.cardImg} width={250} height={250} />
                            <p className={styles.cardText}>{tutorialText}</p>
                        </> :
                        slideIndex == 3 ?
                            <>
                                <Image src={'/IntroImg3.svg'} className={styles.cardImg} width={200} height={170} />
                                <p className={styles.cardText}>{disclaimerText}</p>
                            </> :
                            <p className={styles.cardText}>{introText}</p>
            }

            <div className={styles.arrowSection}>

                <Image
                    className={styles.arrowL}
                    src={"/icons/left-arrow.svg"}
                    alt={"leftArrow"}
                    onClick={() => changeImage('backward')}
                    width={24}
                    height={24} />
                <Image
                    className={styles.arrowR}
                    src={"/icons/right-arrow.svg"}
                    alt={"RightArrow"}
                    onClick={() => changeImage('forward')}
                    width={24}
                    height={24} />

            </div>

            <div className={styles.carouselDots}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? styles.dotactive : styles.dot}
                    ></div>
                ))}
            </div>
        </div>
    )
}
