import { Activity, BarChart3, Briefcase, ShieldCheck, Sparkles } from "lucide-react";

import type {
  ActivityItem,
  BillingItem,
  FeatureCallout,
  HighlightCard,
  IndustryVariant,
  IntegrationItem,
  KpiStat,
  OnboardingTask,
  OpportunityItem,
  PipelineStage,
  PricingTier,
  StatusItem,
  TeamMember,
  Testimonial,
  TrendPoint,
  WorkflowStep,
} from "@/types/dashboard";

export const heroBadges = ["Landing + dashboard", "Demo data included", "Reusable UI system"];

export const kpis: KpiStat[] = [
  { label: "Revenue tracked", value: "$128.4K", delta: "+18.2%", tone: "emerald" },
  { label: "Pipeline velocity", value: "2.4x", delta: "+11.7%", tone: "cyan" },
  { label: "Automation rate", value: "74%", delta: "+12.1%", tone: "violet" },
  { label: "Customer health", value: "92/100", delta: "+4.6%", tone: "amber" },
];

export const highlights: HighlightCard[] = [
  {
    title: "Ship a premium MVP faster",
    description:
      "A polished landing page, executive dashboard, and reusable visual language from day one.",
    icon: Sparkles,
  },
  {
    title: "Built for demos and iteration",
    description:
      "Structured mock data and modular sections make it easy to adapt the shell to new industries or product ideas.",
    icon: Activity,
  },
  {
    title: "Upgrade path is already clear",
    description:
      "The foundation is ready for typed APIs, auth, role-based dashboards, and production data sources later.",
    icon: ShieldCheck,
  },
];

export const featureCallouts: FeatureCallout[] = [
  {
    title: "Marketing + app parity",
    description: "Keep the public-facing story and internal product experience visually aligned from day one.",
    metric: "2 routes",
  },
  {
    title: "Composable sections",
    description: "Swap hero, analytics, pricing, onboarding, and operations blocks without rewriting the whole shell.",
    metric: "10+ blocks",
  },
  {
    title: "Investor-demo ready",
    description: "Use realistic KPIs, workflow surfaces, and executive framing that already feel premium in screenshots.",
    metric: "v0.4",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Pick a theme preset",
    description: "Start from SaaS, operations, or AI tooling and keep the rest of the shell intact.",
  },
  {
    step: "02",
    title: "Swap the data layer",
    description: "Replace mock arrays with API adapters, typed fetchers, or server actions when the product logic is ready.",
  },
  {
    step: "03",
    title: "Add product surfaces",
    description: "Use the app route to plug in auth, onboarding, billing, team management, and real dashboards.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "This starter immediately made our internal demo feel like a real company, not a hackathon prototype.",
    name: "Maya Chen",
    role: "Founder, Northstar Ops",
  },
  {
    quote: "We forked it into an AI workflow product and kept most of the shell. It saved us weeks of UI cleanup.",
    name: "Daniel Rivera",
    role: "Product lead, Promptlane",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter MVP",
    price: "$0",
    description: "Use the shell, adapt the story, and wire it to your own APIs.",
    features: ["Landing + dashboard", "Theme presets", "Mock data + sections"],
  },
  {
    name: "Growth Build",
    price: "$149",
    description: "A strong direction for founders productizing the shell into a real app experience.",
    features: ["Onboarding surfaces", "Billing and team settings", "Expanded app blocks"],
    highlighted: true,
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    description: "For heavier internal tools, role-based surfaces, and multi-team workflows.",
    features: ["Advanced roles", "Audit visibility", "Deeper operational dashboards"],
  },
];

export const integrations: IntegrationItem[] = [
  { name: "Stripe", category: "Billing" },
  { name: "Clerk", category: "Auth" },
  { name: "Resend", category: "Email" },
  { name: "Supabase", category: "Backend" },
  { name: "PostHog", category: "Analytics" },
  { name: "Slack", category: "Notifications" },
];

export const trendData: TrendPoint[] = [
  { month: "Jan", revenue: 28, efficiency: 18 },
  { month: "Feb", revenue: 34, efficiency: 22 },
  { month: "Mar", revenue: 39, efficiency: 28 },
  { month: "Apr", revenue: 46, efficiency: 33 },
  { month: "May", revenue: 55, efficiency: 38 },
  { month: "Jun", revenue: 67, efficiency: 44 },
  { month: "Jul", revenue: 72, efficiency: 49 },
  { month: "Aug", revenue: 81, efficiency: 57 },
];

export const pipeline: PipelineStage[] = [
  { name: "Inbound", value: 148, width: "92%", colors: "from-cyan-400 to-sky-500" },
  { name: "Qualified", value: 92, width: "68%", colors: "from-violet-400 to-fuchsia-500" },
  { name: "Proposal", value: 37, width: "44%", colors: "from-amber-400 to-orange-500" },
  { name: "Won", value: 18, width: "26%", colors: "from-emerald-400 to-teal-500" },
];

export const activity: ActivityItem[] = [
  { title: "Enterprise plan upgraded", source: "Acme Health", time: "12 min ago", status: "Expansion" },
  { title: "Forecast anomaly detected", source: "Ops monitor", time: "28 min ago", status: "Review" },
  { title: "Regional dashboard launched", source: "Growth team", time: "1h ago", status: "Live" },
  { title: "Board snapshot exported", source: "Executive report", time: "2h ago", status: "Delivered" },
];

export const opportunities: OpportunityItem[] = [
  { name: "Acme Health", stage: "Proposal", owner: "Revenue", arr: "$24K" },
  { name: "Northstar Ops", stage: "Qualified", owner: "Founders", arr: "$18K" },
  { name: "Beacon Finance", stage: "Discovery", owner: "Growth", arr: "$12K" },
  { name: "Pioneer Labs", stage: "Negotiation", owner: "Sales", arr: "$31K" },
];

export const statuses: StatusItem[] = [
  { label: "API health", value: "Healthy" },
  { label: "Automations", value: "Running" },
  { label: "Data sync", value: "On schedule" },
  { label: "Alerts", value: "2 flagged" },
];

export const onboardingTasks: OnboardingTask[] = [
  { title: "Connect billing provider", owner: "Ops", eta: "Today", status: "Ready" },
  { title: "Invite leadership team", owner: "Admin", eta: "1 day", status: "In progress" },
  { title: "Map KPI definitions", owner: "Finance", eta: "2 days", status: "Ready" },
  { title: "Enable incident alerts", owner: "Engineering", eta: "Blocked", status: "Blocked" },
];

export const teamMembers: TeamMember[] = [
  { name: "Maya Chen", role: "Admin", access: "Full workspace" },
  { name: "Daniel Rivera", role: "Ops lead", access: "Reports + automations" },
  { name: "Priya Singh", role: "Finance", access: "Billing + exports" },
];

export const billingItems: BillingItem[] = [
  { plan: "Growth Build", renewal: "May 24", amount: "$149", status: "Active" },
  { plan: "Usage overage", renewal: "Current cycle", amount: "$36", status: "Monitoring" },
];

export const industryVariants: IndustryVariant[] = [
  {
    name: "SaaS",
    focus: "MRR, product adoption, retention",
    icon: BarChart3,
  },
  {
    name: "Operations",
    focus: "throughput, SLAs, incident visibility",
    icon: Briefcase,
  },
  {
    name: "AI tools",
    focus: "usage, cost control, automation impact",
    icon: Activity,
  },
];
