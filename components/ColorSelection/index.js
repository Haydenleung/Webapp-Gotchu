import React, { useState } from 'react';
import styles from "./ColorSelection.module.css";

export default function ColorSelection({
    img = ""
}) {

    return (
        <>
            <div className={styles.content}>
                <img src={img} />
            </div>


        </>
    );
}
