import React, { useState } from 'react';
import styles from "./ColorSelection.module.css";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ColorSelection({
    img = "",
    cha = ""
}) {

    return (
        <>
            <div className={styles.content}>
                <Image src={img} width={100} height={100} className={styles.background} />
                <motion.img
                    src={cha}
                    width={100}
                    height={100}
                    className={styles.character}
                    whileHover={{
                        rotate: [3, -3],
                        y: [-5, 5],
                        transition: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 0.5
                        },
                    }}
                />
            </div>


        </>
    );
}
