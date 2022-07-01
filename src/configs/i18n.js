import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          job: 'Web developer',
          frontEndDev: 'Front-end developer',
          WebIntegrator: 'Web Integrator',
          tools: 'Tools',
          introduction:
            // eslint-disable-next-line max-len
            'Currently looking for a new job, I am interested by:',
          portfolio: 'Portfolio',
          competences: 'Skills',
          contact: 'Contact',
          figmaText: 'Creation of Figma models.',
          workingEnvironment: 'Working Environment',
          operatingSystem: 'Operating system',
          frontEndText:
            // eslint-disable-next-line max-len
            'Development of the front-end part of websites and mobile applications.',
        },
      },
      fr: {
        translation: {
          job: 'Développeuse web',
          frontEndDev: 'Développeuse front-End',
          WebIntegrator: 'Intégratrice web',
          tools: 'Outils',
          introduction:
            // eslint-disable-next-line max-len
            "Actuellement à la recherche d'un nouvel emploi, je suis intéressée par les postes de :",
          portfolio: 'Portfolio',
          competences: 'Compétences',
          contact: 'Contactez moi',
          figmaText: 'Création de maquettes Figma.',
          workingEnvironment: 'Environnement de travail',
          operatingSystem: "Système d'exploitation:",
          frontEndText:
            // eslint-disable-next-line max-len
            'Développement de la partie front-end de sites internet et applications mobiles.',
        },
      },
    },
    lng: 'fr', // if you're using a language detector, do not define the lng option
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
