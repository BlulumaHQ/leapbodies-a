import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Leap Studio", path: "/leap-studio" },
  { label: "Class Schedule", path: "/class-schedule" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg" : "bg-primary/95 backdrop-blur-sm"}`}>
      <div className="container-main section-padding flex items-center justify-between h-16 lg:h-20">
        <Link to="/" onClick={handleNavClick} className="text-primary-foreground font-bold text-xl lg:text-2xl tracking-tight">
          LeapBodies
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={`text-sm text-primary-foreground/80 hover:text-secondary transition-colors ${
                location.pathname === link.path ? "text-secondary font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:6047198887"
            className="text-primary-foreground/80 hover:text-secondary transition-colors hidden xl:flex items-center gap-1 text-sm"
          >
            <Phone size={14} /> (604) 719-8887
          </a>
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-bold rounded-lg hover:brightness-110 transition shadow-md"
          >
            Start Free Trial
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              className={`block px-6 py-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors ${
                location.pathname === link.path ? "text-secondary font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-3 space-y-3">
            <a
              href="tel:6047198887"
              className="flex items-center gap-2 text-primary-foreground/80 text-sm"
            >
              <Phone size={14} /> (604) 719-8887
            </a>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="inline-block bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-bold rounded-lg hover:brightness-110 transition shadow-md"
            >
              Start Free Trial
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
