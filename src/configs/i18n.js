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
            'front end developement of websites and mobile applications.',
          mdmbText:
            // eslint-disable-next-line max-len
            'Hosted website on Vercel. I have used API MDMB to recreate some features from streaming websites.',
          pokedex:
            // eslint-disable-next-line max-len
            ' Web page based on the Pokemon game allows you to know different informations about Pokémon, such as combat stats, development etc.. »',
          authenticText:
            // eslint-disable-next-line max-len
            'Merchant website created with the Wix platform for a florist.',
          contactText: 'Based in Ardeche',
          surroundings: '',
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
          contact: 'Contact',
          figmaText: 'Création de maquettes Figma.',
          workingEnvironment: 'Environnement de travail',
          operatingSystem: "Système d'exploitation:",
          frontEndText:
            // eslint-disable-next-line max-len
            'Développement de la partie front-end de sites internet et applications mobiles.',
          mdmbText:
            // eslint-disable-next-line max-len
            "Site web herbergé via Vercel.J'ai utilisée l'API MDMB afin de recréer certaines fonctionnalitées d'un site de streaming.",
          pokedex:
            // eslint-disable-next-line max-len
            'Page web copiant le pokedex du jeu Pokémon. Permet de connaitre différentes informations d un pokémon tel que ses statistiques de combat ses évolutions ect....',
          authenticText:
            // eslint-disable-next-line max-len
            'Site web commercant créer via la plateforme Wix pour un fleuriste.',
          contactText: 'Actuellement en Ardeche',
        },
      },
    },
    lng: 'fr', // if you're using a language detector, do not define the lng option
    fallbackLng: 'fr',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
