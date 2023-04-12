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

export default function Transition() {
    const router = useRouter();
    const query = router.query;
    const name = query.name;
    const color = query.color;

    useEffect(() => {
        // e.preventDefault();
        // setLoading(true);
        setTimeout(() => {
            router.push(
                {
                    pathname: "/questiontwo",
                    query: { name: name, color: color },
                },
                "/questiontwo"
            );
        }, 6500);
    });

    const [isNext, setIsNext] = useState(false);

    const mainVariants = {
        transit: {
            opacity: [0, 100, 0],
            transition: {
                duration: 6,
                ease: "easeInOut"
            },
        }
    };

    const walkingVariants = {
        transit: {
            x: [-240, -540],
            transition: {
                duration: 6,
                ease: "linear",
            },
        }
    };

    const characterVariants = {
        transit: {
            y: ["10%", "-30%"],
            rotate: [5, 0],
            transition: {
                duration: 0.5,
                repeat: 11,
                repeatType: "reverse",
                ease: "easeOut",
            },
        }
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
                        <div className={styles.pageIndicator}>
                            {/* Replace by Indicator Components */}
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
                            src={"/walkingBG.svg"}
                            className={styles.walkingImg}
                            width={1000}
                            height={1000}
                            initial={{ x: 650 }}
                            variants={walkingVariants}
                            animate={"transit"}
                        />
                        <motion.div
                            className={styles.walkingCharacter}
                            initial={{ x: "120%" }}>
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
