import React from 'react'
import DivanMashrut from '../../../Components/DivanMashrut'

//summer images
import yoz1 from '../../../assets/Tovars/yozgi1.jpg'
import yoz2 from '../../../assets/Tovars/yozgi2.jpg'
import yoz3 from '../../../assets/Tovars/yozgi3.jpg'
import yoz4 from '../../../assets/Tovars/yozgi4.jpg'
import yoz5 from '../../../assets/Tovars/yozgi5.jpg'
import yoz6 from '../../../assets/Tovars/yozgi6.jpg'
import yoz7 from '../../../assets/Tovars/yozgi7.jpg'
import yoz8 from '../../../assets/Tovars/yozgi8.jpg'
import { useTranslation } from 'react-i18next'


export default function SummerSection() {

    const {t}=useTranslation()
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1>Yozgi Kolleksiya</h1>
                        <p>Buxoro tabiiy mahsuloti</p>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Vintage" reklamImg={yoz1} tovarName={t("SummerSection.Summer1")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/hilpiragan" reklamImg={yoz2} tovarName={t("SummerSection.Summer2")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/fransuz" reklamImg={yoz3} tovarName={t("SummerSection.Summer3")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/qoy" reklamImg={yoz4} tovarName={t("SummerSection.Summer4")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/alp" reklamImg={yoz5} tovarName={t("SummerSection.Summer5")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Ilhomlantiruvchi" reklamImg={yoz7} tovarName={t("SummerSection.Summer6")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/yashil" reklamImg={yoz6} tovarName={t("SummerSection.Summer7")} />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/zaytun" reklamImg={yoz8} tovarName={t("SummerSection.Summer8")} />
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
