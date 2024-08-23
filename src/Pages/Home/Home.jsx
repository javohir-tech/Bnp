import React from 'react'
import MainSection from './MainSection/MainSection'
import HeroSection from './HeroSection/HeroSection'
import ReklamCard from '../../Componets/ReklamCard/ReklamCard'
import WinderSection from './WinderSection/WinderSection'


export default function Home() {
    return (
        <>
            {/* main section */}
            <MainSection />
            {/* hero section */}
            <HeroSection/>
            {/* reklam card 1 */}
            <ReklamCard/>
            {/* winder section */}
            <WinderSection/>
        </>

    )
}
