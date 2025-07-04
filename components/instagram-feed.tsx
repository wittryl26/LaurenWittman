"use client"

import { useEffect } from "react"

interface InstagramFeedProps {
  beholdId: string
}

export function InstagramFeed({ beholdId }: InstagramFeedProps) {
  useEffect(() => {
    // Load Behold script
    const script = document.createElement("script")
    script.src = "https://w.behold.so/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="instagram" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">Follow on Instagram</h2>
        <a
          href="https://instagram.com/realrealtywithlauren"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-secondary hover:text-brand-primary text-lg mb-8 inline-block"
        >
          @realrealtywithlauren
        </a>

        {/* Behold Instagram Feed */}
        <div className="behold-widget" data-behold-id={beholdId} />

        {/* Fallback content while loading */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto behold-fallback">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
