import React, { use, useState } from "react";
import NavbarWebApp from "../Navbar/NavbarSecundario";
import PresentacionWebApp from "../Presentacion/PresentacionPrepa";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { useLanguage } from "../../LanguageContext";
import Titulo from "../Titulo/Titulo";
import Maps from "../Maps/Maps";
import Portafolio from "../Portafolio/Portafolio";
import fondo1 from "../../assets/lengua.jpg";
import About from "./AboutPrepa/AboutPrepa";
const ContainerApp = () => {
    const { language } = useLanguage();
    return (
        <div>
            <NavbarWebApp />
            <PresentacionWebApp />
            <Banner texto={
                language === "es" ?
                "MODELO BILINGÜE DE EXCELENCIA" :
                language === "en" ? 
                "BILINGUAL MODEL OF EXCELLENCE" : 
                language === "fr" ? 
                "MODÈLE BILINGUE D’EXCELLENCE" : 
                "MODELO BILINGÜE DE EXCELENCIA"
            }
                imagenFondo={fondo1} 
            />
            <About/>
            <div className="container">
                <Titulo 
                    subTitulo={language === "es" ? "Actividades" : language === "en" ? "Activities" : language === "de" ? "Aktivitäten" : "Activités"} 
                    titulo={language === "es" ? "Formación integral dentro y fuera del aula" : language === "en" ? "Comprehensive learning inside and outside the classroom" : language === "de" ? "Ganzheitliches Lernen innerhalb und außerhalb des Klassenzimmers" : "Un apprentissage complet à l'intérieur et à l'extérieur de la classe"}
                />
            </div>
            <Portafolio tag="cendi" />
            <Maps/>
            <Footer />
        </div>
    );
}

export default ContainerApp;
