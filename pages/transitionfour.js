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

export default function TransitionFour() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;
    const answerOne = query.answerOne;
    const answerTwo = query.answerTwo;
    const answerThree = query.answerThree;
    const answerFour = query.answerFour;

    useEffect(() => {
        setTimeout(() => {
            router.push(
                {
                    pathname: "/result",
                    query: { name: name, color: color, answerOne: answerOne, answerTwo: answerTwo, answerThree: answerThree, answerFour: answerFour },
                },
                "/result"
            );
        }, 8000);
    });

    const [isNext, setIsNext] = useState(false);

    const mainVariants = {
        transit: {
            opacity: [0, 100, 100, 0],
            transition: {
                times: [0.1, 0.25, 0.8, 0.95],
                duration: 7.0,
                ease: "easeInOut",
                delay: 0.5
            },
        }
    };

    const walkingVariants = {
        transit: {
            x: [-2060, -2280],
            transition: {
                duration: 3.5,
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
                repeat: 13,
                repeatType: "reverse",
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

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
                            variants={mainVariants}
                            animate={"transit"}
                        >
                            <Message txt={"You are not alone. \n You are seen and heard. \n I am here to support you."} />
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
                            initial={{ x: "120%" }}
                            animate={{ x: ["120%", "120%", "130%", "420%"] }}
                            transition={{
                                duration: 7.5,
                                time: [0, 0.5, 0.6, 1],
                                ease: "linear",
                            }}
                        >
                            <motion.img
                                src={"/character/walkingHugo.svg"}
                                width={80}
                                height={80}
                                initial={{ y: "10%" }}
                                variants={characterVariants}
                                animate={"transit"}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    );
}