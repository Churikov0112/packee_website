import type { Locale } from '@/lib/i18n';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n';

export interface PrivacyClause {
  number: string;
  text: string;
}

export interface PrivacySection {
  number: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  clauses?: PrivacyClause[];
}

export interface PrivacyPolicy {
  title: string;
  sections: PrivacySection[];
}

const privacyModules = import.meta.glob('@/data/privacy/*.json', { eager: true });

const policies = Object.entries(privacyModules).reduce(
  (acc, [path, mod]) => {
    const key = path.split('/').pop()?.replace('.json', '');
    if (key && isLocale(key)) {
      acc[key] = (mod as { default: PrivacyPolicy }).default;
    }
    return acc;
  },
  {} as Partial<Record<Locale, PrivacyPolicy>>
);

export const getPrivacyPolicy = (locale: Locale): PrivacyPolicy => policies[locale] ?? policies[DEFAULT_LOCALE]!;
