import Link from "next/link";
import { MessageSquareHeart, UserRoundPlus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { EncouragementFeed } from "@/components/encouragement-feed";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SupportersPage() {
  return (
    <AppShell activeHref="/supporters">
      <PageHero
        title="Family and friend supporters"
        description="A lightweight view for the patient’s close circle to see progress updates and respond with warmth. Messages stay simple and never try to change the care plan."
      />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <EncouragementFeed />
        <Card>
          <CardHeader>
            <CardTitle>Supporter actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button size="lg" className="w-full justify-start gap-2">
              <MessageSquareHeart className="h-5 w-5" />
              Send a supportive message
            </Button>
            <Button size="lg" variant="outline" className="w-full justify-start gap-2">
              <UserRoundPlus className="h-5 w-5" />
              Invite another approved supporter
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full justify-start">
              <Link href="/volunteer">Switch to volunteer mode</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
