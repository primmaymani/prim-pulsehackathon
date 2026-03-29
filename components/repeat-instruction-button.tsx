import { RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RepeatInstructionButton({ label = "Repeat instructions" }: { label?: string }) {
  return (
    <Button variant="outline" size="sm" className="gap-2 text-sm">
      <RotateCcw className="h-4 w-4" />
      <Volume2 className="h-4 w-4" />
      {label}
    </Button>
  );
}
