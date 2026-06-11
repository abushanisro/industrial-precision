import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  body,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <>
      <section
        className={`relative overflow-hidden ${dark ? "bg-ink text-background" : "bg-background text-foreground"} pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10`}
      >
        {dark && <div className="absolute inset-0 grid-lines pointer-events-none" />}
        <div className="relative max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-16 md:mb-24">
            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">{eyebrow}</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">EMithran / 2026</span>
          </div>
          <h1 className="font-display font-black text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.05em]">
            {title}
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28 border-b border-border">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">{intro}</p>
          </div>
          {body && (
            <div className="md:col-span-5 md:col-start-8 text-base md:text-lg leading-relaxed text-muted-foreground space-y-5">
              {body.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export function Block({
  number,
  label,
  children,
  className = "",
}: {
  number?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 md:px-10 py-20 md:py-28 border-b border-border ${className}`}>
      <div className="max-w-[1600px] mx-auto">
        {(number || label) && (
          <div className="flex items-baseline gap-6 mb-14 md:mb-20">
            {number && <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{number}</span>}
            {label && <span className="font-mono text-xs uppercase tracking-[0.2em]">{label}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
