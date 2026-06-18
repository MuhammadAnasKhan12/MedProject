import { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useNavStore } from "@/store/useNavStore";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "Services", to: "/services" },
  { label: "Training", to: "/training" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const { mobileMenuOpen, scrolled, toggleMobileMenu, setMobileMenuOpen, setScrolled } =
    useNavStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Only use transparent/white-text style on the homepage before scrolling
  const isHome = pathname === "/";
  const dark = scrolled || !isHome; // "dark" = white bg + dark text

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          dark
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-14">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Logo
                variant={dark ? "light" : "dark"}
                className="h-10 w-auto"
                showSubtitle={false}
              />
            </NavLink>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => window.scrollTo(0, 0)}
                    className={({ isActive }) =>
                      cn(
                        "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                        dark
                          ? isActive
                            ? "text-brand-primary font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          : isActive
                          ? "text-brand-primary font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              
              <Button
                variant="primary"
                size="sm"
                className={cn(!dark && "bg-brand-navy border border-brand-primary/40 hover:bg-brand-primary")}
                onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn(
                "lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                dark
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-72 bg-brand-navy border-l border-white/10 flex flex-col transition-transform duration-300 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Logo variant="dark" className="h-8 w-auto" showSubtitle={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <ul className="flex flex-col py-4 flex-1">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                  className={({ isActive }) =>
                    cn(
                      "block w-full text-left px-6 py-3.5 text-sm font-medium transition-colors",
                      isActive
                        ? "text-brand-primary bg-brand-primary/10 border-r-2 border-brand-primary"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-5 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-white/60 text-sm border border-white/15 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder:text-white/40 outline-none flex-1 text-sm"
              />
            </div>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => { navigate("/contact"); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
