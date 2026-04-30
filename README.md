# mvp-base-dashboard-starter

Premium reusable starter for building MVPs with a polished landing page, a modern executive dashboard, a 20-theme library, and 10 archetypes.

This starter now also follows an explicit premium generation discipline: every MVP should be driven by a clear `vertical + theme + archetype` choice, a visual asset plan, richer business-specific content, and a final QA pass before delivery.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Recharts
- Lucide icons
- App Router
- ESLint

## Included in this base

- Premium landing route
- Dedicated app dashboard route
- 20-theme library for different MVP visual identities
- 10 archetypes that change page composition, narrative rhythm, and app emphasis
- Vertical presets that reshape product framing, CTA tone, recommended provider recipes, and default archetype/theme pairings
- Config-driven site, product, and navigation foundations
- Reusable KPI, analytics, onboarding, pricing, integrations, team, and billing sections
- Auth placeholder routes and nested app/settings routes
- Adapter contracts plus mock server-shaped loaders for future real integrations
- Provider recipe guidance for Clerk, Supabase Auth, Auth.js, and Stripe
- Tabs, cards, badges, buttons, and table primitives via shadcn/ui
- Chart-ready analytics section with Recharts
- Mock data organized in `src/data/`
- Reusable page sections in `src/components/sections/`
- Typed dashboard, product surface, workspace models, and recipe metadata

## Routes

- `/` → marketing / landing surface
- `/app` → internal dashboard app shell
- `/app/onboarding` → onboarding workspace
- `/app/settings/profile` → profile/settings shell
- `/app/settings/team` → team management shell
- `/app/settings/billing` → billing shell
- `/sign-in` → auth placeholder
- `/sign-up` → auth placeholder
- `/forgot-password` → auth placeholder
- `/theme-preview` → theme + archetype + vertical preset preview surface

## Current structure

```text
src/
  app/
    (auth)/
      forgot-password/
        page.tsx
      sign-in/
        page.tsx
      sign-up/
        page.tsx
    (marketing)/
      page.tsx
    app/
      onboarding/
        page.tsx
      settings/
        billing/
          page.tsx
        profile/
          page.tsx
        team/
          page.tsx
      page.tsx
    theme-preview/
      page.tsx
  components/
    app/
      app-dashboard-page.tsx
    auth/
      auth-page-shell.tsx
    layout/
      app-shell.tsx
      settings-shell.tsx
    marketing/
      marketing-page.tsx
    navigation/
      app-header.tsx
      app-sidebar.tsx
    recipes/
      provider-recipes-section.tsx
    sections/
      activity-tab.tsx
      archetype-app-summary.tsx
      archetype-preview-section.tsx
      archetype-story-section.tsx
      education-hero-section.tsx
      hero-section.tsx
      highlights-section.tsx
      integrations-section.tsx
      onboarding-panel.tsx
      overview-tab.tsx
      pipeline-panel.tsx
      pipeline-tab.tsx
      pricing-section.tsx
      team-billing-panel.tsx
      value-props-section.tsx
      vertical-preset-section.tsx
      workflow-section.tsx
    settings/
      settings-form-card.tsx
    states/
      empty-state.tsx
      loading-state.tsx
      notice-banner.tsx
    ui/
  config/
    navigation.ts
    presets/
      active-preset.ts
    product.ts
    site.ts
  data/
    archetypes.ts
    theme-presets.ts
    verticals/
      vertical-presets.ts
    dashboard-data.ts
    page.tsx
  lib/
    adapters/
      contracts.ts
      mock-adapters.ts
    models/
      workspace.ts
    recipes/
      provider-recipes.ts
    server/
      loaders.ts
    theme.ts
    utils.ts
  types/
    dashboard.ts
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## v0.5 delivered

- route groups for marketing, app-ready surfaces, and auth placeholders
- persistent app shell and reusable settings shell
- centralized config for site/product/navigation
- first-class app routes for onboarding, billing, team, and profile settings
- reusable empty/loading/notice state primitives

## v0.6 delivered

- provider-agnostic adapter contracts
- mock adapters implementing billing, onboarding, team, workspace, and auth contracts
- server-shaped loaders that prepare the shell for real data sources later
- persistence-ready workspace/team/billing/onboarding models
- improved separation between visual demo surfaces and application foundation

## v0.7 delivered

- active vertical preset system via `src/config/presets/active-preset.ts`
- three reusable vertical presets: SaaS Starter, Ops Command, and AI Copilot
- stronger content/config wiring so product name, CTA tone, and app framing come from preset data
- provider recipe guidance surfaced inside the template for Clerk, Supabase Auth, Auth.js, and Stripe
- template sections that explain which preset is active and how to evolve it into a real stack

## v0.8 delivered

- 20-theme library with reusable token-driven visual identity
- 10 archetypes aligned to real commercial patterns: Executive Split Hero, Boardroom Dashboard, Bento Intelligence Grid, Editorial Authority Page, Concierge Conversion Funnel, Strategic Roadmap Canvas, Product Command Center, Guided Intelligence Wizard, Case Study Narrative, and Luxury Product Showcase
- vertical presets now map to default theme + archetype pairings
- theme preview route now exposes themes, archetypes, and vertical relationships
- marketing/app surfaces now begin to branch by archetype instead of only changing copy

## Premium build discipline

For every MVP created from this starter, define internally before coding:

```yaml
mvp_brief:
  product_type:
  target_audience:
  business_goal:
  conversion_goal:
  vertical:
  selected_theme:
  selected_archetype:
  visual_metaphor:
  primary_user_journey:
  hero_visual_strategy:
  image_asset_strategy:
  differentiation_notes:
