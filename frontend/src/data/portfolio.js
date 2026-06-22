// Portfolio data — Fredy Dwi Hartarto
export const profile = {
  name: "Fredy Dwi Hartarto",
  initials: "FDH",
  title: "IT Infrastructure Specialist · Data Analyst Newcomer",
  tagline:
    "Translating 14+ years of enterprise infrastructure into data-driven decisions.",
  summary:
    "IT Infrastructure Specialist with 14+ years managing enterprise banking data centers, system capacity, and technical architecture. Recently completed RevoU's Full Stack Data Analytics program — covering data cleaning, statistical testing, and predictive modeling. I pivot infrastructure rigor into analytics work: auditing system performance, centralizing infrastructure datasets, and delivering actionable data reports to executive teams.",
  location: "Jakarta, Indonesia",
  email: "fredydjogonegoro@gmail.com",
  phone: "+62 821-2231-2209",
  linkedin: "https://linkedin.com/in/fredy-dwi-hartarto",
  github: "https://github.com/fredydjogonegoro",
  photo: "/fredy_editorial.png",
  stats: [
    { value: "14+", label: "Years in Infra" },
    { value: "200+", label: "Approved Changes / 0 Downtime" },
    { value: "95%", label: "Asset Visibility Lift" },
    { value: "79%", label: "Predictive Model Accuracy" },
  ],
};

export const skills = [
  {
    group: "Data Analytics",
    items: [
      "Exploratory Data Analysis",
      "Hypothesis Testing (Chi-Square, T-Test)",
      "Regression Modeling",
      "Root Cause Analysis",
      "Predictive Modeling",
    ],
  },
  {
    group: "Languages & Libraries",
    items: ["Python", "pandas", "scikit-learn", "scipy", "SQL"],
  },
  {
    group: "BI & Visualization",
    items: ["Tableau", "Power BI", "Grafana", "Google Colab", "MS Excel", "Google Sheets"],
  },
  {
    group: "Infrastructure",
    items: [
      "VMware (VCP 6.5)",
      "VMware vCenter",
      "Proxmox",
      "Hyper-V",
      "Oracle DBA",
      "Capacity Planning",
      "CMDB",
      "DR Operations",
    ],
  },
  {
    group: "Governance",
    items: ["ISO 27001", "ITIL v3", "Risk Management (Banking)"],
  },
];

export const experience = [
  {
    company: "PT KB Bank Tbk",
    role: "IT Implementation & Configuration Manager",
    period: "Apr 2022 — Oct 2025",
    location: "Jakarta",
    points: [
      "Led the KB Bukopin (KB Bank) Next-Generation Banking Migration: analyzed database structures to classify reusable data and scheduled migrations across operational/non-operational windows — delivered 100% zero downtime.",
      "Calculated infrastructure capacity requirements and built a 5-year capacity forecast for the new core banking system.",
      "Rebuilt the asset tracking system across main environments, consolidating scattered spreadsheets into a single CMDB and lifting asset visibility by 95%.",
      "Monitored and audited daily infrastructure data — reviewed & approved 200+ network/server configuration changes with zero downtime to banking operations.",
      "Led technical data audits for compliance reviews, keeping systems 100% aligned with regulations and protecting the department's ISO 27001 certification.",
    ],
  },
  {
    company: "PT Bank Bukopin Tbk",
    role: "Data Center Infrastructure Coordinator",
    period: "Dec 2019 — Apr 2022",
    location: "Jakarta",
    points: [
      "Analyzed capacity performance data for cluster servers and storage — cut hardware over-allocation by 15% ahead of core banking upgrades.",
      "Automated weekly, monthly, and annual resource forecasting reports, saving operations 8 hours of manual tracking every week.",
      "Ran root cause analyses on major system incidents, cutting troubleshooting and diagnostic response times by 30%.",
    ],
  },
  {
    company: "PT Bank Bukopin Tbk",
    role: "Senior System Architecture Staff",
    period: "Jan 2017 — Dec 2019",
    location: "Jakarta",
    points: [
      "Mapped architectural blueprints for the digital transformation push, safely handling 10,000+ concurrent active mobile users.",
      "Monitored and tuned database query metrics, eliminating lag and boosting data retrieval speeds across regional database platforms by 20%.",
    ],
  },
  {
    company: "PT Bank Bukopin Tbk",
    role: "Core Banking & System Architecture Staff",
    period: "Aug 2011 — Dec 2017",
    location: "Jakarta",
    points: [
      "Built server utilization forecast models using historical data trends, preventing capacity overloads before they could impact core workflows.",
      "Structured infrastructure data plans for new software rollouts, ensuring deployment environments met bank stability targets.",
    ],
  },
  {
    company: "PT Fastrata Buana",
    role: "Oracle DBA & Infrastructure",
    period: "Oct 2009 — Jun 2011",
    location: "Jakarta",
    points: [
      "Optimized database queries on corporate Oracle systems, reducing data processing delays by 15%.",
      "Managed hardware and local networks across 10+ branch offices, keeping remote corporate data sync stable.",
    ],
  },
];

