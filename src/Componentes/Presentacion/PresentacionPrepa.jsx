import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import { useLanguage } from "../../LanguageContext";

import logoES from '../../assets/habilidad-4.png';
import logoEN from '../../assets/EN-habilidad-4.png';
import logoFR from '../../assets/FR-habilidad-4.png';

import presentacion1 from '../../assets/presentacion-cendi-1.png';
import presentacion2 from '../../assets/presentacion-cendi-2.png';
import presentacion3 from '../../assets/presentacion-cendi-3.png';
import presentacion4 from '../../assets/presentacion-cendi-4.png';

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const PresentacionPreparatoria = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const { language } = useLanguage();

  const logos = {
    es: logoES,
    en: logoEN,
    fr: logoFR
  };
  const logo = logos[language] || logos.es;

  const translations = {
    es: {
      nameSchool: "PREPARATORIA",
      descriptions: [
        "FORMACIÓN ACADÉMICA Y PERSONAL PARA EL FUTURO UNIVERSITARIO.",
        "DESARROLLO DE HABILIDADES DE INVESTIGACIÓN, LIDERAZGO Y RESPONSABILIDAD.",
        "APOYO VOCACIONAL Y PREPARACIÓN PARA LA EDUCACIÓN SUPERIOR."
      ]
    },
    en: {
      nameSchool: "HIGH SCHOOL",
      descriptions: [
        "ACADEMIC AND PERSONAL DEVELOPMENT FOR UNIVERSITY SUCCESS.",
        "DEVELOPING RESEARCH, LEADERSHIP, AND RESPONSIBILITY SKILLS.",
        "VOCATIONAL GUIDANCE AND PREPARATION FOR HIGHER EDUCATION."
      ]
    },
    fr: {
      nameSchool: "LYCÉE",
      descriptions: [
        "FORMATION ACADÉMIQUE ET PERSONNELLE POUR L’AVENIR UNIVERSITAIRE.",
        "DÉVELOPPEMENT DES COMPÉTENCES EN RECHERCHE, LEADERSHIP ET RESPONSABILITÉ.",
        "ORIENTATION ET PRÉPARATION À L’ENSEIGNEMENT SUPÉRIEUR."
      ]
    }
  };

  const t = translations[language] || translations.es;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => {
        const descCount = t.descriptions.length;
        let next = Math.floor(Math.random() * descCount);
        while (next === prev) next = Math.floor(Math.random() * descCount);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className='presentacion'>
      <div
        className="carousel-background"
        style={{ backgroundImage: `url(${imageArray[currentImage]})` }}
      ></div>

      <div className='presentacion-texto'>
        <img 
          src={logo} 
          alt="Logo" 
          className="logo-presentacion" 
          style={{ borderRadius: '50%', objectFit: 'cover' }} 
        />

        <h1>{t.nameSchool}</h1>
        <p>{t.descriptions[currentDescription]}</p>
      </div>

      <div className="carousel-indicators">
        {imageArray.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PresentacionPreparatoria;
