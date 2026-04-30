export type LayoutKey =
  | "editorial-split"
  | "gallery-lead"
  | "magazine-luxury"
  | "full-bleed-story"
  | "bento-grid"
  | "concierge-funnel"
  | "dashboard-led"
  | "product-showcase"
  | "case-study-flow"
  | "catalog-stack"
  | "hero-stack"
  | "immersive-cards"
  | "asymmetric-mosaic"
  | "framed-showcase"
  | "story-panels"
  | "minimal-rows"
  | "split-narrative"
  | "feature-ribbon"
  | "map-lifestyle"
  | "residence-journal";

export interface LayoutPreset {
  key: LayoutKey;
  slug: string;
  label: string;
  category: "editorial" | "commercial" | "product" | "hospitality";
  summary: string;
  bestFor: string;
  recommendation?: "strong" | "good";
}

export const LAYOUT_PRESETS: LayoutPreset[] = [
  {
    key: "editorial-split",
    slug: "editorial-split",
    label: "Editorial Split",
    category: "editorial",
    summary: "Large headline with clean two-column hero and calm supporting sections.",
    bestFor: "Consulting, premium services, real estate brands that need clarity.",
    recommendation: "good",
  },
  {
    key: "gallery-lead",
    slug: "gallery-lead",
    label: "Gallery Lead",
    category: "hospitality",
    summary: "Image-first landing with large visual surfaces and lighter text density.",
    bestFor: "Real estate, hospitality, travel, lifestyle-led brands.",
    recommendation: "strong",
  },
  {
    key: "magazine-luxury",
    slug: "magazine-luxury",
    label: "Magazine Luxury",
    category: "hospitality",
    summary: "Editorial rhythm with premium typography and luxurious whitespace.",
    bestFor: "Boutique properties, branded residences, premium experiences.",
    recommendation: "strong",
  },
  {
    key: "full-bleed-story",
    slug: "full-bleed-story",
    label: "Full-Bleed Story",
    category: "editorial",
    summary: "Wide cinematic bands with large media moments and short captions.",
    bestFor: "Destination brands and story-led launches.",
    recommendation: "good",
  },
  {
    key: "bento-grid",
    slug: "bento-grid",
    label: "Bento Grid",
    category: "product",
    summary: "Asymmetric modular composition with many compact capability panels.",
    bestFor: "AI tools, startups, feature-rich products.",
  },
  {
    key: "concierge-funnel",
    slug: "concierge-funnel",
    label: "Concierge Funnel",
    category: "commercial",
    summary: "Conversion-heavy flow with repeated CTAs and persuasive proof.",
    bestFor: "Lead-gen, bookings, consultative offers.",
  },
  {
    key: "dashboard-led",
    slug: "dashboard-led",
    label: "Dashboard Led",
    category: "product",
    summary: "UI preview and KPIs dominate the page geometry.",
    bestFor: "SaaS, internal tools, analytics products.",
  },
  {
    key: "product-showcase",
    slug: "product-showcase",
    label: "Product Showcase",
    category: "product",
    summary: "Launch-style page with device mockups and crisp feature bands.",
    bestFor: "Apps, consumer tech, polished software launches.",
  },
  {
    key: "case-study-flow",
    slug: "case-study-flow",
    label: "Case Study Flow",
    category: "editorial",
    summary: "Narrative sequence built around before/after, proof, and outcome.",
    bestFor: "Transformations, redesign stories, service proof.",
  },
  {
    key: "catalog-stack",
    slug: "catalog-stack",
    label: "Catalog Stack",
    category: "commercial",
    summary: "Stacked inventory and collection sections for browsing options.",
    bestFor: "Listings, retail, residential inventory.",
  },
  {
    key: "hero-stack",
    slug: "hero-stack",
    label: "Hero Stack",
    category: "commercial",
    summary: "Multiple bold hero blocks stacked for fast scanning.",
    bestFor: "Campaign pages and multi-offer products.",
  },
  {
    key: "immersive-cards",
    slug: "immersive-cards",
    label: "Immersive Cards",
    category: "hospitality",
    summary: "Large rounded cards with visual depth and softer transitions.",
    bestFor: "Lifestyle, premium hospitality, travel concepts.",
  },
  {
    key: "asymmetric-mosaic",
    slug: "asymmetric-mosaic",
    label: "Asymmetric Mosaic",
    category: "hospitality",
    summary: "Uneven image tiles and narrative blocks with strong modern energy.",
    bestFor: "Younger brands that need more motion and surprise.",
  },
  {
    key: "framed-showcase",
    slug: "framed-showcase",
    label: "Framed Showcase",
    category: "editorial",
    summary: "Contained showcase modules with strong borders and premium framing.",
    bestFor: "Luxury launches, productized experiences.",
  },
  {
    key: "story-panels",
    slug: "story-panels",
    label: "Story Panels",
    category: "editorial",
    summary: "Sequential panels that move the visitor through short scenes.",
    bestFor: "Brands with distinct story beats and emotional pacing.",
  },
  {
    key: "minimal-rows",
    slug: "minimal-rows",
    label: "Minimal Rows",
    category: "editorial",
    summary: "Minimal stacked sections, restrained visuals, typography-first pacing.",
    bestFor: "High-trust brands with strong copy and simple offers.",
  },
  {
    key: "split-narrative",
    slug: "split-narrative",
    label: "Split Narrative",
    category: "editorial",
    summary: "Alternating text/media split blocks that feel contemporary and readable.",
    bestFor: "Services, property pages, clear explanatory journeys.",
  },
  {
    key: "feature-ribbon",
    slug: "feature-ribbon",
    label: "Feature Ribbon",
    category: "commercial",
    summary: "Horizontal bands emphasizing features, amenities, and proof points.",
    bestFor: "Amenity-rich offerings and benefit-heavy positioning.",
  },
  {
    key: "map-lifestyle",
    slug: "map-lifestyle",
    label: "Map Lifestyle",
    category: "hospitality",
    summary: "Location and surrounding lifestyle become core visual anchors.",
    bestFor: "Neighborhood-led property and destination brands.",
    recommendation: "good",
  },
  {
    key: "residence-journal",
    slug: "residence-journal",
    label: "Residence Journal",
    category: "hospitality",
    summary: "A journal-like property presentation with calm storytelling and curated imagery.",
    bestFor: "Boutique apartments, branded residences, architecture-led properties.",
    recommendation: "strong",
  },
];

export const RECOMMENDED_LAYOUT_KEYS: LayoutKey[] = ["gallery-lead", "magazine-luxury", "residence-journal"];
