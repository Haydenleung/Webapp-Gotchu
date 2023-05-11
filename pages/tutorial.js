import { React, useEffect } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import styles from "../styles/Tutorial.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'
import NextButton from '@/components/NextButton'
import ColorSelection from '@/components/ColorSelection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function Tutorial() {

    const { locales } = useRouter();
    const intl = useIntl();
    const pageTitle = intl.formatMessage({ id: "page.nav.tutorial" })
    const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
    const oneText = intl.formatMessage({ id: "page.tutorial.one" })
    const twoText = intl.formatMessage({ id: "page.tutorial.two" })
    const title = intl.formatMessage({ id: "page.personal.title" })
    const subTitle = intl.formatMessage({ id: "page.personal.subTitle" })
    const inputText = intl.formatMessage({ id: "page.personal.input" })
    const colorTitle = intl.formatMessage({ id: "page.personal.color" })

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
        purple === true ? setImgP('/character/character_BG_select.svg') : setImgP('/character/character_BG.svg')
        green === true ? setImgG('/character/character_BG_select.svg') : setImgG('/character/character_BG.svg')
        orange === true ? setImgO('/character/character_BG_select.svg') : setImgO('/character/character_BG.svg')
        red === true ? setImgR('/character/character_BG_select.svg') : setImgR('/character/character_BG.svg')
        brown === true ? setImgB('/character/character_BG_select.svg') : setImgB('/character/character_BG.svg')
        tan === true ? setImgT('/character/character_BG_select.svg') : setImgT('/character/character_BG.svg')
    })

    const [name, setName] = useState('');
    const [color, setColor] = useState('green');
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
                <title>{pageTitle}</title>
                <meta name="description" content={pageDes} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.empty} />
                <Navbar />
                <Link href="tutorialB" className={styles.filterB} />
                <div className={styles.filter} />
                <div className={styles.main_container}>
                    <div className={styles.clickIndicator}>
                        <Image src={'../click_dot.svg'} width={65} height={65} className={styles.clickDot} />
                        <motion.img
                            src={'../click_hand.svg'}
                            width={100}
                            height={100}
                            className={styles.clickHand}
                            animate={{ x: ["0%", "5%"], y: ["0%", "5%"] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeOut"
                            }}
                        />
                    </div>
                    <Image src={'/icons/navigationArrow.svg'} width={25} height={57} className={styles.navigationArrow} />
                    <h4 className={styles.tutorialText}>{oneText}</h4>
                    <Image src={'/icons/nextArrowT.svg'} width={25} height={57} className={styles.nextArrow} />
                    <h4 className={styles.tutorialTextTwo}>{twoText}</h4>
                    <div className={styles.pageContent}>
                        <div className={styles.topContent}>
                            <div className={styles.pageTitle}>
                                <h4>{title}</h4>
                                <p>({subTitle})</p>
                            </div>
                            <div className={styles.nameInput}>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder={inputText}
                                    onChange={handleInputChange}
                                    className={styles.inputFelid}
                                />
                            </div>
                            <div className={styles.pagePick}>
                                <h4>{colorTitle}</h4>
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
            </div >
        </>
    )
}
