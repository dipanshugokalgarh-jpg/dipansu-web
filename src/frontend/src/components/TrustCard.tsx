import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface TrustCardProps {
  emoji: string;
  title: string;
  description: string;
  index: number;
}

export function TrustCard({
  emoji,
  title,
  description,
  index,
}: TrustCardProps) {
  return (
    <Card
      className="bg-card border-border hover:border-primary/40 transition-smooth hover:-translate-y-1 hover:shadow-elevated text-center"
      data-ocid={`trust.card.${index}`}
    >
      <CardContent className="p-6 flex flex-col items-center gap-3">
        <span className="text-4xl" role="img" aria-label={title}>
          {emoji}
        </span>
        <h3 className="text-base font-display font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
