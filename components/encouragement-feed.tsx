import { Heart, MessageCircleMore } from "lucide-react";
import { encouragementMessages } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EncouragementFeed() {
  return (
    <Card>
      <CardHeader className="gap-3">
        <CardTitle className="text-3xl">Words from your circle</CardTitle>
        <Button variant="outline" className="h-12 w-full text-base">Share today’s progress</Button>
      </CardHeader>
      <CardContent className="grid gap-4">
        {encouragementMessages.map((message) => (
          <div key={message.id} className="rounded-[24px] bg-[#FFF9EC] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xl font-medium">{message.author}</p>
                <p className="text-base text-muted-foreground">
                  {message.relationship} · {message.timeAgo}
                </p>
              </div>
              <div className="flex items-center gap-3 text-base text-muted-foreground">
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
            <p className="mt-4 text-lg leading-8 text-slate-700">{message.message}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
