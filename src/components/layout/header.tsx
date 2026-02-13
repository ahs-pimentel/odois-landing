"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Logo } from "./logo";
import { ThemeToggle } from "../shared/theme-toggle";
import { Container } from "../shared/container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { key: "features", href: "#features" },
  { key: "modules", href: "#modules" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const switchLocale = () => {
    const next = locale === "pt-BR" ? "en" : "pt-BR";
    router.replace("/", { locale: next });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-input"
            >
              <span className={locale === "pt-BR" ? "text-foreground font-bold" : ""}>PT</span>
              {" | "}
              <span className={locale === "en" ? "text-foreground font-bold" : ""}>EN</span>
            </button>
            <ThemeToggle />
            <a
              href="https://app.odois.dev/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("login")}
            </a>
            <a
              href="https://app.odois.dev/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t("startFree")}
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t">
              <button
                onClick={switchLocale}
                className="text-xs font-medium text-muted-foreground px-2 py-1 rounded border border-input"
              >
                <span className={locale === "pt-BR" ? "text-foreground font-bold" : ""}>PT</span>
                {" | "}
                <span className={locale === "en" ? "text-foreground font-bold" : ""}>EN</span>
              </button>
              <a
                href="https://app.odois.dev/login"
                className="text-sm font-medium text-muted-foreground"
              >
                {t("login")}
              </a>
              <a
                href="https://app.odois.dev/register"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              >
                {t("startFree")}
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
