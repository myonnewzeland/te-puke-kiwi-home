import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t(translations.nav.home) },
    { to: "/accommodation", label: t(translations.nav.accommodation) },
    { to: "/seasonal-work", label: t(translations.nav.seasonalWork) },
    { to: "/rse-accommodation", label: t(translations.nav.rse) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Te Puke Holiday Park home page">
          <span className="font-heading text-lg font-bold text-primary">Te Puke Holiday Park</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:02108917258"
            className="flex items-center gap-1.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label={t(translations.nav.callUs)}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>021 0891 7258</span>
          </a>

          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : lang === "es" ? "ja" : "en")}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 border border-border"
            aria-label={lang === "en" ? "Cambiar a español" : lang === "es" ? "日本語に切り替え" : "Switch to English"}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>{lang === "en" ? "ES" : lang === "es" ? "JA" : "EN"}</span>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile language switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md border border-border text-sm font-medium"
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
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
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
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
