import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

const WA_LINK = "https://wa.me/919306155781";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl font-display font-semibold text-foreground hover:text-primary transition-colors duration-200"
            data-ocid="header.logo.link"
          >
            <span role="img" aria-label="rocket">
              🚀
            </span>
            <span>Dipansu Web</span>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="header.whatsapp.button"
          >
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 transition-smooth"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Contact on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Dipansu Web. All rights reserved.</p>
          <p className="mt-1">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
