import { education } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-24"
      data-testid="education-section"
    >
      <SectionHeader number="05" eyebrow="Background" title="Education" />

      <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-5">
        {education.map((e, i) => (
          <div
            key={i}
            data-testid={`education-item-${i}`}
            className="rounded-lg border border-border bg-card p-5 sm:p-6 flex gap-4"
          >
            <span className="grid place-items-center w-10 h-10 rounded-md border border-border bg-background text-accent shrink-0">
              <GraduationCap className="w-4 h-4" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-base tracking-tight">
                  {e.degree}
                </h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <div className="mt-1 text-sm text-accent font-medium">
                {e.school}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
