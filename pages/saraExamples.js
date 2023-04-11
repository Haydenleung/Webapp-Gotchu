import styles from "../styles/Sara.module.css";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import TeamBioPopUp from "@/components/TeamBioPopUp";
import ColorSelection from "@/components/ColorSelection";
import TeamBio from "@/components/TeamBio";
import { useScroll } from "framer-motion";

export default function Sara() {


    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.contentContainer}>
                        <img src='/group_fill.png' />
                        <h3>Our Team</h3>
                    </div>
                </div>

                <div className={styles.row}>
                    <TeamBio imgSrc='green_blob.png' name='Hayden' position='UX/UI Designer' />

                    <TeamBio imgSrc='purple_blob.png' name='Kiona' position='UX/UI Designer' />
                </div>

                <div className={styles.row}>
                    <TeamBio imgSrc='red_blob.png' name='Sara' position='UX/UI Designer' />


                    <TeamBio imgSrc='orange_blob.png' name='Evan' position='UX/UI Designer' />
                </div>

                <Link href="/"><button className={styles.actionBtn}>Back to Home</button></Link>


            </div>
        </div>

        // <div className={styles.main}>
        //     <div className={styles.main_container}>
        //         <div className={styles.navbar}>
        //             <Navbar />
        //         </div>
        //         <div className={styles.pageContent}>
        //             <div className={styles.contentContainer}>
        //                 <img src='/group_fill.png' />
        //                 <h3>Our Team</h3>
        //             </div>
        //         </div>





        //         <div className={styles.colorTile}>
        //             <ColorSelection img='purple_character.png' />
        //             <ColorSelection img='green_character.png' />
        //         </div>
        //         <div className={styles.colorTile}>
        //             <ColorSelection img='orange_character.png' />
        //             <ColorSelection img='red_character.png' />
        //         </div>
        //         <div className={styles.colorTile}>
        //             <ColorSelection img='brown_character.png' />
        //             <ColorSelection img='tan_character.png' />
        //         </div>


        // {/* <div className={styles.row}>
        //     <TeamBioPopUp imgSrc='green_blob.png' name='Hayden' position='UX/UI Designer' description='Hayden is an outstanding UX/UI Designer and Developer from Hong Kong. He is a creative designer who keeps up with the latest design trends. Hayden has an eye for detail, consistently produces exceptional work, and is therefore a valuable member to our team.' />

        //     <TeamBioPopUp imgSrc='purple_blob.png' name='Kiona' position='UX/UI Designer' description='Kiona is a talented and dedicated UX/UI Designer and Developer from Kaiping. She is a quick learner with a passion for detail. She is always eager to learn and improve her skills and her hard work and dedication make her an asset to any team.'
        //     />
        // </div>

        // <div className={styles.row}>
        //     <TeamBioPopUp imgSrc='red_blob.png' name='Sara' position='UX/UI Designer' description='Sara, a UX/UI Designer and Developer from Toronto, who is a highly motivated and passionate individual. She has a great aptitude for problem-solving and is always eager to create high-quality applications. makes her a valuable addition to any team.' />


        //     <TeamBioPopUp imgSrc='orange_blob.png' name='Evan' position='UX/UI Designer' description='Evan is an artistic and innovative UX/UI Designer from Vietnam. He has an eye for detail and is always creating new and innovative designs. Evan uses a combination of technical and creative skills to produce exceptional work. His dedication to learning and improvement makes him valuable to projects.' />
        // </div> */}

        //         <Link href="/"><button className={styles.actionBtn}>Back to Home</button></Link>



        //     </div>
        // </div>
    )
}