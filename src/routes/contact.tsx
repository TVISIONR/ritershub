import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ritershub — Request a free sample card" },
      {
        name: "description",
        content:
          "Get in touch with Ritershub for a free sample, pricing or partnerships. Based in Goa, serving brands across India.",
      },
      { property: "og:title", content: "Contact Ritershub" },
      {
        property: "og:description",
        content: "Request a free sample card or talk to our team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-2xl text-primary">say hello</span>
          <h1 className="mt-2 font-serif-display text-5xl tracking-tight sm:text-6xl">
            Let's <span className="underline-scribble">write together.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Tell us about your brand and we'll send a free sample card to your address.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[2fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="paper-card rounded-2xl p-8"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="font-script text-4xl text-primary">Thank you!</div>
                <p className="mt-3 text-foreground/80">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name">
                    <input required className={inputCls} />
                  </Field>
                  <Field label="Business name">
                    <input required className={inputCls} />
                  </Field>
                </div>
                <Field label="Email">
                  <input required type="email" className={inputCls} />
                </Field>
                <Field label="Phone (optional)">
                  <input type="tel" className={inputCls} />
                </Field>
                <Field label="How many cards do you need?">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Select quantity</option>
                    <option>0–30 cards</option>
                    <option>31–99 cards</option>
                    <option>100–200 cards</option>
                    <option>200+ cards</option>
                  </select>
                </Field>
                <Field label="Tell us about your business">
                  <textarea rows={4} className={inputCls} />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
                >
                  Request Free Sample
                </button>
              </div>
            )}
          </form>

          <div className="space-y-6">
            <ContactCard icon={Mail} title="Email" value="hello@ritershub.com" />
            <ContactCard icon={Phone} title="Phone" value="+91 7083930556" />
            <ContactCard icon={MapPin} title="Studio" value="Vasco, Goa, India" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
}) {
  return (
    <div className="paper-card rounded-2xl p-6">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      <div className="mt-1 font-serif-display text-lg">{value}</div>
    </div>
  );
}
