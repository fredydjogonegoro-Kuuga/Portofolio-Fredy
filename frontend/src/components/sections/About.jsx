import { profile, languages } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24" data-testid="about-section">
      <SectionHeader number="01" eyebrow="About" title="From data centers to data insights" />

      <div className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16">
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/85">
          <p data-testid="about-summary">{profile.summary}</p>
          <p>
            I have spent my career inside enterprise banking — auditing
            capacity, centralizing infrastructure datasets, and writing reports
            that executives actually use. The pivot into data analytics felt
            natural: the same instinct for{" "}
            <span className="text-foreground font-medium">
              root cause thinking
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              data-driven decisions
            </span>
            , applied to a wider problem space.
          </p>
          <p>
            Today I am most interested in churn and retention modeling,
            operational BI, and helping mid-sized teams turn messy data into
            clear next actions.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Currently
            </div>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>
                  Completed{" "}
                  <span className="font-medium">
                    RevoU Full Stack Data Analytics
                  </span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>
                  Building portfolio projects in{" "}
                  <span className="font-mono text-xs">Python · SQL · Tableau</span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>Open to Data Analyst roles in Jakarta or remote</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Languages
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between">
                  <span>{l.name}</span>
                  <span className="text-muted-foreground font-mono text-xs">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