export const projects = [
  {
    slug: "nexa-churn",
    title: "NexaConnect Churn Analysis",
    subtitle: "Predictive Approach to Churn Control",
    tagline:
      "Telecom churn — identifying drivers, modeling risk, and protecting $2.86M revenue leakage.",
    cover: "churn",
    tags: ["Python", "scikit-learn", "scipy", "Tableau", "Logistic Regression"],
    metrics: [
      { value: "26.58% → 20%", label: "Target churn reduction" },
      { value: "79%", label: "Model accuracy" },
      { value: "$2.86M", label: "Revenue at risk identified" },
      { value: "49%", label: "Potential leakage saved" },
    ],
    problem:
      "NexaConnect Telecom had a 26.58% churn rate, losing USD 2.86M from a USD 16.06M revenue base. The business needed to identify why customers leave and how to bring churn down to 20% within 12 months.",
    approach: [
      "Cleaned a 7,043-row × 21-column customer dataset — handled missing values, fixed dtypes, encoded categoricals.",
      "Ran EDA + hypothesis testing (Chi-Square, T-Test) on Contract Type, Tenure, and Total Charges vs Churn — all significant (p < α).",
      "Built a Logistic Regression model (scikit-learn) reaching ~79% accuracy, ranking drivers by coefficient weight.",
      "Visualized KPIs and segment behavior in an interactive Tableau dashboard.",
    ],
    findings: [
      "Month-to-Month contracts have a 42.71% churn rate, accounting for 88.5% of all churn.",
      "Customers under $1,000 in total charges form a 'Low Investment Churn Core' — high early attrition.",
      "Long tenure strongly reduces churn (coef −1.43); stability plateau hits at month 20.",
      "High Monthly Charges (+0.70) and Fiber Optic Internet (+0.19) accelerate churn risk.",
      "OnlineSecurity (−0.25), TechSupport (−0.24), and Longer Contracts (−0.61) protect retention.",
    ],
    recommendations: [
      "Onboarding Safety Net — flag accounts under $1,000 spend in their first 90 days for proactive outreach.",
      "Value Protection Auto-Bundle — attach OnlineSecurity + TechSupport free for 6 months on Fiber Optic plans.",
      "Price Lock Upgrade — target month-to-month users in cycles 3-4 with 10-15% discount for 1–2 year commitments.",
    ],
    links: [
      { label: "View on Tableau Public", href: "#" },
      { label: "Notebook (Colab)", href: "#" },
    ],
  },
  {
    slug: "revohospital",
    title: "RevoHospital Operational & Financial Efficiency",
    subtitle: "Hospital BI Dashboard",
    tagline:
      "Multi-branch hospital BI — admissions, revenue, capacity, and insurance dependency.",
    cover: "hospital",
    tags: ["Tableau", "SQL", "Python", "LOD Expressions", "KPI Design"],
    metrics: [
      { value: "5,000", label: "Patient admissions" },
      { value: "IDR 39.85B", label: "Total revenue" },
      { value: "4.46 days", label: "Avg length of stay" },
      { value: "5 tables", label: "Joined fact + dims" },
    ],
    problem:
      "Revo Hospital management needed a single source of truth across branches and departments to identify well-performing units, bottlenecks, and resource misallocation.",
    approach: [
      "Modeled 5 CSVs (branches, departments, doctors, admissions, billing) at the 'per admission' grain — defined joins and grain carefully to avoid double counting.",
      "Defined core KPIs: Total Admissions, Total Revenue, Avg Length of Stay, Bed Occupancy Rate, Monthly Revenue Trend.",
      "Built dashboard with KPI scorecards, department comparison bars, trend lines, distribution histograms, geo map, scatter plots, and a radial chart for insurance mix.",
      "Used LOD expressions for doctor-level revenue and table calcs for running totals.",
    ],
    findings: [
      "Oncology is the top revenue department; Pediatrics underperforms — specialized care drives revenue.",
      "Jakarta branch significantly outpaces others — other locations show clear underperformance.",
      "Revenue stable through 2024, jumped early 2025, then dropped sharply late 2025 — flag for seasonality or data quality.",
      "Private insurance dominates revenue mix → financial dependency risk.",
      "Emergency department has the highest admission volume — staffing & bed allocation pressure.",
    ],
    recommendations: [
      "High: increase staffing & beds in Emergency; rebalance resources to underperforming branches.",
      "Medium: improve discharge planning & patient flow; diversify insurance partnerships.",
      "Low: study top-performing doctors and standardize their practices across teams.",
    ],
    links: [
      { label: "View on Tableau Public", href: "#" },
    ],
  },
];

export const education = [
  {
    school: "RevoU",
    degree: "Full Stack Data Analytics Program",
    period: "Feb 2026 — Jun 2026",
    detail: "Advanced skills in SQL, Python, statistics, spreadsheets, and data visualization (Power BI & Tableau) to solve complex business problems.",
  },
  {
    school: "Gunadarma University",
    degree: "Bachelor of Information Systems",
    period: "Sep 2004 — Apr 2009",
    detail: "GPA 3.39 / 4.00",
  },
];

export const certifications = [
  { name: "RevoU Full Stack Data Analysis", issuer: "RevoU", year: "Jun 2026" },
  { name: "Intro to Data Analytics", issuer: "RevoU", year: "Jul 2025" },
  { name: "VMware Certified Professional (VCP 6.5)", issuer: "Duta Kuningan", year: "2018" },
  { name: "ISO 27001 Lead Implementer", issuer: "Duta Kuningan", year: "2018" },
  { name: "Risk Management (Banking)", issuer: "Bank Bukopin", year: "2018" },
  { name: "ITIL v3 Foundation", issuer: "Axelos", year: "2016" },
  { name: "TOEFL Certified", issuer: "LBPP LIA", year: "2018" },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
