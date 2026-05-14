import { useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { useNavStore } from "@/store/useNavStore";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["Who We Are", "Services", "Research", "Insights", "All Pages"];

export function Navbar() {
  const { mobileMenuOpen, scrolled, activeLink, toggleMobileMenu, setMobileMenuOpen, setActiveLink, setScrolled } =
    useNavStore();

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
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center"
              onClick={() => setActiveLink("Home")}
            >
              <Logo
                variant={scrolled ? "light" : "dark"}
                className="h-10 w-auto"
                showSubtitle={false}
              />
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActiveLink(link)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                      scrolled
                        ? activeLink === link
                          ? "text-brand-primary"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        : activeLink === link
                        ? "text-brand-primary"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                aria-label="Search"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full transition-colors",
                  scrolled
                    ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                <Search className="w-4 h-4" />
              </button>
              <Button
                variant="primary"
                size="sm"
                className={cn(!scrolled && "bg-brand-navy border border-brand-primary/40 hover:bg-brand-primary")}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn(
                "lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                scrolled
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
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Logo variant="dark" className="h-8 w-auto" showSubtitle={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col py-4 flex-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    setActiveLink(link);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-6 py-3.5 text-sm font-medium transition-colors",
                    activeLink === link
                      ? "text-brand-primary bg-brand-primary/10 border-r-2 border-brand-primary"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Bottom Actions */}
          <div className="p-5 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-white/60 text-sm border border-white/15 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder:text-white/40 outline-none flex-1 text-sm"
              />
            </div>
            <Button variant="primary" size="md" className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
