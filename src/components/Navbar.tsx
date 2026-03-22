import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

const LANG_OPTIONS: { code: Lang; flag: string; label: string; native: string }[] = [
  { code: "en", flag: "🇳🇿", label: "English", native: "English" },
  { code: "es", flag: "🇪🇸", label: "Español", native: "Español" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", native: "Deutsch" },
  { code: "ja", flag: "🇯🇵", label: "Japanese", native: "日本語" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = window.location.pathname;
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANG_OPTIONS.find((l) => l.code === lang)!;

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/", label: t(translations.nav.home) },
    { to: "/accommodation", label: t(translations.nav.accommodation) },
    { to: "/seasonal-work", label: t(translations.nav.seasonalWork) },
    { to: "/rse-accommodation", label: t(translations.nav.rse) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const handleLangSelect = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2" aria-label="Te Puke Holiday Park home page">
          <span className="font-heading text-lg font-bold text-primary">Te Puke Holiday Park</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${isActive(link.to) ? "text-primary" : "text-muted-foreground"}`}
              aria-current={isActive(link.to) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:02108917258"
            className="flex items-center gap-1.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label={t(translations.nav.callUs)}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>021 0891 7258</span>
          </a>

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2.5 py-1.5 border border-border hover:border-primary/50 bg-background"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <span className="text-base leading-none">{currentLang.flag}</span>
              <span className="font-semibold tracking-wide">{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {langOpen && (
              <div
                role="listbox"
                aria-label="Language options"
                className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    role="option"
                    aria-selected={lang === opt.code}
                    onClick={() => handleLangSelect(opt.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${lang === opt.code ? "bg-primary/5 text-primary font-semibold" : "text-foreground"}`}
                  >
                    <span className="text-lg leading-none">{opt.flag}</span>
                    <span className="flex-1 text-left">{opt.native}</span>
                    {lang === opt.code && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile language dropdown */}
          <div ref={undefined} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md border border-border text-sm font-semibold bg-background"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              <span className="text-base leading-none">{currentLang.flag}</span>
              <span>{currentLang.code.toUpperCase()}</span>
            </button>

            {langOpen && (
              <div
                role="listbox"
                className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card shadow-lg overflow-hidden z-50"
              >
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    role="option"
                    aria-selected={lang === opt.code}
                    onClick={() => handleLangSelect(opt.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${lang === opt.code ? "bg-primary/5 text-primary font-semibold" : "text-foreground"}`}
                  >
                    <span className="text-lg leading-none">{opt.flag}</span>
                    <span>{opt.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label={open ? t(translations.nav.closeMenu) : t(translations.nav.openMenu)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-navigation" className="md:hidden bg-card border-b border-border" aria-label="Mobile navigation">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 ${isActive(link.to) ? "text-primary" : "text-muted-foreground"}`}
                aria-current={isActive(link.to) ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:02108917258"
              className="flex items-center gap-2 text-base font-medium text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2"
              aria-label={t(translations.nav.callUs)}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>021 0891 7258</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
