import { createI18n } from 'vue-i18n'
import  messages  from './locales/text.json'

const i18n = createI18n({
    legacy: false, 
    locale: 'por-br', 
    fallbackLocale: 'eng-us',
    messages
  })

  
export default i18n
