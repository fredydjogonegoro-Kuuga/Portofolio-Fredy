// Project thumbnail covers — uses PDF page-1 thumbnails with subtle overlay
const variantMap = {
  churn: {
    src: "/project_churn.jpg",
    tagLeft: "churn_analysis.pdf",
    tagRight: "● case study",
    footerLeft: "tenure →",
    footerRight: "↓ retention",
  },
  hospital: {
    src: "/project_hospital.jpg",
    tagLeft: "hospital_bi.pdf",
    tagRight: "● dashboard",
    footerLeft: "departments",
    footerRight: "IDR 39.85B total",
  },
};

export default function ProjectCover({ variant }) {
  const cfg = variantMap[variant];
  if (!cfg) return null;

  return (
    <div className="relative h-44 sm:h-52 border-b border-border overflow-hidden bg-secondary">
      <img
        src={cfg.src}
        alt={`${variant} project cover`}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
      {/* Subtle gradient overlay for legibility of corner labels */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />
      <div className="absolute inset-0 ring-1 ring-inset ring-border" />

      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-background/85 backdrop-blur-sm font-mono text-[10px] text-foreground/80">
        {cfg.tagLeft}
      </div>
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-background/85 backdrop-blur-sm font-mono text-[10px] text-accent">
        {cfg.tagRight}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between">
        <span className="px-2 py-0.5 rounded-md bg-background/85 backdrop-blur-sm font-mono text-[10px] text-muted-foreground">
          {cfg.footerLeft}
        </span>
        <span className="px-2 py-0.5 rounded-md bg-background/85 backdrop-blur-sm font-mono text-[10px] text-muted-foreground">
          {cfg.footerRight}
        </span>
      </div>
    </div>
  );
}
