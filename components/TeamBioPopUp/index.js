import React, { useState } from 'react';
import styles from "./TeamBioPopUp.module.css";
import Image from 'next/image';

export default function TeamBioPopUp({
    imgSrc = "",
    name = "",
    position = "",
    description = ""
}) {
    const [display, setDisplay] = useState(false);

    return (
        <>
            <div className={styles.content} onClick={() => setDisplay(true)}>
                <img src={imgSrc} />
                <h2>{name}</h2>
                <p>{position}</p>
                <hr></hr>
                <p>{description}</p>
                <hr></hr>
            </div>

            {display && (
                <div className={styles.display} onClick={() => setDisplay(true)}>
                    <div className={styles.displayInner}>
                        <Image src={imgSrc} />
                        <h2>{name}</h2>
                        <p>{position}</p>
                        <hr></hr>
                        <p>{description}</p>
                        <hr></hr>
                    </div>
                </div>
            )}
        </>
    );
}
