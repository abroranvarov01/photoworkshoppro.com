import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { CoursesSection } from "@/components/courses-section"
import { VideoSection } from "@/components/video-section"
import { InstructorsSection } from "@/components/instructors-section"
import { LearningPathSection } from "@/components/learning-path-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhySection />
      <CoursesSection />
      <VideoSection />
      <InstructorsSection />
      <LearningPathSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
