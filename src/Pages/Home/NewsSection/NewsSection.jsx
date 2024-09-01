import React from 'react'
import NewsCrad from '../../../Components/NewsCard/NewsCrad'
//images
import newsImg1 from '../../../assets/newsCard1.png'
import newsImg2 from '../../../assets/newsCard12png.png'
import newsImg3 from '../../../assets/newsCard3.png'
import { useTranslation } from 'react-i18next'

export default function NewsSection() {
    const {t}=useTranslation()
    return (
        <>
            <section className='news-section'>
                <div className="container">
                    <div className='text-center'>
                        <h1>{t("NewsSection.title")}</h1>
                        <p>{t("NewsSection.subtitle")}</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <NewsCrad newsMashrut={"/news1"} newsImg={newsImg1} data={"10/05/2019 "} title={t("NewsSection.CardTitle")} subtitle={t("NewsSection.CardSubtitle")} />
                        </div>
                        <div className='col-md-4'>
                            <NewsCrad  newsMashrut={"/news2"} newsImg={newsImg2} data={"10/05/2019 "} title={t("NewsSection.CardTitle")} subtitle={t("NewsSection.CardSubtitle")} />
                        </div>
                        <div className='col-md-4'>
                            <NewsCrad  newsMashrut={"/news3"} newsImg={newsImg3} data={"10/05/2019 "} title={t("NewsSection.CardTitle")} subtitle={t("NewsSection.CardSubtitle")} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
