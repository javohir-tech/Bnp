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

// spring images
import spring1 from './assets/Tovars/spring1.jpg'
import spring2 from './assets/Tovars/spring2.jpg'
import spring3 from './assets/Tovars/spring3.jpg'
import spring4 from './assets/Tovars/spring4.jpg'
import spring5 from './assets/Tovars/spring5.jpg'
import spring6 from './assets/Tovars/spring6.jpg'
import spring7 from './assets/Tovars/spring7.jpg'
import spring8 from './assets/Tovars/spring8.jpg'

import NewscardMashrut from "./Pages/NewsCradMashrut/NewscardMashrut";
import newsCardImg1 from './assets/newsCard1.png'
import newsCardImg2 from './assets/newsCard12png.png'
import newsCardImg3 from './assets/newsCard3.png'
import WinderSection from "./Pages/Home/WinderSection/WinderSection";
import NotFound from "./NotFound";
import SpringSection from "./Pages/Home/SpringSection/SpringSection";
import AutumnSection from "./Pages/Home/AutumnSection/AutumnSection";
import SummerSection from "./Pages/Home/SummerSection/SummerSection";
import First from "./Pages/Collection/First/First";

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
                element: <Collection />,
                children: [
                    {
                        index: true,
                        element: <First/>
                    },
                    {
                        path: "/collection/winder",
                        element: <WinderSection />
                    },
                    {
                        path: "/collection/spring",
                        element: <SpringSection />
                    },
                    {
                        path: "/collection/autumn",
                        element: <AutumnSection />
                    },
                    {
                        path: "/collection/summer",
                        element: <SummerSection />
                    },
                ]
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            /* qishki kolleksiya */
            {
                path: "/kvadratchalar",
                element: <Kravatchalar text={"WinderSection.Winder1"} mashrutImg={birinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={yettinchi} mashrut2Text={"WinderSection.Winder7"} />
            },
            {
                path: "/Ikat",
                element: <Kravatchalar text={"WinderSection.Winder2"} mashrutImg={ikkinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path: "/davralar",
                element: <Kravatchalar text={"WinderSection.Winder3"} mashrutImg={uchinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/geometriya"} mashrut2={"/kechki"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={sakkizinchi} mashrut2Text={"WinderSection.Winder8"} />
            },
            {
                path: "/geometriya",
                element: <Kravatchalar text={"WinderSection.Winder4"} mashrutImg={tortinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/vizantiya"} mashrut2={"/bambi"} mashrut1Img={yettinchi} mashrut1Text={"WinderSection.Winder7"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path: "/tropik",
                element: <Kravatchalar text={"WinderSection.Winder5"} mashrutImg={beshinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/geometriya"} mashrut2={"/kechki"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={sakkizinchi} mashrut2Text={"WinderSection.Winder8"} />
            },
            {
                path: "/bambi",
                element: <Kravatchalar text={"WinderSection.Winder6"} mashrutImg={oltinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={yettinchi} mashrut2Text={"WinderSection.Winder7"} />
            },
            {
                path: "/vizantiya",
                element: <Kravatchalar text={"WinderSection.Winder7"} mashrutImg={yettinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/vizantiya"} mashrut2={"/bambi"} mashrut1Img={yettinchi} mashrut1Text={"WinderSection.Winder7"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path: "/kechki",
                element: <Kravatchalar text={"WinderSection.Winder8"} mashrutImg={sakkizinchi} kategoriya={"Kravatchalar.season1"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={yettinchi} mashrut2Text={"WinderSection.Winder7"} />
            },
            // bahorgi kolleksiya
            {
                path:"/Versal",
                element:<Kravatchalar text={"SpringSection.Spring1"} mashrutImg={spring1} kategoriya={"Kravatchalar.season2"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={yettinchi} mashrut2Text={"WinderSection.Winder7"} />
            },
            {
                path:"/Sakura",
                element: <Kravatchalar text={"SpringSection.Spring2"} mashrutImg={spring2} kategoriya={"Kravatchalar.season2"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path:"/toqqa",
                element: <Kravatchalar text={"SpringSection.Spring3"} mashrutImg={spring3} kategoriya={"Kravatchalar.season2"} mashrut1={"/kechki"} mashrut2={"/safari"} mashrut1Img={sakkizinchi} mashrut1Text={"WinderSection.Winder8"} mashrut2Img={kuzgi1} mashrut2Text={"AutumnSection.Autumn1"} />
            },
            {
                path:"/uygunlik",
                element: <Kravatchalar text={"SpringSection.Spring4"} mashrutImg={spring4} kategoriya={"Kravatchalar.season2"} mashrut1={"/geometriya"} mashrut2={"/vizantiya"} mashrut1Img={tortinchi} mashrut1Text={"WinderSection.Winder4"} mashrut2Img={yettinchi} mashrut2Text={"WinderSection.Winder7"} />
            },
            {
                path:"/dastarxon",
                element:<Kravatchalar text={"SpringSection.Spring5"} mashrutImg={spring5} kategoriya={"Kravatchalar.season2"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path:"/yovvoyi",
                element: <Kravatchalar text={"SpringSection.Spring6"} mashrutImg={spring6} kategoriya={"Kravatchalar.season2"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path:"/makka",
                element: <Kravatchalar text={"SpringSection.Spring7"} mashrutImg={spring7} kategoriya={"Kravatchalar.season2"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            {
                path:"/bollarDunyosi",
                element:<Kravatchalar text={"SpringSection.Spring8"} mashrutImg={spring8} kategoriya={"Kravatchalar.season2"} mashrut1={"/tropik"} mashrut2={"/bambi"} mashrut1Img={beshinchi} mashrut1Text={"WinderSection.Winder5"} mashrut2Img={oltinchi} mashrut2Text={"WinderSection.Winder6"} />
            },
            /* kuzgi kolleksiya */
            {
                path: "/safari",
                element: <Kravatchalar text={"AutumnSection.Autumn1"} mashrutImg={kuzgi1} kategoriya={"Kravatchalar.season4"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"AutumnSection.Autumn3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/colors",
                element: <Kravatchalar text={"AutumnSection.Autumn2"} mashrutImg={kuzgi2} kategoriya={"Kravatchalar.season4"} mashrut1={"/bahor"} mashrut2={"/kuzgi"} mashrut1Img={kuzgi5} mashrut1Text={"AutumnSection.Autumn5"} mashrut2Img={kuzgi6} mashrut2Text={"AutumnSection.Autumn6"} />
            },
            {
                path: "/shivali",
                element: <Kravatchalar text={"AutumnSection.Autumn3"} mashrutImg={kuzgi3} kategoriya={"Kravatchalar.season4"} mashrut1={"/moviy"} mashrut2={"/plaid"} mashrut1Img={kuzgi7} mashrut1Text={"AutumnSection.Autumn7"} mashrut2Img={kuzgi8} mashrut2Text={"AutumnSection.Autumn8"} />
            },
            {
                path: "/malaxit",
                element: <Kravatchalar text={"AutumnSection.Autumn4"} mashrutImg={kuzgi4} kategoriya={"Kravatchalar.season4"} mashrut1={"/safari"} mashrut2={"/malaxit"} mashrut1Img={kuzgi1} mashrut1Text={"AutumnSection.Autumn1"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/bahor",
                element: <Kravatchalar text={"AutumnSection.Autumn5"} mashrutImg={kuzgi5} kategoriya={"Kravatchalar.season4"} mashrut1={"/colors"} mashrut2={"/plaid"} mashrut1Img={kuzgi2} mashrut1Text={"AutumnSection.Autumn2"} mashrut2Img={kuzgi8} mashrut2Text={"AutumnSection.Autumn8"} />
            },
            {
                path: "/kuzgi",
                element: <Kravatchalar text={"AutumnSection.Autumn6"} mashrutImg={kuzgi6} kategoriya={"Kravatchalar.season4"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"AutumnSection.Autumn3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/moviy",
                element: <Kravatchalar text={"AutumnSection.Autumn7"} mashrutImg={kuzgi7} kategoriya={"Kravatchalar.season4"} mashrut1={"/shivali"} mashrut2={"/malaxit"} mashrut1Img={kuzgi3} mashrut1Text={"AutumnSection.Autumn3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/plaid",
                element: <Kravatchalar text={"AutumnSection.Autumn8"} mashrutImg={kuzgi8} kategoriya={"Kravatchalar.season4"} mashrut1={"/safari"} mashrut2={"/malaxit"} mashrut1Img={kuzgi1} mashrut1Text={"AutumnSection.Autumn1"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            /* yozgi kolleksiya */
            {
                path: "/Vintage",
                element: <Kravatchalar text={"SummerSection.Summer1"} mashrutImg={yoz1} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/hilpiragan",
                element: <Kravatchalar text={"SummerSection.Summer2"} mashrutImg={yoz2} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/fransuz",
                element: <Kravatchalar text={"SummerSection.Summer3"} mashrutImg={yoz3} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/qoy",
                element: <Kravatchalar text={"SummerSection.Summer4"} mashrutImg={yoz4} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/alp",
                element: <Kravatchalar text={"SummerSection.Summer5"} mashrutImg={yoz5} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/Ilhomlantiruvchi",
                element: <Kravatchalar text={"SummerSection.Summer6"} mashrutImg={yoz7} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/yashil",
                element: <Kravatchalar text={"SummerSection.Summer7"} mashrutImg={yoz6} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/zaytun",
                element: <Kravatchalar text={"SummerSection.Summer8"} mashrutImg={yoz8} kategoriya={"Kravatchalar.season3"} mashrut1={"/fransuz"} mashrut2={"/malaxit"} mashrut1Img={yoz3} mashrut1Text={"SummerSection.Summer3"} mashrut2Img={kuzgi4} mashrut2Text={"AutumnSection.Autumn4"} />
            },
            {
                path: "/news1",
                element: <NewscardMashrut NewsContentImg={newsCardImg1} data={"10/05/2019"} />
            },
            {
                path: "/news2",
                element: <NewscardMashrut NewsContentImg={newsCardImg2} data={"10/05/2019"} />
            },
            {
                path: "/news3",
                element: <NewscardMashrut NewsContentImg={newsCardImg3} data={"10/05/2019"} />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router