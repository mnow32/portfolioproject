import React from "react";
import { Link } from "react-router-dom";
import './Projects.css'
import { useTranslation } from "react-i18next";

function Projects() {
    const [t, i18n] = useTranslation("global")
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (

        <div className="Projects">
            <button onClick={() => handleChangeLanguage("en")}>EN</button>
            <button onClick={() => handleChangeLanguage("pl")}>PL</button>

            <h1>{t("projects.title")}</h1>
            <ul>
                <li>
                    <h2>{t("projects.title1")}</h2>
                    <p>{t("projects.projekt1")}</p>
                </li>
                <li>
                    <h2>{t("projects.title2")}</h2>
                    <p>{t("projects.projekt2")}</p>
                </li>
                <li>
                    <h2>{t("projects.title3")}</h2>
                    <p>{t("projects.projekt3")}</p>
                </li>
            </ul>
        </div>

    )
}

export default Projects