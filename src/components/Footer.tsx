import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-foreground text-background">
      <div className="container-main section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold mb-3">LeapBodies</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Mind Sharp, Body Strong.<br />
              Richmond's First Speakeasy Fitness Studio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Leap Studio", path: "/leap-studio" },
                { label: "Class Schedule", path: "/class-schedule" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleClick}
                    className="text-sm text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="mailto:yes@leapbodies.com" className="hover:text-secondary transition-colors">
                  yes@leapbodies.com
                </a>
              </li>
              <li>
                <a href="tel:6047198887" className="hover:text-secondary transition-colors">
                  (604) 719-8887
                </a>
              </li>
              <li>Richmond Sports & Fitness Center</li>
              <li>150 - 2251 No 5 Rd, Richmond, BC V6X 2S8</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/bodybyrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-secondary transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/leapbodies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-secondary transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-background/10 py-3">
        <div className="container-main section-padding flex flex-col sm:flex-row items-center justify-between text-xs text-background/50">
          <span>© {new Date().getFullYear()} LeapBodies</span>
          <span>
            Web Design by{" "}
            <a
              href="https://www.bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Bluluma.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
