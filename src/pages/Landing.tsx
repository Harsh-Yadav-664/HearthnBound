import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Upload, Sparkles, Share2, Palette, Hammer, Brush, ChevronDown, Scissors, PenTool, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { useRef, useEffect, useState } from "react";

export default function Landing() {
  const { isAuthenticated } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Add: global scroll arrow visibility + next-section logic
  const [atBottom, setAtBottom] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10;
      setAtBottom(nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNextSection = () => {
    const ids = ["how-it-works", "live-demo", "future-vision"] as const;
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const currentY = window.scrollY;
    const next = sections.find((el) => el.offsetTop > currentY + 10);

    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Already past last section -> scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  // Add: scroll-to-top when at bottom
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const galleryItems = [
    {
      title: "Handcrafted Pottery",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Earthy ceramic bowls with organic glazing"
    },
    {
      title: "Woven Basket",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Traditional reed basket with intricate patterns"
    },
    {
      title: "Abstract Painting",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "Vibrant acrylic painting with flowing forms"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen parallax-container">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="font-sans font-bold text-xl text-foreground">Hearth & Bound</span>
            </div>
            {isAuthenticated ? (
              <Button 
                variant="default"
                className="font-sans"
              >
                Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                asChild
                variant="outline"
                className="font-sans"
              >
                <a href="#how-it-works">
                  How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight leading-tight">
              From Hands to Hearts.
              <br />
              <span className="text-primary">Your Craft, Your Story,</span>
              <br />
              Amplified by AI.
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            CraftAI helps local artisans turn their beautiful creations into compelling digital stories, 
            ready for social media and online marketplaces. No marketing experience needed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              asChild
              size="lg" 
              className="font-sans text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#live-demo">
                See the Magic
                <Sparkles className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
        
        {/* Floating craft icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-primary/30"
        >
          <Hammer className="h-16 w-16" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/4 text-accent/40"
        >
          <Brush className="h-12 w-12" />
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-muted/30 relative">
        {/* Subtle background tool icons */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Brush className="absolute -top-6 left-8 h-20 w-20 text-foreground/5" />
          <Hammer className="absolute top-1/2 -translate-y-1/2 -left-6 h-24 w-24 text-foreground/5" />
          <PenTool className="absolute bottom-8 right-12 h-20 w-20 text-foreground/5" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-foreground mb-4 tracking-tight">
              Create a Masterpiece. We'll Write the Legend.
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "1. Upload Your Craft",
                description: "Simply upload a photo of your work. That's all we need."
              },
              {
                icon: Sparkles,
                title: "2. AI Generates Your Story",
                description: "Our AI analyzes your art to write compelling descriptions, social media posts, and titles."
              },
              {
                icon: Share2,
                title: "3. Share & Sell",
                description: "Copy your new marketing content and post it directly to Instagram, Etsy, or your own website."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-3d border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" className="py-24 relative">
        {/* Subtle background tool icons */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Scissors className="absolute -top-4 right-10 h-16 w-16 text-foreground/5 rotate-12" />
          <Brush className="absolute bottom-6 left-10 h-24 w-24 text-foreground/5 -rotate-6" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-foreground mb-4 tracking-tight">
              Try Hearth & Bound Live
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              See how it works with these examples. (In our prototype, these are pre-loaded examples)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Pottery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover-3d"
            >
              <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/pottery.jpg"
                    alt="Handcrafted Pottery"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-sans font-semibold text-lg text-foreground">
                    Handcrafted Pottery
                  </h3>
                  <div className="space-y-2">
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      Crafted from locally sourced clay, this vessel carries the warmth of the earth. Each curve is shaped by hand, echoing ancient techniques passed down through generations, making it not just a pot, but a piece of history for your home.
                    </p>
                    <div className="rounded-md border border-border/70 bg-muted/30 p-3">
                      <p className="font-serif text-xs text-foreground">
                        Social Media Snippet: From my hands to your home. ✨ This earth-fired ceramic piece is finally ready. #HandmadePottery #CeramicArt #ShopLocal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Woven Basket */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover-3d"
            >
              <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/basket.jpg"
                    alt="Woven Basket"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-sans font-semibold text-lg text-foreground">
                    Woven Basket
                  </h3>
                  <div className="space-y-2">
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      Woven with over 3,000 individual strands of sustainably harvested seagrass, this basket is a testament to patience and tradition. It's strong enough for a market run and beautiful enough to be a centerpiece.
                    </p>
                    <div className="rounded-md border border-border/70 bg-muted/30 p-3">
                      <p className="font-serif text-xs text-foreground">
                        Social Media Snippet: It's all in the details. 🌿 Took over 40 hours to weave this beauty. #WovenBasket #SustainableCraft #ArtisanMade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Graffiti Art */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="hover-3d"
            >
              <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/assets/painting.jpg"
                    alt="Graffiti Art - Urban Bloom"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-sans font-semibold text-lg text-foreground">
                    Graffiti Art — "Urban Bloom"
                  </h3>
                  <div className="space-y-2">
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      This piece, titled 'Urban Bloom,' uses a vibrant mixed-media technique to capture the chaotic beauty of a city wall in full expression. Each layer is an emotion, a feeling of life bursting forward.
                    </p>
                    <div className="rounded-md border border-border/70 bg-muted/30 p-3">
                      <p className="font-serif text-xs text-foreground">
                        Social Media Snippet: 'Urban Bloom' is alive! 🎨 I wanted to capture the electric energy of the street. #StreetArt #GraffitiArt #ModernArt
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Future Vision Section */}
      <section id="future-vision" className="py-24 bg-muted/20 relative">
        {/* Subtle background tool icons */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Hammer className="absolute top-10 left-1/3 h-20 w-20 text-foreground/5 -rotate-12" />
          <PenTool className="absolute bottom-8 right-1/4 h-16 w-16 text-foreground/5 rotate-6" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-foreground tracking-tight">
              Our Future Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hover-3d rounded-lg border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/assets/room.jpg"
                  alt="Immersive 3D gallery preview"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="font-serif italic text-sm text-center text-muted-foreground p-4">
                A preview of the interactive 3D gallery experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hover-3d rounded-lg border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/assets/animation.jpg"
                  alt="AI-Animated Stories preview"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="font-serif italic text-sm text-center text-muted-foreground p-4">
                Dynamic visual narratives for every artisan&apos;s journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hover-3d rounded-lg border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/assets/certificate.jpg"
                  alt="AI Authenticity Certificates preview"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="font-serif italic text-sm text-center text-muted-foreground p-4">
                Verifiable proof of origin and unique artistry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Palette className="h-6 w-6 text-primary" />
              <span className="font-sans font-semibold text-foreground">Hearth & Bound</span>
            </div>
            <p className="font-serif text-sm text-muted-foreground text-center md:text-right">
              Empowering Artisans Worldwide.
            </p>
          </div>
        </div>
      </footer>

      {!atBottom && (
        <motion.button
          onClick={handleNextSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.95, y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-foreground/80 hover:text-foreground bg-background/70 border border-border/70 backdrop-blur-md"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      )}

      {atBottom && (
        <motion.button
          onClick={handleScrollTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.95, y: [6, 0, 6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-foreground/80 hover:text-foreground bg-background/70 border border-border/70 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}