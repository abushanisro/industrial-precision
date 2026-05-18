import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";
import mark from "@/assets/emithran-mark.png";

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: "Logo — EMithran Brand Guidelines" },
      { name: "description", content: "Wordmark, symbol, clear space and misuse rules for the EMithran logo system." },
    ],
  }),
  component: LogoPage,
});

function LogoPage() {
  return (
    <>
      <PageHero
        eyebrow="02 — Logo"
        title="Logo"
        intro="A bold typographic mark, engineered for industrial clarity."
        body={
          "The EMithran identity is built from two assets: a heavy sans wordmark and a mechanical symbol pairing human and gear. Together they signal precision, automation and trust.\n\nLead with the wordmark in marketing. Use the symbol for product, favicons and confined surfaces."
        }
      />

      <Block number="02.1" label="Wordmark">
        <div className="bg-surface aspect-[16/9] grid place-items-center p-10 md:p-20 border border-border">
          <span className="font-sans font-light text-[14vw] md:text-[10vw] tracking-[-0.02em] leading-[0.95] text-foreground">EMithran</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm">
          <Spec label="Format" value="PNG / SVG" />
          <Spec label="Min Width" value="120 px" />
          <Spec label="Clear Space" value="1× cap height" />
        </div>
      </Block>

      <Block number="02.2" label="Symbol">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background aspect-square grid place-items-center p-10">
            <img src={mark} alt="EMithran symbol on light" className="max-h-48 md:max-h-64 w-auto" />
          </div>
          <div className="bg-foreground aspect-square grid place-items-center p-10">
            <img src={mark} alt="EMithran symbol on dark" className="max-h-48 md:max-h-64 w-auto invert" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm">
          <Spec label="Concept" value="Operator × Gear" />
          <Spec label="Use" value="App / Favicon / Stamp" />
          <Spec label="Min Size" value="24 px" />
        </div>
      </Block>

      <Block number="02.3" label="Misuse">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { label: "Don't stretch", style: { transform: "scaleX(1.4)" } },
            { label: "Don't recolor", filter: "hue-rotate(120deg) saturate(3)" },
            { label: "Don't rotate", style: { transform: "rotate(-12deg)" } },
            { label: "Don't add effects", filter: "blur(2px)" },
          ].map((m) => (
            <div key={m.label} className="bg-surface aspect-square grid place-items-center p-8 relative">
              <span
                className="font-sans font-light text-4xl tracking-[-0.02em] lowercase text-foreground"
                style={{ ...(m.style ?? {}), filter: m.filter }}
              >
                emithran
              </span>
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div className="w-full h-px bg-destructive rotate-[-15deg] opacity-70" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Block>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl">{value}</div>
    </div>
  );
}
