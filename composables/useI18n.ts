import { ref, computed } from "vue";
import type { Ref } from "vue";
import enTranslations from "~/locales/en.json";
import frTranslations from "~/locales/fr.json";

type Locale = "en" | "fr";

interface Translation {
  [key: string]: any;
}

const currentLocale: Ref<Locale> = ref("en");
const translations: Ref<Record<Locale, Translation>> = ref({
  en: enTranslations,
  fr: frTranslations,
});

export const useI18n = () => {
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale;
    if (process.client) {
      localStorage.setItem("locale", locale);
      localStorage.setItem("locale_user_set", "true");
      document.documentElement.lang = locale;
    }
  };

  const initLocale = () => {
    if (process.client) {
      const fromWindow = (window as any).__initialLocale;
      const detected =
        fromWindow === "fr" || fromWindow === "en" ? fromWindow : "en";
      currentLocale.value = detected;
      localStorage.setItem("locale", detected);
      document.documentElement.lang = detected;
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations.value[currentLocale.value];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const locale = computed(() => currentLocale.value);

  return {
    t,
    locale,
    setLocale,
    initLocale,
  };
};
