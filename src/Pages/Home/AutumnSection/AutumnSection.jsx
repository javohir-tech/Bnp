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

export default function AutumnSection() {
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1>Kuz Kolleksiya</h1>
                        <p>Buxoro tabiiy mahsuloti</p>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/safari" reklamImg={kuzgi1} tovarName="Safari" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/colors" reklamImg={kuzgi2} tovarName="Ko'p rangli ametist" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/shivali" reklamImg={kuzgi3} tovarName="Shivali bezak" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/malaxit" reklamImg={kuzgi4} tovarName="Malaxit qutisi" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/bahor" reklamImg={kuzgi5} tovarName="Bahorning hidlari" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/kuzgi" reklamImg={kuzgi6} tovarName="Kuzgi barglar tushishi (AB)" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/moviy" reklamImg={kuzgi7} tovarName="Moviy suv (AB)" />
                            </div>
                            <div className="col-xl-3 col-md-4 ">
                                <DivanMashrut additionSection="/plaid" reklamImg={kuzgi8} tovarName="Plaid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
