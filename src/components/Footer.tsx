import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="Te Puke Holiday Park logo" loading="lazy" className="h-12 w-12" width="48" height="48" />
            </picture>
            <h3 className="font-heading text-xl font-bold">Te Puke Holiday Park</h3>
          </div>
          <p className="text-sm opacity-80">Your home away from home in the Kiwifruit Capital of the World.</p>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">Navigate</h4>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {[
              { to: "/", label: "Home" },
              { to: "/accommodation", label: "Accommodation" },
              { to: "/seasonal-work", label: "Seasonal Work" },
              { to: "/rse-accommodation", label: "RSE Accommodation" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1"
              aria-label="View our location on Google Maps: 581 Jellicoe Street, Te Puke"
            >
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>581 Jellicoe Street, Te Puke</span>
            </a>
            <a
              href="tel:02108917258"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1"
              aria-label="Call us at 021 0891 7258"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>021 0891 7258</span>
            </a>
            <a
              href="mailto:info@tepukeholidaypark.co.nz"
              className="flex items-center gap-2 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1 break-all"
              aria-label="Email us at info@tepukeholidaypark.co.nz"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0l1.34.95c.097.433.07.864-.233 1.087-.723l3.114-5.04a2 2 0 012.718-2.718L18.874 2.874a2 2 0 00-.718-2.718L13.727.322a2 2 0 00-1.087.723l-5.04 3.114a2 2 0 00-.723 1.087.233 1.087l5.26 7.89z" />
              </svg>
              <span>info@tepukeholidaypark.co.nz</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Te Puke Holiday Park. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
