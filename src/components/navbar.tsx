"use client";
import { useCallback, useEffect, useMemo } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Mail,
  BrainCircuit,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { getActiveSection } from "@/lib/scroll-utils";
import { useNavigationStore } from "@/stores/navigation-store";
import LocaleSwitcher from "./locale-switcher";
import { Link } from "@/i18n/routing";

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
      { label: t("nav.about"), href: "#about", icon: User },
      { label: t("nav.skills"), href: "#skills", icon: Code },
      { label: t("nav.aiTools"), href: "#ai-tools", icon: BrainCircuit },
      { label: t("nav.experience"), href: "#experience", icon: Briefcase },
      { label: t("nav.education"), href: "#education", icon: GraduationCap },
      { label: t("nav.projects"), href: "#projects", icon: FolderOpen },
      { label: t("nav.contact"), href: "#contact", icon: Mail },
    ],
    [t]
  );

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    navigateToSection(href);
    // Close mobile menu when navigating
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
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

  useEffect(() => {
    if (activeTab !== "#about") {
      setIsScrolled(true);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gradient-text">
            Taete258
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="link"
                size="default"
                className={`relative transition-colors hover:text-foreground ${activeTab === item.href
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

          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher />
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
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              }}
              className="lg:hidden p-5 rounded-3xl border border-primary bg-background/95 backdrop-blur-sm"
            >
              <motion.div
                className="flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    duration: 0.2,
                  },
                }}
                exit={{ opacity: 0 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1 + index * 0.05,
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: {
                        delay: (navItems.length - index) * 0.03,
                        duration: 0.2,
                      },
                    }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      className={`transition-colors hover:text-foreground px-2 justify-start w-full ${activeTab === item.href
                        ? "text-foreground font-semibold bg-accent"
                        : "text-foreground/80"
                        }`}
                      onClick={(e) => handleNavItemClick(e, item.href)}
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  className="flex items-center justify-center gap-4 border-t border-primary pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.3,
                    },
                  }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <LocaleSwitcher />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
