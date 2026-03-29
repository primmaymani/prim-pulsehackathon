"use client";

import { HeartHandshake, Mic, Repeat, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { nurseClaraPrompts } from "@/data/mock-data";

export function NurseClaraBubble() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-28 right-5 z-50 h-16 rounded-full bg-[#2F6F7E] px-6 text-base shadow-soft sm:right-8"
        >
          <HeartHandshake className="mr-2 h-5 w-5" />
          Nurse Clara
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nurse Clara is here</DialogTitle>
          <DialogDescription>
            A gentle guide for your routine, your questions, and your next calm step. Nurse Clara explains and supports, but does not give medical advice or change your plan.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Card className="bg-[#F9F1DE]">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white p-3 text-primary shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Warm guidance</p>
                  <p className="text-sm text-muted-foreground">“{nurseClaraPrompts.training}”</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button className="justify-start gap-2">
                  <Mic className="h-4 w-4" />
                  Open voice mode
                </Button>
                <Button variant="outline" className="justify-start gap-2">
                  <Repeat className="h-4 w-4" />
                  Repeat last instruction
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-3">
            {[
              "Would you like me to walk through today’s session plan?",
              "I can read your check-in questions one at a time.",
              "If something feels concerning, I can help notify your care team."
            ].map((line) => (
              <div key={line} className="rounded-[24px] bg-[#EEF5F3] p-4 text-sm leading-6 text-foreground">
                {line}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
