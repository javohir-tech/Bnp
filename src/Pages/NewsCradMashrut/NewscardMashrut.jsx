import React, { useEffect } from 'react'
import './NewscardMashrut.css'
import FormSection from '../../Components/Form/FormSection'
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function NewscardMashrut({ NewsContentImg, data }) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const {t} =useTranslation()
    return (
        <>
            <div className='container'>
                <div className='news-content'>
                    <div className='news-content__img'>
                        <img src={NewsContentImg} className='img-fluid w-100' alt="imd is not found" />
                    </div>
                    <div className='news-content__info'>
                        <p className='news-content__text'><p className='text-danger d-inline'>{data}</p>- {t("NewsSection.by")}</p>

                        <p className='news-content__text'>{t("NewscardMashrut.text1")}</p>
                        <p className='news-content__text'>{t("NewscardMashrut.text2")}</p>
                        <p className='news-content__text'>{t("NewscardMashrut.text3")}</p>
                        <p className='news-content__text'>{t("NewscardMashrut.text4")}</p>
                        <div className='news-section__form'>
                            <FormSection title={t("NewscardMashrut.form.title")} col={"col-md-6"} subtitle={t("NewscardMashrut.form.subtitle")}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
