"use client"

import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-card border border-border rounded-lg p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <Camera className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-sm leading-relaxed mb-4">
              This site uses cookies to enhance your photography experience 🍪
            </p>
            <Button
              onClick={handleAccept}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shutter-effect"
            >
              Accept 📸
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
