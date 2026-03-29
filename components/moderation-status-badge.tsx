import { Badge } from "@/components/ui/badge";

export function ModerationStatusBadge({ status }: { status: "approved" | "review" | "flagged" }) {
  if (status === "approved") return <Badge variant="success">Approved</Badge>;
  if (status === "review") return <Badge variant="warning">In review</Badge>;
  return <Badge variant="danger">Flagged</Badge>;
}
