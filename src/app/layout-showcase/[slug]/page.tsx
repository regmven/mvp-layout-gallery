import Link from "next/link";
import { notFound } from "next/navigation";

import { LAYOUT_PRESETS } from "@/data/layouts";

const imagePool = [
  "/brand/condado-unit-a.png",
  "/brand/condado-unit-b.png",
  "/brand/condado-floorplan.jpg",
];

function pickImage(index: number) {
  return imagePool[index % imagePool.length];
}

function MediaCard(image: string, title: string, copy: string, tall = false) {
  return `
    <div class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div class="${tall ? "h-80" : "h-56"} w-full bg-cover bg-center" style="background-image:url('${image}')"></div>
      <div class="p-5">
        <p class="text-xl font-semibold text-slate-950">${title}</p>
        <p class="mt-3 text-sm leading-7 text-slate-600">${copy}</p>
      </div>
    </div>
  `;
}

function TextBlock(title: string, copy: string, eyebrow?: string, extraClass = "") {
  return `
    <div class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm ${extraClass}">
      ${eyebrow ? `<p class="text-xs uppercase tracking-[0.24em] text-cyan-700">${eyebrow}</p>` : ""}
      <h3 class="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">${title}</h3>
      <p class="mt-4 text-sm leading-7 text-slate-600">${copy}</p>
    </div>
  `;
}

