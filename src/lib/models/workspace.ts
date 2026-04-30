export interface WorkspaceModel {
  id: string;
  name: string;
  plan: string;
  environment: string;
}

export interface TeamMemberModel {
  id: string;
  name: string;
  role: string;
  access: string;
}

export interface BillingModel {
  currentPlan: string;
  renewalDate: string;
  monthlySpend: string;
  status: string;
}

export interface OnboardingModel {
  id: string;
  title: string;
  owner: string;
  eta: string;
  status: "Ready" | "In progress" | "Blocked" | "Complete";
}
