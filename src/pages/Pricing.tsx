import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-foreground">
            Find the Plan That's Right for You
          </h1>
          <p className="font-serif text-lg text-muted-foreground mt-4">
            Start for free and scale as you grow.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Hobbyist */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-sans tracking-tight">Hobbyist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-sans text-3xl">$0 <span className="text-base text-muted-foreground">/ month</span></div>
                <ul className="text-left space-y-2 font-serif text-sm text-foreground">
                  <li>• 5 AI Generations per month</li>
                  <li>• Standard Story Generation</li>
                  <li>• Community Support</li>
                </ul>
                <Button variant="outline" className="w-full">Start for Free</Button>
              </CardContent>
            </Card>

            {/* Artisan - Most Popular */}
            <Card className="relative border border-border shadow-sm bg-card/90 backdrop-blur-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-sans">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="font-sans tracking-tight">Artisan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-sans text-3xl">$19 <span className="text-base text-muted-foreground">/ month</span></div>
                <ul className="text-left space-y-2 font-serif text-sm text-foreground">
                  <li>• 50 AI Generations per month</li>
                  <li>• Advanced Story Generation</li>
                  <li>• Social Media Content Suite</li>
                  <li>• Basic Analytics</li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Choose Artisan Plan
                </Button>
              </CardContent>
            </Card>

            {/* Studio */}
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-sans tracking-tight">Studio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-sans text-3xl">$49 <span className="text-base text-muted-foreground">/ month</span></div>
                <ul className="text-left space-y-2 font-serif text-sm text-foreground">
                  <li>• Unlimited AI Generations</li>
                  <li>• Access to AI-Animated Stories (Beta)</li>
                  <li>• Access to 3D Galleries (Beta)</li>
                  <li>• Priority Support</li>
                </ul>
                <Button variant="outline" className="w-full">Choose Studio Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
