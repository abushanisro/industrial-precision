import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Colors — EMithran Brand Guidelines" },
      { name: "description", content: "Industrial black, pure white and anti-aliased neutrals — the EMithran color system." },
    ],
  }),
  component: ColorsPage,
});

const core = [
  { name: "Industrial Black", hex: "#000000", usage: "Primary logo / text", textLight: true },
  { name: "Pure White", hex: "#FFFFFF", usage: "Background", textLight: false },
  { name: "Soft Industrial Gray", hex: "#F5F5F5", usage: "Secondary surface", textLight: false },
  { name: "Steel Gray", hex: "#D1D5DB", usage: "Border / lines", textLight: false },
  { name: "Graphite Black", hex: "#111111", usage: "Dark UI sections", textLight: true },
  { name: "Machine Gray", hex: "#4B5563", usage: "Secondary text", textLight: true },
];

const neutrals = [
  { name: "Rich Black", hex: "#010101", textLight: true },
  { name: "Deep Graphite", hex: "#1A1A1A", textLight: true },
  { name: "Industrial Gray", hex: "#2F2F2F", textLight: true },
  { name: "Soft Steel", hex: "#E5E5E5", textLight: false },
  { name: "Clean White", hex: "#FEFEFE", textLight: false },
];

const meanings = [
  {
    h: "Black",
    hex: "#000000",
    items: ["Authority", "Engineering precision", "Industrial strength", "Premium manufacturing"],
  },
  {
    h: "White",
    hex: "#FFFFFF",
    items: ["Transparency", "Clean systems", "Automation", "Simplicity"],
  },
  {
    h: "Gray",
    hex: "#4B5563",
    items: ["Machinery", "Metal", "Technical infrastructure", "Factory-grade reliability"],
  },
];

function ColorsPage() {
  return (
    <>
      <PageHero
        eyebrow="03 — Colors"
        title="Color"
        intro="Minimal black, pure white, anti-aliased steel."
        body={
          "EMithran's palette is engineered, not decorative. Black asserts authority. White carries automation. Gray fills the space between like metal in motion.\n\nNo accents. No gradients. Just contrast — calibrated for factory-grade systems and enterprise software."
        }
      />

      <Block number="03.1" label="Core Palette">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {core.map((c) => (
            <Swatch key={c.hex} {...c} />
          ))}
        </div>
      </Block>

      <Block number="03.2" label="Anti-Aliased Neutrals">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-border border border-border">
          {neutrals.map((c) => (
            <div
              key={c.hex}
              className="aspect-[3/4] p-6 flex flex-col justify-between"
              style={{ backgroundColor: c.hex, color: c.textLight ? "#fff" : "#000" }}
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">{c.hex}</div>
              <div className="font-display text-xl leading-tight">{c.name}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block number="03.3" label="Psychology">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {meanings.map((m) => (
            <div key={m.h} className="bg-background p-8 md:p-10">
              <div
                className="size-16 mb-8 border border-border"
                style={{ backgroundColor: m.hex }}
              />
              <div className="font-display text-3xl mb-2">{m.h}</div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">{m.hex}</div>
              <ul className="space-y-2 text-base">
                {m.items.map((i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <span className="size-1.5 bg-foreground translate-y-[-2px]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block number="03.4" label="Ratio">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <p className="md:col-span-4 font-display text-3xl md:text-4xl leading-[1.05] tracking-tight">
            70 / 25 / 05
          </p>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground">
            White dominates the canvas. Black anchors structure and type. Gray fills the connective tissue between — borders, dividers, surfaces.
          </p>
        </div>
        <div className="mt-12 flex h-24 border border-border">
          <div className="bg-background" style={{ width: "70%" }} />
          <div className="bg-foreground" style={{ width: "25%" }} />
          <div className="bg-muted-foreground" style={{ width: "5%" }} />
        </div>
        <div className="mt-3 flex font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <div style={{ width: "70%" }}>White — 70%</div>
          <div style={{ width: "25%" }}>Black — 25%</div>
          <div style={{ width: "5%" }}>Gray — 5%</div>
        </div>
      </Block>
    </>
  );
}

function Swatch({ name, hex, usage, textLight }: { name: string; hex: string; usage: string; textLight: boolean }) {
  return (
    <div
      className="aspect-[4/5] p-6 md:p-8 flex flex-col justify-between"
      style={{ backgroundColor: hex, color: textLight ? "#fff" : "#000" }}
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] opacity-70">
        <span>{usage}</span>
        <span>{hex}</span>
      </div>
      <div className="font-display text-3xl md:text-4xl leading-[0.95]">{name}</div>
    </div>
  );
}
