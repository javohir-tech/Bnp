import React from 'react'
import './DivanMashrut.css'
import { NavLink } from 'react-router-dom'

export default function DivanMashrut({ additionSection, reklamImg, tovarName }) {
    return (
        <>
            <NavLink to={additionSection} className="tovar-name">
                <div className='tovar-img'>
                    <img src={reklamImg} className='img-fluid' alt="img is not found" />
                </div>
                <div>
                    <p>{tovarName}</p>
                </div>
            </NavLink>
        </>
    )
}
