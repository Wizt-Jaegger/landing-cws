import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import { useLanguage } from "../../LanguageContext";

// Logo por idioma (Cendi usa el 1)
import logoES from '../../assets/habilidad-1.png';
import logoEN from '../../assets/EN-habilidad-1.png';
import logoFR from '../../assets/FR-habilidad-1.png';

// Imágenes del carrusel (no cambian por idioma)
import presentacion1 from '../../assets/presentacion-preescolar-1.png';
import presentacion2 from '../../assets/presentacion-preescolar-2.png';
import presentacion3 from '../../assets/presentacion-preescolar-3.png';
import presentacion4 from '../../assets/presentacion-preescolar-4.png';

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const PresentacionCendi = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const { language } = useLanguage();

  const translations = {
    es: {
      nameSchool: "CENDI",
      descriptions: [
        "Estimulación temprana y cuidado afectivo en sus primeros pasos",
        "Un entorno seguro y lleno de amor para tu pequeño",
        "Desarrollo integral a través del juego y la exploración"
      ]
    },
    en: {
      nameSchool: "CENDI",
      descriptions: [
        "Early stimulation and affectionate care in their first steps",
        "A safe and loving environment for your little one",
        "Comprehensive development through play and exploration"
      ]
    },
    fr: {
      nameSchool: "CENDI",
      descriptions: [
        "Stimulation précoce et soins affectueux pour leurs premiers pas",
        "Un environnement sûr et rempli d'amour pour votre tout-petit",
        "Développement global par le jeu et l'exploration"
      ]
    }
  };

  // Seleccionar logo según idioma
  const logos = {
    es: logoES,
    en: logoEN,
    fr: logoFR
  };

  const logo = logos[language] || logos.es;
  const t = translations[language] || translations.es;

  // Rotación automática del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Cambio de descripción aleatorio
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => {
        const descCount = t.descriptions.length;
        let next = Math.floor(Math.random() * descCount);
        while (next === prev) {
          next = Math.floor(Math.random() * descCount);
        }
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

export default PresentacionCendi;