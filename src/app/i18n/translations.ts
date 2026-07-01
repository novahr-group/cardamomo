import { Lang, TranslationContent } from './translation.types';
import { ES_TRANSLATION } from './translations-es';
import { EN_TRANSLATION } from './translations-en';

export const TRANSLATIONS: Record<Lang, TranslationContent> = {
  es: ES_TRANSLATION,
  en: EN_TRANSLATION
};

export type { Lang, TranslationContent };
