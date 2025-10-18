"use client"

import { Award, Brain, Smartphone, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Award,
    title: "Certified Instructors",
    description: "Learn from award-winning photographers with decades of experience",
  },
  {
    icon: Brain,
    title: "Interactive Lessons",
    description: "Hands-on projects and real-time feedback to accelerate your learning",
  },
  {
    icon: Smartphone,
    title: "Flexible Learning",
    description: "Study at your own pace, anywhere, on any device",
  },
  {
    icon: MessageCircle,
    title: "Community Support",
    description: "Join thousands of photographers sharing tips and inspiration",
  },
]

export function WhySection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why <span className="text-primary">PhotoWorkshopPro</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Everything you need to transform from beginner to professional photographer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
