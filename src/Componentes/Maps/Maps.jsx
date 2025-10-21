import React from 'react';
import './Maps.css';
import { useLanguage } from '../../LanguageContext';

const Maps = () => {
  const { language } = useLanguage();

  // URL actualizada del mapa del Colegio William Shakespeare
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.2570648599644!2d-99.1799995249167!3d18.875673682288063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce756d78477b41%3A0x5cbf518e5dd67787!2sColegio%20William%20Shakespeare!5e0!3m2!1ses!2smx!4v1760918379150!5m2!1ses!2smx`;

  const descriptions = {
    en: "Find us at Colegio William Shakespeare, Jiutepec, Morelos.",
    es: "Encuéntranos en el Colegio William Shakespeare, Jiutepec, Morelos.",
    fr: "Trouvez-nous au Collège William Shakespeare, Jiutepec, Morelos.",
  };

  return (
    <div className="map-container">
      <iframe
        src={mapUrl}
        className="minimal-map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación Colegio William Shakespeare"
      />
      <p className="map-description">
        {descriptions[language] || descriptions['es']}
      </p>
    </div>
  );
};

export default Maps;
