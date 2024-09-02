import React from 'react'
import './AutumnSection.css'
import DivanMashrut from '../../../Components/DivanMashrut'

// images
import kuzgi1 from '../../../assets/Tovars/kuzgi1.jpg'
import kuzgi2 from '../../../assets/Tovars/kuzgi2.jpg'
import kuzgi3 from '../../../assets/Tovars/kuzgi3.jpg'
import kuzgi4 from '../../../assets/Tovars/kuzgi4.jpg'
import kuzgi5 from '../../../assets/Tovars/kuzgi5.jpg'
import kuzgi6 from '../../../assets/Tovars/kuzgi6.jpg'
import kuzgi7 from '../../../assets/Tovars/kuzgi7.jpg'
import kuzgi8 from '../../../assets/Tovars/kuzgi8.jpg'
import { useTranslation } from 'react-i18next'

export default function AutumnSection() {
    const {t}=useTranslation()
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1 className='seasons-header'>{t("AutumnSection.title")}</h1>
                        <p className='seasons-subtitle'>{t("NewsSection.text")}</p>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/safari" reklamImg={kuzgi1} tovarName={t("AutumnSection.Autumn1")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/colors" reklamImg={kuzgi2} tovarName={t("AutumnSection.Autumn2")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/shivali" reklamImg={kuzgi3} tovarName={t("AutumnSection.Autumn3")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/malaxit" reklamImg={kuzgi4} tovarName={t("AutumnSection.Autumn4")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/bahor" reklamImg={kuzgi5} tovarName={t("AutumnSection.Autumn5")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kuzgi" reklamImg={kuzgi6} tovarName={t("AutumnSection.Autumn6")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/moviy" reklamImg={kuzgi7} tovarName={t("AutumnSection.Autumn7")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/plaid" reklamImg={kuzgi8} tovarName={t("AutumnSection.Autumn8")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
