import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="mt-16 border-t border-border"
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with React &
          Tailwind.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-accent">●</span> Available for new opportunities
        </div>
      </div>
    </footer>
  );
}
