"use client"

import { Button } from "@/components/ui/button"
import { Camera, Play } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <img
          src="/photographer-with-camera-at-golden-hour-sunset-cin.jpg"
          alt="Photographer at sunset"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary/20" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Photo<span className="text-primary">Workshop</span>Pro
          </h1>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          Capture the World <br />
          <span className="text-primary glow-effect">Like a Pro</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Online photography courses from the best masters in the industry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Camera className={`mr-2 h-5 w-5 ${isHovered ? "shutter-effect" : ""}`} />
            Start Learning
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Intro Video
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
