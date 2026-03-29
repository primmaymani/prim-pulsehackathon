import { Heart, MessageCircleMore } from "lucide-react";
import { encouragementMessages } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EncouragementFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Words from your circle</CardTitle>
        <Button variant="outline">Share today’s progress</Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        {encouragementMessages.map((message) => (
          <div key={message.id} className="rounded-[24px] bg-[#FFF9EC] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-medium">{message.author}</p>
                <p className="text-sm text-muted-foreground">
                  {message.relationship} · {message.timeAgo}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-4 w-4 text-rose-400" />
                  Warm support
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircleMore className="h-4 w-4 text-primary" />
                  {message.role}
                </span>
              </div>
            </div>
            <p className="mt-4 text-base leading-7 text-slate-700">{message.message}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
