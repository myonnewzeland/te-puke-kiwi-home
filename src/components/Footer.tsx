import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Te Puke Holiday Park</h3>
          <p className="text-sm opacity-80">Your home away from home in the Kiwifruit Capital of the World.</p>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">Navigate</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/accommodation", label: "Accommodation" },
              { to: "/seasonal-work", label: "Seasonal Work" },
              { to: "/rse-accommodation", label: "RSE Accommodation" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> 581 Jellicoe Street, Te Puke, PO BOX 10</span>
            <a href="tel:02108917258" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="h-4 w-4 shrink-0" /> 021 0891 7258
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        © 2025 Te Puke Holiday Park. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
