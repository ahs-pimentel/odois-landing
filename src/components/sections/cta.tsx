"use client";

import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-700" />
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

      <Container className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://app.odois.dev/register"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-medium text-primary hover:bg-white/90 transition-colors"
          >
            {t("primary")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <button
            onClick={() =>
              document.getElementById("demo-dialog-trigger")?.click()
            }
            className="inline-flex h-12 items-center justify-center rounded-lg border border-white/30 px-8 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            {t("secondary")}
          </button>
        </div>
      </Container>
    </section>
  );
}
