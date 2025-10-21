import React, { useState } from "react";
import './Galeria.css';
import { Link } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext";

// Imágenes por defecto (Español)
import habilidad1 from '../../assets/habilidad-1.png'; // Preescolar
import habilidad2 from '../../assets/habilidad-2.png'; // Primaria
import habilidad3 from '../../assets/habilidad-3.png'; // Secundaria
import habilidad4 from '../../assets/habilidad-4.png'; // Preparatoria

// Imágenes para inglés
import habilidad1EN from '../../assets/EN-habilidad-1.png';
import habilidad2EN from '../../assets/EN-habilidad-2.png';
import habilidad3EN from '../../assets/EN-habilidad-3.png';
import habilidad4EN from '../../assets/EN-habilidad-4.png';

// Imágenes para francés
import habilidad1FR from '../../assets/FR-habilidad-1.png';
import habilidad2FR from '../../assets/FR-habilidad-2.png';
import habilidad3FR from '../../assets/FR-habilidad-3.png';
import habilidad4FR from '../../assets/FR-habilidad-4.png';

import flechaBlanca from '../../assets/dark-arrow.svg';

const Habilidades = () => {
    const { language } = useLanguage(); 
    const [showAll, setShowAll] = useState(false);

    const translations = {
        watchMore: {
            es: "Ver más",
            en: "Show more",
            fr: "Voir plus"
        },
        showLess: {
            es: "Ver menos",
            en: "Show less",
            fr: "Voir moins"
        },
        generalDescription: {
            es: "En nuestra institución consideramos fundamental acompañar a los estudiantes en cada etapa de su formación. Desde los primeros años, fomentamos un desarrollo integral basado en la armonía, la integridad y el respeto, promoviendo valores, conocimientos y habilidades que les permitan crecer como personas responsables y preparadas para los retos del futuro.",
            en: "At our institution, we consider it essential to support students at every stage of their education. From the early years, we promote integral development based on harmony, integrity, and respect, fostering values, knowledge, and skills that help them grow into responsible individuals prepared for future challenges.",
            fr: "Dans notre établissement, nous considérons essentiel d’accompagner les élèves à chaque étape de leur formation. Dès les premières années, nous favorisons un développement intégral fondé sur l’harmonie, l’intégrité et le respect, en promouvant des valeurs, des connaissances et des compétences qui leur permettent de devenir des personnes responsables et prêtes à relever les défis de l’avenir."
        },
        descriptions: {
            preescolar: {
                es: "Nivel preescolar donde los niños desarrollan habilidades sociales, cognitivas y motrices mediante el juego y la exploración.",
                en: "Kindergarten level where children develop social, cognitive, and motor skills through play and exploration.",
                fr: "Niveau maternelle où les enfants développent leurs compétences sociales, cognitives et motrices par le jeu et l’exploration."
            },
            primaria: {
                es: "Educación primaria que fortalece el aprendizaje, los valores y la curiosidad por descubrir el mundo.",
                en: "Elementary school education that strengthens learning, values, and curiosity to discover the world.",
                fr: "Éducation primaire qui renforce l’apprentissage, les valeurs et la curiosité de découvrir le monde."
            },
            secundaria: {
                es: "Educación secundaria enfocada en el pensamiento crítico, la autonomía y la consolidación académica.",
                en: "Middle school education focused on critical thinking, autonomy, and academic consolidation.",
                fr: "Éducation secondaire axée sur la pensée critique, l’autonomie et la consolidation académique."
            },
            preparatoria: {
                es: "Nivel preparatoria que prepara a los jóvenes para la universidad, fomentando la responsabilidad y el liderazgo.",
                en: "High school level that prepares students for university, fostering responsibility and leadership.",
                fr: "Niveau lycée qui prépare les élèves à l’université, en favorisant la responsabilité et le leadership."
            }
        }
    };

    const imageSets = {
        es: [habilidad1, habilidad2, habilidad3, habilidad4],
        en: [habilidad1EN, habilidad2EN, habilidad3EN, habilidad4EN],
        fr: [habilidad1FR, habilidad2FR, habilidad3FR, habilidad4FR]
    };

    const items = [
        { key: "preescolar", to: "/preescolar", alt: "Preescolar" },
        { key: "primaria", to: "/primaria", alt: "Primaria" },
        { key: "secundaria", to: "/secundaria", alt: "Secundaria" },
        { key: "preparatoria", to: "/preparatoria", alt: "Preparatoria" }
    ];

    const visibleItems = items.map((item, index) => ({
        ...item,
        img: imageSets[language][index]
    }));

    return (
        <div className="habilidades">
            <div className="gallery">
                {visibleItems.map(({ img, alt, to, key }, index) => (
                    <Link key={index} to={to} className="gallery-item">
                        <img src={img} alt={alt} />
                        <div className="gallery-description">
                            {translations.descriptions[key][language]}
                        </div>
                    </Link>
                ))}
            </div>

            {showAll && (
                <div className="general-description">
                    {translations.generalDescription[language]}
                </div>
            )}

            <button 
                className="btn" 
                onClick={() => setShowAll(prev => !prev)}
            >
                {showAll && (
                    <img
                        src={flechaBlanca}
                        alt="Flecha blanca"
                        style={{ transform: 'rotate(180deg)', marginRight: '8px'}}
                    />
                )}
                {showAll ? translations.showLess[language] : translations.watchMore[language]}
                {!showAll && (
                    <img
                        src={flechaBlanca}
                        alt="Flecha blanca"
                        style={{ marginLeft: '8px'}}
                    />
                )}
            </button>
        </div>
    );
};

export default Habilidades;
