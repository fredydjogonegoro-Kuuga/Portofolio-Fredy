import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-10 sm:py-14"
      data-testid="certifications-section"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent">/</span>
        <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Certifications
        </h3>
        <div className="flex-1 h-px bg-border" />
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((c, i) => (
          <li
            key={i}
            data-testid={`cert-${i}`}
            className="rounded-md border border-border bg-card p-4 flex gap-3 hover:border-foreground/20 transition-colors"
          >
            <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="text-sm font-medium leading-tight">{c.name}</div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground truncate">
                {c.issuer} · {c.year}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
