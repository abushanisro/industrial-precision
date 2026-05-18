import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";

export const Route = createFileRoute("/voice")({
  head: () => ({
    meta: [
      { title: "Voice — EMithran Brand Guidelines" },
      { name: "description", content: "How EMithran speaks: precise, confident, engineered for industry." },
    ],
  }),
  component: VoicePage,
});

const taglines = [
  "Built by Manufacturers. Trusted by Industries.",
  "Your One-Stop Manufacturing Solution.",
  "End-to-End Manufacturing Infrastructure.",
  "Industrial Intelligence Simplified.",
];

const principles = [
  { h: "Precise", d: "Every sentence specifies. No filler, no marketing fluff." },
  { h: "Confident", d: "Declarative statements. We build, we ship, we operate." },
  { h: "Engineered", d: "Technical credibility. Use real numbers, real systems." },
  { h: "Restrained", d: "Shorter is stronger. Cut adjectives before adding them." },
];

function VoicePage() {
  return (
    <>
      <PageHero
        eyebrow="06 — Voice"
        title="Voice"
        intro="Precise. Confident. Engineered."
        body={
          "EMithran speaks like the operators it serves. Short sentences. Declarative verbs. Technical specificity where it counts.\n\nWe don't sell manufacturing — we describe it. The work speaks for itself when the language gets out of its way."
        }
      />

      <Block number="06.1" label="Principles">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {principles.map((p, i) => (
            <div key={p.h} className="bg-background p-8 md:p-12">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
                Principle / {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-4xl md:text-5xl mb-4 tracking-tight">{p.h}</div>
              <div className="text-muted-foreground text-lg">{p.d}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block number="06.2" label="Taglines">
        <ul className="divide-y divide-border border-y border-border">
          {taglines.map((t, i) => (
            <li key={t} className="grid grid-cols-12 gap-6 py-10 items-baseline">
              <span className="col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-11 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
                "{t}"
              </span>
            </li>
          ))}
        </ul>
      </Block>

      <Block number="06.3" label="Do / Don't">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">Do</div>
            <ul className="space-y-4 text-lg">
              <li>"Reduce changeover time by 42%."</li>
              <li>"Ships in 14 days. Operates in 90 countries."</li>
              <li>"Built for the floor. Designed for the boardroom."</li>
            </ul>
          </div>
          <div className="bg-foreground text-background p-8 md:p-12">
            <div className="font-mono text-xs uppercase tracking-[0.18em] opacity-60 mb-6">Don't</div>
            <ul className="space-y-4 text-lg opacity-90">
              <li className="line-through opacity-60">"Revolutionary AI-powered synergy platform."</li>
              <li className="line-through opacity-60">"Unleash next-generation possibilities."</li>
              <li className="line-through opacity-60">"The future of everything, today."</li>
            </ul>
          </div>
        </div>
      </Block>
    </>
  );
}
