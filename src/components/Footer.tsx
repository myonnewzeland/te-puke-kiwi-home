import { Link } from "react-router-dom";
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
            <h2 className="font-heading text-xl font-bold mb-3">Te Puke Holiday Park</h2>
            <p className="text-sm opacity-80">{t(translations.footer.tagline)}</p>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">{t(translations.footer.navigate)}</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navItems.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">{t(translations.footer.contact)}</h3>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity rounded-md px-2 py-1" aria-label={t(translations.footer.getDirections)}>
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>581 Jellicoe Street, Te Puke</span>
              </a>
              <a href="tel:02108917258" className="flex items-center gap-2 hover:opacity-100 transition-opacity rounded-md px-2 py-1" aria-label={t(translations.nav.callUs)}>
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>021 0891 7258</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Te Puke Holiday Park. {t(translations.footer.rights)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
