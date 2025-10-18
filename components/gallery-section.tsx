"use client"

const photos = [
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", author: "Emma L." },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", author: "David K." },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop", author: "Sofia M." },
  { src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=400&fit=crop", author: "James R." },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop", author: "Lily W." },
  { src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop", author: "Alex T." },
  { src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop", author: "Nina P." },
  { src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&h=400&fit=crop", author: "Ryan H." },
]

export function GallerySection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Student <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Incredible work from our photography community
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={`Photo by ${photo.author}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm font-semibold">
                  Captured by <span className="text-primary">{photo.author}</span> 📸
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
