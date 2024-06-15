import React, { useTransition } from 'react';
import { useCookies } from 'react-cookie';
import './CookieConsent.css'
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const [t, i18n] = useTranslation("global");

    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/"});
    };

    return (
        <div className="cookie-consent">
            <p>
                {t("cookies.message")}
            </p>
            <button className="cookieButton" onClick={giveCookieConsent}>
                {t("cookies.btn")}
            </button>
        </div>
    );
}

export default CookieConsent;