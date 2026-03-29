import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/page-hero";
import { VolunteerMessageCard } from "@/components/volunteer-message-card";
import { volunteerMessages } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function VolunteerPage() {
  return (
    <AppShell>
      <PageHero
        title="Volunteer encouragement"
        description="Community volunteers can write short supportive notes for patients they do not know. Every message is reviewed before delivery."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle>Write a message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="Write a short, warm, non-medical note of encouragement." />
            <div className="rounded-[24px] bg-white p-5 text-sm leading-7 text-muted-foreground">
              Messages are checked for safety and tone before they appear in a patient’s encouragement feed. Please do not offer medical advice, directions, or changes to a care plan.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1">Submit for review</Button>
              <Button size="lg" variant="outline" asChild className="flex-1">
                <Link href="/volunteer/review">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  View moderation queue
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {volunteerMessages.map((message) => (
            <VolunteerMessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
