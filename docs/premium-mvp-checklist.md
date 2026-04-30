# Premium MVP Checklist

Use this checklist every time a new MVP is generated or an older MVP is recreated from the starter.

## 1. Build brief

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

## 2. Asset plan

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

Target at least 4 visual treatments:
- hero product mockup
- realistic photo/image
- abstract SVG illustration
- workflow diagram
- icon system
- pattern background
- dashboard preview
- before/after comparison
- persona cards or avatars
- data visualization
- map/location-inspired visual
- timeline/roadmap
- floating UI cards
- branded geometric shapes
- testimonial/proof cards

## 3. Content brief

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

## 4. Non-negotiables

- Do not ship a generic hero + three cards page.
- Do not use lorem ipsum.
- Do not leave gray placeholders or "image goes here" blocks.
- Do not rely on copy-only differentiation.
- Make the selected archetype visible in layout, section rhythm, and CTA structure.
- Use realistic business language and illustrative sample data.

## 5. Required section coverage

Aim for at least 6 of these on the marketing side:
- Hero with specific value proposition
- Problem framing
- Product/service explanation
- Visual workflow
- Use cases
- Product preview/dashboard
- Feature cards
- Credibility/proof indicators
- Implementation/process steps
- Pricing or engagement model
- FAQ
- Final CTA
- Footer

## 6. App/demo realism

Include realistic:
- navigation labels
- sample records
- status states
- filters
- action buttons
- empty states
- detail panels
- alerts or notices
- metrics

## 7. Final QA gate

```yaml
qa_review:
  theme_selected:
  archetype_selected:
  visual_assets_present:
  image_or_visual_count:
  no_gray_placeholders:
  no_lorem_ipsum:
  responsive_layout:
  accessible_contrast:
  specific_business_copy:
  clear_cta:
  differentiated_from_default_template:
```

## 8. Delivery rule

- Validate with `npm run lint` and `npm run build`.
- When sharing Vercel URLs, deliver the stable alias/domain instead of the raw deployment URL.
