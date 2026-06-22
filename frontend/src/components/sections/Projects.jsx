import { useState } from "react";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowUpRight, ExternalLink, Target, FlaskConical, Lightbulb } from "lucide-react";
import ProjectCover from "@/components/ProjectCover";

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 sm:py-24"
      data-testid="projects-section"
    >
      <SectionHeader number="04" eyebrow="Selected work" title="Projects" />

      <div className="mt-12 grid md:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            data-testid={`project-card-${p.slug}`}
            className="group relative rounded-lg border border-border bg-card overflow-hidden hover:border-foreground/20 transition-colors"
          >
            <ProjectCover variant={p.cover} />

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-muted-foreground">
                  PROJECT.{String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded font-mono text-[10px] border border-border text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
                {p.title}
              </h3>
              <div className="mt-1 text-xs text-accent font-mono">
                {p.subtitle}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.tagline}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {p.metrics.slice(0, 4).map((m, j) => (
                  <div
                    key={j}
                    className="rounded-md border border-border bg-background px-3 py-2"
                  >
                    <div className="font-serif text-base sm:text-lg font-semibold leading-none">
                      {m.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground line-clamp-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpen(p)}
                data-testid={`project-open-${p.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Read the case study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent
          className="max-w-3xl max-h-[88vh] overflow-y-auto"
          data-testid="project-dialog"
        >
          {open && (
            <>
              <DialogHeader>
                <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
                  {open.subtitle}
                </div>
                <DialogTitle className="font-serif text-2xl sm:text-3xl">
                  {open.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {open.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {open.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-[10px] border border-border bg-background"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {open.metrics.map((m, j) => (
                  <div
                    key={j}
                    className="rounded-md border border-border bg-background px-3 py-2.5"
                  >
                    <div className="font-serif text-lg font-semibold leading-none">
                      {m.value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <CaseBlock icon={<Target className="w-3.5 h-3.5" />} title="Problem">
                <p className="text-sm leading-relaxed text-foreground/85">
                  {open.problem}
                </p>
              </CaseBlock>

              <CaseBlock icon={<FlaskConical className="w-3.5 h-3.5" />} title="Approach">
                <ul className="space-y-2">
                  {open.approach.map((a, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <span className="font-mono text-xs text-accent mt-0.5">{String(j + 1).padStart(2, "0")}</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock icon={<Lightbulb className="w-3.5 h-3.5" />} title="Key findings">
                <ul className="space-y-2">
                  {open.findings.map((f, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock icon={<ExternalLink className="w-3.5 h-3.5" />} title="Recommendations">
                <ul className="space-y-2">
                  {open.recommendations.map((r, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CaseBlock>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function CaseBlock({ icon, title, children }) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="grid place-items-center w-6 h-6 rounded-md border border-border bg-background text-accent">
          {icon}
        </span>
        <h4 className="font-semibold text-sm tracking-tight">{title}</h4>
      </div>
      <div className="pl-8">{children}</div>
    </div>
  );
}
