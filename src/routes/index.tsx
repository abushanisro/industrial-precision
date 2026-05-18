import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Block } from "@/components/brand/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EMithran — Brand Guidelines" },
      { name: "description", content: "Industrial precision, enterprise trust. The official EMithran brand system." },
    ],
  }),
  component: Index,
});

const chapters = [
  { num: "02", title: "Logo", to: "/logo", desc: "Marks, clear space, lockups and misuse." },
  { num: "03", title: "Colors", to: "/colors", desc: "Industrial black, pure white and anti-aliased neutrals." },
  { num: "04", title: "Typography", to: "/typography", desc: "Heavy industrial display paired with tight grotesque body." },
  { num: "05", title: "Usage", to: "/usage", desc: "Surfaces, contrast and component-level application." },
  { num: "06", title: "Voice", to: "/voice", desc: "How EMithran speaks: precise, confident, engineered." },
];

function Index() {
  return (
    <>
      <PageHero
        eyebrow="00 — Brand Guidelines"
        title="EMithran"
        intro="Built by manufacturers. Trusted by industries."
        body={
          "EMithran is end-to-end manufacturing infrastructure — engineered for the operators, integrators and enterprises rebuilding the industrial stack.\n\nThis is a guidebook, not a rule book. It exists to keep the brand precise across every touchpoint while leaving room for the work to evolve."
        }
      />

      <Block number="Index" label="Chapters">
        <ul className="divide-y divide-border border-y border-border">
          {chapters.map((c) => (
            <li key={c.num}>
              <Link
                to={c.to}
                className="group grid grid-cols-12 gap-6 py-8 md:py-10 items-baseline hover:bg-surface transition-colors px-2 -mx-2"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.num}</span>
                <span className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl tracking-tight">{c.title}</span>
                <span className="col-span-12 md:col-span-5 text-muted-foreground">{c.desc}</span>
                <span className="hidden md:flex col-span-1 justify-end">
                  <ArrowUpRight className="size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Block>

      <Block number="01.1" label="Psychology">
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
            A psychology of precision.
          </h2>
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-px bg-border border border-border">
            {[
              "Industrial precision",
              "Enterprise trust",
              "Clean automation",
              "Premium manufacturing",
              "Modern factory systems",
              "Scalable infrastructure",
            ].map((item, i) => (
              <div key={item} className="bg-background p-6 md:p-8">
                <div className="font-mono text-xs text-muted-foreground mb-3">P/{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-xl md:text-2xl">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Block>
    </>
  );
}
