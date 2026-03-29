import Link from "next/link";
import { HeartHandshake, Home, LayoutGrid, ShieldCheck, Users } from "lucide-react";
import { NurseClaraBubble } from "@/components/nurse-clara-bubble";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/community", label: "Community", icon: Users },
  { href: "/assistant", label: "Nurse Clara", icon: HeartHandshake, center: true },
  { href: "/supporters", label: "Support", icon: LayoutGrid },
  { href: "/care-team", label: "Care team", icon: ShieldCheck }
];

export function AppShell({
  children,
  activeHref
}: {
  children: React.ReactNode;
  activeHref?: string;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-28 pt-6 sm:px-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-2xl text-foreground">PulseCircle</p>
            <p className="text-sm text-muted-foreground">Warm support for home cardiac rehab</p>
          </div>
        </Link>
        <div className="hidden rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-soft md:block">
          Demo mode with mocked records, metrics, and moderation
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex max-w-3xl items-center justify-around rounded-full border border-border bg-background/95 px-3 py-3 shadow-soft backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeHref === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-0 flex-col items-center gap-1 rounded-full px-3 py-2 text-xs text-muted-foreground transition hover:text-foreground",
                active && "text-foreground",
                item.center &&
                  "relative -mt-10 rounded-full bg-primary px-6 py-5 text-primary-foreground shadow-soft hover:text-primary-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", item.center && "h-7 w-7")} />
              <span className={cn("max-w-[64px] truncate", item.center && "sr-only md:not-sr-only md:block")}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <NurseClaraBubble />
    </div>
  );
}
