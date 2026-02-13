"use client";

import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-fade-in-up">
            {t("badge")}
          </span>

          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("title")}
            <br />
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("subtitle")}
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://app.odois.dev/register"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-glow"
            >
              {t("cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("demo-dialog-trigger")
                  ?.click()
              }
              className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {t("ctaSecondary")}
            </button>
          </div>

          <p
            className="mt-4 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("noCreditCard")}
          </p>
        </div>
      </Container>
    </section>
  );
}
