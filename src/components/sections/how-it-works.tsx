import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { SectionHeader } from "../shared/section-header";
import { UserPlus, ToggleRight, TrendingUp } from "lucide-react";

const STEPS = [
  { key: "step1", icon: UserPlus, number: "01" },
  { key: "step2", icon: ToggleRight, number: "02" },
  { key: "step3", icon: TrendingUp, number: "03" },
] as const;

export function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.key} className="relative text-center">
                {/* Connecting line */}
                {index < STEPS.length - 1 && (
                  <div className="absolute top-12 left-1/2 hidden w-full border-t-2 border-dashed border-primary/20 md:block" />
                )}

                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-10 w-10" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t(`${step.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
