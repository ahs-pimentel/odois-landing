"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { SectionHeader } from "../shared/section-header";
import { cn } from "@/lib/utils";
import { ChevronDown, MessageSquare } from "lucide-react";

export function FAQSection() {
  const t = useTranslations("faq");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const items = Array.from({ length: 10 }).map((_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <section id="faq" className="py-24 bg-muted/20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeader
              align="left"
              badge={t("badge")}
              title={t("title")}
              subtitle={t("subtitle")}
            />
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              {t("contactSupport")}
            </a>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {items.map((item, i) => (
              <div key={i} className="rounded-lg border bg-card">
                <button
                  onClick={() =>
                    setOpenItem(openItem === i ? null : i)
                  }
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                      openItem === i && "rotate-180"
                    )}
                  />
                </button>
                {openItem === i && (
                  <div className="border-t px-4 pb-4 pt-3">
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
