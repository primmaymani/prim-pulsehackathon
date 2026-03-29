"use client";

import { PauseCircle, PlayCircle, Repeat2, TimerReset } from "lucide-react";
import { motion } from "framer-motion";
import { weeklySchedule } from "@/data/mock-data";
import { formatMinutes } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RepeatInstructionButton } from "@/components/repeat-instruction-button";

export function TrainingSessionPanel() {
  const session = weeklySchedule[1];

  return (
    <Card className="bg-[#F6FAF8]">
      <CardHeader>
        <CardTitle>Today’s guided session</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <div className="rounded-[26px] bg-white p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-primary">Current activity</p>
            <h3 className="mt-2 font-serif text-3xl">{session.title}</h3>
            <p className="mt-2 text-muted-foreground">
              {session.focus}. Suggested intensity: {session.intensity}. Planned duration: {formatMinutes(session.durationMinutes)}.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] bg-[#1F5D6B] p-6 text-white"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-white/70">Elapsed time</p>
            <p className="mt-2 font-serif text-6xl">12:42</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="secondary" size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
                <PlayCircle className="h-5 w-5" />
                Start session
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <PauseCircle className="h-5 w-5" />
                Pause
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[28px] bg-[#FFF8E7] p-5">
            <p className="text-sm font-semibold text-slate-800">Nurse Clara says</p>
            <p className="mt-3 text-base leading-7 text-slate-700">
              “Let us begin with a calm pace. Keep your steps easy, let your breathing settle, and use the pause button whenever you need a moment.”
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <RepeatInstructionButton />
              <Button variant="ghost" className="gap-2">
                <Repeat2 className="h-4 w-4" />
                Hear the warm-up again
              </Button>
            </div>
          </div>
          <div className="rounded-[28px] border border-border bg-white p-5">
            <p className="text-sm font-semibold text-foreground">Session pacing</p>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground">
              <p>1. Warm-up for 3 minutes with very easy walking.</p>
              <p>2. Continue steady walking for 14 minutes.</p>
              <p>3. Cool down slowly and answer a short check-in.</p>
            </div>
            <Button variant="outline" className="mt-4 gap-2">
              <TimerReset className="h-4 w-4" />
              Restart timer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
