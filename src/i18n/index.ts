import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from './strings';

const resources = {
    en,
    fr,
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;
