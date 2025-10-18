"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          See How Our <span className="text-primary">Courses Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Get a behind-the-scenes look at our interactive learning experience
        </p>

        <div className="max-w-5xl mx-auto relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
          <div className="relative overflow-hidden rounded-lg">
            <img src="/photography-studio-classroom-teaching-camera-techn.jpg" alt="Course preview" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            {/* Play button */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
