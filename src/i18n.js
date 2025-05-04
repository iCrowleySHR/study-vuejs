import { createI18n } from 'vue-i18n'
import { detectBrowserLocale } from './utils/locale'

// Carrega todos os arquivos .json dentro de /locales
const localeFiles = import.meta.glob('./locales/*.json', { eager: true })

// Constrói o objeto de mensagens dinamicamente
const messages = {}
for (const path in localeFiles) {
  const locale = path.match(/([\w-]+)\.json$/)[1]
  messages[locale] = localeFiles[path].default
}

const browserLocale = detectBrowserLocale()

const i18n = createI18n({
  legacy: false,
  locale: browserLocale,
  messages,
})

export default i18n
