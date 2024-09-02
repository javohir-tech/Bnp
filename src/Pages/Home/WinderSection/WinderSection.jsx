import React from 'react'
import './WinderSection.css'

import dastlapki from '../../../assets/Tovars/1chi.jpg'
import ikkinchi from '../../../assets/Tovars/qishki2.jpg'
import uchuinchi from '../../../assets/Tovars/qishki3.jpg'
import tortinchi from '../../../assets/Tovars/qishki4.jpg'
import beshinchi from '../../../assets/Tovars/qishki5.jpg'
import oltinchi from '../../../assets/Tovars/qishki6.jpg'
import yetinchi from '../../../assets/Tovars/qishki7.jpg'
import sakinzinchi from '../../../assets/Tovars/qishki8.jpg'
import DivanMashrut from '../../../Components/DivanMashrut'
import { useTranslation } from 'react-i18next'


export default function WinderSection() {

    const {t}=useTranslation();
    
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1 className='seasons-header'>{t("WinderSection.title")}</h1>
                        <p  className='seasons-subtitle'>{t("NewsSection.text")}</p>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kvadratchalar" reklamImg={dastlapki} tovarName={t("WinderSection.Winder1")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Ikat" reklamImg={ikkinchi} tovarName={t("WinderSection.Winder2")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/davralar" reklamImg={uchuinchi} tovarName={t("WinderSection.Winder3")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/geometriya" reklamImg={tortinchi} tovarName={t("WinderSection.Winder4")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/tropik" reklamImg={beshinchi} tovarName={t("WinderSection.Winder5")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/bambi" reklamImg={oltinchi} tovarName={t("WinderSection.Winder6")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/vizantiya" reklamImg={yetinchi} tovarName={t("WinderSection.Winder7")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kechki" reklamImg={sakinzinchi} tovarName={t("WinderSection.Winder8")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
