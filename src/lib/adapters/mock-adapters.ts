import { billingItems, onboardingTasks, teamMembers } from "@/data/dashboard-data";
import type {
  AuthAdapter,
  BillingAdapter,
  OnboardingAdapter,
  TeamAdapter,
  WorkspaceAdapter,
} from "@/lib/adapters/contracts";
import type { BillingModel, OnboardingModel, TeamMemberModel, WorkspaceModel } from "@/lib/models/workspace";

export const mockAuthAdapter: AuthAdapter = {
  provider: "mock",
  signInPath: "/sign-in",
  signUpPath: "/sign-up",
  forgotPasswordPath: "/forgot-password",
};

export const mockBillingAdapter: BillingAdapter = {
  provider: "mock",
  async getBillingSnapshot(): Promise<BillingModel> {
    return {
      currentPlan: billingItems[0]?.plan ?? "Growth Build",
      renewalDate: billingItems[0]?.renewal ?? "May 24",
      monthlySpend: billingItems[0]?.amount ?? "$149",
      status: billingItems[0]?.status ?? "Active",
    };
  },
};

export const mockTeamAdapter: TeamAdapter = {
  provider: "mock",
  async getMembers(): Promise<TeamMemberModel[]> {
    return teamMembers.map((member, index) => ({
      id: `member-${index + 1}`,
      name: member.name,
      role: member.role,
      access: member.access,
    }));
  },
};

export const mockOnboardingAdapter: OnboardingAdapter = {
  provider: "mock",
  async getTasks(): Promise<OnboardingModel[]> {
    return onboardingTasks.map((task, index) => ({
      id: `task-${index + 1}`,
      title: task.title,
      owner: task.owner,
      eta: task.eta,
      status: task.status,
    }));
  },
};

export const mockWorkspaceAdapter: WorkspaceAdapter = {
  provider: "mock",
  async getWorkspace(): Promise<WorkspaceModel> {
    return {
      id: "workspace-1",
      name: "Northstar Workspace",
      plan: "Growth Build",
      environment: "Production mirror",
    };
  },
};
