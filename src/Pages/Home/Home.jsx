import React from 'react'
import MainSection from './MainSection/MainSection'
import HeroSection from './HeroSection/HeroSection'
import ReklamCard from '../../Components/ReklamCard/ReklamCard'
import WinderSection from './WinderSection/WinderSection'
import divanImg from '../../assets/111.png'
import divanImg2 from '../../assets/111-1.png'
import divanImg3 from '../../assets/111-2.png'
import AutumnSection from './AutumnSection/AutumnSection'
import SummerSection from './SummerSection/SummerSection'


export default function Home() {
    return (
        <>
            {/* main section */}
            <MainSection />
            {/* hero section */}
            <HeroSection />
            {/* reklam card 1 */}
            <ReklamCard reklamImg={divanImg} orqaFon={"birinchi"} />
            {/* winder section */}
            <WinderSection />
            {/* reklam card 2 */}
            <ReklamCard reklamImg={divanImg2} orqaFon={"ikkinchi"} />
            {/* autumn section */}
            <AutumnSection />
            {/* reklam card 3 */}
            <ReklamCard orqaFon={"uchinchi"} reklamImg={divanImg3} />
            {/* summer section */}
            <SummerSection />
            {/* news section  */}
            
        </>

    )
}
