"use client";

import { useMemo, useState } from "react";
import { checkinQuestions } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PostSessionCheckin({ escalated = false, sessionId = "session-1" }: { escalated?: boolean; sessionId?: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const derivedEscalation = useMemo(() => {
    return (
      answers.q2 === "Yes, more than expected" ||
      answers.q3 === "Yes" ||
      answers.q4 === "Yes"
    );
  }, [answers]);

  const shouldEscalate = escalated || derivedEscalation;

  async function saveAnswers() {
    if (Object.keys(answers).length !== checkinQuestions.length) {
      setSaveState("error");
      return;
    }

    setSaveState("saving");
    try {
      const response = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          answers,
          escalated: shouldEscalate,
          submittedAt: new Date().toISOString()
        })
      });

      setSaveState(response.ok ? "saved" : "error");
    } catch {
      setSaveState("error");
    }
  }

  return (
    <Card className={shouldEscalate ? "border-rose-200 bg-rose-50/70" : ""}>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-3xl">Five short check-in questions</CardTitle>
          {shouldEscalate ? <Badge variant="danger">Care team notified</Badge> : <Badge variant="success">Quick and supportive</Badge>}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {checkinQuestions.map((item, index) => (
          <div key={item.id} className="rounded-[24px] bg-background p-5">
            <p className="text-sm text-muted-foreground">Question {index + 1}</p>
            <p className="mt-1 text-xl leading-8">{item.question}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.options.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant="outline"
                  aria-pressed={answers[item.id] === option}
                  className={cn(
                    "min-h-12 rounded-full px-5 text-base",
                    answers[item.id] === option && "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  )}
                  onClick={() => {
                    setAnswers((current) => ({ ...current, [item.id]: option }));
                    setSaveState("idle");
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-3">
          <Button size="lg" className="h-14 w-full text-lg" onClick={saveAnswers} disabled={saveState === "saving"}>
            {saveState === "saving" ? "Saving check-in..." : "Save check-in answers"}
          </Button>
          {saveState === "saved" ? (
            <p className="rounded-[22px] bg-secondary/55 p-4 text-base leading-7 text-muted-foreground">
              Your answers have been saved for this demo and added to the local check-in records.
            </p>
          ) : null}
          {saveState === "error" ? (
            <p className="rounded-[22px] bg-rose-50 p-4 text-base leading-7 text-rose-800">
              Please answer all five questions before saving.
            </p>
          ) : null}
        </div>
        {shouldEscalate ? (
          <div className="rounded-[24px] border border-rose-200 bg-white p-5 text-base leading-8 text-slate-700">
            Thank you for sharing how you feel. Because you reported symptoms that may need follow-up, your care team summary has been marked for review. Please wait for their guidance. Nurse Clara cannot give medical advice.
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
