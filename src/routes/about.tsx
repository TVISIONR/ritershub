import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ritershub, handwritten at scale from Goa" },
      {
        name: "description",
        content:
          "We build pen-plotter systems that write real handwritten cards at scale, helping brands feel personal again.",
      },
      { property: "og:title", content: "About Ritershub" },
      { property: "og:description", content: "Made in Goa. Built for hospitality brands." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-12">
        <span className="font-script text-2xl text-primary">our story</span>
        <h1 className="mt-2 font-serif-display text-5xl tracking-tight sm:text-6xl">
          We bring back the <span className="underline-scribble">human touch.</span>
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Ritershub started in Goa with a simple observation: every business says they
            care about their customers, but almost no one writes anymore. Hotels print
            generic welcome cards. Cafes hand out stickers. Brands send templated emails.
          </p>
          <p>
            We built a system that combines real pen plotters, dozens of authentic
            handwriting styles, and natural per-letter variation — so every card feels
            written by a human, because in every meaningful way, it was.
          </p>
          <p>
            Today we write thousands of cards a month for hotels, resorts and boutique
            brands across India. Our promise is simple:{" "}
            <strong>real ink, real paper, real connection — at scale.</strong>
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-3 text-center">
          {[
            { n: "30+", l: "Handwriting styles" },
            { n: "500", l: "Cards per batch" },
            { n: "₹50", l: "Per card at scale" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif-display text-5xl text-primary">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
