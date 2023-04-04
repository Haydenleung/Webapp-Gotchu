import React from 'react'
import styles from "../styles/Transition.module.css"
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Transition() {


    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageIndicator}>
                            {/* Replace by Indicator Components */}
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <div className={styles.message}>
                            {/* Replace by Message Components */}
                            <p>You are not alone.You are seen and heard. I am here to support you. </p>
                       </div>
                    </div>
                </div>
                <div className={styles.bottomGraphic}>
                    {/* Replace by Animated Graphic */}
                </div>
            </div>
        </div>
    )
}

// const array = []
// create a array with 4 elements in the first page
//update the value by useState of each element 
// pass this array to next page 