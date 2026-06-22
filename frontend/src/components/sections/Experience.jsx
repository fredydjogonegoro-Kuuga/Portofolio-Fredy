import { experience } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24"
      data-testid="experience-section"
    >
      <SectionHeader number="03" eyebrow="Track record" title="Experience" />

      <ol className="mt-12 relative">
        <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-border" />
        {experience.map((job, i) => (
          <li
            key={i}
            data-testid={`experience-item-${i}`}
            className="relative pl-10 sm:pl-16 pb-10 last:pb-0"
          >
            <span className="absolute left-0 top-1 sm:left-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-border bg-background grid place-items-center">
              <Briefcase className="w-3 h-3 text-accent" />
            </span>

            <div className="rounded-lg border border-border bg-card p-5 sm:p-6 hover:border-foreground/20 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-base sm:text-lg tracking-tight">
                  {job.role}
                </h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <div className="mt-1 text-sm text-accent font-medium">
                {job.company}
                <span className="text-muted-foreground font-normal">
                  {" "}
                  · {job.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((p, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
