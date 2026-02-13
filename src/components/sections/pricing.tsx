"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "../shared/container";
import { SectionHeader } from "../shared/section-header";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

const PLANS = ["free", "starter", "pro", "enterprise"] as const;

export function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const [annual, setAnnual] = useState(false);

  const currency = locale === "pt-BR" ? "R$" : "$";

  const getPrice = (plan: string) => {
    if (plan === "free") return "0";
    if (plan === "enterprise") return null;
    const key = annual ? "priceAnnual" : "price";
    return t(`${plan}.${key}`);
  };

  const getFeatureCount = (plan: string): number => {
    // Known feature counts per plan
    const counts: Record<string, number> = {
      free: 4,
      starter: 5,
      pro: 6,
      enterprise: 6,
    };
    return counts[plan] ?? 4;
  };

  return (
    <section id="pricing" className="py-24 bg-muted/20">
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {t("monthly")}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
              annual ? "bg-primary" : "bg-muted-foreground/30"
            )}
            role="switch"
            aria-checked={annual}
          >
            <span
              className={cn(
                "inline-block h-4 w-4 rounded-full bg-white transition-transform",
                annual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {t("annual")}
          </span>
          {annual && (
            <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
              {t("annualDiscount")}
            </span>
          )}
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => {
            const isPopular = plan === "pro";
            const price = getPrice(plan);
            const featureCount = getFeatureCount(plan);

            return (
              <div
                key={plan}
                className={cn(
                  "relative rounded-xl border bg-card p-6 flex flex-col",
                  isPopular && "border-primary shadow-glow scale-[1.02]"
                )}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {t("popular")}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold">
                    {t(`${plan}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`${plan}.description`)}
                  </p>
                  <div className="mt-4">
                    {price !== null ? (
                      <>
                        <span className="text-4xl font-bold">
                          {currency}
                          {price}
                        </span>
                        <span className="text-muted-foreground">
                          {t("perMonth")}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">
                        {t("custom")}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {Array.from({ length: featureCount }).map((_, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span>{t(`${plan}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={
                    plan === "enterprise"
                      ? "#"
                      : "https://app.odois.dev/register"
                  }
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-md text-sm font-medium transition-colors w-full",
                    isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {plan === "free"
                    ? t("startFree")
                    : plan === "enterprise"
                      ? t("contactSales")
                      : t("startTrial")}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
