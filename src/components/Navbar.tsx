import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/accommodation", label: "Accommodation" },
  { to: "/seasonal-work", label: "Seasonal Work" },
  { to: "/rse-accommodation", label: "RSE" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Te Puke Holiday Park home page">
          <picture>
            <source srcSet="/assets/logo.webp" type="image/webp" />
            <img src={logo} alt="Te Puke Holiday Park logo" className="h-10 w-10" loading="lazy" width="40" height="40" />
          </picture>
          <span className="font-heading text-lg font-bold text-primary hidden sm:inline">Te Puke Holiday Park</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
              aria-current={location.pathname === link.to ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:02108917258"
            className="flex items-center gap-1.5 text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Call us at 021 0891 7258"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>021 0891 7258</span>
            021 0891 7258
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-navigation"
          className="md:hidden bg-card border-b border-border"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
                aria-current={location.pathname === link.to ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:02108917258"
              className="flex items-center gap-2 text-base font-medium text-primary py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Call us at 021 0891 7258"
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
