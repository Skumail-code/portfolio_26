export const siteConfig = {
  name: "Kumail Rizvi",
  title: "Kumail Rizvi — Backend Engineer in Mumbai | Go, PostgreSQL, Payments",
  description:
    "Kumail Rizvi is a backend engineer in Mumbai building production systems in Go and PostgreSQL across payments, accounting, and real estate infrastructure in India.",
  url: "https://kumail.in",
  domain: "kumail.in",
  locale: "en_US",
  author: {
    name: "Kumail Rizvi",
    email: "sayyedkumailabbas363@gmail.com",
    github: "https://github.com/Skumail-code",
    linkedin: "https://www.linkedin.com/in/kumail-rizvi-2772071a0/",
    location: "Mumbai, India",
  },
  keywords: [
    "Kumail Rizvi",
    "Backend Engineer",
    "Backend Engineer Mumbai",
    "Backend Developer Mumbai",
    "Go Developer Mumbai",
    "Golang Developer India",
    "Go Backend Engineer India",
    "Software Engineer India",
    "Backend Engineer India",
    "Fintech",
    "Payments Backend Engineer",
    "Golang",
    "Go",
    "PostgreSQL",
    "Distributed Systems",
    "System Design",
    "API Development",
    "Payments Infrastructure",
    "Mumbai",
    "India",
  ],
} as const;

export const tickerItems = [
  "100+ events/day",
  "3 systems in production",
  "₹ payments infrastructure",
  "3 yrs",
] as const;

export const metrics = [
  { key: "UPTIME_EXPERIENCE", value: "3+", unit: "YRS", animate: true, cursor: true },
  { key: "SYSTEMS_DEPLOYED", value: "3", unit: "LIVE", animate: true },
  { key: "PRIMARY_RUNTIME", value: "Go", unit: "", animate: false },
  { key: "DATA_STORE", value: "PostgreSQL", unit: "", animate: false },
  { key: "SECONDARY_STORE", value: "MySQL", unit: "", animate: false },
  { key: "NODE_LOCATION", value: "Mumbai", unit: "IN", animate: false },
] as const;

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Formation", href: "#formation" },
  { name: "Systems", href: "#systems" },
  { name: "Architecture", href: "#architecture" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
] as const;

export type BulletPart = {
  text: string;
  accent?: boolean;
};

export const experience = [
  {
    company: "Futurescape Technologies Pvt. Ltd.",
    period: "Dec 2024 – Present",
    role: "Software Developer (Backend)",
    highlights: [
      [
        { text: "Owned backend for OneGate — 100K+ daily events across 100+ housing societies" },
      ],
      [
        { text: "p95 API latency: " },
        { text: "420ms → 140ms", accent: true },
        { text: " via Redis caching, N+1 fixes, index redesign" },
      ],
      [
        { text: "Kafka pipelines processing 1M+ audit events/day, cutting sync load by 35%" },
      ],
      [
        { text: "Built OnePay backend — 50K+ daily users across payments, recharges, FASTag" },
      ],
    ],
  },
  {
    company: "Mobcast Innovations Pvt. Ltd.",
    period: "Jun 2024 – Dec 2024",
    role: "Backend Developer",
    highlights: [
      [
        {
          text: "Built Go APIs for a VILT platform handling concurrent enterprise training sessions",
        },
      ],
      [
        {
          text: "Implemented real-time state transitions and session coordination workflows",
        },
      ],
    ],
  },
  {
    company: "Unico Connect Pvt. Ltd.",
    period: "Jan 2024 – Apr 2024",
    role: "Software Engineer",
    highlights: [
      [
        { text: "Built inventory and high-availability APIs for a retail platform" },
      ],
      [
        {
          text: "Optimized DB schemas for high-frequency transactional workloads",
        },
      ],
    ],
  },
  {
    company: "Destino Infotech Pvt. Ltd.",
    period: "Jan 2023 – Jan 2024",
    role: "Developer",
    highlights: [
      [{ text: "Built MPIN and 2FA authentication systems" }],
      [
        {
          text: "Foundational backend work across security and user auth flows",
        },
      ],
    ],
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "IIT Patna & IIIT Ranchi",
    period: "2026 – 2028 (Expected)",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mumbai",
    period: "2021 – 2024",
  },
] as const;

