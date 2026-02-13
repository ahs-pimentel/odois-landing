"use client";

import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { Building, Users, Puzzle, Shield } from "lucide-react";

const STATS = [
  { key: "companies", labelKey: "companiesLabel", icon: Building },
  { key: "users", labelKey: "usersLabel", icon: Users },
  { key: "modules", labelKey: "modulesLabel", icon: Puzzle },
  { key: "uptime", labelKey: "uptimeLabel", icon: Shield },
] as const;

export function SocialProofSection() {
  const t = useTranslations("socialProof");

  return (
    <section className="border-y bg-muted/30 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.key} className="text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-bold sm:text-3xl">{t(stat.key)}</p>
                <p className="text-sm text-muted-foreground">
                  {t(stat.labelKey)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
