import Link from "next/link";
import { HeartHandshake, Home, LogOut, ShieldCheck, UserRound, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/community", label: "Community", icon: Users },
  { href: "/assistant", label: "Nurse Clara", icon: HeartHandshake, center: true },
  { href: "/personal-info", label: "Personal", icon: UserRound },
  { href: "/care-team", label: "Care Team", icon: ShieldCheck }
];

export function AppShell({
  children,
  activeHref
}: {
  children: React.ReactNode;
  activeHref?: string;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-4 pb-40 pt-4">
      <header className="mb-6 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div>
            <p className="font-serif text-[1.75rem] leading-none text-foreground">PulseCircle</p>
            <p className="text-sm text-muted-foreground">Home cardiac rehab companion</p>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="h-11 rounded-full px-4 text-sm">
            <Link href="/profile-manager">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Link>
          </Button>
          <div className="rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-soft">Nurse Clara</div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[calc(100%-1.5rem)] max-w-[430px] items-end justify-between rounded-[36px] border border-border bg-background/95 px-3 py-4 shadow-soft backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeHref === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-full px-2 py-3 text-[0.95rem] text-muted-foreground transition hover:text-foreground",
                active && "text-foreground",
                item.center &&
                  "relative -mt-12 mx-1 flex-none rounded-full bg-primary px-5 py-6 text-primary-foreground shadow-soft hover:text-primary-foreground"
              )}
            >
              <Icon className={cn("h-7 w-7", item.center && "h-8 w-8")} />
              <span className={cn("max-w-[72px] text-center leading-5", item.center && "max-w-[80px]")}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
