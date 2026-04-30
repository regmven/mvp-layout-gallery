import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LAYOUT_PRESETS } from "@/data/layouts";

const imagePool = [
  "/brand/condado-unit-a.png",
  "/brand/condado-unit-b.png",
  "/brand/condado-floorplan.jpg",
];

function img(index: number) {
  return imagePool[index % imagePool.length];
}

function Shell({ children, eyebrow, title, summary }: { children: React.ReactNode; eyebrow: string; title: string; summary: string }) {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-700">{eyebrow}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">{summary}</p>
          </div>
          <Link href="/layout-showcase" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">
            All layouts
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}

function Photo({ src, alt, height = 320, rounded = "rounded-[32px]" }: { src: string; alt: string; height?: number; rounded?: string }) {
  return (
    <div className={`relative overflow-hidden border border-slate-200 bg-slate-100 shadow-sm ${rounded}`} style={{ height }}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function TextCard({ title, copy, eyebrow }: { title: string; copy: string; eyebrow?: string }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.24em] text-cyan-700">{eyebrow}</p> : null}
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{copy}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{value}</p>
    </div>
  );
}

function LayoutView({ slug }: { slug: string }) {
  switch (slug) {
    case "editorial-split":
      return (
        <Shell eyebrow="editorial layout" title="Editorial Split" summary="A clean two-column system with strong typography on one side and a supporting visual on the other.">
          <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6 rounded-[36px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)] p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Condado reference application</p>
              <h2 className="text-5xl font-semibold tracking-[-0.05em] text-slate-950">Big type, calm spacing, clear hierarchy.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-600">This layout feels organized and premium, but still slightly formal. Good for trust-heavy brands.</p>
            </div>
            <Photo src={img(0)} alt="Editorial split image" height={560} />
          </section>
          <section className="mt-6 grid gap-6 md:grid-cols-3">
            <TextCard title="Strength" copy="Very readable and versatile." />
            <TextCard title="Risk" copy="Can feel conservative if the visuals are weak." />
            <TextCard title="Best fit" copy="Consulting, services, and structured property pages." />
          </section>
        </Shell>
      );
    case "gallery-lead":
      return (
        <Shell eyebrow="hospitality layout" title="Gallery Lead" summary="The page opens with image dominance and uses text as support rather than the other way around.">
          <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Photo src={img(1)} alt="Gallery lead main image" height={620} rounded="rounded-[40px]" />
            <div className="flex flex-col gap-6">
              <TextCard eyebrow="recommended" title="Image-first geometry" copy="This immediately feels younger and more lifestyle-driven. For Condado, that matters." />
              <Photo src={img(2)} alt="Floor plan support" height={260} />
              <div className="grid gap-4 sm:grid-cols-2">
                <MiniStat label="Mood" value="Fresh" />
                <MiniStat label="Density" value="Low" />
              </div>
            </div>
          </section>
          <section className="mt-6 grid gap-6 md:grid-cols-3">
            <Photo src={img(0)} alt="Amenity image" height={250} rounded="rounded-[28px]" />
            <Photo src={img(1)} alt="Residence image" height={250} rounded="rounded-[28px]" />
            <Photo src={img(2)} alt="Plan image" height={250} rounded="rounded-[28px]" />
          </section>
        </Shell>
      );
    case "magazine-luxury":
      return (
        <Shell eyebrow="editorial luxury" title="Magazine Luxury" summary="A slower, more luxurious editorial rhythm with large image chapters and short refined text blocks.">
          <section className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <TextCard eyebrow="strong pick" title="A premium editorial pace" copy="Instead of sounding like a landing page, this feels more like a branded residence feature." />
              <Photo src={img(0)} alt="Magazine hero image" height={620} rounded="rounded-[44px]" />
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Photo src={img(1)} alt="Secondary editorial image" height={420} />
              <div className="space-y-6">
                <TextCard title="Why it works" copy="Good for aspiration, better for perceived brand value, and less likely to feel like an old template." />
                <TextCard title="Tone" copy="Shorter copy, stronger images, more confidence." />
              </div>
            </div>
          </section>
        </Shell>
      );
    case "full-bleed-story":
      return (
        <Shell eyebrow="cinematic layout" title="Full-Bleed Story" summary="Big horizontal media chapters with short supporting text between them.">
          <section className="space-y-8">
            <Photo src={img(0)} alt="Wide hero band" height={700} rounded="rounded-[20px]" />
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">Wide scenes become the narrative engine.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Great when the brand needs emotional pull and environment more than detailed explanation.</p>
            </div>
            <Photo src={img(1)} alt="Second wide band" height={640} rounded="rounded-[20px]" />
          </section>
        </Shell>
      );
    case "bento-grid":
      return (
        <Shell eyebrow="modular layout" title="Bento Grid" summary="Asymmetric modular blocks that help feature-rich products scan quickly.">
          <section className="grid auto-rows-[220px] gap-6 md:grid-cols-3">
            <div className="md:col-span-2 md:row-span-2"><Photo src={img(0)} alt="Large bento block" height={466} /></div>
            <TextCard title="Fast scan" copy="Good for many capabilities." />
            <TextCard title="Risk" copy="Can drift startup-ish fast." />
            <TextCard title="For Condado" copy="Not ideal as the primary geometry." />
            <Photo src={img(1)} alt="Bento support image" height={220} />
            <Photo src={img(2)} alt="Bento support image" height={220} />
          </section>
        </Shell>
      );
    case "concierge-funnel":
      return (
        <Shell eyebrow="conversion layout" title="Concierge Funnel" summary="A sales-led sequence designed to move the visitor quickly toward inquiry or booking.">
          <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4 rounded-[36px] border border-amber-200 bg-amber-50/60 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Offer-first</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">Ideal when conversion beats brand atmosphere.</h2>
              <div className="space-y-3 pt-2">
                <div className="rounded-[22px] bg-white p-4">01 Pain point</div>
                <div className="rounded-[22px] bg-white p-4">02 Offer promise</div>
                <div className="rounded-[22px] bg-white p-4">03 Process</div>
                <div className="rounded-[22px] bg-slate-950 p-4 text-white">04 CTA</div>
              </div>
            </div>
            <Photo src={img(0)} alt="Concierge funnel image" height={560} />
          </section>
        </Shell>
      );
    case "dashboard-led":
      return (
        <Shell eyebrow="product-heavy layout" title="Dashboard Led" summary="A UI-dominant geometry where metrics and system previews carry the page.">
          <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="space-y-3">
                <div className="rounded-[18px] bg-white p-3">Overview</div>
                <div className="rounded-[18px] bg-white p-3">Pipeline</div>
                <div className="rounded-[18px] bg-white p-3">Activity</div>
                <div className="rounded-[18px] bg-white p-3">Settings</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-4">
                <MiniStat label="Occupancy" value="87%" />
                <MiniStat label="Leads" value="46" />
                <MiniStat label="Tours" value="19" />
                <MiniStat label="Move-ins" value="6" />
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="h-80 rounded-[24px] bg-[linear-gradient(180deg,#F8FCFF_0%,#EFF6FF_100%)]" />
              </div>
            </div>
          </section>
        </Shell>
      );
    case "product-showcase":
      return (
        <Shell eyebrow="launch layout" title="Product Showcase" summary="Launch-style geometry with a dominant visual object and clean supporting sections.">
          <section className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-semibold tracking-[-0.05em] text-slate-950">This works better when the product is the object.</h2>
              <p className="text-lg leading-8 text-slate-600">Excellent for apps and software launches. Less natural for apartments unless transformed into a lifestyle object.</p>
            </div>
            <Photo src={img(1)} alt="Product showcase hero" height={620} />
          </section>
        </Shell>
      );
    case "case-study-flow":
      return (
        <Shell eyebrow="proof layout" title="Case Study Flow" summary="A narrative geometry that explains transformation through before/after and proof sections.">
          <section className="grid gap-6 md:grid-cols-3">
            <TextCard eyebrow="before" title="Old feel" copy="Generic, dark, starter-heavy." />
            <TextCard eyebrow="approach" title="Intervention" copy="Shift to hospitality-led editorial geometry." />
            <TextCard eyebrow="after" title="New feel" copy="Cleaner, brighter, more image-led." />
          </section>
          <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Photo src={img(0)} alt="Case study visual" height={420} />
            <TextCard title="Best use" copy="Useful when the page needs to prove method and credibility, not just look attractive." />
          </section>
        </Shell>
      );
    case "catalog-stack":
      return (
        <Shell eyebrow="inventory layout" title="Catalog Stack" summary="A stacked browsing model built around listing cards and structured option review.">
          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Photo src={img(0)} alt="Catalog unit A" height={360} />
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-2xl font-semibold">2 Bedroom</h3><p className="mt-3 text-sm leading-7 text-slate-600">Inventory card with specs, pricing, and leasing CTA.</p></div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Photo src={img(1)} alt="Catalog unit B" height={360} />
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-2xl font-semibold">3 Bedroom</h3><p className="mt-3 text-sm leading-7 text-slate-600">Better when the user really needs to compare options.</p></div>
            </div>
          </section>
        </Shell>
      );
    case "hero-stack":
      return (
        <Shell eyebrow="campaign layout" title="Hero Stack" summary="A page made of multiple strong hero bands instead of one main opening section.">
          <section className="space-y-6">
            <Photo src={img(0)} alt="Hero band one" height={420} rounded="rounded-[40px]" />
            <Photo src={img(1)} alt="Hero band two" height={420} rounded="rounded-[40px]" />
            <Photo src={img(2)} alt="Hero band three" height={420} rounded="rounded-[40px]" />
          </section>
        </Shell>
      );
    case "immersive-cards":
      return (
        <Shell eyebrow="soft premium layout" title="Immersive Cards" summary="Large rounded modules create a softer, more tactile premium browsing experience.">
          <section className="grid gap-6 md:grid-cols-2">
            <Photo src={img(0)} alt="Immersive card one" height={500} rounded="rounded-[42px]" />
            <Photo src={img(1)} alt="Immersive card two" height={500} rounded="rounded-[42px]" />
            <TextCard title="Mood" copy="Friendlier and more lifestyle-driven than strict editorial." />
            <TextCard title="Best for" copy="Travel, hospitality, and youth-oriented premium brands." />
          </section>
        </Shell>
      );
    case "asymmetric-mosaic":
      return (
        <Shell eyebrow="high-energy layout" title="Asymmetric Mosaic" summary="An uneven image and text system that feels more digital-native and youthful.">
          <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <Photo src={img(0)} alt="Wide mosaic tile" height={520} />
              <TextCard title="Why it stands out" copy="The imbalance creates energy, which helps younger brands feel current." />
            </div>
            <div className="space-y-6">
              <Photo src={img(1)} alt="Tall mosaic tile" height={360} />
              <Photo src={img(2)} alt="Small mosaic tile" height={220} />
            </div>
          </section>
        </Shell>
      );
    case "framed-showcase":
      return (
        <Shell eyebrow="framed premium layout" title="Framed Showcase" summary="Contained showcase modules with clear borders and more formal premium framing.">
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <TextCard eyebrow="framing" title="Strong containment" copy="Every module feels deliberate and bounded, which raises perceived order." />
            <div className="rounded-[40px] border border-slate-300 bg-white p-6 shadow-sm">
              <Photo src={img(1)} alt="Framed hero asset" height={520} rounded="rounded-[24px]" />
            </div>
          </section>
        </Shell>
      );
    case "story-panels":
      return (
        <Shell eyebrow="scene-by-scene layout" title="Story Panels" summary="The visitor moves through sequential scenes, like chapters in a visual story.">
          <section className="space-y-6">
            <TextCard eyebrow="scene 01" title="Arrival" copy="Open with mood and first impression." />
            <Photo src={img(0)} alt="Scene two" height={460} />
            <TextCard eyebrow="scene 03" title="Neighborhood" copy="Then shift to context and daily life." />
            <Photo src={img(1)} alt="Scene four" height={460} />
          </section>
        </Shell>
      );
    case "minimal-rows":
      return (
        <Shell eyebrow="minimal layout" title="Minimal Rows" summary="Short restrained sections stacked vertically with very little decorative complexity.">
          <section className="space-y-4">
            <div className="border-t border-slate-200 py-8"><h2 className="text-3xl font-semibold">Minimal row one</h2><p className="mt-3 max-w-2xl text-slate-600">Typography and restraint do most of the work.</p></div>
            <div className="border-t border-slate-200 py-8"><h2 className="text-3xl font-semibold">Minimal row two</h2><p className="mt-3 max-w-2xl text-slate-600">Very elegant when brand assets are already exceptional.</p></div>
            <div className="border-t border-b border-slate-200 py-8"><h2 className="text-3xl font-semibold">Minimal row three</h2><p className="mt-3 max-w-2xl text-slate-600">Risk: under-selling energy and lifestyle.</p></div>
          </section>
        </Shell>
      );
    case "split-narrative":
      return (
        <Shell eyebrow="alternating layout" title="Split Narrative" summary="Alternating text and image blocks create an easy-to-follow modern explanatory rhythm.">
          <section className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <TextCard title="Block one" copy="Explanation on the left, visual on the right." />
              <Photo src={img(0)} alt="Split narrative first block" height={420} />
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
              <Photo src={img(1)} alt="Split narrative second block" height={420} />
              <TextCard title="Block two" copy="Then flip it to maintain motion and balance." />
            </div>
          </section>
        </Shell>
      );
    case "feature-ribbon":
      return (
        <Shell eyebrow="benefit layout" title="Feature Ribbon" summary="Horizontal bands create a faster benefit-scanning experience.">
          <section className="space-y-6">
            <div className="grid gap-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4">
              <div className="rounded-[22px] bg-slate-50 p-5">Beach access</div>
              <div className="rounded-[22px] bg-slate-50 p-5">Modern units</div>
              <div className="rounded-[22px] bg-slate-50 p-5">Move-in ready</div>
              <div className="rounded-[22px] bg-slate-50 p-5">Condado location</div>
            </div>
            <TextCard title="Why use it" copy="Good when the page needs to communicate multiple amenity/value ribbons quickly." />
          </section>
        </Shell>
      );
    case "map-lifestyle":
      return (
        <Shell eyebrow="location-led layout" title="Map Lifestyle" summary="Location and surrounding lifestyle are promoted to primary structural elements.">
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <TextCard eyebrow="location-led" title="Neighborhood is the hook" copy="This geometry is for brands where the place itself is a major part of the value." />
              <div className="grid gap-4 sm:grid-cols-3">
                <MiniStat label="Walkability" value="High" />
                <MiniStat label="Beach" value="Steps away" />
                <MiniStat label="Cafés" value="Nearby" />
              </div>
            </div>
            <Photo src={img(2)} alt="Map lifestyle visual" height={560} />
          </section>
        </Shell>
      );
    case "residence-journal":
      return (
        <Shell eyebrow="residential editorial layout" title="Residence Journal" summary="A calm residential brand system with curated pacing, refined imagery, and less landing-page energy.">
          <section className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <Photo src={img(0)} alt="Residence journal hero" height={640} rounded="rounded-[44px]" />
              <div className="space-y-6">
                <TextCard eyebrow="strong pick" title="Feels like a modern residence brand" copy="This is one of the strongest directions for Condado because it avoids both generic SaaS and generic real-estate listing energy." />
                <TextCard title="Behavior" copy="Less noise, more curation, more image confidence, more brand tone." />
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <TextCard title="Secondary chapter" copy="Use this section for neighborhood, amenity, or floor plan storytelling." />
              <Photo src={img(1)} alt="Residence journal secondary image" height={420} />
            </div>
          </section>
        </Shell>
      );
    default:
      return null;
  }
}

export default async function LayoutDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const layout = LAYOUT_PRESETS.find((item) => item.slug === slug);

  if (!layout) notFound();

  return <LayoutView slug={slug} />;
}

export function generateStaticParams() {
  return LAYOUT_PRESETS.map((layout) => ({ slug: layout.slug }));
}
