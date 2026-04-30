import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustCard } from "@/components/TrustCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, Image, MessageCircle, Video } from "lucide-react";
import { motion } from "motion/react";

const WA_LINK = "https://wa.me/919306155781";

const SERVICES = [
  {
    icon: <Image className="w-6 h-6" />,
    title: "Thumbnail Design",
    price: "$5 – $10",
    description:
      "YouTube, Instagram, Songs — eye-catching designs that get clicks and boost your CTR.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Editing",
    price: "$10 – $30",
    description:
      "Professional cuts, transitions, and color grading for any platform — reels, shorts, or long-form.",
  },
];

const TRUST_ITEMS = [
  {
    emoji: "⚡",
    title: "Fast Turnaround",
    description:
      "24–48 hour delivery on most projects so you never miss a posting schedule.",
  },
  {
    emoji: "✨",
    title: "High Quality",
    description:
      "Pixel-perfect, professional results that stand out in crowded feeds.",
  },
  {
    emoji: "💬",
    title: "Easy Communication",
    description:
      "Direct WhatsApp support — message anytime and get a quick response.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Background radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, oklch(0.22 0.04 142 / 0.35), transparent 70%)",
          }}
        />
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden mb-10 border border-border shadow-elevated"
        >
          <img
            src="/assets/generated/hero-editing.dim_1200x600.jpg"
            alt="Professional video editing and thumbnail design"
            className="w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.12 0 0 / 0.85) 0%, oklch(0.12 0 0 / 0.1) 50%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-4">
            High Quality <span className="text-primary">Thumbnails</span> &{" "}
            <span className="text-primary">Video Editing</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Professional Thumbnail &amp; Video Editing Services — YouTube,
            Instagram, Songs, Reels and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.cta.primary_button"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8 transition-smooth hover:scale-105 shadow-elevated"
              >
                <MessageCircle className="w-5 h-5" />
                Get Started on WhatsApp
              </Button>
            </a>
            <a href="#services" data-ocid="hero.services.link">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary gap-2 text-base px-8 transition-smooth"
              >
                View Services <ChevronDown className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-muted/30 py-20 px-4"
        data-ocid="services.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-3">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional creative services designed to grow your online
              presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ServiceCard {...service} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section
        id="why-us"
        className="bg-background py-20 px-4"
        data-ocid="trust.section"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-3">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We deliver quality work that helps creators and brands stand out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TrustCard {...item} index={i + 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="bg-muted/30 py-24 px-4"
        data-ocid="contact.section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl border border-primary/20 p-10 sm:p-14"
              style={{
                background:
                  "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.18 0.03 142 / 0.3), oklch(0.16 0.02 250 / 0.8))",
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-3">
                Ready to Order?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Click below to start a conversation — we respond fast.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp.primary_button"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-10 py-6 h-auto transition-smooth hover:scale-105 shadow-elevated"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contact Now on WhatsApp
                </Button>
              </a>
              <p className="mt-5 text-muted-foreground text-sm tracking-wide">
                +91 9306155781
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
