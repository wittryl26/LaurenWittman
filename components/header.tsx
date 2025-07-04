"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  navLinks: { name: string; href: string }[]
}

export function Header({ navLinks }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/sothebys-logo-white.png"
              alt="Premier Sotheby's International Realty"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div className="border-l-2 border-white pl-4">
              <span className="block font-bold text-white text-lg leading-tight tracking-wider">LAUREN WITTMAN</span>
              <span className="block text-gray-200 text-sm leading-tight tracking-wide">SOUTH FL REALTOR</span>
            </div>
          </Link>

          {/* Menu Button - Larger Size */}
          <div>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20 p-4"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div className="bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-lg font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wide border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
