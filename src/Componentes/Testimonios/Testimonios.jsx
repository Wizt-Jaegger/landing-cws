import React, { useRef } from "react";
import './Testimonios.css';
import siguiente_icon from '../../assets/next-icon.svg';
import atras_icon from '../../assets/back-icon.svg';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useLanguage } from "../../LanguageContext";

const testimonies = [
    {
        name: "Rosa Valverde",
        type: {
            es: "Madre de familia",
            en: "Parent",
            fr: "Parent"
        },
        text: {
            es: "El Colegio William Shakespeare ha sido una gran experiencia para mi hija. La atención de los maestros y la comunicación con los padres son excelentes. Mi hija va feliz cada día.",
            en: "Colegio William Shakespeare has been a wonderful experience for my daughter. The teachers' attention and communication with parents are excellent. My daughter goes to school happy every day.",
            fr: "Le Colegio William Shakespeare a été une expérience formidable pour ma fille. L'attention des enseignants et la communication avec les parents sont excellentes. Ma fille va à l'école heureuse chaque jour."
        },
        img: user_1
    },
    {
        name: "Luis Reyes",
        type: {
            es: "Exalumno",
            en: "Alumnus",
            fr: "Ancien élève"
        },
        text: {
            es: "Estudiar en el Colegio William Shakespeare marcó mi formación. Los maestros siempre se preocuparon por ayudarnos a crecer académica y personalmente. Me preparó muy bien para la preparatoria.",
            en: "Studying at Colegio William Shakespeare shaped my education. The teachers truly cared about helping us grow academically and personally. It prepared me very well for high school.",
            fr: "Étudier au Colegio William Shakespeare a marqué ma formation. Les enseignants se sont toujours souciés de notre croissance académique et personnelle. Cela m'a bien préparé pour le lycée."
        },
        img: user_2
    },
    {
        name: "Mónica Estrada",
        type: {
            es: "Madre de familia",
            en: "Parent",
            fr: "Parent"
        },
        text: {
            es: "Agradezco al Colegio William Shakespeare por la cercanía y compromiso con las familias. Mi hijo ha aprendido valores y ha desarrollado mucha confianza en sí mismo.",
            en: "I’m thankful to Colegio William Shakespeare for their closeness and commitment to families. My son has learned values and gained a lot of self-confidence.",
            fr: "Je remercie le Colegio William Shakespeare pour sa proximité et son engagement envers les familles. Mon fils a appris des valeurs et a gagné beaucoup de confiance en lui."
        },
        img: user_3
    },
    {
        name: "Juan Quiroga",
        type: {
            es: "Exalumno",
            en: "Alumnus",
            fr: "Ancien élève"
        },
        text: {
            es: "El Colegio William Shakespeare me enseñó disciplina, respeto y amor por el aprendizaje. Recuerdo con cariño a mis profesores y los buenos momentos que viví ahí.",
            en: "Colegio William Shakespeare taught me discipline, respect, and a love for learning. I fondly remember my teachers and the great moments I had there.",
            fr: "Le Colegio William Shakespeare m'a appris la discipline, le respect et l'amour de l'apprentissage. Je garde un bon souvenir de mes professeurs et des bons moments vécus là-bas."
        },
        img: user_4
    }
];

const Testimonios = () => {
    const { language } = useLanguage();
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonios">
            <img src={siguiente_icon} alt="Siguiente" className="siguiente-btn" onClick={slideForward} />
            <img src={atras_icon} alt="Atrás" className="atras-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {testimonies.map((t, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={t.img} alt={t.name} />
                                    <div>
                                        <h3>{t.name}</h3>
                                        <span>{t.type[language]}</span>
                                    </div>
                                </div>
                                <p>{t.text[language]}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Testimonios;
