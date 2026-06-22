import { ArrowDown, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24"
      data-testid="hero-section"
    >
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="anim-rise">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-card text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Open to Data Analyst roles</span>
          </div>

          <h1
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-balance"
            data-testid="hero-name"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-muted-foreground">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-foreground/80 font-mono">
            <span className="text-accent">$</span> {profile.title}
          </p>

          <p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            data-testid="hero-summary"
          >
            {profile.tagline} I bring{" "}
            <span className="text-foreground">14+ years</span> of enterprise
            banking infrastructure and a fresh foundation in{" "}
            <span className="text-foreground">predictive analytics</span> to
            uncover revenue-saving opportunities in data.
          </p>

          {/* Contact pills */}
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={`mailto:${profile.email}`}
              data-testid="hero-email-link"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              data-testid="hero-phone-link"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-linkedin-link"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-github-link"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-card text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" /> {profile.location}
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild data-testid="hero-cta-projects" className="rounded-md h-11 px-5">
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              data-testid="hero-cta-contact"
              className="rounded-md h-11 px-5"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Right: photo card */}
        <div className="relative anim-fade">
          <div className="relative max-w-sm mx-auto lg:ml-auto">
            {/* Decorative grid */}
            <div className="absolute -inset-4 grid-bg opacity-50 rounded-2xl" />
            <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/15" />
              </div>
              <img
                src={profile.photo}
                alt={profile.name}
                data-testid="hero-photo"
                className="w-full aspect-[4/5] object-cover object-top mt-4"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>FDH · 2026</span>
                <span className="text-accent">● live</span>
              </div>
            </div>

            {/* Floating stat */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 px-4 py-3 rounded-lg border border-border bg-background shadow-md">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                Years experience
              </div>
              <div className="font-serif text-3xl font-semibold leading-none mt-1">
                14<span className="text-accent">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px border border-border rounded-lg overflow-hidden bg-border">
        {profile.stats.map((s, i) => (
          <div
            key={i}
            data-testid={`hero-stat-${i}`}
            className="bg-card p-5 sm:p-6"
          >
            <div className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
              {s.value}
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="mt-12 mx-auto flex w-9 h-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
}
