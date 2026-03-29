import { AppShell } from "@/components/app-shell";
import { EncouragementFeed } from "@/components/encouragement-feed";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunityPage() {
  return (
    <AppShell activeHref="/community">
      <PageHero
        title="A calm community around recovery"
        description="Family, friends, and approved volunteers can send short messages that feel warm, tasteful, and encouraging. Every volunteer note is reviewed before it reaches the patient."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <EncouragementFeed />
        <Card>
          <CardHeader>
            <CardTitle>How support works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-7 text-muted-foreground">
            <p>Approved family and friends can react to completed sessions and send everyday encouragement.</p>
            <p>Volunteers can write uplifting notes, but the message passes through an AI-assisted moderation step before delivery.</p>
            <p>PulseCircle keeps the focus on reassurance, consistency, and safe communication with the care team.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
