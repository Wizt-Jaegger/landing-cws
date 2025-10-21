import React from 'react';
import { useLanguage } from "../../LanguageContext";
import styled from 'styled-components';

const translations = {
    es: {
        title: "POLÍTICA DE PRIVACIDAD",
        intro: "Este sitio web pertenece al Colegio William Shakespeare de Jiutepec y tiene como objetivo brindar información sobre nuestra institución y servicios educativos. No recopilamos información personal con fines comerciales sin tu consentimiento. Al utilizar el sitio, aceptas que ciertos mensajes o comentarios enviados puedan mostrarse públicamente en secciones del sitio como parte de la interacción con la comunidad.",
        disclaimer: "Este sitio tiene fines informativos y educativos. Las imágenes y contenidos utilizados pertenecen a sus respectivos autores o al colegio. No se reclama propiedad sobre material ajeno.",
        publicMessages: "Mensajes Públicos",
        publicMessagesText: "Los mensajes enviados mediante formularios de contacto o comentarios pueden mostrarse como públicos en el sitio. Solo se exhiben los últimos 5 registros, por lo que no permanecerán visibles permanentemente. Para contacto privado, utiliza los medios oficiales del colegio.",
        cookies: "Cookies",
        cookiesText: "Este sitio puede usar cookies para mejorar la experiencia del usuario, pero no almacena información personal sensible sin consentimiento.",
        thirdParty: "Enlaces a Terceros",
        thirdPartyText: "El sitio puede contener enlaces a sitios externos. El colegio no se hace responsable del contenido ni de las políticas de privacidad de dichos sitios.",
        control: "Control de tu información",
        controlText: "No se recopila información personal con fines comerciales. Si tienes alguna inquietud sobre la publicación de tus datos, puedes solicitar su eliminación contactando directamente al Colegio William Shakespeare.",
        update: "Esta política puede actualizarse ocasionalmente. Se recomienda revisarla periódicamente para estar al tanto de cualquier cambio."
    },
    en: {
        title: "PRIVACY POLICY",
        intro: "This website belongs to Colegio William Shakespeare in Jiutepec and aims to provide information about our institution and educational services. Personal information is not collected for commercial purposes without consent. By using this site, you agree that certain messages or comments may be publicly displayed in sections of the site as part of community interaction.",
        disclaimer: "This site is for informational and educational purposes. Images and content belong either to their authors or the school. No ownership is claimed over external material.",
        publicMessages: "Public Messages",
        publicMessagesText: "Messages sent via contact forms or comments may appear publicly on the site. Only the last 5 records are displayed, so they will not remain permanently visible. For private communication, please use the school's official channels.",
        cookies: "Cookies",
        cookiesText: "This site may use cookies to enhance user experience, but does not store sensitive personal information without consent.",
        thirdParty: "Third-Party Links",
        thirdPartyText: "The site may contain links to external websites. The school is not responsible for the content or privacy policies of those sites.",
        control: "Control of Your Information",
        controlText: "No personal information is collected for commercial purposes. If you have concerns about the publication of your data, you may request its removal by contacting Colegio William Shakespeare directly.",
        update: "This policy may be updated occasionally. It is recommended to review it periodically to stay informed of any changes."
    },
    fr: {
        title: "POLITIQUE DE CONFIDENTIALITÉ",
        intro: "Ce site web appartient au Colegio William Shakespeare de Jiutepec et a pour objectif de fournir des informations sur notre établissement et nos services éducatifs. Aucune information personnelle n'est collectée à des fins commerciales sans consentement. En utilisant ce site, vous acceptez que certains messages ou commentaires puissent être affichés publiquement dans des sections du site dans le cadre de l'interaction avec la communauté.",
        disclaimer: "Ce site a des fins informatives et éducatives. Les images et contenus appartiennent à leurs auteurs respectifs ou à l'école. Aucune propriété n'est revendiquée sur le matériel externe.",
        publicMessages: "Messages publics",
        publicMessagesText: "Les messages envoyés via les formulaires de contact ou les commentaires peuvent apparaître publiquement sur le site. Seuls les 5 derniers enregistrements sont affichés, ils ne resteront donc pas visibles en permanence. Pour une communication privée, veuillez utiliser les canaux officiels de l'école.",
        cookies: "Cookies",
        cookiesText: "Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur, mais ne stocke pas d'informations personnelles sensibles sans consentement.",
        thirdParty: "Liens vers des tiers",
        thirdPartyText: "Le site peut contenir des liens vers des sites externes. L'école n'est pas responsable du contenu ni des politiques de confidentialité de ces sites.",
        control: "Contrôle de vos informations",
        controlText: "Aucune information personnelle n'est collectée à des fins commerciales. Si vous avez des préoccupations concernant la publication de vos données, vous pouvez demander leur suppression en contactant directement le Colegio William Shakespeare.",
        update: "Cette politique peut être mise à jour occasionnellement. Il est recommandé de la consulter périodiquement pour rester informé de tout changement."
    }
};

const PrivacyPolicy = () => {
    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    return (
        <PrivacyContainer>
            <h1>{t.title}</h1>
            <p>{t.intro}</p>
            <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#555" }}>{t.disclaimer}</p>

            <h2>{t.publicMessages}</h2>
            <p>{t.publicMessagesText}</p>

            <h2>{t.cookies}</h2>
            <p>{t.cookiesText}</p>

            <h2>{t.thirdParty}</h2>
            <p>{t.thirdPartyText}</p>

            <h2>{t.control}</h2>
            <p>{t.controlText}</p>

            <p>{t.update}</p>
        </PrivacyContainer>
    );
};

const PrivacyContainer = styled.div`
    margin: 20px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    font-size: 1.2rem;
    line-height: 1.7;
    color: #333;

    h1 {
        text-align: center;
        color: #132d46;
        margin-bottom: 20px;
        font-size: 2.5rem;
    }

    h2 {
        color: #0c145c;
        margin-bottom: 15px;
        font-size: 1.8rem;
    }

    p {
        color: #666;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }

    a {
        color: #0c145c;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default PrivacyPolicy;
