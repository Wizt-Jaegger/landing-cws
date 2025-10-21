import React from 'react';
import logoFooter from "../../assets/logoFull.svg";
import "./Footer.css";
import { useLanguage } from "../../LanguageContext";

const Footer = () => {
    const { language } = useLanguage();

    const translations = {
        privacy: {
            es: "Política de privacidad",
            en: "Privacy Policy",
            fr: "Politique de confidentialité"
        },
        terms: {
            es: "Términos y condiciones",
            en: "Terms and Conditions",
            fr: "Termes et conditions"
        },
        index: {
            es: "Secciones",
            en: "Sections",
            fr: "Sections"
        },
        home: {
            es: "Inicio",
            en: "Home",
            fr: "Accueil"
        },
        preescolar: {
            es: "Preescolar",
            en: "Preschool",
            fr: "Maternelle"
        },
        primaria: {
            es: "Primaria",
            en: "Primary",
            fr: "Primaire"
        },
        secundaria: {
            es: "Secundaria",
            en: "Secondary",
            fr: "Collège"
        },
        preparatoria: {
            es: "Preparatoria",
            en: "High School",
            fr: "Lycée"
        },
        contact: {
            es: "Contacto",
            en: "Contact",
            fr: "Contact"
        },
        follow: {
            es: "Síguenos",
            en: "Follow us",
            fr: "Suivez-nous"
        },
        addressLine1: {
            es: "Poeta Isaías Alanis 39-B, Vista Hermosa",
            en: "Poeta Isaías Alanis 39-B, Vista Hermosa",
            fr: "Poeta Isaías Alanis 39-B, Vista Hermosa"
        },
        addressLine2: {
            es: "Jiutepec, Mor., México",
            en: "Jiutepec, Mor., Mexico",
            fr: "Jiutepec, Mor., Mexique"
        },
        phone1: "+52 777 319 0298",
        phone2: "+52 777 200 0630",
        phone3: "+52 777 413 3332",
        email: "colegio.wshakespearejiutepec@gmail.com"
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">

                    {/* Logo & Legal */}
                    <div className="footer-col" id="company">
                        <h3 className="footer-h3">
                            <img src={logoFooter} alt="Colegio William Shakespeare Logo" className="footer-logo" />
                        </h3>
                        <div className="footer-links">
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                {translations.privacy[language]}
                            </a>
                            <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                                {translations.terms[language]}
                            </a>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="footer-col" id="sections">
                        <h3 className="footer-h3">{translations.index[language]}</h3>
                        <div className="footer-links">
                            <a href="/preescolar">{translations.preescolar[language]}</a>
                            <a href="/primaria">{translations.primaria[language]}</a>
                            <a href="/secundaria">{translations.secundaria[language]}</a>
                            <a href="/preparatoria">{translations.preparatoria[language]}</a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">{translations.contact[language]}</h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i>
                            <p>
                                {translations.addressLine1[language]}<br />
                                {translations.addressLine2[language]}
                            </p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>{translations.phone1}</p>
                            <p>{translations.phone2}</p>
                            <p>{translations.phone3}</p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-envelope"></i>
                            <p>{translations.email}</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer-col" id="social">
                        <h3 className="footer-h3">{translations.follow[language]}</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=100063877390757" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/colegio.william.shakespeare" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/527773190298" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.youtube.com/@colegiojiutepecwilliamshak889" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
