import { AppShell } from "@/components/app-shell";
import { EncouragementFeed } from "@/components/encouragement-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunityPage() {
  return (
    <AppShell activeHref="/community">
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Community</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Words From Your Circle</h1>
            <p className="text-lg leading-8 text-slate-700">
              Family, friends, and approved volunteers can send warm messages that feel encouraging and easy to read on the phone.
            </p>
          </CardContent>
        </Card>
        <EncouragementFeed />
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">How support works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg leading-8 text-muted-foreground">
            <p>Approved family and friends can react to completed sessions and send everyday encouragement.</p>
            <p>Volunteers can write uplifting notes, but the message passes through an AI-assisted moderation step before delivery.</p>
            <p>PulseCircle keeps the focus on reassurance, consistency, and safe communication with the care team.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
