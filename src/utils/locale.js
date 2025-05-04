const LANG_MAP = {
    'en': 'en-US',
    'cs': 'cs-CZ',
    'de': 'de-DE',
    'bn': 'bn-IN',
    'es': 'es-MX',
    'ru': 'ru-RU',
    'pt': 'pt-BR',
    'fil': 'fil-PH',
    'uk': 'uk-UA',
    'ur': 'ur-PK',
    'it': 'it-IT',
    'zh': 'zh-TW',
    'ko': 'ko-KR'
};

export function detectBrowserLocale() {
    const userLang = (navigator.language || navigator.userLanguage || 'en-US').split('-')[0];
    return LANG_MAP[userLang] || LANG_MAP['en']; 
}

export { LANG_MAP }