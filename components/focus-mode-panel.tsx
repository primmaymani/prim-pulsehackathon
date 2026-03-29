"use client";

import Link from "next/link";
import { Heart, Pause, Play, TimerReset } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function formatElapsed(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function FocusModePanel() {
  const [elapsedSeconds, setElapsedSeconds] = useState(754);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [running]);

  return (
    <Card className="overflow-hidden border-none bg-gradient-to-b from-[#1F5D6B] to-[#2E7482] text-white">
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-white/70">Focus mode</p>
          <h1 className="font-serif text-4xl">Go on a walk</h1>
          <p className="text-base leading-7 text-white/85">Take an easy pace and let your breathing stay comfortable. Nurse Clara is right here with you.</p>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10">
            <div className="animate-slow-pulse absolute h-56 w-56 rounded-full bg-white/10" />
            <div className="animate-slow-pulse absolute h-40 w-40 rounded-full bg-white/15" />
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#F7E9C7] text-primary shadow-soft">
              <Heart className="h-14 w-14 fill-current" />
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">Elapsed time</p>
          <p className="font-serif text-6xl">{formatElapsed(elapsedSeconds)}</p>
          <p className="text-base text-white/80">About halfway through today’s 15-minute walk</p>
        </div>

        <div className="grid gap-3">
          <Button
            size="lg"
            variant="secondary"
            className="h-14 bg-white text-slate-900 hover:bg-white/90"
            onClick={() => setRunning((current) => !current)}
          >
            {running ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
            {running ? "Pause timer" : "Resume timer"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            onClick={() => setElapsedSeconds(0)}
          >
            <TimerReset className="mr-2 h-5 w-5" />
            Reset timer
          </Button>
          <Button size="lg" className="h-14 bg-[#F7E9C7] text-slate-900 hover:bg-[#F4E0AE]" asChild>
            <Link href="/checkin/session-1">End activity and check in</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
