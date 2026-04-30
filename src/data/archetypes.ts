import type { ThemePresetKey } from "@/data/theme-presets";

export type ArchetypeKey =
  | "executive-split-hero"
  | "boardroom-dashboard"
  | "bento-intelligence-grid"
  | "editorial-authority-page"
  | "concierge-conversion-funnel"
  | "strategic-roadmap-canvas"
  | "product-command-center"
  | "guided-intelligence-wizard"
  | "case-study-narrative"
  | "luxury-product-showcase";

export interface ArchetypeDefinition {
  key: ArchetypeKey;
  label: string;
  summary: string;
  idealUse: string;
  defaultThemes: ThemePresetKey[];
  heroMode: "split" | "dashboard" | "bento" | "editorial" | "funnel" | "roadmap" | "wizard" | "showcase";
  structure: string[];
  visualRules: string[];
  landingPrimary: string[];
  appPrimary: string[];
  dashboardEmphasis: string[];
  prompt: string;
}

export const ARCHETYPES: Record<ArchetypeKey, ArchetypeDefinition> = {
  "executive-split-hero": {
    key: "executive-split-hero",
    label: "Executive Split Hero",
    summary: "Premium B2B landing with executive copy on the left and polished product preview on the right.",
    idealUse: "Consulting, AI services, SaaS B2B, executive proposals.",
    defaultThemes: ["executive-obsidian", "ivory-capital", "monaco-navy"],
    heroMode: "split",
    structure: ["Top nav", "Hero split 60/40", "Trust indicators", "3 value cards", "Featured use case", "CTA final"],
    visualRules: [
      "Use strong whitespace or elegant dark space.",
      "Give the title dominant visual presence.",
      "Right side must feel like a real product demo, not decorative filler.",
    ],
    landingPrimary: ["headline", "value proposition", "product preview", "trust", "CTA"],
    appPrimary: ["overview", "use case", "proof", "conversion"],
    dashboardEmphasis: ["clarity", "authority", "offer framing", "product realism"],
    prompt:
      "Use an Executive Split Hero composition. Create a premium B2B landing page with a two-column hero: strong executive headline on the left, polished product preview on the right. Add a refined navigation bar, high-contrast CTA, trust indicators, three value cards, and a final conversion section. The design must feel elegant, expensive, clear, and enterprise-ready.",
  },
  "boardroom-dashboard": {
    key: "boardroom-dashboard",
    label: "Boardroom Dashboard",
    summary: "Executive command-center layout centered on KPIs, intelligence, alerts, and board-level readability.",
    idealUse: "Executive dashboards, analytics, governance, compliance, telecom, utilities.",
    defaultThemes: ["black-titanium", "monaco-navy", "emerald-boardroom"],
    heroMode: "dashboard",
    structure: ["Compact sidebar", "Header with context", "KPI cards", "Main intelligence panel", "Secondary cards", "Recommended actions"],
    visualRules: [
      "Metrics should feel important, never decorative.",
      "Use restrained cards, thin borders, and clear hierarchy.",
      "Alert colors must stay sparse and intentional.",
    ],
    landingPrimary: ["KPI row", "main chart", "alerts", "actions", "authority"],
    appPrimary: ["overview", "analytics", "alerts", "actions"],
    dashboardEmphasis: ["KPIs", "insight panels", "board readability", "decision support"],
    prompt:
      "Use a Boardroom Dashboard composition. Create an executive command-center interface with a compact sidebar, KPI cards, main analytics panel, alerts, recommendations, and action buttons. Prioritize clarity, authority, premium spacing, and board-level readability. Avoid clutter and avoid toy-like charts.",
  },
  "bento-intelligence-grid": {
    key: "bento-intelligence-grid",
    label: "Bento Intelligence Grid",
    summary: "Modern asymmetric bento layout for AI tools, product capabilities, and startup feature storytelling.",
    idealUse: "AI tools, startups, product demos, automation platforms.",
    defaultThemes: ["royal-ai", "nordic-glass", "champagne-saas"],
    heroMode: "bento",
    structure: ["Compact hero", "Bento capability grid", "Product workflow", "CTA"],
    visualRules: [
      "Every card must have a specific purpose.",
      "Mix sizes so the page feels dynamic and modern.",
      "Ideal when a product has multiple capabilities to explain.",
    ],
    landingPrimary: ["hero", "capabilities", "workflow", "micro-interactions", "CTA"],
    appPrimary: ["features", "automation", "insights", "activity"],
    dashboardEmphasis: ["capabilities", "modularity", "clarity", "modernity"],
    prompt:
      "Use a Bento Intelligence Grid composition. Create a modern premium layout using asymmetric bento cards to explain core product capabilities. Include one large hero feature card, several supporting cards, micro-interactions, subtle icons, and a final CTA. The composition should feel intelligent, modern, polished, and highly organized.",
  },
  "editorial-authority-page": {
    key: "editorial-authority-page",
    label: "Editorial Authority Page",
    summary: "Magazine-like executive narrative for strategic consulting, reports, and intellectual authority.",
    idealUse: "Consulting, white papers, thought leadership, strategic services.",
    defaultThemes: ["editorial-graphite", "ivory-capital"],
    heroMode: "editorial",
    structure: ["Editorial hero", "Problem statement", "Strategic insight", "Framework", "Case application", "CTA"],
    visualRules: [
      "Typography should be large, elegant, and restrained.",
      "Use fewer cards and more narrative rhythm.",
      "Ideal for selling intellectual authority.",
    ],
    landingPrimary: ["headline", "narrative", "insights", "framework", "authority"],
    appPrimary: ["brief", "insights", "evidence", "CTA"],
    dashboardEmphasis: ["authority", "clarity", "storytelling", "trust"],
    prompt:
      "Use an Editorial Authority Page composition. Design the page like a premium business publication or strategic consulting brief. Use large typography, refined spacing, pull quotes, insight blocks, and elegant section transitions. The result should feel authoritative, intelligent, and executive-level.",
  },
  "concierge-conversion-funnel": {
    key: "concierge-conversion-funnel",
    label: "Concierge Conversion Funnel",
    summary: "Consultative premium service page optimized for discovery calls and high-value lead conversion.",
    idealUse: "Professional services, AI consulting, bookings, commercial proposals.",
    defaultThemes: ["champagne-saas", "ivory-capital", "caribbean-executive"],
    heroMode: "funnel",
    structure: ["Hero", "Pain points", "Service promise", "Process steps", "Packages", "Booking CTA"],
    visualRules: [
      "Repeat CTA without making it feel aggressive.",
      "It must feel premium and consultative, not cheap salesy.",
      "Structure should reduce friction toward booking.",
    ],
    landingPrimary: ["offer", "pain points", "promise", "proof", "booking"],
    appPrimary: ["offers", "calls", "next steps", "credibility"],
    dashboardEmphasis: ["conversion", "trust", "clarity", "premium service"],
    prompt:
      "Use a Concierge Conversion Funnel composition. Create a premium service landing page designed to convert high-value prospects into discovery calls. Include pain points, service promise, process steps, engagement options, credibility signals, and elegant booking CTAs. The tone should feel consultative, premium, and trustworthy.",
  },
  "strategic-roadmap-canvas": {
    key: "strategic-roadmap-canvas",
    label: "Strategic Roadmap Canvas",
    summary: "Executive roadmap page with phases, risks, rationale, and outcomes for transformation programs.",
    idealUse: "Roadmaps, digital transformation, implementation programs, IT strategy, capital projects.",
    defaultThemes: ["monaco-navy", "emerald-boardroom"],
    heroMode: "roadmap",
    structure: ["Hero", "Strategic context", "Roadmap timeline", "Phase detail cards", "Decision points", "Expected outcomes"],
    visualRules: [
      "Every phase must have a clear intention.",
      "Use progression, numbering, and lines to guide reading.",
      "It should work for non-technical stakeholders.",
    ],
    landingPrimary: ["context", "timeline", "phases", "decision points", "outcomes"],
    appPrimary: ["timeline", "phases", "risks", "actions"],
    dashboardEmphasis: ["phasing", "clarity", "stakeholder alignment", "outcomes"],
    prompt:
      "Use a Strategic Roadmap Canvas composition. Create a premium roadmap page with sequential phases, executive rationale, key actions, risks, outcomes, and decision checkpoints. The design must be easy for non-technical stakeholders to understand while still feeling strategic and boardroom-ready.",
  },
  "product-command-center": {
    key: "product-command-center",
    label: "Product Command Center",
    summary: "Premium application shell for SaaS MVPs, portals, admin panels, and internal products.",
    idealUse: "Functional SaaS MVPs, portals, admin panels, client portals, internal tools.",
    defaultThemes: ["black-titanium", "royal-ai", "monaco-navy"],
    heroMode: "dashboard",
    structure: ["Sidebar navigation", "Top utility bar", "Main workspace", "Right-side context panel", "Action footer"],
    visualRules: [
      "Must feel like a real product, not a static mockup.",
      "Use elegant empty states, loading states, tabs, and filters.",
      "Perfect for demos that should feel like complete platforms.",
    ],
    landingPrimary: ["app shell", "workspace", "context panel", "activity", "actions"],
    appPrimary: ["workspace", "filters", "status", "activity"],
    dashboardEmphasis: ["product realism", "workflow", "context", "actions"],
    prompt:
      "Use a Product Command Center composition. Build a premium SaaS application shell with sidebar navigation, top utility bar, main workspace, contextual right panel, filters, status indicators, and primary action buttons. The MVP should feel like a real production-ready enterprise product.",
  },
  "guided-intelligence-wizard": {
    key: "guided-intelligence-wizard",
    label: "Guided Intelligence Wizard",
    summary: "Calm step-by-step AI-assisted workflow for intake, assessment, onboarding, and recommendations.",
    idealUse: "AI intake forms, diagnostics, procurement analysis, compliance review, onboarding.",
    defaultThemes: ["nordic-glass", "royal-ai", "champagne-saas"],
    heroMode: "wizard",
    structure: ["Progress indicator", "Question area", "Context help", "AI recommendation preview", "Next action"],
    visualRules: [
      "Must reduce user anxiety.",
      "Progress should always be obvious.",
      "Include contextual help and executive microcopy.",
    ],
    landingPrimary: ["steps", "context", "help", "AI output", "next action"],
    appPrimary: ["intake", "classification", "recommendation", "submit"],
    dashboardEmphasis: ["guidance", "progress", "calm", "decision support"],
    prompt:
      "Use a Guided Intelligence Wizard composition. Create a step-by-step AI-assisted workflow with progress indicator, form sections, contextual help, document upload area, AI recommendation preview, and final output action. The experience should feel guided, intelligent, calm, and professional.",
  },
  "case-study-narrative": {
    key: "case-study-narrative",
    label: "Case Study Narrative",
    summary: "Credibility-first business case page with before/after framing, methodology, and measurable impact.",
    idealUse: "Before/after experience pages, consulting proof, enterprise transformation stories.",
    defaultThemes: ["editorial-graphite", "ivory-capital"],
    heroMode: "editorial",
    structure: ["Hero with scenario", "Problem card", "Before/after comparison", "Methodology", "Impact metrics", "CTA"],
    visualRules: [
      "Storytelling must stay clear and business-oriented.",
      "Use visual before/after comparison.",
      "Include realistic placeholder metrics.",
    ],
    landingPrimary: ["challenge", "approach", "solution", "impact", "CTA"],
    appPrimary: ["evidence", "metrics", "comparison", "next step"],
    dashboardEmphasis: ["credibility", "proof", "method", "impact"],
    prompt:
      "Use a Case Study Narrative composition. Create a premium case-study page that explains a business challenge, context, approach, solution, and measurable impact. Include before-and-after comparison cards, methodology blocks, executive metrics, and a refined CTA. The page should build credibility and make the company look experienced.",
  },
  "luxury-product-showcase": {
    key: "luxury-product-showcase",
    label: "Luxury Product Showcase",
    summary: "High-impact premium product launch page with cinematic hero, mockups, and refined conversion flow.",
    idealUse: "Public product MVPs, AI agents, apps, tools, microsites, visual demos.",
    defaultThemes: ["executive-obsidian", "royal-ai", "caribbean-executive"],
    heroMode: "showcase",
    structure: ["Immersive hero", "Product mockup", "Feature sections", "Interactive demo area", "Use cases", "Launch CTA"],
    visualRules: [
      "It should feel like a newly launched premium product.",
      "Use large mockups, elegant shadows, sophisticated backgrounds, and clean CTAs.",
      "Product visuals must carry real weight on the page.",
    ],
    landingPrimary: ["hero", "mockup", "features", "demo", "launch CTA"],
    appPrimary: ["preview", "use cases", "access", "pricing"],
    dashboardEmphasis: ["visual impact", "product desirability", "clarity", "premium launch energy"],
    prompt:
      "Use a Luxury Product Showcase composition. Create a visually premium product landing page with a cinematic hero, large product mockup, refined feature sections, interactive preview area, use cases, and conversion CTA. The design should feel like a high-end SaaS launch from a serious technology company.",
  },
};

export const archetypeEntries = Object.values(ARCHETYPES);
