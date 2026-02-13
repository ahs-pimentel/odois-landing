"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X, Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function DemoForm() {
  const t = useTranslations("demoForm");
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission (replace with actual endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", phone: "", employees: "", message: "" });
    }, 2000);
  };

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <>
      {/* Hidden trigger */}
      <button
        id="demo-dialog-trigger"
        onClick={() => setOpen(true)}
        className="hidden"
        aria-hidden="true"
      />

      {/* Dialog backdrop */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 mx-4 w-full max-w-lg rounded-xl border bg-card p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-success" />
                <p className="mt-4 text-lg font-medium">{t("success")}</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold">{t("title")}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">{t("name")}</label>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder={t("namePlaceholder")}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">{t("email")}</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder={t("emailPlaceholder")}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">{t("company")}</label>
                      <input
                        required
                        value={form.company}
                        onChange={update("company")}
                        placeholder={t("companyPlaceholder")}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">{t("phone")}</label>
                      <input
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder={t("phonePlaceholder")}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">{t("employees")}</label>
                    <select
                      value={form.employees}
                      onChange={update("employees")}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">{t("employeesPlaceholder")}</option>
                      <option value="1-5">{t("employeesOptions.1-5")}</option>
                      <option value="6-20">{t("employeesOptions.6-20")}</option>
                      <option value="21-50">{t("employeesOptions.21-50")}</option>
                      <option value="51-200">{t("employeesOptions.51-200")}</option>
                      <option value="200+">{t("employeesOptions.200+")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">{t("message")}</label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      placeholder={t("messagePlaceholder")}
                      rows={3}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "w-full inline-flex h-10 items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors",
                      submitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("submitting")}
                      </>
                    ) : (
                      t("submit")
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
