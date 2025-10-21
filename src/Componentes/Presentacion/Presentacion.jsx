import React, { useState, useEffect } from 'react';
import './Presentacion.css';
import logo from '../../assets/logo.svg';
import presentacion1 from '../../assets/presentacion1.png';
import presentacion2 from '../../assets/presentacion2.png';
import presentacion3 from '../../assets/presentacion3.png';
import presentacion4 from '../../assets/presentacion4.png';
import { useLanguage } from "../../LanguageContext";

const imageArray = [presentacion1, presentacion2, presentacion3, presentacion4];

const Presentacion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => {
        const descCount = translations[language]?.descriptions.length || 1;
        let next = Math.floor(Math.random() * descCount);
        while (next === prev) {
          next = Math.floor(Math.random() * descCount);
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [language]);

  const translations = {
    es: {
      nameSchool: "Colegio William Shakespeare de Jiutepec",
      descriptions: [
        "Educando con una sonrisa.",
        "Formando generaciones con valores, alegría y conocimiento.",
        "Desarrollando el potencial de cada estudiante día a día."
      ]
    },
    en: {
      nameSchool: "William Shakespeare School of Jiutepec",
      descriptions: [
        "Educating with a smile.",
        "Shaping generations with values, joy, and knowledge.",
        "Developing every student's potential day by day."
      ]
    },
    fr: {
      nameSchool: "Collège William Shakespeare de Jiutepec",
      descriptions: [
        "Éduquer avec un sourire.",
        "Former des générations avec des valeurs, de la joie et du savoir.",
        "Développer le potentiel de chaque élève jour après jour."
      ]
    }
  };

  const t = translations[language] || translations.es;

  return (
    <div className='presentacion'>
      <div
        className="carousel-background"
        style={{ backgroundImage: `url(${imageArray[currentImage]})` }}
      ></div>

      <div className='presentacion-texto'>
        <img src={logo} alt="Logo" className="logo-presentacion" />
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

export default Presentacion;
