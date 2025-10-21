import React from "react";
import './AboutPrepa.css'
import acercaDe_img from '../../../assets/about-cendi.png'
import play_icon from '../../../assets/play-icon.svg'
import { useLanguage } from "../../../LanguageContext";

const AboutPrepa = ({ setPlayState }) => {
    const { language } = useLanguage();

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="Sobre la Preparatoria" className="acercaDe-img" />
                <img
                    src={play_icon}
                    alt={language === "es" ? "Reproducir video" : language === "en" ? "Play video" : "Lire la vidéo"}
                    className="play-icon"
                    onClick={() => setPlayState(true)}
                />
            </div>
            <div className="acercaDe-der">
                <h3>
                    {language === "es"
                        ? "ACERCA DE LA PREPARATORIA"
                        : language === "en"
                        ? "ABOUT THE HIGH SCHOOL"
                        : "À PROPOS DU LYCÉE"}
                </h3>

                <h2>
                    {language === "es"
                        ? "PREPARATORIA DEL COLEGIO WILLIAM SHAKESPEARE"
                        : language === "en"
                        ? "WILLIAM SHAKESPEARE HIGH SCHOOL"
                        : "LYCÉE WILLIAM SHAKESPEARE"}
                </h2>

                <p>
                    {language === "es"
                        ? "La Preparatoria del Colegio William Shakespeare ofrece una formación académica integral que prepara a los estudiantes para los retos universitarios y profesionales, fomentando pensamiento crítico, liderazgo, creatividad y valores sólidos. Contamos con programas académicos de excelencia, actividades culturales, deportivas y de desarrollo personal, asegurando que cada alumno crezca en un entorno seguro, motivador y estimulante, listo para enfrentar los desafíos futuros."
                        : language === "en"
                        ? "The William Shakespeare High School provides comprehensive academic education that prepares students for university and professional challenges, fostering critical thinking, leadership, creativity, and strong values. We offer excellent academic programs, cultural, sports, and personal development activities, ensuring that every student grows in a safe, motivating, and stimulating environment, ready to face future challenges."
                        : "Le Lycée William Shakespeare offre une formation académique complète qui prépare les étudiants aux défis universitaires et professionnels, en favorisant la pensée critique, le leadership, la créativité et des valeurs solides. Nous proposons des programmes académiques d’excellence, des activités culturelles, sportives et de développement personnel, garantissant que chaque élève grandisse dans un environnement sûr, motivant et stimulant, prêt à relever les défis futurs."
                    }
                </p>
            </div>
        </div>
    )
}

export default AboutPrepa;
