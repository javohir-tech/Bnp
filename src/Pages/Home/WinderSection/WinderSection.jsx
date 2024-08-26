import React from 'react'

import dastlapki from '../../../assets/Tovars/1chi.jpg'
import ikkinchi from '../../../assets/Tovars/qishki2.jpg'
import uchuinchi from '../../../assets/Tovars/qishki3.jpg'
import tortinchi from '../../../assets/Tovars/qishki4.jpg'
import beshinchi from '../../../assets/Tovars/qishki5.jpg'
import oltinchi from '../../../assets/Tovars/qishki6.jpg'
import yetinchi from '../../../assets/Tovars/qishki7.jpg'
import sakinzinchi from '../../../assets/Tovars/qishki8.jpg'
import DivanMashrut from '../../../Components/DivanMashrut'


export default function WinderSection() {

    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        {/* <h1>Qishgi Kolleksiya</h1>
                        <p>Buxoro tabiiy mahsuloti</p> */}
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kvadratchalar" reklamImg={dastlapki} tovarName="Kvadratchalar" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/Ikat" reklamImg={ikkinchi} tovarName="Ikat" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/davralar" reklamImg={uchuinchi} tovarName="Davralar" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/geometriya" reklamImg={tortinchi} tovarName="Geometriya ko'k" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/tropik" reklamImg={beshinchi} tovarName="Tropik barglar" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/bambi" reklamImg={oltinchi} tovarName="Bambi" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/vizantiya" reklamImg={yetinchi} tovarName="Vizatntiya" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kechki" reklamImg={sakinzinchi} tovarName="Kechki Bog'" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
