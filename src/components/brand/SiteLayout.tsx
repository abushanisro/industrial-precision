import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const nav = [
  { to: "/", label: "01 — Introduction" },
  { to: "/logo", label: "02 — Logo" },
  { to: "/colors", label: "03 — Colors" },
  { to: "/typography", label: "04 — Typography" },
  { to: "/usage", label: "05 — Usage" },
  { to: "/voice", label: "06 — Voice" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 mix-blend-difference">
        <Link to="/" className="flex items-center gap-3 text-background">
          <span className="font-sans font-light text-3xl md:text-4xl tracking-[-0.02em] leading-none"><span className="uppercase">EM</span><span className="lowercase">ithran</span></span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] opacity-70">Brand Guidelines</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="size-10 grid place-items-center border border-background/40 text-background hover:bg-background hover:text-foreground transition-colors"
        >
          <Menu className="size-5" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-foreground text-background flex flex-col">
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-background/20">
            <span className="text-xs uppercase tracking-[0.2em] opacity-70">Index</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="size-10 grid place-items-center">
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 md:px-10 py-12">
            <ul className="space-y-1">
              {nav.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-6 py-4 border-b border-background/10"
                    >
                      <span className="font-mono text-xs opacity-50 w-6">{item.label.split(" — ")[0]}</span>
                      <span className={`font-display text-4xl md:text-6xl tracking-tight transition-opacity ${active ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                        {item.label.split(" — ")[1]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="px-6 md:px-10 py-6 border-t border-background/20 flex items-center justify-between text-xs uppercase tracking-[0.2em] opacity-60">
            <span>EMithran © 2026</span>
            <span>v1.0</span>
          </div>
        </div>
      )}

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border bg-background">
        <div className="px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs uppercase tracking-[0.2em]">
          <div>
            <div className="opacity-50 mb-2">Document</div>
            <div>Brand Guidelines</div>
            <div>Version 1.0 / 2026</div>
          </div>
          <div>
            <div className="opacity-50 mb-2">Maintained by</div>
            <div>EMithran Studio</div>
          </div>
          <div>
            <div className="opacity-50 mb-2">Contact</div>
            <div>brand@emithran.com</div>
          </div>
          <div className="text-right">
            <div className="opacity-50 mb-2">©</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
