import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Block } from "@/components/brand/Section";
import markBlack from "@/assets/emithran-mark-black.png.asset.json";
import markWhite from "@/assets/emithran-mark-white.png.asset.json";

export const Route = createFileRoute("/logo")({
  head: () => ({
    meta: [
      { title: "Logo — EMithran Brand Guidelines" },
      { name: "description", content: "The EMithran mark, wordmark, lockup, clear space and misuse rules." },
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
        intro="The mark, the wordmark, and the lockup that carries them."
        body={
          "The EMithran identity is built from a single engineered mark — an 'M' set inside a calibration ring — paired with the EMITHRAN wordmark.\n\nLead with the lockup. Use the mark alone for product surfaces, favicons, app icons and confined real estate."
        }
      />

      <Block number="02.1" label="Primary Lockup">
        <div className="bg-surface aspect-[16/9] grid place-items-center p-10 md:p-20 border border-border">
          <div className="flex items-center gap-6 md:gap-10">
            <img src={markBlack.url} alt="EMithran mark" className="h-24 md:h-40 w-auto" />
            <span className="font-sans font-semibold text-6xl md:text-[9vw] tracking-[-0.02em] leading-none text-foreground uppercase">EMITHRAN</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm">
          <Spec label="Format" value="PNG / SVG" />
          <Spec label="Min Width" value="160 px" />
          <Spec label="Clear Space" value="1× mark height" />
        </div>
      </Block>

      <Block number="02.2" label="Mark">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background aspect-square grid place-items-center p-10">
            <img src={markBlack.url} alt="EMithran mark on light" className="max-h-48 md:max-h-64 w-auto" />
          </div>
          <div className="bg-ink aspect-square grid place-items-center p-10">
            <img src={markWhite.url} alt="EMithran mark on dark" className="max-h-48 md:max-h-64 w-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm">
          <Spec label="Concept" value="M × Calibration Ring" />
          <Spec label="Use" value="App / Favicon / Stamp" />
          <Spec label="Min Size" value="24 px" />
        </div>
      </Block>

      <Block number="02.3" label="Wordmark">
        <div className="bg-background border border-border p-12 md:p-20 grid place-items-center">
          <span className="font-sans font-semibold text-[14vw] md:text-[10vw] tracking-[-0.02em] leading-none text-foreground uppercase">EMITHRAN</span>
        </div>
        <div className="bg-ink border border-ink p-12 md:p-20 grid place-items-center mt-px">
          <span className="font-sans font-semibold text-[14vw] md:text-[10vw] tracking-[-0.02em] leading-none text-background uppercase">EMITHRAN</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-sm">
          <Spec label="Typeface" value="Inter Tight / Semibold" />
          <Spec label="Tracking" value="-2%" />
          <Spec label="Case" value="Uppercase" />
        </div>
      </Block>

      <Block number="02.4" label="Misuse">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { label: "Don't stretch", style: { transform: "scaleX(1.4)" } },
            { label: "Don't recolor", filter: "hue-rotate(120deg) saturate(3)" },
            { label: "Don't rotate", style: { transform: "rotate(-12deg)" } },
            { label: "Don't add effects", filter: "blur(2px)" },
          ].map((m) => (
            <div key={m.label} className="bg-surface aspect-square grid place-items-center p-8 relative">
              <img
                src={markBlack.url}
                alt={m.label}
                className="max-h-24 w-auto"
                style={{ ...(m.style ?? {}), filter: m.filter }}
              />
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
