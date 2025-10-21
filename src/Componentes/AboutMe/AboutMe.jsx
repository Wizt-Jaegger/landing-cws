import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import { useLanguage } from '../../LanguageContext';

const calculateAge = (date) => {
  const today = new Date();
  const d = new Date(date);
  let age = today.getFullYear() - d.getFullYear();
  const m = today.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
  return age;
};

const translations = {
  en: {
    aboutMe: "About Us",
    introduction: "Welcome to Colegio William Shakespeare.",
    description: "An educational institution dedicated to the integral development of its students through quality education and human values.",
    paragraph:
      "Colegio William Shakespeare was founded in 2006 by Principal Laura María Agüero Tovar, who envisioned an institution that would inspire knowledge, creativity, and respect. Since its foundation, the school has focused on academic excellence, personal growth, and the promotion of ethical values that prepare students for both life and society.",
    missionTitle: "Our Mission",
    missionDesc:
      "To provide a comprehensive education that promotes academic excellence, social responsibility, and emotional growth, shaping individuals who contribute positively to the community.",
    visionTitle: "Our Vision",
    visionDesc:
      "To be recognized as an educational institution of excellence, fostering generations of students who are thoughtful, capable, and committed to improving their environment.",
    videoTitle: "Discover William Shakespeare",
    skillsTitle: "Core Strengths",
  },

  es: {
    aboutMe: "Acerca de Nosotros",
    introduction: "Bienvenidos al Colegio William Shakespeare.",
    description: "Una institución educativa dedicada al desarrollo integral de sus estudiantes, con una formación basada en la calidad y los valores humanos.",
    paragraph:
      "El Colegio William Shakespeare fue fundado en 2006 por la directora Laura María Agüero Tovar, con la visión de formar un espacio donde el conocimiento, la creatividad y el respeto sean los pilares de la educación. Desde su creación, el colegio se ha enfocado en la excelencia académica, el crecimiento personal y la promoción de valores éticos que preparan a los alumnos para la vida y la sociedad.",
    missionTitle: "Nuestra Misión",
    missionDesc:
      "Brindar una educación integral que fomente la excelencia académica, la responsabilidad social y el crecimiento emocional, formando individuos que contribuyan positivamente a su comunidad.",
    visionTitle: "Nuestra Visión",
    visionDesc:
      "Ser reconocidos como una institución educativa de excelencia que forma generaciones de estudiantes reflexivos, capaces y comprometidos con la mejora de su entorno.",
    videoTitle: "Conoce el Colegio William Shakespeare",
    skillsTitle: "Fortalezas Clave",
  },

  fr: {
    aboutMe: "À propos de nous",
    introduction: "Bienvenue au Collège William Shakespeare.",
    description: "Une institution éducative dédiée au développement intégral des étudiants à travers une éducation de qualité et des valeurs humaines.",
    paragraph:
      "Le Collège William Shakespeare a été fondé en 2006 par la directrice Laura María Agüero Tovar, avec la vision de créer un lieu d'apprentissage basé sur le savoir, la créativité et le respect. Depuis sa fondation, l'école s'est concentrée sur l'excellence académique, la croissance personnelle et la promotion des valeurs éthiques.",
    missionTitle: "Notre Mission",
    missionDesc:
      "Offrir une éducation complète qui favorise l'excellence académique, la responsabilité sociale et le développement émotionnel, formant des individus qui contribuent positivement à la société.",
    visionTitle: "Notre Vision",
    visionDesc:
      "Être reconnue comme une institution éducative d'excellence formant des générations d'étudiants réfléchis, compétents et engagés envers leur environnement.",
    videoTitle: "Découvrez William Shakespeare",
    skillsTitle: "Forces Clés",
  },
};

const AboutMe = () => {
  const { language } = useLanguage();
  const t = translations[language.toLowerCase()] || translations['es'];
  const foundingDate = '2006-08-18';
  const years = calculateAge(foundingDate);

  const [skillsLoaded, setSkillsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setSkillsLoaded(true), 500);
  }, []);

  const skills = [
    { name: 'Excelencia Académica', percent: 95 },
    { name: 'Formación en Valores', percent: 90 },
    { name: 'Creatividad y Arte', percent: 85 },
    { name: 'Desarrollo Integral', percent: 88 },
  ];

  return (
    <section className="about sectionAbout" id="about">
      <div className="containerAbout">
        <div className="rowAbout">
          <div className="sectionAbout-title AboutPadd-15">
            <h2>{t.aboutMe}</h2>
          </div>
        </div>

        <div className="rowAbout">
          <div className="about-text AboutPadd-15">
            <h3>{t.introduction} <span>{t.description}</span></h3>
            <p>{t.paragraph}</p>
          </div>
        </div>

        <div className="rowAbout mission-vision">
          <div className="mission AboutPadd-15">
            <h4>{t.missionTitle}</h4>
            <p>{t.missionDesc}</p>
          </div>
          <div className="vision AboutPadd-15">
            <h4>{t.visionTitle}</h4>
            <p>{t.visionDesc}</p>
          </div>
        </div>

        <div className="rowAbout video-section AboutPadd-15">
          <h4>{t.videoTitle}</h4>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/zm3dR4lSCiY"
              title="Video Colegio William Shakespeare"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="rowAbout skills AboutPadd-15">
          <h4>{t.skillsTitle}</h4>
          {skills.map((skill, i) => (
            <div className="skill-item AboutPadd-15" key={i}>
              <h5>{skill.name}</h5>
              <div className="progress">
                <div className="progress-in" style={{ width: skillsLoaded ? `${skill.percent}%` : '0%' }}></div>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
