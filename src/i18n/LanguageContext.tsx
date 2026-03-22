/**
 * LanguageContext — Multi-language support (i18n)
 *
 * SUPPORTED LANGUAGES
 * -------------------
 * - en  English (default)
 * - es  Spanish
 * - de  German
 * - ja  Japanese
 *
 * HOW IT WORKS
 * ------------
 * 1. LanguageProvider wraps the entire app (see main.tsx / App.tsx).
 * 2. The current language is stored in React state AND in localStorage so
 *    the user's choice is remembered across page reloads.
 * 3. Any component that needs to translate text calls useLanguage() to get
 *    the t() helper function.
 *
 * HOW TO TRANSLATE TEXT
 * ---------------------
 * All translatable strings live in translations.ts as objects with one key
 * per language:
 *
 *   export const translations = {
 *     nav: {
 *       home: { en: "Home", es: "Inicio", de: "Startseite", ja: "ホーム" },
 *     },
 *   };
 *
 * In a component:
 *   const { t } = useLanguage();
 *   <p>{t(translations.nav.home)}</p>
 *   // renders "Home" when lang === "en", "Inicio" when lang === "es", etc.
 *
 * HOW TO ADD A NEW LANGUAGE
 * -------------------------
 * 1. Add the new lang code to the Lang type in translations.ts.
 * 2. Add the new key to every translation object in translations.ts.
 * 3. Add a new entry to LANG_OPTIONS in Navbar.tsx.
 * 4. Update the setLang callback below to handle the new document.lang value.
 *
 * WHY NOT USE A LIBRARY (react-i18next)?
 * ----------------------------------------
 * The app has a small, fixed set of strings. A full i18n library would add
 * ~20 kB to the bundle for features we don't need. This lightweight approach
 * keeps the bundle small without sacrificing functionality.
 */
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { type Lang } from "./translations";

/** Shape of the value provided to every consumer of LanguageContext */
type LanguageContextType = {
  /** Currently active language code, e.g. "en" */
  lang: Lang;
  /** Change the active language and persist it to localStorage */
  setLang: (lang: Lang) => void;
  /** Translate a string: pass a translation object, get back the current-language string */
  t: (obj: Record<Lang, string>) => string;
};

const LANGS: Lang[] = ["en", "es", "de", "ja"];

// createContext with null default — we guard against missing provider in useLanguage()
const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * LanguageProvider
 *
 * Wrap your app with this component to make language state available everywhere.
 * It reads the saved language from localStorage on first render so the UI
 * immediately shows the user's preferred language without a flash.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    // Read previously saved language from localStorage (falls back to "en")
    const saved = localStorage.getItem("lang");
    return (saved === "es" || saved === "en" || saved === "de" || saved === "ja") ? saved : "en";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // Persist so the choice survives page reload
    localStorage.setItem("lang", l);
    // Update the <html lang="..."> attribute for screen readers and SEO
    document.documentElement.lang = l === "de" ? "de" : l === "es" ? "es" : l === "ja" ? "ja" : "en";
  }, []);

  // t() simply reads the correct language key from a translation object
  const t = useCallback((obj: Record<Lang, string>) => obj[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage
 *
 * Custom hook to access language state and the t() translation helper.
 * Must be called inside a component that is a descendant of LanguageProvider.
 *
 * @example
 *   const { t, lang, setLang } = useLanguage();
 *   <h1>{t(translations.home.heroTitle)}</h1>
 */
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

// Export LANGS list in case other modules need to iterate over supported languages
export { LANGS };
