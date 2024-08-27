import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

import DivanMashrut from '../../../Components/DivanMashrut';
// winder images
import dastlapki from '../../../assets/Tovars/1chi.jpg';
import ikkinchi from '../../../assets/Tovars/qishki2.jpg';
import uchuinchi from '../../../assets/Tovars/qishki3.jpg';
import tortinchi from '../../../assets/Tovars/qishki4.jpg';
import beshinchi from '../../../assets/Tovars/qishki5.jpg';
import oltinchi from '../../../assets/Tovars/qishki6.jpg';
import yetinchi from '../../../assets/Tovars/qishki7.jpg';
import sakinzinchi from '../../../assets/Tovars/qishki8.jpg';

//  summer images
import yoz1 from '../../../assets/Tovars/yozgi1.jpg'
import yoz2 from '../../../assets/Tovars/yozgi2.jpg'
import yoz3 from '../../../assets/Tovars/yozgi3.jpg'
import yoz4 from '../../../assets/Tovars/yozgi4.jpg'
import yoz5 from '../../../assets/Tovars/yozgi5.jpg'
import yoz6 from '../../../assets/Tovars/yozgi6.jpg'
import yoz7 from '../../../assets/Tovars/yozgi7.jpg'
import yoz8 from '../../../assets/Tovars/yozgi8.jpg'

// autumn images
import kuzgi1 from '../../../assets/Tovars/kuzgi1.jpg'
import kuzgi2 from '../../../assets/Tovars/kuzgi2.jpg'
import kuzgi3 from '../../../assets/Tovars/kuzgi3.jpg'
import kuzgi4 from '../../../assets/Tovars/kuzgi4.jpg'
import kuzgi5 from '../../../assets/Tovars/kuzgi5.jpg'
import kuzgi6 from '../../../assets/Tovars/kuzgi6.jpg'
import kuzgi7 from '../../../assets/Tovars/kuzgi7.jpg'
import kuzgi8 from '../../../assets/Tovars/kuzgi8.jpg'

//spring images
import spring1 from '../../../assets/Tovars/spring1.jpg'
import spring2 from '../../../assets/Tovars/spring2.jpg'
import spring3 from '../../../assets/Tovars/spring3.jpg'
import spring4 from '../../../assets/Tovars/spring4.jpg'
import spring5 from '../../../assets/Tovars/spring5.jpg'
import spring6 from '../../../assets/Tovars/spring6.jpg'
import spring7 from '../../../assets/Tovars/spring7.jpg'
import spring8 from '../../../assets/Tovars/spring8.jpg'

export default function First() {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 8;

    const allItems = [
        {
            additionSection: "/kvadratchalar",
            reklamImg: dastlapki,
            tovarName: "Kvadratchalar",
        },
        {
            additionSection: "/Ikat",
            reklamImg: ikkinchi,
            tovarName: "Ikat",
        },
        {
            additionSection: "/davralar",
            reklamImg: uchuinchi,
            tovarName: "Davralar",
        },
        {
            additionSection: "/geometriya",
            reklamImg: tortinchi,
            tovarName: "Geometriya ko'k",
        },
        {
            additionSection: "/tropik",
            reklamImg: beshinchi,
            tovarName: "Tropik barglar",
        },
        {
            additionSection: "/bambi",
            reklamImg: oltinchi,
            tovarName: "Bambi",
        },
        {
            additionSection: "/vizantiya",
            reklamImg: yetinchi,
            tovarName: "Vizatntiya",
        },
        {
            additionSection: "/kechki",
            reklamImg: sakinzinchi,
            tovarName: "Kechki Bog'",
        },
        {
            additionSection: "/Vintage",
            reklamImg: yoz1,
            tovarName: "Vintage uslubi"
        },
        {
            additionSection: "/hilpiragan",
            reklamImg: yoz2,
            tovarName: "Hilpiragan karahindiba"
        },
        {
            additionSection: "/fransuz",
            reklamImg: yoz3,
            tovarName: "Fransuz Riviera"
        },
        {
            additionSection: "/qoy",
            reklamImg: yoz4,
            tovarName: "Qo'y Dolli"
        },
        {
            additionSection: "/alp",
            reklamImg: yoz5,
            tovarName: "Alp tog'lari o'simliklari"
        },
        {
            additionSection: "/Ilhomlantiruvchi",
            reklamImg: yoz7, tovarName: "Ilhomlantiruvchi"
        },
        {
            additionSection: "/yashil",
            reklamImg: yoz6,
            tovarName: "Yashil lotus"
        },
        {
            additionSection: "/zaytun",
            reklamImg: yoz8,
            tovarName: "Zaytun novdasi"
        },
        {
            additionSection: "/safari",
            reklamImg: kuzgi1,
            tovarName: "Safari"
        },
        {
            additionSection: "/colors",
            reklamImg: kuzgi2,
            tovarName: "Ko'p rangli ametist"
        },
        {
            additionSection: "/shivali",
            reklamImg: kuzgi3,
            tovarName: "Shivali bezak"
        },
        {
            additionSection: "/malaxit",
            reklamImg: kuzgi4,
            tovarName: "Malaxit qutisi"
        },
        {
            additionSection: "/bahor",
            reklamImg: kuzgi5,
            tovarName: "Bahorning hidlari"
        },
        {
            additionSection: "/kuzgi",
            reklamImg: kuzgi6,
            tovarName: "Kuzgi barglar tushishi (AB)"
        },
        {
            additionSection: "/moviy",
            reklamImg: kuzgi7,
            tovarName: "Moviy suv (AB)"
        },
        {
            additionSection: "/plaid",
            reklamImg: kuzgi8,
            tovarName: "Plaid"
        },
        {
            additionSection: "/Versal",
            reklamImg: spring1,
            tovarName: "Versal (AB)"
        },
        {
            additionSection: "/Sakura",
            reklamImg: spring2,
            tovarName: "Sakura filiali"
        },
        {
            additionSection: "/Toqqa",
            reklamImg: spring3,
            tovarName: "Toqqa chiqish"
        },
        {
            additionSection: "/uygunlik",
            reklamImg: spring4,
            tovarName: "Uyg'unlik"
        },
        {
            additionSection: "/dastarxon",
            reklamImg: spring5,
            tovarName: "Dastarxon"
        },
        {
            additionSection: "/yovvoyi",
            reklamImg: spring6,
            tovarName: "Yovvoyi orkide"
        },
        {
            additionSection: "/bollarDunyosi",
            reklamImg: spring7,
            tovarName: "Bolalar Dunyosi"
        },
        {
            additionSection: "/makka",
            reklamImg: spring8,
            tovarName: "Tog'li makkajo'xori"
        }
    ]

    const filteredItems = allItems.filter(item =>
        item.tovarName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const shuffledItems = allItems.sort(() => Math.random() - 0.5);
    const handlePaginationClick = (number) => {
        setActivePage(number);
    };

    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    const startIndex = (activePage - 1) * itemsPerPage;
    const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setActivePage(1); // Reset to first page on search
    };


    let items = [];
    for (let number = 1; number <= 4; number++) {
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
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="row">
                {currentItems.map((item, index) => (
                    <div key={index} className="col-md-4 col-xl-3 col-6">
                        <DivanMashrut additionSection={item.additionSection} reklamImg={item.reklamImg} tovarName={item.tovarName} />
                    </div>
                ))}
            </div>
            <div>
                <Pagination size="sm">{items}</Pagination>
            </div>
        </>
    );
}
