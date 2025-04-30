import { api } from './index.js';

const BASE_URL = 'https://meowfacts.herokuapp.com';

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

function getLanguageCode() {
  const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const baseLang = lang.split('-')[0];
  if (LANG_MAP[lang]) return LANG_MAP[lang];
  if (LANG_MAP[baseLang]) return LANG_MAP[baseLang];
  return 'eng-us';
}

export async function getCatFact() {
  const langCode = getLanguageCode();
  const response = await api.get(`${BASE_URL}/?lang=${langCode}`);
  return response.data.data[0];
}
