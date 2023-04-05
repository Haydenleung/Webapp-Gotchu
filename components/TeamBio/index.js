import React, { useState } from 'react';
import styles from "./TeamBio.module.css";
import Image from 'next/image';

export default function TeamBio({
    imgSrc = "",
    name = "",
    position = ""
}) {

    return (
        <>
            <div className={styles.content}>
                <img src={imgSrc} />
                <h2>{name}</h2>
                <p>{position}</p>
            </div>


        </>
    );
}
