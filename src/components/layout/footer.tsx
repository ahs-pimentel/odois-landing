import { useTranslations } from "next-intl";
import { Container } from "../shared/container";
import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations("footer");

  const sections = [
    {
      title: t("product"),
      links: [
        { label: t("productLinks.features"), href: "#features" },
        { label: t("productLinks.modules"), href: "#modules" },
        { label: t("productLinks.pricing"), href: "#pricing" },
        { label: t("productLinks.changelog"), href: "#" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("companyLinks.about"), href: "#" },
        { label: t("companyLinks.blog"), href: "#" },
        { label: t("companyLinks.contact"), href: "#" },
        { label: t("companyLinks.careers"), href: "#" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("legalLinks.terms"), href: "#" },
        { label: t("legalLinks.privacy"), href: "#" },
        { label: t("legalLinks.cookies"), href: "#" },
      ],
    },
    {
      title: t("support"),
      links: [
        { label: t("supportLinks.docs"), href: "#" },
        { label: t("supportLinks.status"), href: "#" },
        { label: t("supportLinks.faq"), href: "#faq" },
        { label: t("supportLinks.community"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-card py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              {t("description")}
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          {t("copyright")}
        </div>
      </Container>
    </footer>
  );
}
