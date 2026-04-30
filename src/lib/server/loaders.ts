import {
  mockBillingAdapter,
  mockOnboardingAdapter,
  mockTeamAdapter,
  mockWorkspaceAdapter,
} from "@/lib/adapters/mock-adapters";

export async function loadWorkspaceContext() {
  const [workspace, billing, members, onboarding] = await Promise.all([
    mockWorkspaceAdapter.getWorkspace(),
    mockBillingAdapter.getBillingSnapshot(),
    mockTeamAdapter.getMembers(),
    mockOnboardingAdapter.getTasks(),
  ]);

  return {
    workspace,
    billing,
    members,
    onboarding,
  };
}
