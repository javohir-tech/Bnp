import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import DivanMashrut from '../../../Components/DivanMashrut';
import dastlapki from '../../../assets/Tovars/1chi.jpg';
import ikkinchi from '../../../assets/Tovars/qishki2.jpg';
import uchuinchi from '../../../assets/Tovars/qishki3.jpg';
import tortinchi from '../../../assets/Tovars/qishki4.jpg';
import beshinchi from '../../../assets/Tovars/qishki5.jpg';
import oltinchi from '../../../assets/Tovars/qishki6.jpg';
import yetinchi from '../../../assets/Tovars/qishki7.jpg';
import sakinzinchi from '../../../assets/Tovars/qishki8.jpg';

export default function First() {
    const [activePage, setActivePage] = useState(1);

    const handlePaginationClick = (number) => {
        setActivePage(number);
    };

    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === activePage}
                onClick={() => handlePaginationClick(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <div>
                <Pagination size="sm">{items}</Pagination>
            </div>
            <div className="row">
                <div className="col-md-4 col-xl-3 col-6">
                    <DivanMashrut additionSection="/kvadratchalar" reklamImg={dastlapki} tovarName="Kvadratchalar" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/Ikat" reklamImg={ikkinchi} tovarName="Ikat" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/davralar" reklamImg={uchuinchi} tovarName="Davralar" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/geometriya" reklamImg={tortinchi} tovarName="Geometriya ko'k" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/tropik" reklamImg={beshinchi} tovarName="Tropik barglar" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/bambi" reklamImg={oltinchi} tovarName="Bambi" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/vizantiya" reklamImg={yetinchi} tovarName="Vizatntiya" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    <DivanMashrut additionSection="/kechki" reklamImg={sakinzinchi} tovarName="Kechki Bog'" />
                </div>
                <div className='col-6 col-xl-3 col-md-4'>
                    {/* Additional content here */}
                </div>
            </div>
        </>
    );
}
