import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[var(--footer)] text-background">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-serif-display text-3xl">Get a free sample card</h3>
          <p className="mt-2 text-sm text-background/70">
            We'll write and ship one to your address — no strings attached.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-md border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:brightness-110">
              Request
            </button>
          </form>
        </div>

        <div className="mt-16 grid gap-10 border-t border-background/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-script text-3xl">Ritershub</span>
            <p className="mt-3 text-sm text-background/60">
              Real pen & ink, written by machine. Made in Goa.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Vasco, Goa</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>+91 7083930556</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@ritershub.com</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80">
              Follow
            </h4>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Ritershub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
