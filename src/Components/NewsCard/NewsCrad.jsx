import React from 'react'
import './NewsCrad.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function NewsCrad({ newsImg, data, title, subtitle, newsMashrut }) {
    const {t}=useTranslation()
    return (
        <>
            <NavLink to={newsMashrut}>
                <div className='news-card'>
                    <div className='news-card__img'>
                        <img src={newsImg} className='img-fluid' alt="img is not found" />
                    </div>
                    <div className='news-card__info'>
                        <p className='data'>{data} . {t("NewsSection.by")}</p>

                        <p className='news-card__title'>{title}</p>

                        <p className='news-card__subtitle'>{subtitle}</p>
                    </div>
                </div>
            </NavLink>
        </>
    )
}
