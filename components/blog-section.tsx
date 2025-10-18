"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

const articles = [
  {
    title: "Top 10 Mistakes Every Beginner Photographer Makes",
    excerpt: "Avoid these common pitfalls and accelerate your learning journey",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=300&fit=crop",
    readTime: "8 min read",
    category: "Tips",
  },
  {
    title: "How to Build a Home Studio Under $100",
    excerpt: "Professional results without breaking the bank",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=300&fit=crop",
    readTime: "6 min read",
    category: "Gear",
  },
  {
    title: "The Secret to Capturing Emotion in Photos",
    excerpt: "Technical skills meet emotional storytelling",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&h=300&fit=crop",
    readTime: "10 min read",
    category: "Technique",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Photography <span className="text-primary">Insights</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Tips, tutorials, and inspiration from our expert instructors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
