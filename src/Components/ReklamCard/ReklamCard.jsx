import React from 'react'
import './ReklamCard.css'
import { useTranslation } from 'react-i18next'
export default function ReklamCard({reklamImg, orqaFon}) {
    const {t}= useTranslation()
    return (
        <>
            <div className="container"> 
                <section className='reklam-card py-5 my-5'>
                    <div className={`row justify-content-around align-items-center bg-dange reklam-card__container  ${orqaFon}`}>
                        <div className="col-xl-3  text-end garandiya order-2 order-xl-1">
                            <h1>100%</h1>
                            <h3>{t("ReklamCard.tovar")}</h3>
                        </div>
                        <div className="col-xl-3 reklam-card__img order-1 order-xl-2">
                            <img src={reklamImg} className='img-fluid' alt="img undefined" />
                        </div>
                        <div className="col-xl-3 reklam-card__info order-3">
                            <h2>{t("ReklamCard.title")}</h2>
                            <p>{t("ReklamCard.subtitle")}</p>
                            <button>{t("ReklamCard.button")}</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
