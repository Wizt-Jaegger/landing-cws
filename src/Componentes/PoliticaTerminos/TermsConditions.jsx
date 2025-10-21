import React from 'react';
import { useLanguage } from "../../LanguageContext";
import styled from 'styled-components';

const translations = {
    es: {
        title: "TÉRMINOS Y CONDICIONES DE USO",
        section1: "INFORMACIÓN RELEVANTE",
        content1: "Es requisito necesario leer y aceptar los siguientes Términos y Condiciones para utilizar el sitio web del Colegio William Shakespeare de Jiutepec. El uso del sitio implica que aceptas estos términos. Algunas secciones pueden incluir enlaces a plataformas de terceros, que estarán sujetas a sus propios términos.",
        section2: "LICENCIA DE USO",
        content2: "El Colegio William Shakespeare de Jiutepec concede una licencia para acceder y utilizar el contenido del sitio con fines informativos y educativos, respetando los presentes Términos y Condiciones.",
        section3: "USO NO AUTORIZADO",
        content3: "No se permite reproducir, distribuir o comercializar el contenido del sitio, modificado o no, sin la autorización expresa del colegio. Esto incluye material en páginas web, documentos descargables o cualquier otro medio.",
        section4: "PROPIEDAD INTELECTUAL",
        content4: "Todo el contenido del sitio, incluidas imágenes, textos y logotipos, es propiedad del Colegio William Shakespeare o de terceros que han autorizado su uso. No se puede reclamar propiedad sobre este material.",
        section5: "POLÍTICA DE REEMBOLSO Y GARANTÍA",
        content5: "Este sitio no ofrece productos de venta, por lo que no aplica política de reembolso. La información se proporciona únicamente con fines informativos y educativos.",
        section6: "SEGURIDAD Y VERIFICACIÓN",
        content6: "El colegio puede implementar medidas de seguridad y verificación para proteger la integridad del sitio y la información de los usuarios, especialmente en formularios de contacto o plataformas asociadas.",
        section7: "PRIVACIDAD",
        content7: "El Colegio William Shakespeare garantiza que los datos personales proporcionados por padres, tutores o usuarios serán tratados de manera segura y no serán compartidos con terceros sin autorización, salvo requerimiento legal.",
        content8: "La suscripción a boletines o notificaciones es voluntaria y puede seleccionarse mediante los formularios oficiales del sitio.",
        content9: "El Colegio se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Se recomienda revisarlos periódicamente."
    },
    en: {
        title: "TERMS AND CONDITIONS OF USE",
        section1: "RELEVANT INFORMATION",
        content1: "It is necessary to read and accept the following Terms and Conditions to use the website of Colegio William Shakespeare in Jiutepec. By using this site, you agree to these terms. Some sections may include links to third-party platforms, which are subject to their own terms.",
        section2: "LICENSE",
        content2: "Colegio William Shakespeare grants a license to access and use the website content for informational and educational purposes, respecting these Terms and Conditions.",
        section3: "UNAUTHORIZED USE",
        content3: "It is not permitted to reproduce, distribute, or commercialize the site's content, modified or unmodified, without the express authorization of the school. This includes material on web pages, downloadable documents, or any other medium.",
        section4: "INTELLECTUAL PROPERTY",
        content4: "All content on the site, including images, texts, and logos, is the property of Colegio William Shakespeare or third parties who have authorized its use. No ownership can be claimed over this material.",
        section5: "REFUND AND WARRANTY POLICY",
        content5: "This site does not offer products for sale, so refund policies do not apply. Information is provided solely for informational and educational purposes.",
        section6: "SECURITY AND VERIFICATION",
        content6: "The school may implement security and verification measures to protect the integrity of the site and user information, especially in contact forms or associated platforms.",
        section7: "PRIVACY",
        content7: "Colegio William Shakespeare ensures that personal data provided by parents, guardians, or users will be handled securely and will not be shared with third parties without authorization, except when required by law.",
        content8: "Subscription to newsletters or notifications is voluntary and can be selected through official site forms.",
        content9: "The school reserves the right to modify these Terms and Conditions at any time. It is recommended to review them periodically."
    },
    fr: {
        title: "CONDITIONS D'UTILISATION",
        section1: "INFORMATIONS PERTINENTES",
        content1: "Il est nécessaire de lire et d'accepter les présentes Conditions d'Utilisation pour utiliser le site du Colegio William Shakespeare de Jiutepec. L'utilisation du site implique l'acceptation de ces conditions. Certaines sections peuvent inclure des liens vers des plateformes tierces, soumises à leurs propres conditions.",
        section2: "LICENCE",
        content2: "Le Colegio William Shakespeare accorde une licence pour accéder et utiliser le contenu du site à des fins informatives et éducatives, en respectant ces Conditions d'Utilisation.",
        section3: "UTILISATION NON AUTORISÉE",
        content3: "Il n'est pas permis de reproduire, distribuer ou commercialiser le contenu du site, modifié ou non, sans l'autorisation expresse de l'école. Cela inclut le matériel sur les pages web, les documents téléchargeables ou tout autre support.",
        section4: "PROPRIÉTÉ INTELLECTUELLE",
        content4: "Tout le contenu du site, y compris les images, textes et logos, appartient au Colegio William Shakespeare ou à des tiers ayant autorisé son utilisation. Aucun droit de propriété ne peut être revendiqué sur ce matériel.",
        section5: "POLITIQUE DE REMBOURSEMENT ET GARANTIE",
        content5: "Ce site ne propose pas de produits à vendre, donc aucune politique de remboursement ne s'applique. Les informations sont fournies uniquement à des fins informatives et éducatives.",
        section6: "SÉCURITÉ ET VÉRIFICATION",
        content6: "L'école peut mettre en place des mesures de sécurité et de vérification pour protéger l'intégrité du site et les informations des utilisateurs, en particulier dans les formulaires de contact ou les plateformes associées.",
        section7: "CONFIDENTIALITÉ",
        content7: "Le Colegio William Shakespeare garantit que les données personnelles fournies par les parents, tuteurs ou utilisateurs seront traitées en toute sécurité et ne seront pas partagées avec des tiers sans autorisation, sauf en cas d'obligation légale.",
        content8: "L'abonnement aux newsletters ou notifications est volontaire et peut être sélectionné via les formulaires officiels du site.",
        content9: "L'école se réserve le droit de modifier ces Conditions d'Utilisation à tout moment. Il est recommandé de les consulter régulièrement."
    }
};

const TermsConditions = () => {
    const { language } = useLanguage();

    return (
        <TermsContainer>
            <h1>{translations[language].title}</h1>
            <h2>{translations[language].section1}</h2>
            <p>{translations[language].content1}</p>
            <h2>{translations[language].section2}</h2>
            <p>{translations[language].content2}</p>
            <h2>{translations[language].section3}</h2>
            <p>{translations[language].content3}</p>
            <h2>{translations[language].section4}</h2>
            <p>{translations[language].content4}</p>
            <h2>{translations[language].section5}</h2>
            <p>{translations[language].content5}</p>
            <h2>{translations[language].section6}</h2>
            <p>{translations[language].content6}</p>
            <h2>{translations[language].section7}</h2>
            <p>{translations[language].content7}</p>
            <p>{translations[language].content8}</p>
            <p>{translations[language].content9}</p>
        </TermsContainer>
    );
};

const TermsContainer = styled.div`
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
`;

export default TermsConditions;
