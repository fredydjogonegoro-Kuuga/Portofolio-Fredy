import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24" data-testid="skills-section">
      <SectionHeader number="02" eyebrow="Toolkit" title="Skills & stack" />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
        {skills.map((s) => (
          <div
            key={s.group}
            data-testid={`skill-group-${s.group.toLowerCase().replace(/\s|&/g, "-")}`}
            className="bg-card p-6 hover:bg-secondary/40 transition-colors"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-semibold text-sm tracking-tight">
                {s.group}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                .{String(s.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-md border border-border bg-background font-mono text-[11px] text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
