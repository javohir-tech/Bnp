import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Collection from "./Pages/Collection/Collection";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Home from "./Pages/Home/Home";
import Kravatchalar from "./Pages/Home/WinderSection/Kvadratchalar/Kravatchalar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/collection",
                element: <Collection/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contacts",
                element: <Contacts/>
            },
        ]
    },
    {
        path: "*",
        element: <Kravatchalar/>
    }
])

export default router