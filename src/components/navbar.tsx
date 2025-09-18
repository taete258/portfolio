"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Button } from "./button";

const Navigation = () => {
  const t = useTranslations();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), section: "home" },
    { label: t("nav.about"), section: "about" },
    { label: t("nav.skills"), section: "skills" },
    { label: t("nav.experience"), section: "experience" },
    { label: t("nav.projects"), section: "projects" },
    { label: t("nav.contact"), section: "contact" },
  ];

  const handleNavItemClick = (section: string) => {
    setIsMobileMenuOpen(false);
    router.replace({ pathname: "/", query: { section: section } });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold gradient-text">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="link"
                size="lg"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => handleNavItemClick(item.section)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => handleNavItemClick("resume")}
            >
              {t("nav.resume")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="lg"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2"
                  onClick={() => handleNavItemClick(item.section)}
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10 self-start"
                  onClick={() => handleNavItemClick("resume")}
                >
                  {t("nav.resume")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
