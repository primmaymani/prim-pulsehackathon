"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Camera, CheckCircle2, FileText, HeartHandshake, UserRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfileManagerPage() {
  const router = useRouter();
  const medicalRecordInputRef = useRef<HTMLInputElement | null>(null);
  const doctorNoteInputRef = useRef<HTMLInputElement | null>(null);
  const [medicalRecordCaptured, setMedicalRecordCaptured] = useState(false);
  const [doctorNoteCaptured, setDoctorNoteCaptured] = useState(false);
  const [creatingProfile, setCreatingProfile] = useState(false);

  const readyToCreate = medicalRecordCaptured && doctorNoteCaptured;

  function openMedicalRecordCamera() {
    medicalRecordInputRef.current?.click();
  }

  function openDoctorNoteCamera() {
    doctorNoteInputRef.current?.click();
  }

  function handleCreateProfile() {
    setCreatingProfile(true);
    window.setTimeout(() => {
      router.push("/home");
    }, 1200);
  }

  return (
    <AppShell>
      <div className="space-y-5">
        <Card className="border-none bg-hero-glow">
          <CardContent className="space-y-4 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Profile manager</p>
            <h1 className="font-serif text-[2rem] leading-tight text-slate-900 sm:text-4xl">Create a new patient profile before entering the app</h1>
            <p className="text-lg leading-8 text-slate-700 sm:text-xl">
              This intake page lives outside the main experience. Take a photo of the medical record and the doctor’s note, and PulseCircle prepares Maria’s profile before logging into the home page.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#FFF8E7]">
          <CardHeader>
            <CardTitle className="text-[2rem]">Capture patient paperwork</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              ref={medicalRecordInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={() => setMedicalRecordCaptured(true)}
            />
            <input
              ref={doctorNoteInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={() => setDoctorNoteCaptured(true)}
            />

            <div className="rounded-[24px] bg-white p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <UserRound className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-serif text-[2rem] leading-tight text-slate-900 sm:text-3xl">Medical record</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground sm:text-lg">
                    Tap the camera button to prompt the device camera and capture the patient’s medical record.
                  </p>
                  <Button size="lg" className="mt-4 h-auto min-h-14 w-full whitespace-normal px-5 py-4 text-base leading-6 sm:text-lg" onClick={openMedicalRecordCamera}>
                    <Camera className="mr-2 h-5 w-5 shrink-0" />
                    <span className="text-left">Open camera for medical record</span>
                  </Button>
                  {medicalRecordCaptured ? (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                      <CheckCircle2 className="h-4 w-4" />
                      Medical record captured
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="rounded-full bg-secondary p-3 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-serif text-[2rem] leading-tight text-slate-900 sm:text-3xl">Doctor’s note</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground sm:text-lg">
                    Tap the camera button to prompt the device camera and capture the doctor’s note that defines Maria’s prescribed rehab progression.
                  </p>
                  <Button size="lg" variant="outline" className="mt-4 h-auto min-h-14 w-full whitespace-normal px-5 py-4 text-base leading-6 sm:text-lg" onClick={openDoctorNoteCamera}>
                    <Camera className="mr-2 h-5 w-5 shrink-0" />
                    <span className="text-left">Open camera for doctor’s note</span>
                  </Button>
                  {doctorNoteCaptured ? (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                      <CheckCircle2 className="h-4 w-4" />
                      Doctor’s note captured
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[2rem]">Auto-created profile preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-[24px] bg-secondary/50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Mocked extracted details</p>
              <div className="mt-3 space-y-2 text-base text-slate-700 sm:text-lg">
                <p>Patient: Maria Alvarez</p>
                <p>Program: Home cardiac rehabilitation</p>
                <p>Prescribed activity: 20-minute walk</p>
                <p>Progression note: Gentle pacing with symptom monitoring and post-activity reflection</p>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#EEF7F4] p-5 text-base leading-8 text-slate-700 sm:text-lg">
              Once both images are captured, PulseCircle can prepare the patient profile and log into the existing home experience.
            </div>

            <div className="grid gap-3">
              <Button size="lg" className="h-auto min-h-14 whitespace-normal px-5 py-4 text-base leading-6 sm:text-lg" disabled={!readyToCreate || creatingProfile} onClick={handleCreateProfile}>
                <HeartHandshake className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-left">{creatingProfile ? "Creating profile..." : "Create profile and enter home"}</span>
              </Button>
              <Button size="lg" variant="outline" className="h-auto min-h-14 whitespace-normal px-5 py-4 text-base leading-6 sm:text-lg" asChild>
                <Link href="/">Back to login entry</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
