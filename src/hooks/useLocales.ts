import { useTranslation } from 'react-i18next';
import { enUS, srRS, esES } from '@mui/material/locale';

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/images/us-flag.png',
  },
  {
    label: 'Montenegrin',
    value: 'me',
    systemValue: srRS,
    icon: '/images/me-flag.png',
  },
  {
    label: 'Spanish',
    value: 'es',
    systemValue: esES,
    icon: '/images/es-flag.png',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
