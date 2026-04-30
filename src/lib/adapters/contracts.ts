import type { BillingModel, OnboardingModel, TeamMemberModel, WorkspaceModel } from "@/lib/models/workspace";

export interface AuthAdapter {
  provider: string;
  signInPath: string;
  signUpPath: string;
  forgotPasswordPath: string;
}

export interface BillingAdapter {
  provider: string;
  getBillingSnapshot(): Promise<BillingModel>;
}

export interface TeamAdapter {
  provider: string;
  getMembers(): Promise<TeamMemberModel[]>;
}

export interface OnboardingAdapter {
  provider: string;
  getTasks(): Promise<OnboardingModel[]>;
}

export interface WorkspaceAdapter {
  provider: string;
  getWorkspace(): Promise<WorkspaceModel>;
}
