import { FileHeart, ImagePlus, ScanSearch } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RepeatInstructionButton } from "@/components/repeat-instruction-button";

export function MedicalRecordUploadCard() {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-[#FFF8EE] via-[#F5F0E5] to-[#EAF4F1]">
      <CardHeader>
        <CardTitle>Share your care note</CardTitle>
        <CardDescription>
          You can take a photo or upload a picture of your hospital discharge plan or rehab note. Nurse Clara will turn it into a simple home plan for you to review.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 rounded-[24px] border border-dashed border-primary/30 bg-white/80 p-6 text-sm text-muted-foreground sm:grid-cols-3">
          <div className="rounded-[22px] bg-[#EEF7F4] p-4">
            <FileHeart className="mb-3 h-7 w-7 text-primary" />
            Bring a clear photo of the page with your name and rehab instructions.
          </div>
          <div className="rounded-[22px] bg-[#F7F3E8] p-4">
            <ScanSearch className="mb-3 h-7 w-7 text-primary" />
            We will read the note and pull out only the parts needed for your plan.
          </div>
          <div className="rounded-[22px] bg-[#EFF4FA] p-4">
            <ImagePlus className="mb-3 h-7 w-7 text-primary" />
            You will get a chance to fix anything before your profile is created.
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="flex-1 justify-center">Take a photo</Button>
          <Button size="lg" variant="secondary" className="flex-1 justify-center">Upload from device</Button>
          <RepeatInstructionButton />
        </div>
      </CardContent>
    </Card>
  );
}
