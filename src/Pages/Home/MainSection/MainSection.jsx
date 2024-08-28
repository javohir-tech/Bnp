import React from 'react'
import mainImg from '../../../assets/mainImg.png'
import './MainSection.css'
import { useTranslation } from 'react-i18next'

export default function MainSection() {

    const {t} =useTranslation()

    return (
        <>
            <div className='container'>
                <section className='main-section py-3'>
                    <div className="row align-items-center  main-section__content position-relative">
                        <div className="col-xl-6">
                            <img src={mainImg} alt="mainImg" className='img-fluid main-img' />
                        </div>
                        <div className="col-xl-6 main-section-titles">
                            <h3 className='text-md-end'>{t("main-section.item-1")}</h3>
                            <h2 className='text-md-end'>{t("main-section.item-2")}</h2>
                            <h1 className='text-md-end '>{t("main-section.item-3")}</h1>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
