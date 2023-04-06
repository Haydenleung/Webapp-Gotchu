import { React } from 'react'
import { useState } from 'react'
import styles from "../styles/Personal.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'
import NextButton from '@/components/NextButton'
import ColorSelection from '@/components/ColorSelection'

export default function Personal() {
    const [name, setName] = useState('');
    const handleInputChange = (e) => {
        // Remove any non-alphabetic characters using regex
        const inputValue = e.target.value.replace(/[^a-zA-Z]/g, '');
        // Update the input field's value
        e.target.value = inputValue;
        setName(e.target.value);
    };

    return (
        <div className={styles.main}>
            <div className={styles.empty} />
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>What's your name?</h4>
                            <p>(Optional)</p>
                        </div>

                        <div className={styles.nameInput}>
                            <input
                                type="text"
                                value={name}
                                placeholder="Characters Only"
                                onChange={handleInputChange}
                                className={styles.inputFelid}
                            />
                        </div>
                        <div className={styles.pagePick}>
                            <h4>Pick a color you like</h4>
                        </div>

                        <div className={styles.colorTile}>
                            <ColorSelection img='purple_character.png' />
                            <ColorSelection img='green_character.png' />
                        </div>
                        <div className={styles.colorTile}>
                            <ColorSelection img='orange_character.png' />
                            <ColorSelection img='red_character.png' />
                        </div>
                        <div className={styles.colorTile}>
                            <ColorSelection img='brown_character.png' />
                            <ColorSelection img='tan_character.png' />
                        </div>
                        
                    </div>
                    <div className={styles.bottomContent}>

                        <Link href="/start">
                            <NextButton />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.empty} />
        </div>
    )
}
