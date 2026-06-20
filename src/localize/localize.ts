import * as ca from './languages/ca.json';
import * as cs from './languages/cs.json';
import * as da from './languages/da.json';
import * as de from './languages/de.json';
import * as en from './languages/en.json';
import * as es from './languages/es.json';
import * as fi from './languages/fi.json';
import * as fr from './languages/fr.json';
import * as he from './languages/he.json';
import * as hu from './languages/hu.json';
import * as it from './languages/it.json';
import * as nb from './languages/nb.json';
import * as nl from './languages/nl.json';
import * as pl from './languages/pl.json';
import * as pt from './languages/pt.json';
import * as ptBr from './languages/pt-BR.json';
import * as sk from './languages/sk.json';
import * as sl from './languages/sl.json';
import * as sv from './languages/sv.json';
import * as ru from './languages/ru.json';
import * as ua from './languages/ua.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  ca: ca,
  cs: cs,
  da: da,
  de: de,
  en: en,
  es: es,
  fi: fi,
  fr: fr,
  he: he,
  hu: hu,
  it: it,
  nb: nb,
  nl: nl,
  pl: pl,
  pt: pt,
  'pt-BR': ptBr,
  sk: sk,
  sl: sl,
  sv: sv,
  ru: ru,
  ua: ua,
};

export const CARD_LANGUAGES = Object.keys(languages).sort((left, right) =>
  left.localeCompare(right),
);

export function getLocalLanguage(): string {
  return (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').trim();
}

function resolveLanguage(language = ''): string {
  const cleaned = language.replace(/['"]+/g, '').trim();

  if (!cleaned) {
    return 'en';
  }

  const normalizedHyphen = cleaned.replace(/_/g, '-');
  const normalizedUnderscore = cleaned.replace(/-/g, '_');
  const parts = normalizedHyphen.split('-');
  const regionAware =
    parts.length === 2 ? `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}` : normalizedHyphen;
  const baseLanguage = parts[0].toLowerCase();

  const candidates = [
    cleaned,
    normalizedHyphen,
    normalizedUnderscore,
    regionAware,
    normalizedHyphen.toLowerCase(),
    normalizedUnderscore.toLowerCase(),
    baseLanguage,
  ];

  const match = candidates.find((candidate) => candidate in languages);
  return match || 'en';
}

export function localize(string: string, search = '', replace = '', language = ''): string {
  let translated: string;

  if (language === '') {
    language = getLocalLanguage();
  }

  const resolvedLanguage = resolveLanguage(language);

  try {
    translated = string.split('.').reduce((o, i) => o[i], languages[resolvedLanguage]);
  } catch (e) {
    translated = string.split('.').reduce((o, i) => o[i], languages.en);
  }

  if (translated === undefined) {
    translated = string.split('.').reduce((o, i) => o[i], languages.en);
  }

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }

  return translated;
}
