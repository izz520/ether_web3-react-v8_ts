import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './language/en'
import zh from './language/zh'

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n