import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"
import uzTranslation from '../public/Locales/uz.json'
import ruTranslation from '../public/Locales/ru.json'
import enTranslation from '../public/Locales/en.json'

const language = localStorage.getItem("i18nextLng");

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng:"en",
        lng:language || "en",
        debug:true,
        resources:{
            uz:{
                translation:uzTranslation
            },
            en:{
                translation:enTranslation
            },
            ru:{
                translation:ruTranslation
            }
        },
        interpolation:{
            escapeValue:false
        }
    })

    export default  i18n