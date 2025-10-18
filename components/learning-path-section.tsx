"use client"

import { Lightbulb, Sun, Palette, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Master the Basics",
    description: "Learn composition, framing, and the fundamentals of visual storytelling",
  },
  {
    number: "02",
    icon: Sun,
    title: "Control Light & Exposure",
    description: "Understand aperture, shutter speed, ISO, and how to work with any lighting",
  },
  {
    number: "03",
    icon: Palette,
    title: "Develop Your Style",
    description: "Find your unique voice and create a signature look that stands out",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Edit & Publish",
    description: "Master professional editing tools and build your portfolio",
  },
]

export function LearningPathSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Your <span className="text-primary">Learning Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          A structured path from beginner to professional photographer
        </p>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 mb-12 last:mb-0 group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-16 top-20 w-0.5 h-full bg-border group-hover:bg-primary/50 transition-colors duration-300" />
              )}

              {/* Number and icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-card border-2 border-border group-hover:border-primary flex items-center justify-center transition-all duration-300 relative z-10">
                  <step.icon className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
