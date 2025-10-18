"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Beginner → Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    quote:
      "Thanks to PhotoWorkshopPro, I finally understood how to work with light. Now my photos are featured in exhibitions.",
    rating: 5,
  },
  {
    name: "Jessica Park",
    role: "Hobbyist → Wedding Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
    },
    quote:
      "The courses gave me the confidence to start my own wedding photography business. Best investment I ever made.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Amateur → Commercial Photographer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    },
    quote: "The editing techniques I learned transformed my work completely. Clients can't believe the difference.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Student <span className="text-primary">Success Stories</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Real transformations from our photography community
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative">
                  <img
                    src={testimonial.beforeAfter.before || "/placeholder.svg"}
                    alt="Before"
                    className="w-full h-40 object-cover rounded"
                  />
                  <div className="absolute top-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={testimonial.beforeAfter.after || "/placeholder.svg"}
                    alt="After"
                    className="w-full h-40 object-cover rounded"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    After
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
