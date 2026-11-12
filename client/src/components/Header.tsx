import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteSearch from "@/components/SiteSearch";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/types";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, ui } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: "about", label: ui.nav.about },
    { id: "skills", label: ui.nav.skills },
    { id: "experience", label: ui.nav.experience },
    { id: "projects", label: ui.nav.projects },
    { id: "certifications", label: ui.nav.certifications },
    { id: "education", label: ui.nav.education },
  ];

  const LanguageSelect = ({ className = "" }: { className?: string }) => (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">{ui.language.label}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        className="rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        aria-label={ui.language.label}
      >
        <option value="de">DE — {ui.language.de}</option>
        <option value="en">EN — {ui.language.en}</option>
      </select>
    </label>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 py-4">
          <div className="flex items-center shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-primary"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMobileMenu();
              }}
            >
              Zaeem Uz Zafar
            </a>
          </div>

          <SiteSearch className="hidden sm:block flex-1 mx-2 lg:mx-6" />

          <nav className="hidden lg:flex items-center space-x-6 shrink-0">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <LanguageSelect />
          </nav>

          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <LanguageSelect className="hidden sm:inline-flex" />
            <Button variant="ghost" onClick={toggleMobileMenu} size="icon">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <div className="sm:hidden pb-3">
          <SiteSearch />
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <LanguageSelect className="sm:hidden" />
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
