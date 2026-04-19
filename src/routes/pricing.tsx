import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Ritershub handwritten cards from ₹50" },
      {
        name: "description",
        content:
          "Transparent bulk pricing for handwritten cards. Starter, Growth and Enterprise tiers from ₹50–₹80 per card.",
      },
      { property: "og:title", content: "Ritershub Pricing — From ₹50/card" },
      { property: "og:description", content: "Bulk pricing for hotels, cafes and brands." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    price: "₹50",
    qty: "0–99 cards",
    desc: "Perfect for testing the waters with your guests.",
    features: [
      "30+ handwriting styles",
      "Premium cream paper",
      "Up to 50 words per card",
      "5–7 day turnaround",
    ],
  },
  {
    name: "Growth",
    price: "₹35",
    qty: "100–299 cards",
    desc: "Most popular for boutique hotels & cafes.",
    features: [
      "Everything in Starter",
      "Custom logo on card",
      "Personalized names",
      "Priority 3–5 day turnaround",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "₹30",
    qty: "300+ cards",
    desc: "For chains & high-volume brands.",
    features: [
      "Everything in Growth",
      "Custom card design",
      "Direct-to-customer fulfillment",
      "Dedicated account manager",
    ],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-10 text-center">
        <span className="font-script text-2xl text-primary">simple pricing</span>
        <h1 className="mt-2 font-serif-display text-5xl tracking-tight sm:text-6xl">
          Pay per card. <span className="underline-scribble">Bulk saves more.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Minimum order: 30 cards. All tiers include real pen & ink, premium paper, and
          shipping anywhere in India.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`paper-card relative rounded-2xl p-8 ${
                t.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif-display text-2xl">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.qty}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif-display text-5xl">{t.price}</span>
                <span className="text-muted-foreground">/card</span>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{t.desc}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 block rounded-md px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide transition ${
                  t.featured
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Need 1000+ cards or a custom integration?{" "}
          <Link to="/contact" className="font-semibold text-primary underline">
            Talk to us →
          </Link>
        </p>
      </section>
    </SiteLayout>
  );
}
