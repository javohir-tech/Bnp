import React from 'react'
import car from '../../../assets/yukmoshina.svg'
import emplema from '../../../assets/emplema.svg'
import naushnik from '../../../assets/naushnik.svg'
import wallet from '../../../assets/wallet.svg'
import './HeroSection.css'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
    const { t } = useTranslation()
    return (
        <>
            <section className='hero-section'>
                <div className='container'>
                    <div className='row g-4 justify-content-between'>
                        <div className='col-md-6 col-xl-3 d-flex align-items-center '>
                            <div className='hero-section__img me-2'>
                                <img src={car} width={55} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>{t("hero-section.title-1")}</h6>
                                <p>{t("hero-section.subtitle-1")}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img me-2'>
                                <img src={emplema} width={50} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>{t("hero-section.title-2")}</h6>
                                <p>{t("hero-section.subtitle-2")}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img'>
                                <img src={naushnik} width={50} className='img-fluid me-2' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>{t("hero-section.title-3")}</h6>
                                <p>{t("hero-section.subtitle-3")}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center col-md-6 col-xl-3'>
                            <div className='hero-section__img me-2'>
                                <img src={wallet} width={50} className='img-fluid' alt="" />
                            </div>
                            <div className='hero-section__text'>
                                <h6>{t("hero-section.title-4")}</h6>
                                <p>{t("hero-section.subtitle-4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
