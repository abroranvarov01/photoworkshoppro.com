"use client"

import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Globe } from "lucide-react"

const instructors = [
  {
    name: "Ethan Moore",
    specialty: "Portrait & Fashion",
    quote: "Light is everything.",
    image: "/professional-photographer-portrait-black-and-white.jpg",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
  {
    name: "Sarah Chen",
    specialty: "Commercial & Editorial",
    quote: "Capture emotion, not just moments.",
    image: "/female-photographer-professional-portrait-black-an.jpg",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
  {
    name: "Marcus Rodriguez",
    specialty: "Cinematic & Film",
    quote: "Every frame tells a story.",
    image: "/cinematographer-portrait-black-and-white.jpg",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
  {
    name: "Yuki Tanaka",
    specialty: "Street & Documentary",
    quote: "Find beauty in the ordinary.",
    image: "/street-photographer-portrait-black-and-white.jpg",
    social: { instagram: "#", twitter: "#", website: "#" },
  },
]

export function InstructorsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Learn from the <span className="text-primary">Masters</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Award-winning photographers sharing their expertise and passion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg italic text-primary mb-4">"{instructor.quote}"</p>
                  <div className="flex gap-3">
                    <a
                      href={instructor.social.instagram}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={instructor.social.twitter}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={instructor.social.website}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-muted-foreground">{instructor.specialty}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
