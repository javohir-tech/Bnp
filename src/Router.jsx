import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Home from "./Pages/Home/Home";
import Kravatchalar from "./Pages/Home/WinderSection/Kvadratchalar/Kravatchalar";
//winder images
import birinchi from './assets/Tovars/1chi.jpg'
import ikkinchi from './assets/Tovars/qishki2.jpg'
import uchinchi from './assets/Tovars/qishki3.jpg'
import tortinchi from './assets/Tovars/qishki4.jpg'
import beshinchi from './assets/Tovars/qishki5.jpg'
import oltinchi from './assets/Tovars/qishki6.jpg'
import yettinchi from './assets/Tovars/qishki7.jpg'
import sakkizinchi from './assets/Tovars/qishki8.jpg'

// autumn images
import kuzgi1 from './assets/Tovars/kuzgi1.jpg'
import kuzgi2 from './assets/Tovars/kuzgi2.jpg'
import kuzgi3 from './assets/Tovars/kuzgi3.jpg'
import kuzgi4 from './assets/Tovars/kuzgi4.jpg'
import kuzgi5 from './assets/Tovars/kuzgi5.jpg'
import kuzgi6 from './assets/Tovars/kuzgi6.jpg'
import kuzgi7 from './assets/Tovars/kuzgi7.jpg'
import kuzgi8 from './assets/Tovars/kuzgi8.jpg'

// summer images
import yoz1 from './assets/Tovars/yozgi1.jpg'
import yoz2 from './assets/Tovars/yozgi2.jpg'
import yoz3 from './assets/Tovars/yozgi3.jpg'
import yoz4 from './assets/Tovars/yozgi4.jpg'
import yoz5 from './assets/Tovars/yozgi5.jpg'
import yoz6 from './assets/Tovars/yozgi6.jpg'
import yoz7 from './assets/Tovars/yozgi7.jpg'
import yoz8 from './assets/Tovars/yozgi8.jpg'

