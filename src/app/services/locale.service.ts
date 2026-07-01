import { Injectable, computed, effect, signal } from '@angular/core';
import { TRANSLATIONS, Lang } from '../i18n/translations';

/** Servicio de idioma ES/EN — persiste preferencia en localStorage */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  readonly lang = signal<Lang>(this.loadLang());
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const current = this.lang();
      document.documentElement.lang = current;
      localStorage.setItem('cardamomo-lang', current);
      document.title = TRANSLATIONS[current].meta.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', TRANSLATIONS[current].meta.description);
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  private loadLang(): Lang {
    const stored = localStorage.getItem('cardamomo-lang');
    if (stored === 'en' || stored === 'es') return stored;
    return navigator.language.startsWith('es') ? 'es' : 'en';
  }
}
