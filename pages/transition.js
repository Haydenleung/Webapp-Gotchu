import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Transition.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Transition() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;

    const nextClick = (e) => {
        // e.preventDefault();
        // setLoading(true);
        setTimeout(() => {
            router.push(
                {
                    pathname: "/questionpage",
                    query: { name: name, color: color },
                },
                "/questionpage"
            );
        }, 8000);
    };

    const [isNext, setIsNext] = useState(false);

    const mainVariants = {
        next: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: "linear",
                delay: 0.5,
            },
        },
    };

    const walkingVariants = {
        start: {
            x: -20,
            transition: {
                duration: 12.5,
                ease: "linear",
                delay: 1,
            },
        },
        next: {
            x: -240,
            transition: {
                duration: 7,
                ease: "linear",
                delay: 0.5,
            },
        },
    };

    const characterVariants = {
        start: {
            y: ["-30%", "10%"],
            rotate: [0, 5],
            transition: {
                duration: 0.5,
                repeat: 24,
                repeatType: "reverse",
                ease: "easeIn",
                delay: 1,
            },
        },
        next: {
            y: ["10%", "-30%"],
            rotate: [5, 0],
            transition: {
                duration: 0.5,
                repeat: 13,
                repeatType: "reverse",
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };

    return (
        <>
            <Head>
                <title>
                    Get Started{name}
                    {color}
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
                        <motion.div
                            className={styles.topContent}
                            variants={mainVariants}
                            animate={isNext ? "next" : ""}
                        >
                            <div className={styles.pageIndicator}>
                                {/* Replace by Indicator Components */}
                            </div>
                            <div className={styles.messageBG}>
                                <div className={styles.messageText}>
                                    <div className={styles.open}>
                                        <Image src={"/openQuotation.svg"} width={20} height={20}/>
                                    </div>
                                    <h6>You are not alone. You are seen and heard. I am here to support you.</h6>
                                    <div className={styles.close}>
                                    <Image src={"/closeQuotation.svg"} width={20} height={20}/>
                                    </div>
                                </div>
                                        <Image
                                            className={styles.messageImg}
                                            src={"/message.svg"}
                                            width={600}
                                            height={600}
                                        />
                                </div>
                        </motion.div>
                    </div>
                    <div className={styles.bottomGraphic}>
                        {/* Replace by Animated Graphic and Buttons Components */}
                        <motion.img
                            src={"/walkingBG.svg"}
                            className={styles.walkingImg}
                            width={1000}
                            height={1000}
                            initial={{ x: 650 }}
                            variants={walkingVariants}
                            animate={isNext ? "next" : "start"}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            transition={{
                                duration: 6,
                                delay: 1,
                            }}
                            animate={{
                                x: ["-180%", "120%"],
                            }}
                        >
                            <motion.img
                                src={"/character/walkingHugo.svg"}
                                width={80}
                                height={80}
                                initial={{ y: "10%" }}
                                variants={characterVariants}
                                animate={isNext ? "next" : "start"}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    );
}