function layoutMarkup(slug: string) {
  const hero = `
    <section class="rounded-[40px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FBFF_100%)] p-8 shadow-sm sm:p-10">
      <div class="flex flex-wrap gap-3 text-sm">
        <span class="rounded-full bg-cyan-100 px-3 py-1 text-cyan-900">Condado reference brand</span>
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Modern living</span>
        <span class="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Long-term rental</span>
      </div>
      <h1 class="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">${slug.replaceAll("-", " ")} layout applied to a modern Caribbean property brand.</h1>
      <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">This page shows how one structural system changes the feel of the same MVP. The goal is to compare geometry, density, pacing, and visual emphasis.</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="/layout-showcase" class="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white">Back to index</a>
        <a href="/" class="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900">Open starter route</a>
      </div>
    </section>
  `;

  const commonText = "Aquí el punto no es el copy final sino el comportamiento del layout: cuánto aire deja, cuánto protagonismo da a imagen, y cómo prioriza lifestyle, inventario o conversión.";

  switch (slug) {
    case "editorial-split":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[1fr_1fr]">${TextBlock("Big headline + calm support", commonText, "Geometry")} ${MediaCard(pickImage(0), "Split visual", "Balanced text-media relationship with premium calm.", true)}</section><section class="grid gap-6 md:grid-cols-3">${TextBlock("Strength", "Muy claro y versátil.")}${TextBlock("Risk", "Puede sentirse serio de más si no tiene energía visual.")}${TextBlock("Best fit", "Servicios premium o property pages sobrias.")}</section>`;
    case "gallery-lead":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">${MediaCard(pickImage(1), "Hero gallery block", "La imagen lidera y el texto acompaña.", true)}<div class="space-y-6">${TextBlock("Why it works for Condado", "Hace que la propiedad se sienta más joven, más viva y menos corporativa.", "Recommended")} ${MediaCard(pickImage(2), "Support frame", "Floor plan and details become secondary supporting proof.")}</div></section><section class="grid gap-6 md:grid-cols-3">${MediaCard(pickImage(0), "Amenity", "Beach + city lifestyle.")}${MediaCard(pickImage(1), "Residence", "Modern layouts.")}${MediaCard(pickImage(2), "Plan", "Clear leasing support.")}</section>`;
    case "magazine-luxury":
      return `${hero}<section class="space-y-6">${TextBlock("Magazine rhythm", "Bloques editoriales grandes, captions cortos y mucha respiración visual.", "Strong pick")}<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">${TextBlock("Luxury tone", "Se siente más cercano a una marca editorial o residencia boutique que a una landing tradicional.")}${MediaCard(pickImage(0), "Editorial visual lead", "A stronger visual stage creates a more contemporary premium feel.", true)}</div><div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">${MediaCard(pickImage(1), "Secondary scene", "Alternating media keeps movement without clutter.")} ${TextBlock("Condado fit", "Muy buena para vender deseo, marca y percepción de valor.")}</div></section>`;
    case "full-bleed-story":
      return `${hero}<section class="space-y-6">${MediaCard(pickImage(0), "Full-width opening", "Cinematic storytelling through wide media bands.", true)}${TextBlock("Story advantage", "Ideal para una marca que vive de aspiración visual y entorno.")} ${MediaCard(pickImage(1), "Second wide band", "Each wide section acts like a chapter.", true)}</section>`;
    case "bento-grid":
      return `${hero}<section class="grid auto-rows-fr gap-6 md:grid-cols-3">${MediaCard(pickImage(0), "Large block", "Hero capability or lifestyle card.", true)}${TextBlock("Compact block", commonText)}${TextBlock("Feature block", "Useful for products with many capabilities.")}${MediaCard(pickImage(1), "Visual block", "Fast-scanning modular layout.")}${TextBlock("Risk for Condado", "Puede sentirse demasiado startup si se abusa.")} ${MediaCard(pickImage(2), "Support block", "Good for mixed content.")}</section>`;
    case "concierge-funnel":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">${TextBlock("High-conversion flow", "Muchos argumentos comerciales, proceso, prueba y CTA.", "Conversion")}${MediaCard(pickImage(0), "Offer frame", "Optimized more for lead capture than brand atmosphere.", true)}</section><section class="grid gap-6 md:grid-cols-3">${TextBlock("Pain points", "Short-term copy block.")}${TextBlock("Offer", "What you get.")}${TextBlock("CTA", "Book or contact now.")}</section>`;
    case "dashboard-led":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">${TextBlock("UI first", "Product previews, metrics and interactive surfaces dominate.", "Product")}${TextBlock("Condado warning", "Este fue parte del problema: hace ver todo más viejo si el producto real no es software.")}</section><section class="grid gap-6 md:grid-cols-4">${TextBlock("KPI", "Occupancy")}${TextBlock("KPI", "Inquiries")}${TextBlock("KPI", "Visits")}${TextBlock("KPI", "Conversions")}</section>`;
    case "product-showcase":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[1fr_1fr]">${MediaCard(pickImage(1), "Launch visual", "Best when the thing itself is a sleek product object.", true)}${TextBlock("Launch-style sections", "Good for apps and tools. Less natural for residence brands unless heavily transformed.")}</section>`;
    case "case-study-flow":
      return `${hero}<section class="grid gap-6 lg:grid-cols-3">${TextBlock("Before", "Old, generic, template-heavy feel.", "Before/after")}${TextBlock("Approach", "Shift to visual-first, editorial, hospitality-led geometry.")}${TextBlock("After", "More aspirational, cleaner, more modern.")}</section><section class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">${TextBlock("When useful", "Excelente para explicar transformations or redesign logic.")}${MediaCard(pickImage(0), "Proof panel", "Works when credibility is the goal.")}</section>`;
    case "catalog-stack":
      return `${hero}<section class="space-y-6">${TextBlock("Inventory-first", "Useful when units or options are the main behavior.", "Browsing")}<div class="grid gap-6 md:grid-cols-2">${MediaCard(pickImage(0), "2 Bedroom", "Primary listing card.")}${MediaCard(pickImage(1), "3 Bedroom", "Secondary listing card.")}</div><div class="grid gap-6 md:grid-cols-2">${MediaCard(pickImage(2), "Floor plan", "Details and dimensions.")}${TextBlock("Risk", "Can feel too transactional if the brand needs desire first.")}</div></section>`;
    case "hero-stack":
      return `${hero}<section class="space-y-6">${MediaCard(pickImage(0), "Hero block one", "Strong opener.", true)}${MediaCard(pickImage(1), "Hero block two", "Second message layer.", true)}${MediaCard(pickImage(2), "Hero block three", "Third proposition band.", true)}</section>`;
    case "immersive-cards":
      return `${hero}<section class="grid gap-6 md:grid-cols-2">${MediaCard(pickImage(0), "Card one", "Rounded premium card.", true)}${MediaCard(pickImage(1), "Card two", "Soft immersive layout.", true)}${TextBlock("Mood", "Young, premium, friendlier than strict editorial.")}${TextBlock("Use", "Hospitality, travel, experience pages.")}</section>`;
    case "asymmetric-mosaic":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><div class="grid gap-6">${MediaCard(pickImage(0), "Wide tile", "Asymmetry adds energy.", true)}${TextBlock("Mosaic behavior", "Feels more digital-native and less formal.")}</div><div class="grid gap-6">${MediaCard(pickImage(1), "Tall tile", "Unexpected proportions.", true)}${MediaCard(pickImage(2), "Small tile", "Support image.")}</div></section>`;
    case "framed-showcase":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">${TextBlock("Contained premium modules", "Everything feels framed and intentional.", "Framing")}${MediaCard(pickImage(1), "Primary framed asset", "Good for premium composure.", true)}</section><section class="grid gap-6 md:grid-cols-3">${TextBlock("Strength", "Order")}${TextBlock("Risk", "Can feel boxed-in if overused.")}${TextBlock("Fit", "Premium launches and structured brands.")}</section>`;
    case "story-panels":
      return `${hero}<section class="space-y-6">${TextBlock("Panel 01", "Arrival and first impression.", "Scene")}${MediaCard(pickImage(0), "Panel 02", "Residence and light.", true)}${TextBlock("Panel 03", "Neighborhood and daily rhythm.")}${MediaCard(pickImage(1), "Panel 04", "Layouts and practical value.", true)}</section>`;
    case "minimal-rows":
      return `${hero}<section class="space-y-6">${TextBlock("Minimal row one", "Short copy, lots of restraint.", "Minimalism")}${TextBlock("Minimal row two", "Useful when the brand already carries authority.")}${TextBlock("Minimal row three", "For Condado it may under-sell the lifestyle unless photography is elite.")}</section>`;
    case "split-narrative":
      return `${hero}<section class="space-y-6"><div class="grid gap-6 lg:grid-cols-[1fr_1fr]">${TextBlock("Narrative block", "Alternating split layout keeps clarity and movement.", "Balanced")} ${MediaCard(pickImage(0), "Media block", "Easy to understand and adapt.", true)}</div><div class="grid gap-6 lg:grid-cols-[1fr_1fr]">${MediaCard(pickImage(1), "Media block", "Second movement.", true)} ${TextBlock("Why useful", "Muy flexible para casi cualquier vertical.")}</div></section>`;
    case "feature-ribbon":
      return `${hero}<section class="space-y-6"><div class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"><div class="grid gap-4 md:grid-cols-4"><div class="rounded-[22px] bg-slate-50 p-4">Beach access</div><div class="rounded-[22px] bg-slate-50 p-4">Modern units</div><div class="rounded-[22px] bg-slate-50 p-4">Move-in ready</div><div class="rounded-[22px] bg-slate-50 p-4">Condado location</div></div></div>${TextBlock("Benefit-heavy geometry", "Ideal para marcas que necesitan comunicar muchas amenidades rápido.")}</section>`;
    case "map-lifestyle":
      return `${hero}<section class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">${TextBlock("Neighborhood as hero", "La ubicación y lo que la rodea se vuelven parte central del diseño.", "Location-led")} ${MediaCard(pickImage(2), "Map / context stage", "Ideal para properties where place sells the experience.", true)}</section><section class="grid gap-6 md:grid-cols-3">${TextBlock("Beach", "Walkability and coast.")}${TextBlock("Food + culture", "Nearby energy.")}${TextBlock("Daily convenience", "Why living here works.")}</section>`;
    case "residence-journal":
      return `${hero}<section class="space-y-6">${TextBlock("Journal tone", "Una estructura serena, aspiracional y muy de marca residencial boutique.", "Strong pick")}<div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">${MediaCard(pickImage(0), "Curated residence story", "Feels young, premium, and contemporary without trying too hard.", true)}${TextBlock("Why I like it for Condado", "Tiene más alma de property brand moderna que de landing genérica. Deja respirar, deja mostrar, y hace que el sitio se sienta menos viejo.")}</div><div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">${TextBlock("Behavior", "Shorter copy, stronger imagery, more curated section pacing.")}${MediaCard(pickImage(1), "Secondary journal frame", "Works well with architecture, interiors, and neighborhood moments.")}</div></section>`;
    default:
      return hero;
  }
}

export default async function LayoutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const layout = LAYOUT_PRESETS.find((item) => item.slug === slug);

  if (!layout) notFound();

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">{layout.category} layout</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-950">{layout.label}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{layout.summary} Best for: {layout.bestFor}</p>
          </div>
          <Link href="/layout-showcase" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
            All layouts
          </Link>
        </div>

        <div dangerouslySetInnerHTML={{ __html: layoutMarkup(slug) }} />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return LAYOUT_PRESETS.map((layout) => ({ slug: layout.slug }));
}
