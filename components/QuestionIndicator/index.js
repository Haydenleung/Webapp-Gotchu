import React, { useState } from 'react';
import styles from "./QuestionIndicator.module.css";
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function QuestionIndicator({
    status = 1,
    ini_wd = 0,
    fin_wd = 0,
    time = 1
}) {

    return (
        <>
            <div className={styles.container}>
                {
                    status >= 1 ?
                        <div className={styles.fulldot}>
                            <motion.div
                                className={styles.line}
                                initial={{ width: ini_wd }}
                                animate={{
                                    width: [ini_wd, fin_wd]
                                }}
                                transition={{
                                    duration: time
                                }}
                            ></motion.div>
                        </div> :
                        <div className={styles.dot}></div>
                }
                {
                    status >= 2 ? <div className={styles.fulldot}></div> : <div className={styles.dot}></div>
                }
                {
                    status >= 3 ? <div className={styles.fulldot}></div> : <div className={styles.dot}></div>
                }
                {
                    status >= 4 ? <div className={styles.fulldot}></div> : <div className={styles.dot}></div>
                }
            </div>
        </>
    );
}
