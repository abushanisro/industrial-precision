import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Typography — EMithran Brand Guidelines" },
      { name: "description", content: "The EMithran type system: heavy industrial display paired with tight grotesque body and engineered mono." },
    ],
  }),
  component: TypographyPage,
});

const scale = [
  { label: "Display / Hero", size: "clamp(72px, 14vw, 240px)", weight: 900, sample: "Manufacturing" },
  { label: "H1", size: "clamp(48px, 6vw, 96px)", weight: 800, sample: "Built for industry" },
  { label: "H2", size: "clamp(32px, 4vw, 56px)", weight: 700, sample: "Section heading" },
  { label: "H3", size: "28px", weight: 600, sample: "Subheading" },
  { label: "Body L", size: "20px", weight: 400, sample: "End-to-end manufacturing infrastructure for modern operators." },
  { label: "Body", size: "16px", weight: 400, sample: "End-to-end manufacturing infrastructure for modern operators." },
  { label: "Caption / Mono", size: "12px", weight: 500, sample: "01 — INDUSTRIAL PRECISION" },
];

function TypographyPage() {
  return (
    <>
      <PageHero
        eyebrow="04 — Typography"
        title="Type"
        intro="Heavy industrial display, tight grotesque body, engineered mono."
        body={
          "Archivo carries the heavy lifting — display headlines, hero statements, chapter titles. Inter Tight handles body copy at every density. JetBrains Mono labels the system: numbers, sections, technical detail.\n\nLetter-spacing tightens as size grows. Weight stays bold. Nothing decorative."
        }
      />

      <Block number="04.1" label="Families">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { name: "Archivo", role: "Display", sample: "Aa", style: "font-display font-black", note: "Weights 700 – 900" },
            { name: "Inter Tight", role: "Body", sample: "Aa", style: "font-sans font-medium", note: "Weights 400 – 700" },
            { name: "JetBrains Mono", role: "System / Code", sample: "Aa", style: "font-mono font-medium", note: "Weight 500" },
          ].map((f) => (
            <div key={f.name} className="bg-background p-8 md:p-10 flex flex-col gap-6">
              <div className={`${f.style} text-[160px] leading-none tracking-tight`}>{f.sample}</div>
              <div className="mt-auto">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{f.role}</div>
                <div className="font-display text-2xl mt-1">{f.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block number="04.2" label="Scale">
        <ul className="divide-y divide-border border-y border-border">
          {scale.map((s) => (
            <li key={s.label} className="grid grid-cols-12 gap-6 py-8 items-baseline">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{s.size.replace(/clamp\(.*?\)/, "fluid")} / {s.weight}</div>
              </div>
              <div
                className="col-span-12 md:col-span-10 font-display tracking-tight leading-[0.95]"
                style={{ fontSize: s.size, fontWeight: s.weight, fontFamily: s.label === "Caption / Mono" ? "var(--font-mono)" : undefined, letterSpacing: s.label.startsWith("Caption") ? "0.18em" : undefined, textTransform: s.label.startsWith("Caption") ? "uppercase" : "none" }}
              >
                {s.sample}
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block number="04.3" label="Specimen">
        <div className="bg-foreground text-background p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-60 mb-8">Specimen / EM-04</div>
            <div className="font-display font-black text-[14vw] md:text-[10vw] leading-[0.85] tracking-[-0.05em]">
              Industrial<br />Intelligence<br />Simplified.
            </div>
            <div className="mt-12 max-w-xl text-background/70">
              The typography system is built to scale from a 12px system label to a viewport-wide hero statement without losing engineering precision.
            </div>
          </div>
        </div>
      </Block>
    </>
  );
}
