import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { SectionHeader } from "../shared/section-header";
import { Puzzle, Palette, Building, Zap, Code, Shield } from "lucide-react";

const FEATURES = [
  { key: "modular", icon: Puzzle },
  { key: "whiteLabel", icon: Palette },
  { key: "multiTenant", icon: Building },
  { key: "automations", icon: Zap },
  { key: "apiFirst", icon: Code },
  { key: "security", icon: Shield },
] as const;

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-24">
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group rounded-xl border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-primary/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">
                  {t(`${feature.key}.title`)}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t(`${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
