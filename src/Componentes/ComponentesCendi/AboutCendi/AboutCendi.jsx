import React from "react";
import '../../ComponentesPrepa/AboutPrepa/AboutPrepa.css';
import acercaDe_img from '../../../assets/about-cendi.png';
import play_icon from '../../../assets/play-icon.svg';
import { useLanguage } from "../../../LanguageContext";

const AboutCendi = ({ setPlayState }) => {
    const { language } = useLanguage();

    return (
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img 
                    src={acercaDe_img} 
                    alt={language === "es" ? "Sobre Cendi" : language === "en" ? "About Cendi" : "À propos du Cendi"} 
                    className="acercaDe-img" 
                />
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
                        ? "ACERCA DE CENDI" 
                        : language === "en" 
                        ? "ABOUT CENDI" 
                        : "À PROPOS DU CENDI"}
                </h3>

                <h2>
                    {language === "es" 
                        ? "COLEGIO WILLIAM SHAKESPEARE – CENDI" 
                        : language === "en" 
                        ? "WILLIAM SHAKESPEARE SCHOOL – CENDI" 
                        : "COLEGIO WILLIAM SHAKESPEARE – CENDI"}
                </h2>

                <p>
                    {language === "es"
                        ? "En nuestro CENDI del Colegio William Shakespeare, brindamos un espacio seguro y afectuoso para el cuidado y la estimulación temprana de los más pequeños. Fomentamos su desarrollo integral a través de actividades adaptadas a su edad, promoviendo sus primeros pasos en la exploración del mundo."
                        : language === "en"
                        ? "In our CENDI at the William Shakespeare School, we provide a safe and affectionate space for the care and early stimulation of the little ones. We foster their holistic development through age-appropriate activities, promoting their first steps in exploring the world."
                        : "Dans notre CENDI du Collège William Shakespeare, nous offrons un espace sûr et affectueux pour la garde et la stimulation précoce des tout-petits. Nous favorisons leur développement global à travers des activités adaptées à leur âge, en encourageant leurs premiers pas dans l'exploration du monde."
                    }
                </p>

                <p>
                    {language === "es"
                        ? "Nos enfocamos en el desarrollo de sus habilidades motrices, cognitivas y socioemocionales mediante el juego guiado, la música y el arte. Todo esto en un ambiente cálido y protector, donde cada niño se siente amado y acompañado en sus primeros aprendizajes."
                        : language === "en"
                        ? "We focus on the development of their motor, cognitive, and socio-emotional skills through guided play, music, and art. All of this in a warm and protective environment, where each child feels loved and supported in their early learning."
                        : "Nous nous concentrons sur le développement de leurs compétences motrices, cognitives et socio-émotionnelles par le jeu guidé, la musique et l'art. Tout cela dans un environnement chaleureux et protecteur, où chaque enfant se sent aimé et accompagné dans ses premiers apprentissages."
                    }
                </p>

                <p>
                    {language === "es"
                        ? <>Nuestro lema: <strong>"Cuidado, amor y estimulación en los primeros pasos de tu pequeño."</strong></>
                        : language === "en"
                        ? <>Our motto: <strong>"Care, love, and stimulation in your little one's first steps."</strong></>
                        : <>Notre devise : <strong>"Soin, amour et stimulation dans les premiers pas de votre tout-petit."</strong></>
                    }
                </p>
            </div>
        </div>
    );
};

export default AboutCendi;