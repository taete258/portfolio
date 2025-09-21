"use client";
import { useCallback, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { getActiveSection } from "@/lib/scroll-utils";
import { useNavigationStore } from "@/stores/navigation-store";

const Navigation = () => {
  const t = useTranslations();

  // Hydrated navigation state and actions
  const {
    activeTab,
    isMobileMenuOpen,
    isScrolled,
    setActiveTab,
    setIsMobileMenuOpen,
    setIsScrolled,
    navigateToSection,
  } = useNavigationStore();

  const navItems = useMemo(
    () => [
      { label: t("nav.about"), href: "#about" },
      { label: t("nav.skills"), href: "#skills" },
      { label: t("nav.experience"), href: "#experience" },
      { label: t("nav.education"), href: "#education" },
      { label: t("nav.projects"), href: "#projects" },
      { label: t("nav.contact"), href: "#contact" },
    ],
    [t]
  );

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    navigateToSection(href);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    // Update scroll state for navbar styling
    setIsScrolled(currentScrollY > 50);

    // Find active section using optimized function
    const sections = navItems.map((item) => document.querySelector(item.href));

    const activeSection = getActiveSection(sections, currentScrollY, 100);

    if (activeSection) {
      setActiveTab(activeSection);
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

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
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="link"
                size="lg"
                className={`relative transition-colors hover:text-foreground ${
                  activeTab === item.href
                    ? "text-foreground font-semibold"
                    : "text-foreground/80"
                }`}
                onClick={(e) => handleNavItemClick(e, item.href)}
              >
                {item.label}
                {activeTab === item.href && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              onClick={(e) => handleNavItemClick(e, "#resume")}
            >
              {t("nav.resume")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
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
          <div className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="lg"
                  className={`transition-colors hover:text-foreground px-2 justify-start ${
                    activeTab === item.href
                      ? "text-foreground font-semibold bg-accent"
                      : "text-foreground/80"
                  }`}
                  onClick={(e) => handleNavItemClick(e, item.href)}
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 self-start"
                  onClick={(e) => handleNavItemClick(e, "#resume")}
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