import NewscardMashrut from "./Pages/NewsCradMashrut/NewscardMashrut";
import newsCardImg1 from './assets/newsCard1.png'
import newsCardImg2 from './assets/newsCard12png.png'    
import newsCardImg3 from './assets/newsCard3.png'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/collection",
                element: <Collection />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contacts",
                element: <Contacts />
            },
            /* qishki kolleksiya */
            {
                path: "/kvadratchalar",
                element: <Kravatchalar text={"Kvadratchalar"} mashrutImg={birinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"geometriya"} mashrut2Img={yettinchi} mashrut2Text={"vizantiya"} />
            },
            {
                path: "/Ikat",
                element: <Kravatchalar text={"Ikat"} mashrutImg={ikkinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"tropik"} mashrut2Img={oltinchi} mashrut2Text={"bambi"} />
            },
            {
                path: "/davralar",
                element: <Kravatchalar text={"Davralar"} mashrutImg={uchinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/geometriya"} mashrut2={"/kechki"} mashrut1Img={tortinchi} mashrut1Text={"geometriya"} mashrut2Img={sakkizinchi} mashrut2Text={"Kechki bog'"} />
            },
            {
                path: "/geometriya",
                element: <Kravatchalar text={"Geometrik Ko'k"} mashrutImg={tortinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/vizantiya"} mashrut2={"/bambi"} mashrut1Img={yettinchi} mashrut1Text={"Vizantiya"} mashrut2Img={oltinchi} mashrut2Text={"bambi"} />
            },
            {
                path: "/tropik",
                element: <Kravatchalar text={"Tropik"} mashrutImg={beshinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/geometriya"} mashrut2={"/kechki"} mashrut1Img={tortinchi} mashrut1Text={"geometriya"} mashrut2Img={sakkizinchi} mashrut2Text={"Kechki bog'"} />
            },
            {
                path: "/bambi",
                element: <Kravatchalar text={"bambi"} mashrutImg={oltinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"geometriya"} mashrut2Img={yettinchi} mashrut2Text={"vizantiya"} />
            },
            {
                path: "/vizantiya",
                element: <Kravatchalar text={"vizantiya"} mashrutImg={yettinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/vizantiya"} mashrut2={"/bambi"} mashrut1Img={yettinchi} mashrut1Text={"Vizantiya"} mashrut2Img={oltinchi} mashrut2Text={"bambi"} />
            },
            {
                path: "/kechki",
                element: <Kravatchalar text={"kechki"} mashrutImg={sakkizinchi} kategoriya={"qishki kolleksiya"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"geometriya"} mashrut2Img={yettinchi} mashrut2Text={"vizantiya"} />
            },
            /* kuzgi kolleksiya */
            {
                path: "/safari",
                element: <Kravatchalar text={"Safari"} mashrutImg={kuzgi1} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"Shivali bezak"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path: "/colors",
                element: <Kravatchalar text={"Ko'p rangli ametist"} mashrutImg={kuzgi2} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/bahor"} mashrut2={"/kuzgi"} mashrut1Img={kuzgi5} mashrut1Text={"Bahorning Hidlari"} mashrut2Img={kuzgi6} mashrut2Text={"Kuzgi barglar tushishi"} />
            },
            {
                path: "/shivali",
                element: <Kravatchalar text={"Shivali bezak"} mashrutImg={kuzgi3} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/moviy"} mashrut2={"/plaid"} mashrut1Img={kuzgi7} mashrut1Text={"Moviy suv (AB)"} mashrut2Img={kuzgi8} mashrut2Text={"Plaid"} />
            },
            {
                path: "/malaxit",
                element: <Kravatchalar text={"Malaxit qutisi"} mashrutImg={kuzgi4} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/safari"} mashrut2={"/malaxit"} mashrut1Img={kuzgi1} mashrut1Text={"Safari"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path: "/bahor",
                element: <Kravatchalar text={"Bahorning Hidlari"} mashrutImg={kuzgi5} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/colors"} mashrut2={"/plaid"} mashrut1Img={kuzgi2} mashrut1Text={"Ko'p rangli ametist"} mashrut2Img={kuzgi8} mashrut2Text={"Plaid"} />
            },
            {
                path: "/kuzgi",
                element: <Kravatchalar text={"Kuzgi barglar tushishi"} mashrutImg={kuzgi6} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"Shivali bezak"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path: "/moviy",
                element: <Kravatchalar text={"Moviy suv (AB)"} mashrutImg={kuzgi7} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"Shivali bezak"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path: "/plaid",
                element: <Kravatchalar text={"Plaid"} mashrutImg={kuzgi8} kategoriya={"Kuzgi kolleksiya"} mashrut1={"/safari"} mashrut2={"/malaxit"} mashrut1Img={kuzgi1} mashrut1Text={"Safari"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            /* yozgi kolleksiya */
            {
                path:"/Vintage",
                element: <Kravatchalar text={"Vintage Usuli"} mashrutImg={yoz1} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/hilpiragan",
                element: <Kravatchalar text={"hilpiragan karahindiba"} mashrutImg={yoz2} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/fransuz",
                element: <Kravatchalar text={"Fransuz Riviera"} mashrutImg={yoz3} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/qoy",
                element: <Kravatchalar text={"Qo'y Dolli"} mashrutImg={yoz4} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/alp",
                element: <Kravatchalar text={"Alp tog'lari o'simliklari"} mashrutImg={yoz5} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/Ilhomlantiruvchi",
                element: <Kravatchalar text={"Ilhomlantiruvchi"} mashrutImg={yoz7} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/yashil",
                element: <Kravatchalar text={"Yashil lotus"} mashrutImg={yoz6} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/zaytun",
                element: <Kravatchalar text={"Zaytun novdasi"} mashrutImg={yoz8} kategoriya={"Yozgi kolleksiya"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"Fransuz Riviera"} mashrut2Img={kuzgi4} mashrut2Text={"Malaxit qutisi"} />
            },
            {
                path:"/news1",
                element: <NewscardMashrut NewsContentImg={newsCardImg1} data={"10/05/2019"}/>
            },
            {
                path:"/news2",
                element: <NewscardMashrut NewsContentImg={newsCardImg2} data={"10/05/2019"}/>
            },
            {
                path:"/news3",
                element: <NewscardMashrut NewsContentImg={newsCardImg3} data={"10/05/2019"}/>
            }
        ]
    },
    {
        path: "*",
        element: <Kravatchalar />
    }
])

export default router