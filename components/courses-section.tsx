"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"

const courses = [
  {
    title: "Mastering Portrait Photography",
    instructor: "Sarah Chen",
    duration: "8 weeks",
    students: "2,450",
    rating: "4.9",
    image: "/studio-portrait-lighting.png",
    level: "Intermediate",
  },
  {
    title: "Cinematic Lighting for Beginners",
    instructor: "Marcus Rodriguez",
    duration: "6 weeks",
    students: "3,120",
    rating: "4.8",
    image: "/cinematic-lighting-setup-film-photography.jpg",
    level: "Beginner",
  },
  {
    title: "Street Photography 101",
    instructor: "Yuki Tanaka",
    duration: "4 weeks",
    students: "1,890",
    rating: "4.9",
    image: "/urban-street-photography-candid-moments.jpg",
    level: "Beginner",
  },
  {
    title: "Editing Like a Pro in Lightroom",
    instructor: "Emma Wilson",
    duration: "10 weeks",
    students: "4,200",
    rating: "5.0",
    image: "/photo-editing-lightroom-workspace-professional.jpg",
    level: "All Levels",
  },
]

export function CoursesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Popular <span className="text-primary">Courses</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Start your journey with our most loved photography courses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    {course.rating}
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Enroll Now</Button>
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
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
