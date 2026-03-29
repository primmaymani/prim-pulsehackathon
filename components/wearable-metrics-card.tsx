import { Activity, Footprints, HeartPulse, Timer } from "lucide-react";
import { wearableMetrics } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Heart rate", value: wearableMetrics.heartRate, icon: HeartPulse },
  { label: "Steps", value: wearableMetrics.steps, icon: Footprints },
  { label: "Duration", value: wearableMetrics.duration, icon: Timer },
  { label: "Oxygen saturation", value: wearableMetrics.oxygenSaturation, icon: Activity }
];

export function WearableMetricsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wearable kit snapshot</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-[24px] bg-secondary/50 p-5">
              <Icon className="mb-3 h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="font-serif text-3xl">{stat.value}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
