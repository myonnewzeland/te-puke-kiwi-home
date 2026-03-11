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
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Te Puke Holiday Park logo" className="h-10 w-10" />
          <span className="font-heading text-lg font-bold text-primary hidden sm:inline">Te Puke Holiday Park</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:02108917258" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            021 0891 7258
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-card border-b border-border">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:02108917258" className="flex items-center gap-2 text-base font-medium text-primary py-2">
              <Phone className="h-4 w-4" />
              021 0891 7258
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
