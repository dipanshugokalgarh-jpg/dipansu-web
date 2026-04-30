import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

const WA_LINK = "https://wa.me/919306155781";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  price,
  description,
  index,
}: ServiceCardProps) {
  return (
    <Card
      className="bg-card border-border hover:border-primary/50 transition-smooth hover:-translate-y-1 hover:shadow-elevated group"
      data-ocid={`services.card.${index}`}
    >
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-smooth group-hover:bg-primary/20">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground">
            {title}
          </h3>
          <Badge
            variant="secondary"
            className="mt-1 bg-primary/15 text-primary border-primary/20 font-semibold"
          >
            {price}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`services.order_button.${index}`}
        >
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth">
            <MessageCircle className="w-4 h-4" />
            Order This Service
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
