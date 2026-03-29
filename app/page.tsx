import Link from "next/link";
import { ArrowRight, HeartPulse, MessagesSquare, ShieldAlert, Upload } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Upload,
    title: "Gentle onboarding",
    copy: "Upload a care note, let Nurse Clara explain what is happening, and review the extracted plan before anything is saved."
  },
  {
    icon: HeartPulse,
    title: "Calm session guidance",
    copy: "Step-by-step home rehab support with mocked wearable metrics, repeatable instructions, and a simple timer."
  },
  {
    icon: MessagesSquare,
    title: "Encouragement that feels human",
    copy: "Family, friends, and moderated volunteers help the patient feel seen after every completed session."
  },
  {
    icon: ShieldAlert,
    title: "Visible escalation path",
    copy: "Concerning symptoms create a care-team alert without offering diagnosis, treatment, or changes to the plan."
  }
];

export default function LandingPage() {
  return (
    <AppShell>
      <PageHero
        title="A warm path home after cardiac hospitalization"
        description="PulseCircle helps patients understand their rehab plan, stay encouraged, and follow a simple home routine with the gentle support of Nurse Clara."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/onboarding/upload">
                Begin onboarding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/home">Open patient home</Link>
            </Button>
          </div>
        }
      />
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Hackathon MVP"
          title="Built for demo clarity, trust, and accessibility"
          description="This frontend-first experience uses mocked record parsing, wearable data, moderation, and care alerts so the product story feels real without slowing down the build."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="bg-white/85">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl">{feature.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{feature.copy}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Card className="bg-[#1F5D6B] text-white">
          <CardContent className="flex flex-col gap-4 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <Badge className="w-fit bg-white/10 text-white">Safety framing</Badge>
              <p className="max-w-2xl text-lg leading-8 text-white/90">
                Nurse Clara explains, encourages, summarizes, and escalates concerns. She does not diagnose, prescribe, or change a patient’s care plan.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/assistant">See assistant experience</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  );
}
