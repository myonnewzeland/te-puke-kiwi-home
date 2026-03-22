import { Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { to: "/", label: t(translations.nav.home) },
    { to: "/accommodation", label: t(translations.nav.accommodation) },
    { to: "/seasonal-work", label: t(translations.nav.seasonalWork) },
    { to: "/rse-accommodation", label: t(translations.footer.rseAccommodation) },
    { to: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-heading text-xl font-bold mb-3 text-primary-foreground">Te Puke Holiday Park</h2>
            {/* contrast fix: was opacity-80 (~4.2:1) → now /90 (#e8f0e9 on green ≥4.5:1) */}
            <p className="text-sm text-primary-foreground/90">{t(translations.footer.tagline)}</p>
          </div>
          <div>
            {/* contrast fix: was /85 (4.44:1) → full text-primary-foreground for WCAG AA */}
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 text-primary-foreground">{t(translations.footer.navigate)}</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navItems.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 text-primary-foreground">{t(translations.footer.contact)}</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/90">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors rounded-md px-2 py-1"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>581 Jellicoe Street, Te Puke</span>
                <span className="sr-only">— {t(translations.footer.getDirections)}</span>
              </a>
              <a
                href="tel:02108917258"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors rounded-md px-2 py-1"
                aria-label={t(translations.nav.callUs)}
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>021 0891 7258</span>
              </a>
            </div>
          </div>
        </div>
        {/* contrast fix: was /75 (3.86:1) → full text-primary-foreground for WCAG AA */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground">
          <p>© {new Date().getFullYear()} Te Puke Holiday Park. {t(translations.footer.rights)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
