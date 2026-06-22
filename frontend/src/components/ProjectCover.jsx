// Decorative SVG covers for project cards — data-themed, no external images
export default function ProjectCover({ variant }) {
  if (variant === "churn") return <ChurnCover />;
  if (variant === "hospital") return <HospitalCover />;
  return null;
}

function ChurnCover() {
  return (
    <div className="relative h-44 sm:h-52 border-b border-border overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg
        viewBox="0 0 400 160"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* descending churn curve */}
        <path
          d="M0,40 C60,40 80,80 140,90 C200,100 220,130 280,135 C340,140 360,150 400,150"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
        />
        <path
          d="M0,40 C60,40 80,80 140,90 C200,100 220,130 280,135 C340,140 360,150 400,150 L400,160 L0,160 Z"
          fill="hsl(var(--accent) / 0.12)"
        />
        {/* data points */}
        {[
          [40, 42],
          [100, 70],
          [160, 95],
          [220, 115],
          [280, 135],
          [340, 145],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="absolute top-3 left-3 font-mono text-[10px] text-muted-foreground">
        churn_rate.csv
      </div>
      <div className="absolute top-3 right-3 font-mono text-[10px] text-accent">
        ● regression
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>tenure →</span>
        <span>↓ retention</span>
      </div>
    </div>
  );
}

function HospitalCover() {
  // bar chart style
  const bars = [55, 80, 38, 95, 70, 50, 65, 88, 42, 75];
  return (
    <div className="relative h-44 sm:h-52 border-b border-border overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg
        viewBox="0 0 400 160"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {bars.map((h, i) => {
          const w = 26;
          const gap = 10;
          const x = 20 + i * (w + gap);
          const y = 140 - h;
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                fill={i === 3 ? "hsl(var(--accent))" : "hsl(var(--foreground) / 0.35)"}
                rx="2"
              />
            </g>
          );
        })}
        <line x1="0" y1="140" x2="400" y2="140" stroke="hsl(var(--border))" strokeWidth="1" />
      </svg>
      <div className="absolute top-3 left-3 font-mono text-[10px] text-muted-foreground">
        revenue_by_dept
      </div>
      <div className="absolute top-3 right-3 font-mono text-[10px] text-accent">
        ● dashboard
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>departments</span>
        <span>IDR 39.85B total</span>
      </div>
    </div>
  );
}
