import { React, useEffect } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import styles from "../styles/Personal.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'
import NextButton from '@/components/NextButton'
import ColorSelection from '@/components/ColorSelection'

export default function Personal() {

    const [purple, setPurple] = useState(false);
    const [green, setGreen] = useState(false);
    const [orange, setOrange] = useState(false);
    const [red, setRed] = useState(false);
    const [brown, setBrown] = useState(false);
    const [tan, setTan] = useState(false);

    const [imgP, setImgP] = useState();
    const [imgG, setImgG] = useState();
    const [imgO, setImgO] = useState();
    const [imgR, setImgR] = useState();
    const [imgB, setImgB] = useState();
    const [imgT, setImgT] = useState();

    const colorChange = () => {
        setPurple(false);
        setGreen(false);
        setOrange(false);
        setRed(false);
        setBrown(false);
        setTan(false);
    }

    useEffect(() => {
        purple === true ? (setImgP('/character/character_BG_select.svg'), setColor("purple")) : setImgP('/character/character_BG.svg')
        green === true ? (setImgG('/character/character_BG_select.svg'), setColor("green")) : setImgG('/character/character_BG.svg')
        orange === true ? (setImgO('/character/character_BG_select.svg'), setColor("orange")) : setImgO('/character/character_BG.svg')
        red === true ? (setImgR('/character/character_BG_select.svg'), setColor("red")) : setImgR('/character/character_BG.svg')
        brown === true ? (setImgB('/character/character_BG_select.svg'), setColor("brown")) : setImgB('/character/character_BG.svg')
        tan === true ? (setImgT('/character/character_BG_select.svg'), setColor("tan")) : setImgT('/character/character_BG.svg')
    })

    const [name, setName] = useState('');
    const [color, setColor] = useState('purple');
    const handleInputChange = (e) => {
        // Remove any non-alphabetic characters using regex
        const inputValue = e.target.value.replace(/[^a-zA-Z" "]/g, '');
        // Update the input field's value
        e.target.value = inputValue;
        setName(e.target.value);
    };

    return (
        <>
            <Head>
                <title>Get Started</title>
                <meta name="description" content="Anti-Bully App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                                    placeholder="Characters Only..."
                                    onChange={handleInputChange}
                                    className={styles.inputFelid}
                                />
                            </div>
                            <div className={styles.pagePick}>
                                <h4>Pick a color you like</h4>
                            </div>
                            <div className={styles.character}>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setPurple(true) }}>
                                    <ColorSelection img={imgP} cha={'/character/purple_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setGreen(true) }}>
                                    <ColorSelection img={imgG} cha={'/character/green_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setOrange(true) }}>
                                    <ColorSelection img={imgO} cha={'/character/orange_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setRed(true) }}>
                                    <ColorSelection img={imgR} cha={'/character/red_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setBrown(true) }}>
                                    <ColorSelection img={imgB} cha={'/character/brown_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setTan(true) }}>
                                    <ColorSelection img={imgT} cha={'/character/tan_character_main.svg'} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottomButton}>
                            <Link href={{ pathname: "/start", query: { name, color } }}>
                                <NextButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.empty} />
            </div>
        </>
    )
}
