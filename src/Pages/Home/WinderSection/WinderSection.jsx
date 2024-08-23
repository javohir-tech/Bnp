import React from 'react'
import dastlapki from '../../../assets/Tovars/1chi.jpg'
import { NavLink } from 'react-bootstrap'

export default function WinderSection() {
    return (
        <>
            <section className='winder-section py-5'>
                <div className="container">
                    <div className='text-center'>
                        <h1>Qishgi Kolleksiya</h1>
                        <p>Buxoro tabiiy mahsuloti</p>
                        <div className="row">
                            <div className="col-3">
                                <NavLink to="kvadratchalar">
                                    <div>
                                        <img src={dastlapki} className='img-fluid' alt="rasm yuklanmadi" />
                                    </div>
                                    <p>Kvadratchalart</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
