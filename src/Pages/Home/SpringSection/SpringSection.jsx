import React from 'react'
import DivanMashrut from '../../../Components/DivanMashrut'
//images
import spring1 from '../../../assets/Tovars/spring1.jpg'
import spring2 from '../../../assets/Tovars/spring2.jpg'
import spring3 from '../../../assets/Tovars/spring3.jpg'
import spring4 from '../../../assets/Tovars/spring4.jpg'
import spring5 from '../../../assets/Tovars/spring5.jpg'
import spring6 from '../../../assets/Tovars/spring6.jpg'
import spring7 from '../../../assets/Tovars/spring7.jpg'
import spring8 from '../../../assets/Tovars/spring8.jpg'


export default function SpringSection() {
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1>Kuz Kolleksiya</h1>
                        <p>Buxoro tabiiy mahsuloti</p>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Versal" reklamImg={spring1} tovarName="Versal (AB)" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Sakura" reklamImg={spring2} tovarName="Sakura filiali" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Toqqa" reklamImg={spring3} tovarName="Toqqa chiqish" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/uygunlik" reklamImg={spring4} tovarName="Uyg'unlik" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/dastarxon" reklamImg={spring5} tovarName="Dastarxon" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/yovvoyi" reklamImg={spring6} tovarName="Yovvoyi orkide" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/makka" reklamImg={spring7} tovarName="Tog'li makkajo'xori" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/bollarDunnyosi" reklamImg={spring8} tovarName="Bolalar Dunnyosi" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
