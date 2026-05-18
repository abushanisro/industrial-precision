import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/usage")({
  head: () => ({
    meta: [
      { title: "Usage — EMithran Brand Guidelines" },
      { name: "description", content: "Surfaces, components and recommended application of the EMithran identity." },
    ],
  }),
  component: UsagePage,
});

const usage = [
  { el: "Logo", rec: "Black on White" },
  { el: "Website Background", rec: "Pure White" },
  { el: "Hero Section", rec: "Black + White contrast" },
  { el: "Buttons", rec: "Black background / White text" },
  { el: "Cards", rec: "Soft gray surfaces" },
  { el: "Typography", rec: "Heavy bold industrial fonts" },
];

const direction = ["Apple minimalism", "Tesla industrial UI", "Modern factory dashboard", "Enterprise manufacturing software"];

function UsagePage() {
  return (
    <>
      <PageHero
        eyebrow="05 — Usage"
        title="Usage"
        intro="Where the system meets the surface."
        body={
          "Apple minimalism meets Tesla industrial UI. Every component lives in one of three states: pure white surface, soft gray container, or industrial black anchor.\n\nContrast is the only signal. Nothing decorative is added — every element earns its space."
        }
      />

      <Block number="05.1" label="Application Matrix">
        <ul className="divide-y divide-border border-y border-border">
          {usage.map((u) => (
            <li key={u.el} className="grid grid-cols-12 gap-6 py-6 items-baseline">
              <div className="col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {String(usage.indexOf(u) + 1).padStart(2, "0")}
              </div>
              <div className="col-span-5 md:col-span-4 font-display text-2xl md:text-3xl">{u.el}</div>
              <div className="col-span-6 md:col-span-7 text-muted-foreground">{u.rec}</div>
            </li>
          ))}
        </ul>
      </Block>

      <Block number="05.2" label="Surfaces">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          <SurfaceCard tone="white" />
          <SurfaceCard tone="gray" />
          <SurfaceCard tone="black" />
        </div>
      </Block>

      <Block number="05.3" label="Components">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-10 md:p-14 flex flex-col gap-6">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Primary</div>
            <button className="self-start group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 text-xs uppercase tracking-[0.2em]">
              Request Demo <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="self-start group inline-flex items-center gap-3 border border-foreground text-foreground px-6 py-4 text-xs uppercase tracking-[0.2em]">
              Read Standards <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="bg-surface p-10 md:p-14">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">Card</div>
            <div className="bg-background border border-border p-8">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Module 04</div>
              <div className="font-display text-3xl tracking-tight mb-2">Throughput</div>
              <div className="font-display text-6xl font-black tracking-tight">98.4<span className="text-2xl text-muted-foreground">%</span></div>
              <div className="mt-6 h-1 bg-border">
                <div className="h-full bg-foreground" style={{ width: "98%" }} />
              </div>
            </div>
          </div>
        </div>
      </Block>

      <Block number="05.4" label="Direction">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <h2 className="md:col-span-5 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">Think like this.</h2>
          <ul className="md:col-span-6 md:col-start-7 divide-y divide-border border-y border-border">
            {direction.map((d, i) => (
              <li key={d} className="flex items-baseline gap-6 py-5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Block>
    </>
  );
}

function SurfaceCard({ tone }: { tone: "white" | "gray" | "black" }) {
  const cfg = {
    white: { bg: "bg-background", text: "text-foreground", label: "Surface / Primary", hex: "#FFFFFF" },
    gray: { bg: "bg-surface", text: "text-foreground", label: "Surface / Secondary", hex: "#F5F5F5" },
    black: { bg: "bg-foreground", text: "text-background", label: "Surface / Anchor", hex: "#000000" },
  }[tone];
  return (
    <div className={`${cfg.bg} ${cfg.text} aspect-[4/5] p-8 flex flex-col justify-between`}>
      <div className="flex justify-between font-mono text-xs uppercase tracking-[0.18em] opacity-60">
        <span>{cfg.label}</span>
        <span>{cfg.hex}</span>
      </div>
      <div className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
        {tone === "white" && "Default canvas."}
        {tone === "gray" && "Containers, cards, panels."}
        {tone === "black" && "Heroes, anchors, CTAs."}
      </div>
    </div>
  );
}
