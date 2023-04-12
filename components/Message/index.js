import React, { useState } from 'react';
import styles from "./Message.module.css";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Message({
    txt = ""
}) {

    return (
        <>
            <div className={styles.messageBG}>
                <div className={styles.messageText}>
                    <div className={styles.open}>
                        <Image src={"/openQuotation.svg"} width={20} height={20} />
                    </div>
                    <h6>{txt}</h6>
                    <div className={styles.close}>
                        <Image src={"/closeQuotation.svg"} width={20} height={20} />
                    </div>
                </div>
                <Image
                    className={styles.messageImg}
                    src={"/message.svg"}
                    width={600}
                    height={600}
                />
            </div>
        </>
    );
}
