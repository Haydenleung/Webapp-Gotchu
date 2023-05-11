import { React, useEffect } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import styles from "../styles/Personal.module.css"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Characters from '@/components/Characters'
import NextButton from '@/components/NextButton'
import ColorSelection from '@/components/ColorSelection'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

export default function Personal({ dir }) {

    const { locales } = useRouter();
    const intl = useIntl();
    const pageTitle = intl.formatMessage({ id: "page.home.button.start" })
    const pageDes = intl.formatMessage({ id: "page.home.head.meta.description" })
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

    const [opacP, setOpacP] = useState('1');
    const [opacG, setOpacG] = useState('1');
    const [opacO, setOpacO] = useState('1');
    const [opacR, setOpacR] = useState('1');
    const [opacB, setOpacB] = useState('1');
    const [opacT, setOpacT] = useState('1');

    const colorChange = () => {
        setPurple(false);
        setGreen(false);
        setOrange(false);
        setRed(false);
        setBrown(false);
        setTan(false);
        setOpacP('0.4');
        setOpacG('0.4');
        setOpacO('0.4');
        setOpacR('0.4');
        setOpacB('0.4');
        setOpacT('0.4');
    }

    useEffect(() => {
        purple === true ? (setImgP('/character/character_BG_select.svg'), setColor("purple"), setOpacP('1')) : setImgP('/character/character_BG.svg')
        green === true ? (setImgG('/character/character_BG_select.svg'), setColor("green"), setOpacG('1')) : setImgG('/character/character_BG.svg')
        orange === true ? (setImgO('/character/character_BG_select.svg'), setColor("orange"), setOpacO('1')) : setImgO('/character/character_BG.svg')
        red === true ? (setImgR('/character/character_BG_select.svg'), setColor("red"), setOpacR('1')) : setImgR('/character/character_BG.svg')
        brown === true ? (setImgB('/character/character_BG_select.svg'), setColor("brown"), setOpacB('1')) : setImgB('/character/character_BG.svg')
        tan === true ? (setImgT('/character/character_BG_select.svg'), setColor("tan"), setOpacT('1')) : setImgT('/character/character_BG.svg')
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
                <title>{pageTitle}</title>
                <meta name="description" content={pageDes} />
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
                                <div className={styles.colorTile} onClick={() => { colorChange(); setPurple(true) }} style={{ opacity: opacP }}>
                                    <ColorSelection img={imgP} cha={'/character/purple_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setGreen(true) }} style={{ opacity: opacG }}>
                                    <ColorSelection img={imgG} cha={'/character/green_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setOrange(true) }} style={{ opacity: opacO }}>
                                    <ColorSelection img={imgO} cha={'/character/orange_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setRed(true) }} style={{ opacity: opacR }}>
                                    <ColorSelection img={imgR} cha={'/character/red_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setBrown(true) }} style={{ opacity: opacB }}>
                                    <ColorSelection img={imgB} cha={'/character/brown_character_main.svg'} />
                                </div>
                                <div className={styles.colorTile} onClick={() => { colorChange(); setTan(true) }} style={{ opacity: opacT }}>
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
