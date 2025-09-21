import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LayoutGrid, Sparkles, BarChart3, UserCog, Upload } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-foreground/90 text-background min-h-[calc(100vh-4rem)]">
          <div className="p-6">
            <a href="/" className="flex items-center gap-2 mb-8">
              <img src="/logo.svg" alt="Hearth & Bound" className="h-6 w-6 invert" />
              <span className="font-sans font-semibold tracking-tight">Hearth & Bound</span>
            </a>
            <nav className="space-y-2">
              <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-background/10 transition-colors" href="#">
                <LayoutGrid className="h-4 w-4" />
                <span className="font-sans">My Creations</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-md bg-background/15 ring-1 ring-background/20" href="#">
                <Sparkles className="h-4 w-4" />
                <span className="font-sans font-semibold">Generate New</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-background/10 transition-colors" href="#">
                <BarChart3 className="h-4 w-4" />
                <span className="font-sans">Analytics</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-background/10 transition-colors" href="#">
                <UserCog className="h-4 w-4" />
                <span className="font-sans">My Profile</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full md:w-3/4 bg-background min-h-[calc(100vh-4rem)]">
          <div className="max-w-5xl mx-auto p-6 md:p-10">
            <h1 className="font-sans font-bold text-2xl md:text-3xl tracking-tight mb-6">
              Generate a New Creation Story
            </h1>

            {/* Upload Card */}
            <Card className="mb-6 border-dashed">
              <CardContent className="p-8">
                <label className="w-full border-2 border-dashed border-border rounded-lg p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-muted/40 transition-colors">
                  <Upload className="h-6 w-6 text-primary" />
                  <span className="font-sans text-sm text-muted-foreground">
                    Click to Upload or Drag and Drop Your Artwork Image Here
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </CardContent>
            </Card>

            {/* Input Form */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="font-sans text-sm text-muted-foreground mb-2 block">
                  Artwork Title
                </label>
                <Input placeholder="e.g., 'Sunset Over Terracotta Hills'" />
              </div>
              <div>
                <label className="font-sans text-sm text-muted-foreground mb-2 block">
                  Key Elements or Keywords (e.g., 'oil on canvas, vibrant colors, sunset')
                </label>
                <Input placeholder="oil on canvas, vibrant colors, sunset" />
              </div>
            </div>

            {/* Generate Button */}
            <Button className="w-full md:w-auto px-6 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              ✨ Generate Story & Marketing Content
            </Button>

            {/* Output Section */}
            <div className="mt-10">
              <h2 className="font-sans font-semibold text-xl mb-4">Your AI-Generated Content</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans text-base">Product Story</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-serif text-sm text-muted-foreground">
                      Your detailed product story will appear here after generation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans text-base">Social Media Post</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-serif text-sm text-muted-foreground">
                      A curated post with tone and emojis will be generated here.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans text-base">Suggested Hashtags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground">#artisan</span>
                      <span className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground">#handmade</span>
                      <span className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground">#craftAI</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
