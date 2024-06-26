import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './About.css'

function About() {
    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (

        <div className="About">
            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <button onClick={() => handleChangeLanguage("pl")}>PL</button>

            <h1>{t("about.title")}</h1>
            <p>{t("about.message")}</p>
            <h2>{t("about.skill")}</h2>
            <p>C#, .NET, ASP.NET, Python, Entity Framework, SQL Server</p>

        </div>

    );
};

export default About