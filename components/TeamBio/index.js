import React, { useState } from 'react';
import styles from "./TeamBio.module.css";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function TeamBio({
    imgSrc = "",
    name = "",
    position = "",
    description = "",
}) {

    const [popup, setPopup] = useState(false);

    return (
        <section>
            <div className={styles.content} onClick={() => setPopup(true)}>
                <img src={imgSrc} alt={`${name} profile`} />
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
            {
                popup === true ?
                    <motion.div onClick={() => setPopup(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "duration",
                            duration: 0.3
                        }}
                        style={{ display: popup ? "block" : "none" }}
                    >
                        <motion.div
                            className={styles.popUp}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "duration",
                                duration: 0.3
                            }}
                        >

                            <div className={styles.clickedContent} >

                                <div>
                                    <div className={styles.bioInfo}>
                                        <img src={imgSrc} alt={`${name} profile`} />
                                        <h2>{name}</h2>
                                        <p>{position}</p>
                                    </div>
                                    <hr className={styles.separator} />
                                    <p>{description}</p>
                                    <hr className={styles.separator} />
                                </div>

                                <div className={styles.close}>
                                    <Image
                                        src={'icons/close.svg'}
                                        onClick={() => setPopup(false)}
                                        className={styles.closeIcon}
                                        width={20}
                                        height={30}
                                        alt="Close popup"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    : <></>
            }
        </section>
    )
}
