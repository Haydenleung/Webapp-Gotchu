import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Transition.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Message from "@/components/Message";
import QuestionIndicator from "@/components/QuestionIndicator";
import data from '../data/walking.json'
import transitionMsg from '../data/transition.json'

export default function TransitionThree() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;
    const answerOne = query.answerOne;
    const answerTwo = query.answerTwo;
    const answerThree = query.answerThree;
    const [colorUrl, setColorUrl] = useState([...data]);
    const [message, setMessage] = useState([...transitionMsg]);
    const [transitionId, setTransitionId] = useState();

    useEffect(() => {
        setTimeout(() => {
            router.push(
                {
                    pathname: "/questionfour",
                    query: { name: name, color: color, answerOne: answerOne, answerTwo: answerTwo, answerThree: answerThree },
                },
                "/questionfour"
            );
        }, 10000);
    });

    const [isNext, setIsNext] = useState(false);

    const mainVariants = {
        transit: {
            opacity: [0, 100, 100, 0],
            transition: {
                times: [0.0, 0.05, 0.95, 1],
                duration: 9.0,
                ease: "easeInOut",
                delay: 0.5
            },
        }
    };

    const walkingVariants = {
        transit: {
            x: [-1620, -2060],
            transition: {
                duration: 9.0,
                ease: "linear",
                delay: 0.5
            },
        }
    };

    const characterVariants = {
        transit: {
            y: ["10%", "-30%"],
            rotate: [5, 0],
            transition: {
                duration: 0.5,
                repeat: 17,
                repeatType: "reverse",
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    useEffect(() => {
        (answerOne == "A" && answerThree == "A") ? setTransitionId(9) :
            (answerOne == "B" && answerThree == "A") ? setTransitionId(10) :
                (answerOne == "A" && answerThree == "B") ? setTransitionId(11) :
                    (answerOne == "B" && answerThree == "B") ? setTransitionId(12) :
                        setTransitionId(12)
    }, [transitionId])

    return (
        <>
            <Head>
                <title>
                    ...
                </title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <div className={styles.main_container}>
                    <div className={styles.pageContent}>
                        <div className={styles.pageIndicator}>
                            <QuestionIndicator status={3} ini_wd={50} fin_wd={75} time={7.5} />
                        </div>
                        <motion.div
                            className={styles.topContent}
                            initial={{ opacity: 0 }}
                            variants={mainVariants}
                            animate={"transit"}
                        >
                            {
                                message && message.map((obj, index) => {

                                    if (obj.id == transitionId) {
                                        return (
                                            <Message txt={obj.transition} />
                                        )
                                    }
                                })
                            }


                            {/* <Message txt={"You are not alone. \n You are seen and heard. \n I am here to support you."} /> */}
                        </motion.div>
                    </div>
                    <div className={styles.bottomGraphic}>
                        {/* Replace by Animated Graphic and Buttons Components */}
                        <motion.img
                            src={"/walkingBG_long.svg"}
                            className={styles.walkingImg}
                            width={1000}
                            height={1000}
                            // initial={{ x: -540 }}
                            variants={walkingVariants}
                            animate={"transit"}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            initial={{ x: "120%" }}>
                            <motion.img
                                src={'/character/shadow.png'}
                                width={100}
                                height={100}
                                className={styles.walkingShadow}
                                initial={{ y: "30px", x: "-10px", scaleY: "0.5", opacity: "0.5" }}
                            />


                            {
                                colorUrl && colorUrl.map((info, index) => {
                                    if (info.color == color) {
                                        return (
                                            <motion.img
                                                key={index}
                                                src={info.url}
                                                width={80}
                                                height={80}
                                                initial={{ y: "10%" }}
                                                variants={characterVariants}
                                                animate={"transit"}
                                            />
                                        )
                                    }
                                })
                            }

                        </motion.div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    );
}
