import { api } from './index.js';

const BASE_URL = 'https://meowfacts.herokuapp.com';

const LANG_MAP = {
  'en-US': 'eng-us',
  'cs-CZ': 'ces-cz',
  'de-DE': 'ger-de',
  'bn-IN': 'ben-in',
  'es-MX': 'esp-mx',
  'es-ES': 'esp-es',
  'ru-RU': 'rus-ru',
  'pt-BR': 'por-br',
  'fil-PH': 'tl-fil',
  'uk-UA': 'ukr-ua',
  'ur-PK': 'urd-ur',
  'it-IT': 'ita-it',
  'zh-TW': 'zho-tw',
  'ko-KR': 'kor-ko'
};

export async function getCatFact(lang) {
  const response = await api.get(`${BASE_URL}/?lang=${LANG_MAP[lang]}`);
  return response.data.data[0];
}
