const LANG_MAP = {
    'en': 'eng-us',
    'cs': 'ces-cz',
    'de': 'ger-de',
    'bn': 'ben-in',
    'es': 'esp-mx',
    'es-ES': 'esp-es',
    'ru': 'rus-ru',
    'pt': 'por-br',
    'fil': 'tl-fil',
    'tl': 'tl-fil',
    'uk': 'ukr-ua',
    'ur': 'urd-ur',
    'it': 'ita-it',
    'zh': 'zho-tw',
    'zh-TW': 'zho-tw',
    'ko': 'kor-ko'
};

const availableLocales = Object.keys(LANG_MAP)

export function detectBrowserLocale() {
    const browserLang = navigator.language || navigator.userLanguage
    const langCode = availableLocales.includes(browserLang)
        ? browserLang
        : browserLang.split('-')[0]
    return availableLocales.includes(langCode) ? langCode : 'en'

}

export function isValidLocale(locale) {
    return availableLocales.includes(locale)
}

export { LANG_MAP, availableLocales }
