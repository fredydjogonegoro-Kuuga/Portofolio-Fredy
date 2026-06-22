import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { navItems, profile } from "@/data/portfolio";

export default function Navbar({ active }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
      data-testid="navbar"
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          data-testid="navbar-logo"
        >
          <span className="grid place-items-center w-8 h-8 rounded-md border border-border bg-card font-mono text-[11px] font-semibold tracking-tight">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-muted-foreground font-mono text-xs">
              /portfolio
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid={`nav-${id}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] text-accent mr-1.5">
                    {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-px left-3 right-3 h-px bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            data-testid="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-md"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-md"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="mx-auto max-w-6xl px-5 py-3 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid={`mobile-nav-${item.href.replace("#", "")}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-md hover:bg-secondary"
                >
                  <span className="font-mono text-[10px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
