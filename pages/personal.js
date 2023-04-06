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
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <Navbar />
                <div className={styles.pageContent}>
                    <div className={styles.topContent}>
                        <div className={styles.pageTitle}>
                            <h4>What's your name?</h4>
                            <p>(Optional)</p>
                        </div>

                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={styles.inputFelid}

                        />
                        <div className={styles.nameInput}>
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
        </div>
    )
}
