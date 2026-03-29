import { checkinQuestions } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PostSessionCheckin({ escalated = false }: { escalated?: boolean }) {
  return (
    <Card className={escalated ? "border-rose-200 bg-rose-50/70" : ""}>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle>Five short check-in questions</CardTitle>
          {escalated ? <Badge variant="danger">Care team notified</Badge> : <Badge variant="success">Quick and supportive</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {checkinQuestions.map((item, index) => (
          <div key={item.id} className="rounded-[24px] bg-background p-4">
            <p className="text-sm text-muted-foreground">Question {index + 1}</p>
            <p className="mt-1 text-lg">{item.question}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.options.map((option) => (
                <Button key={option} variant="outline" className="rounded-full">
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ))}
        {escalated ? (
          <div className="rounded-[24px] border border-rose-200 bg-white p-5 text-sm leading-7 text-slate-700">
            Thank you for sharing how you feel. Because you reported symptoms that may need follow-up, your care team summary has been marked for review. Please wait for their guidance. Nurse Clara cannot give medical advice.
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