export const systems = [
  {
    name: "OneSpaces",
    live: true,
    domain: "Real Estate",
    load: "100+ events/day",
    stack: ["Go", "PostgreSQL", "Redis"],
    failureImpact:
      "Seller onboarding stops. Subscriptions can't renew. Active listings go stale within hours.",
  },
  {
    name: "OnePay",
    live: true,
    domain: "Payments",
    load: "Transaction processing",
    stack: ["Go", "PostgreSQL"],
    failureImpact:
      "Money stops moving. Every downstream service blocks on payment confirmation.",
  },
  {
    name: "OneGate",
    live: true,
    domain: "Accounting",
    load: "Financial reporting",
    stack: ["Go", "PostgreSQL"],
    failureImpact:
      "Books close incorrectly. Audit trail breaks. Finance ops reverts to spreadsheets.",
  },
  {
    name: "OneSociety",
    live: true,
    domain: "Society Management",
    load: "Resident ops",
    stack: ["Go", "PostgreSQL", "MySQL", "AWS"],
    failureImpact:
      "Maintenance requests queue up. Resident communication halts. Billing cycles slip.",
  },
] as const;

export const architectureDiagram = `┌──────────┐     ┌─────────────┐     ┌──────────────────┐
│  Client  │────▶│ API Gateway │────▶│   OnePay Service │
└──────────┘     └─────────────┘     └────────┬─────────┘
                                              │
         ┌────────────────────────────────────┼──────────────────┐
         │                                    │                  │
         ▼                                    ▼                  ▼
  ┌─────────────┐                    ┌──────────────┐   ┌────────────┐
  │    Redis    │                    │  PostgreSQL  │   │  Webhook   │
  │ idempotency │                    │ ledger + txns│   │  dispatcher│
  │  + cache    │                    │  (source of  │   │  (async)   │
  └─────────────┘                    │   truth)     │   └────────────┘
                                     └──────────────┘
                                              │
                                     ┌────────▼─────────┐
                                     │ Reconciliation   │
                                     │ worker (cron)    │
                                     └──────────────────┘`;

export const lessonsLearned = [
  "Connection pool exhaustion looks like a slow API until it doesn't. Size pools before traffic, not after an outage.",
  "Idempotency keys aren't optional for payments. One duplicate charge at 2am teaches more than any blog post.",
  "The hardest bugs live at service boundaries — between your code and the database, between your service and the queue.",
] as const;

export const blogCategories = [
  "Golang",
  "PostgreSQL",
  "System Design",
  "Distributed Systems",
  "Software Engineering",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const engineeringNotes = [
  {
    slug: "api-design",
    title: "API Design",
    description:
      "Versioning, error contracts, idempotency. The parts that matter at 3am.",
  },
  {
    slug: "postgresql-optimization",
    title: "PostgreSQL Optimization",
    description:
      "Indexing, EXPLAIN ANALYZE, connection pooling. Measured, not guessed.",
  },
  {
    slug: "authentication",
    title: "Authentication",
    description:
      "Access/refresh token flows, session invalidation, API key scoping.",
  },
  {
    slug: "caching",
    title: "Caching",
    description:
      "Cache-aside, TTL strategy, and the data you should never cache.",
  },
  {
    slug: "distributed-systems",
    title: "Distributed Systems",
    description:
      "At-least-once delivery, outbox pattern, consumer idempotency.",
  },
  {
    slug: "docker-deployments",
    title: "Docker Deployments",
    description:
      "Multi-stage builds, health checks, non-root containers.",
  },
] as const;