```

And also define:

```yaml
asset_plan:
  hero_visual:
  section_visuals:
  background_system:
  icon_style:
  image_sources:
  fallback_strategy:
  accessibility_alt_text:
```

```yaml
content_brief:
  industry:
  buyer_persona:
  user_problem:
  desired_outcome:
  objections:
  proof_points:
  use_cases:
  call_to_action:
```

Minimum quality bar:
- do not ship a generic hero + three cards page
- do not use lorem ipsum
- do not leave gray placeholders
- include at least 4 visual treatments across the page
- make the selected archetype visibly change layout/composition, not just copy
- use business-specific language and realistic sample data

## How to customize fast

1. Change `activeVerticalPresetKey` in `src/config/presets/active-preset.ts`
2. Adjust `VERTICAL_PRESETS` in `src/data/verticals/vertical-presets.ts`
3. Swap the linked theme or archetype defaults per vertical
4. Extend `src/data/archetypes.ts` if you need new composition systems
5. Swap or expand provider recipes in `src/lib/recipes/provider-recipes.ts`
6. Replace mock adapters when you choose a real provider stack

## Future MVP generation rule

When requesting a new MVP:
- if Rafael specifies `vertical + theme + archetype`, use them directly
- if Rafael does not specify a theme and archetype, present the available lists first and ask him to confirm the pair he wants before generating the MVP

## Premium workflow references

- `docs/premium-mvp-checklist.md` — reusable build brief, asset plan, content brief, and QA gate for every MVP generated from this starter
- `../skills/mvp-premium-ops/SKILL.md` — official operating skill for Rafael's MVP workflow
- `../skills/mvp-premium-ops/references/reference-quality-library.md` — safe quality benchmarks for premium inspiration without copying
- `../skills/mvp-premium-ops/references/premium-templates.md` — reusable premium brief, asset strategy, and theme/archetype decision templates

Recommended operating model: use `mvp-premium-ops` as the default quality system whenever generating, recreating, or upgrading an MVP from this starter.

## Suggested next upgrades

- Add provider-specific implementation packs for Clerk, Supabase, Auth.js, or Stripe
- Replace mock adapters with real server-backed implementations
- Add settings forms, server actions, and persistence flows
- Add protected layouts/middleware once an auth provider is chosen
- Add deploy instructions for Vercel
- Add a small CMS/content config layer for copy customization

## Goal

This repo is meant to become the master template Rafael can reuse when asking for one-request MVP dashboard builds.
