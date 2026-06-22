export default function SectionHeader({ number, eyebrow, title }) {
  return (
    <div className="flex items-end gap-4 sm:gap-6">
      <div className="font-mono text-xs text-accent shrink-0 pt-2.5">
        {number}
      </div>
      <div className="flex-1">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </div>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
      </div>
      <div className="flex-1 hidden sm:block h-px bg-border mb-3" />
    </div>
  );
}
