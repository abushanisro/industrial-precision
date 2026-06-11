import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/brand/SiteLayout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black">404</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em]">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-black">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EMithran — Brand Guidelines" },
      { name: "description", content: "The official brand system for EMithran. Industrial precision, enterprise trust, and manufacturing-grade design standards." },
      { property: "og:title", content: "EMithran — Brand Guidelines" },
      { property: "og:description", content: "The official brand system for EMithran. Industrial precision, enterprise trust, and manufacturing-grade design standards." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "EMithran — Brand Guidelines" },
      { name: "twitter:description", content: "The official brand system for EMithran. Industrial precision, enterprise trust, and manufacturing-grade design standards." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f4c6613a-d152-4401-8e01-52cea292f72c" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f4c6613a-d152-4401-8e01-52cea292f72c" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
