"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Activity, Camera, CheckCircle2, Footprints, HeartPulse, LogIn, Timer, UserRound, Users, Waves } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { AlertBanner } from "@/components/AlertBanner";
import { VoiceButton } from "@/components/VoiceButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { detectSafetyRisk, useVoiceAgent, type CareScreen } from "@/hooks/useVoiceAgent";
import { patientContext } from "@/data/mock-data";

const SAFETY_RESPONSE = "Please stop immediately. I’m concerned about your symptoms. Contact your care team or emergency services right now.";

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<"patient" | null>(null);
  const [currentScreen, setCurrentScreen] = useState<CareScreen>("home");
  const [dailyCheckin, setDailyCheckin] = useState({
    feeling: "",
    discomfort: ""
  });
  const [postActivity, setPostActivity] = useState({
    effort: "",
    discomfort: ""
  });
  const [dailyStep, setDailyStep] = useState<1 | 2 | 3>(1);
  const [isWalking, setIsWalking] = useState(false);
  const [walkSeconds, setWalkSeconds] = useState(0);
  const [isPreparingWalk, setIsPreparingWalk] = useState(false);
  const {
    transcript,
    aiResponse,
    isListening,
    isThinking,
    isSpeaking,
    alertState,
    errorMessage,
    startListening,
    stopListening,
    processTranscript,
    speak,
    setAlertState
  } = useVoiceAgent();

  useEffect(() => {
    if (!isWalking) return;
    const interval = window.setInterval(() => {
      setWalkSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isWalking]);

  useEffect(() => {
    if (currentScreen === "post") {
      speak("How did that feel?");
    }
  }, [currentScreen, speak]);

  const timerLabel = useMemo(() => {
    const minutes = Math.floor(walkSeconds / 60);
    const seconds = walkSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, [walkSeconds]);

  function beginDailyCheckin() {
    setCurrentScreen("home");
    setDailyStep(1);
    speak("How are you feeling today?");
  }

  function captureDailyAnswer() {
    startListening({
      mode: "capture",
      onTranscript: (heard) => {
        if (dailyStep === 1) {
          setDailyCheckin((current) => ({ ...current, feeling: heard }));
          setDailyStep(2);
          speak("Any discomfort like chest pain, dizziness, or shortness of breath?");
          return;
        }

        setDailyCheckin((current) => ({ ...current, discomfort: heard }));
        if (detectSafetyRisk(heard)) {
          setAlertState("warning");
          speak(SAFETY_RESPONSE);
          return;
        }
        setDailyStep(3);
        speak("Thank you, Maria. I’ve saved your daily check-in.");
      }
    });
  }

  function startWalk() {
    setCurrentScreen("activity");
    setIsPreparingWalk(true);
    setIsWalking(false);
    setWalkSeconds(0);
    setAlertState("normal");
    speak("Ready to go, Maria? I’ve got your heart monitor synced. Is your water nearby?");
  }

  function confirmWalkReady() {
    setIsPreparingWalk(false);
    setIsWalking(true);
    setWalkSeconds(0);
    setAlertState("normal");
    speak("Let’s begin, Maria. I’ll check in with you along the way.");
  }

  function endWalk() {
    setIsWalking(false);
    setIsPreparingWalk(false);
    setCurrentScreen("post");
  }

  const tabs: { id: CareScreen; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "activity", label: "Activity" },
    { id: "post", label: "Post-Activity" }
  ];

  return (
    <AppShell>
      {selectedRole !== "patient" ? (
        <div className="space-y-5">
          <Card className="border-none bg-hero-glow">
            <CardContent className="space-y-5 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Welcome back</p>
              <h1 className="font-serif text-4xl leading-tight text-slate-900">Choose how you want to enter PulseCircle</h1>
              <p className="text-xl leading-8 text-slate-700">
                Choose <strong>Maria</strong>{" "}for the patient app, or{" "}<strong>Volunteer</strong>{" "}to send support.
              </p>
              <Button size="lg" variant="outline" className="h-14 w-full text-lg" asChild>
                <Link href="/profile-manager">
                  <Camera className="mr-2 h-5 w-5" />
                  <span>
                    Create a{" "}
                    <strong>new profile</strong>
                  </span>
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#FFF8E7]">
            <CardContent className="space-y-4 p-6">
              <div className="rounded-[24px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary p-3 text-primary">
                    <UserRound className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-slate-900">Maria</p>
                    <p className="text-lg leading-8 text-muted-foreground">
                      Open the{" "}
                      <strong>patient app</strong>.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="mt-5 h-14 w-full text-lg" onClick={() => setSelectedRole("patient")}>
                  <LogIn className="mr-2 h-5 w-5" />
                  <span>
                    Enter as{" "}
                    <strong>Maria</strong>
                  </span>
                </Button>
              </div>

              <div className="rounded-[24px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary p-3 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-slate-900">Volunteer</p>
                    <p className="text-lg leading-8 text-muted-foreground">
                      Open the{" "}
                      <strong>volunteer</strong>{" "}
                      workspace.
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="outline" className="mt-5 h-14 w-full text-lg" asChild>
                  <Link href="/volunteer">
                    <LogIn className="mr-2 h-5 w-5" />
                    <span>
                      Enter as{" "}
                      <strong>Volunteer</strong>
                    </span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Embedded voice companion</p>
            <h1 className="font-serif text-4xl leading-tight text-slate-900">Good morning, Maria</h1>
            <p className="text-xl leading-8 text-slate-700">
              Nurse Clara helps with your{" "}
              <strong>check-in</strong>,{" "}
              <strong>walk</strong>, and{" "}
              <strong>reflection</strong>.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {patientContext.wearableName} linked
            </div>
            <Button variant="outline" className="h-12 w-full text-base" onClick={() => setSelectedRole(null)}>
              Change login
            </Button>
            <div className="grid grid-cols-3 gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={currentScreen === tab.id ? "default" : "outline"}
                  className="h-12 rounded-full text-base"
                  onClick={() => setCurrentScreen(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {alertState === "warning" ? <AlertBanner message={SAFETY_RESPONSE} /> : null}

        {currentScreen === "home" ? (
          <div className="space-y-5">
            <Card className="bg-[#FFF8E7]">
              <CardContent className="space-y-4 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-primary/80">Home screen</p>
                <h2 className="font-serif text-3xl text-slate-900">Today’s prescribed activity</h2>
                <div className="rounded-[24px] bg-white p-5">
                  <p className="font-medium text-slate-900">20-minute walk</p>
                  <p className="mt-2 text-lg leading-8 text-muted-foreground">A <strong>gentle walk</strong> at your usual pace.</p>
                </div>
                <div className="rounded-[24px] bg-white p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="font-medium text-slate-900">Wearable status</p>
                  </div>
                  <p className="mt-2 text-lg leading-8 text-muted-foreground">
                    {patientContext.wearableConnected
                      ? `${patientContext.wearableName} is connected.`
                      : "No wearable is connected."}
                  </p>
                </div>
                <Button size="lg" className="h-14 w-full text-lg" onClick={beginDailyCheckin}>
                  <span>
                    Start{" "}
                    <strong>check-in</strong>
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="h-14 w-full text-lg" onClick={captureDailyAnswer}>
                  <span>
                    Answer with{" "}
                    <strong>voice</strong>
                  </span>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Daily check-in state</p>
                <div className="rounded-[24px] bg-secondary/50 p-4 text-lg leading-8 text-slate-700">
                  {dailyStep === 1 && <>Question 1: <strong>How are you feeling today?</strong></>}
                  {dailyStep === 2 && <>Question 2: <strong>Any chest pain, dizziness, or shortness of breath?</strong></>}
                  {dailyStep === 3 && <><strong>Check-in complete.</strong></>}
                </div>
                <div className="rounded-[24px] bg-background p-4">
                  <p className="text-sm text-muted-foreground">Feeling</p>
                  <p className="mt-1 text-lg">{dailyCheckin.feeling || "Waiting for your answer."}</p>
                </div>
                <div className="rounded-[24px] bg-background p-4">
                  <p className="text-sm text-muted-foreground">Symptoms</p>
                  <p className="mt-1 text-lg">{dailyCheckin.discomfort || "Waiting for your answer."}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {currentScreen === "activity" ? (
          <div className="space-y-5">
            <Card className="overflow-hidden border-none bg-gradient-to-b from-[#1F5D6B] to-[#2F6F7E] text-white">
              <CardContent className="space-y-5 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">Activity focus</p>
                <h2 className="font-serif text-4xl">Live walking session</h2>
                <p className="text-lg leading-8 text-white/85">Use the <strong>voice button</strong> any time.</p>
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  {patientContext.wearableName} linked
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-[24px] bg-white/10 p-4">
                    <Timer className="h-6 w-6 text-[#F7E9C7]" />
                    <p className="mt-2 text-sm text-white/70">Timer</p>
                    <p className="font-serif text-3xl">{timerLabel}</p>
                  </div>
                  <div className="rounded-[24px] bg-white/10 p-4">
                    <Footprints className="h-6 w-6 text-[#F7E9C7]" />
                    <p className="mt-2 text-sm text-white/70">Steps</p>
                    <p className="font-serif text-3xl">{Math.max(320, walkSeconds * 2)}</p>
                  </div>
                  <div className="rounded-[24px] bg-white/10 p-4">
                    <HeartPulse className="h-6 w-6 text-[#F7E9C7]" />
                    <p className="mt-2 text-sm text-white/70">Heart rate</p>
                    <p className="font-serif text-3xl">96</p>
                  </div>
                </div>
                {isPreparingWalk ? (
                  <div className="rounded-[28px] bg-white/10 p-5">
                    <p className="font-serif text-3xl text-white">Ready to go, Maria?</p>
                    <p className="mt-3 text-lg leading-8 text-white/85">
                      Your monitor is ready. Is your <strong>water</strong> nearby?
                    </p>
                    <div className="mt-4 grid gap-3">
                      <Button size="lg" className="h-14 bg-[#F7E9C7] text-slate-900 hover:bg-[#F1DDA8]" onClick={confirmWalkReady}>
                        Yes, Clara
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-14 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                        onClick={() => setIsPreparingWalk(false)}
                      >
                        Not yet
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    <Button size="lg" className="h-14 bg-[#F7E9C7] text-slate-900 hover:bg-[#F1DDA8]" onClick={startWalk}>
                      Start Walk
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" onClick={endWalk}>
                      End Walk
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Voice states</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-[22px] bg-secondary/50 p-4 text-center">
                    <Activity className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">Listening</p>
                    <p className="text-lg font-medium">{isListening ? "Yes" : "No"}</p>
                  </div>
                  <div className="rounded-[22px] bg-secondary/50 p-4 text-center">
                    <Waves className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">Thinking</p>
                    <p className="text-lg font-medium">{isThinking ? "Yes" : "No"}</p>
                  </div>
                  <div className="rounded-[22px] bg-secondary/50 p-4 text-center">
                    <HeartPulse className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">Speaking</p>
                    <p className="text-lg font-medium">{isSpeaking ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="rounded-[24px] bg-background p-4">
                  <p className="text-sm text-muted-foreground">You said</p>
                  <p className="mt-1 text-lg">{transcript || "Tap the voice button."}</p>
                </div>
                <div className="rounded-[24px] bg-[#FFF8E7] p-4">
                  <p className="text-sm text-muted-foreground">Nurse Clara said</p>
                  <p className="mt-1 text-lg leading-8 text-slate-700">{aiResponse || "Nurse Clara will answer here."}</p>
                </div>
                <form
                  className="flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const form = new FormData(event.currentTarget);
                    const message = String(form.get("message") || "");
                    void processTranscript(message, "activity");
                    event.currentTarget.reset();
                  }}
                >
                  <input
                    name="message"
                    className="flex h-12 w-full rounded-2xl border border-border bg-background px-4 text-base"
                    placeholder="Type a message"
                  />
                  <Button type="submit" className="h-12 rounded-full px-5 text-base">Send</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {currentScreen === "post" ? (
          <div className="space-y-5">
            <Card className="bg-[#FFF8E7]">
              <CardContent className="space-y-4 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-primary/80">Post-activity</p>
                <h2 className="font-serif text-3xl text-slate-900">How did that feel?</h2>
                <div className="grid gap-3">
                  {["Easy", "Just right", "Hard"].map((option) => (
                    <Button
                      key={option}
                      variant={postActivity.effort === option ? "default" : "outline"}
                      className="h-12 rounded-full text-base"
                      onClick={() => setPostActivity((current) => ({ ...current, effort: option }))}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="font-serif text-3xl text-slate-900">Any discomfort during your walk?</h3>
                <div className="grid gap-3">
                  {["No discomfort", "A little discomfort", "Yes, I felt discomfort"].map((option) => (
                    <Button
                      key={option}
                      variant={postActivity.discomfort === option ? "default" : "outline"}
                      className="h-12 rounded-full text-base"
                      onClick={() => {
                        setPostActivity((current) => ({ ...current, discomfort: option }));
                        if (option !== "No discomfort") {
                          speak("Thank you for telling me. If something feels concerning, I can help you contact your care team.");
                        }
                      }}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                <div className="rounded-[24px] bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">Your answers</p>
                  <p className="mt-1 text-lg">Effort: {postActivity.effort || "Not selected yet"}</p>
                  <p className="mt-1 text-lg">Discomfort: {postActivity.discomfort || "Not selected yet"}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {errorMessage ? (
          <div className="rounded-[22px] bg-[#FFF4F1] p-4 text-base leading-7 text-rose-800">{errorMessage}</div>
        ) : null}
      </div>
      )}

      {selectedRole === "patient" && currentScreen === "activity" ? (
        <VoiceButton
          floating
          isListening={isListening}
          isThinking={isThinking}
          isSpeaking={isSpeaking}
          onClick={() => (isListening ? stopListening() : startListening({ mode: "agent" }))}
        />
      ) : null}
    </AppShell>
  );
}
