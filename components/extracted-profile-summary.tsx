import { CheckCircle2, PencilLine } from "lucide-react";
import { doctorNote } from "@/data/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ExtractedProfileSummary() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Review what we found</CardTitle>
            <CardDescription>{doctorNote.summary}</CardDescription>
          </div>
          <Badge variant="success">Mock OCR complete</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {doctorNote.parsedFields.map((field) => (
          <div key={field.label} className="flex flex-col justify-between gap-3 rounded-[24px] bg-secondary/55 p-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-muted-foreground">{field.label}</p>
              <p className="text-lg font-medium text-foreground">{field.value}</p>
            </div>
            <Button variant="ghost" className="justify-start gap-2 sm:justify-center">
              {field.editable ? <PencilLine className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
              {field.editable ? "Edit" : "Verified"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
