import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Contact.css'

function Contact() {
    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (

        <div className="Contact">
            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <button onClick={() => handleChangeLanguage("pl")}>PL</button>
            
            <h1>{t("contact.title")}</h1>
            <p>{t("contact.message")}</p>
            <p>Email: uuu@gmail.com</p>
            <p></p>

        </div>

    )
}

export default Contact