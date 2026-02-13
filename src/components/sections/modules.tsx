"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { SectionHeader } from "../shared/section-header";
import { cn } from "@/lib/utils";
import {
  Users,
  Calendar,
  MessageCircle,
  FileText,
  CreditCard,
  Link2,
  MapPin,
  Vote,
  UserSearch,
  ClipboardList,
  Zap,
  Check,
} from "lucide-react";

const MODULES = [
  { code: "crm", icon: Users },
  { code: "agenda", icon: Calendar },
  { code: "omnichannel", icon: MessageCircle },
  { code: "docs", icon: FileText },
  { code: "payments", icon: CreditCard },
  { code: "links", icon: Link2 },
  { code: "spaces", icon: MapPin },
  { code: "assemblies", icon: Vote },
  { code: "hr", icon: UserSearch },
  { code: "forms", icon: ClipboardList },
  { code: "automations", icon: Zap },
] as const;

export function ModulesSection() {
  const t = useTranslations("modules");
  const [active, setActive] = useState("crm");

  const activeModule = MODULES.find((m) => m.code === active) ?? MODULES[0];
  const ActiveIcon = activeModule.icon;

  // Get features array safely
  const features: string[] = [];
  for (let i = 0; i < 4; i++) {
    try {
      features.push(t(`${active}.features.${i}`));
    } catch {
      break;
    }
  }

  return (
    <section id="modules" className="py-24 bg-muted/20">
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Module selector grid */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            return (
              <button
                key={mod.code}
                onClick={() => setActive(mod.code)}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-lg border p-4 transition-all",
                  active === mod.code
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "hover:border-primary/30 bg-card"
                )}
              >
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-xs sm:text-sm font-medium">
                  {t(`${mod.code}.name`)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
              <ActiveIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">{t(`${active}.name`)}</h3>
            <p className="mt-2 text-muted-foreground">
              {t(`${active}.description`)}
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-8 text-center">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ActiveIcon className="h-12 w-12" />
            </div>
            <p className="mt-4 text-lg font-semibold">{t(`${active}.name`)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(`${active}.description`)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
