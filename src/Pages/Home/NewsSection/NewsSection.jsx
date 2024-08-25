import React from 'react'
import NewsCrad from '../../../Components/NewsCard/NewsCrad'
//images
import newsImg1 from '../../../assets/newsCard1.png'
import newsImg2 from '../../../assets/newsCard12png.png'
import newsImg3 from '../../../assets/newsCard3.png'

export default function NewsSection() {
    return (
        <>
            <section className='news-section'>
                <div className="container">
                    <div className='text-center'>
                        <h1>News</h1>
                        <p>Buxoro Tabiiy Mahsuloti</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <NewsCrad newsMashrut={"/news1"} newsImg={newsImg1} data={"10/05/2019 "} title={"Qanday qilib mukammal gadjetlarni tanlash mumkin"} subtitle={"Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepalikka urilganda ..."} />
                        </div>
                        <div className='col-md-4'>
                            <NewsCrad  newsMashrut={"/news2"} newsImg={newsImg2} data={"10/05/2019 "} title={"Qanday qilib mukammal gadjetlarni tanlash mumkin"} subtitle={"Qachonki, go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepaga urilganda ..."} />
                        </div>
                        <div className='col-md-4'>
                            <NewsCrad  newsMashrut={"/news3"} newsImg={newsImg3} data={"10/05/2019 "} title={"Qanday qilib mukammal gadjetlarni tanlash mumkin"} subtitle={"Lorem Ipsumning ko'plab o'zgarishlari mavjud, ammo ularning aksariyati o'zgarishlardan aziyat chekdi ..."} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
