import type { LucideIcon } from "lucide-react";

export type Tone = "emerald" | "cyan" | "violet" | "amber";

export interface KpiStat {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
}

export interface HighlightCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrendPoint {
  month: string;
  revenue: number;
  efficiency: number;
}

export interface PipelineStage {
  name: string;
  value: number;
  width: string;
  colors: string;
}

export interface ActivityItem {
  title: string;
  source: string;
  time: string;
  status: string;
}

export interface OpportunityItem {
  name: string;
  stage: string;
  owner: string;
  arr: string;
}

export interface StatusItem {
  label: string;
  value: string;
}

export interface IndustryVariant {
  name: string;
  focus: string;
  icon: LucideIcon;
}

export interface FeatureCallout {
  title: string;
  description: string;
  metric: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface IntegrationItem {
  name: string;
  category: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface OnboardingTask {
  title: string;
  owner: string;
  eta: string;
  status: "Ready" | "In progress" | "Blocked" | "Complete";
}

export interface TeamMember {
  name: string;
  role: string;
  access: string;
}

export interface BillingItem {
  plan: string;
  renewal: string;
  amount: string;
  status: string;
}
