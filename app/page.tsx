import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Header } from "@/components/header"
import { InstagramFeed } from "@/components/instagram-feed"

// Data for components - In a real application, this would come from a Headless CMS.
export const navLinks = [
  { name: "About Lauren", href: "#about" },
  { name: "Market Trends", href: "#trends" },
  { name: "Featured Listings", href: "#featured" },
  { name: "Recent Sales", href: "#sales" },
  { name: "Why Choose Me", href: "#why-choose-me" },
  { name: "Client Reviews", href: "#reviews" },
  { name: "Naples Map", href: "#map" },
]

const featuredListings = [
  {
    image: "/placeholder.svg?height=300&width=400",
    address: "124 11TH ST MIAMI BEACH, FL 33139",
    type: "Luxury Home",
    price: "$22,950,000",
    tourLink: "#",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    address: "1 HARBOURSIDE DRIVE # 1501",
    type: "Condo",
    price: "$649,900",
    tourLink: "#",
  },
]

const recentSales = [
  {
    image: "/placeholder.svg?height=200&width=300",
    price: "SOLD $1,375,000",
    type: "Modern Home",
    details: "4 Beds | 2 Baths | Pool",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    price: "SOLD $1,100,000",
    type: "Coastal Home",
    details: "4 Beds | 3 Baths | Pool",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    price: "SOLD $800,000",
    type: "Home with Acreage",
    details: "4 Beds | 3 Baths | Pool",
  },
]

const clientReviews = [
  {
    name: "Rob Frohn",
    role: "Seller",
    text: "Selling or buying in South Florida? We can wholeheartedly recommend Lauren. Her dedication, knowledge and style will deliver the best results. Calm and analytical, always anticipating what could come next and have a plan ready. She gets 5 stars, fully deserved for selling our Deerfield Beach home.",
  },
  {
    name: "Antoinette Nero",
    role: "Buyer",
    text: "Lauren is a very professional and insightful realtor. She has a keen understanding for what the client is searching. I highly recommend Lauren.",
  },
  {
    name: "Hannah Flagstad",
    role: "Buyer",
    text: "Lauren is the best! She is extremely professional and dedicated to getting her clients the best. She has wonderful resources and connections, and I could not recommend her enough! We will definitely reach out to her next time as well!",
  },
]

const newFeaturedListings = [
  {
    mls: "A1234567",
    image: "/placeholder.svg?height=400&width=500",
    price: "$5,200,000",
    address: "456 Ocean Drive, Miami Beach, FL",
  },
  {
    mls: "B7654321",
    image: "/placeholder.svg?height=400&width=500",
    price: "$3,100,000",
    address: "123 Biscayne Blvd, Miami, FL",
  },
  {
    mls: "C9876543",
    image: "/placeholder.svg?height=400&width=500",
    price: "$7,500,000",
    address: "789 Star Island Dr, Miami Beach, FL",
  },
  {
    mls: "D4567890",
    image: "/placeholder.svg?height=400&width=500",
    price: "$950,000",
    address: "321 Coral Way, Coral Gables, FL",
  },
  {
    mls: "E1122334",
    image: "/placeholder.svg?height=400&width=500",
    price: "$1,800,000",
    address: "555 Brickell Key Dr, Miami, FL",
  },
]

export default function RealEstatePage() {
  return (
    <div className="bg-white text-brand-black font-sans">
      <Header navLinks={navLinks} />
      <main>
        <HeroSection />
        <TableOfContents />
        <AboutSection />
        <MarketTrendsSection />
        <PropertyWorthSection />
        <LaurenFeaturedListings />
        <FindHomeSection />
        <RecentSalesSection />
        <WhyLaurenSection />
        <ClientReviews />
        <NaplesMapSection />
        <ReadyToHireSection />
        <NewFeaturedListingsCarousel />
        <InstagramFeedSection />
        <Footer />
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[400px] flex items-center justify-center text-center">
      <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yes-SMBTrnzJcfPZ122E1a7a6LcgvL5MTb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-lg">
          BRINGING COASTAL LIVING
          <br />
          CLOSER TO HOME!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/90 border-white text-brand-primary hover:bg-white font-semibold backdrop-blur-sm"
          >
            FREE HOME EVALUATION
          </Button>
          <Button
            size="lg"
            className="bg-brand-secondary/90 text-white hover:bg-brand-secondary font-semibold backdrop-blur-sm"
          >
            BUY A HOME
          </Button>
        </div>
      </div>
    </section>
  )
}

function TableOfContents() {
  return (
    <section id="toc" className="relative py-16 md:py-24 bg-gray-50">
      <Image
        src="/placeholder.svg?height=400&width=1920"
        alt="Sand with 'Florida' written in it"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-30"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-8 text-center">
            TABLE OF CONTENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="group">
                <div className="flex justify-between items-center py-2 border-b-2 border-transparent">
                  <span className="text-lg font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                    {link.name}
                  </span>
                  <MoveRight className="w-6 h-6 text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6 text-lg font-light">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">ABOUT LAUREN:</h2>
            <p>
              Hey there! I'm Lauren Wittman, your neighborhood real estate advisor from South Florida. I've taken my
              deep connection with Florida's unique culture and combined it with my passion for helping people find
              their perfect home.
            </p>
            <p>
              Giving back is a big part of who I am, and I'm proud to support local causes that are close to my heart. I
              enjoy hosting events that blend community spirit with real estate, like inviting a local animal rescue to
              showcase some adoptable dogs at one of my Brokers Opens!
            </p>
            <p>
              Luxury real estate is exciting, but I believe in redefining it with authenticity, empathy, and a genuine
              love for people.
            </p>
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-2">My Promise to You:</h3>
              <p>
                Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, I'm
                committed to making your real estate dreams come true. I'll take care of all the details and work
                tirelessly to get you the best possible outcome.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Lauren Wittman"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="mb-4 space-y-2">
            <p className="font-semibold">Vanderbilt</p>
            <p>325 Vanderbilt Beach Road</p>
            <p>Naples FL 34108</p>
            <p>Office (847) 714-3014</p>
            <p>Cell (847) 714-3014</p>
            <p>Email: realrealtywithlauren@gmail.com</p>
          </div>
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.facebook.com/lauren.wittman.52/"
              target="_blank"
              className="text-white hover:text-gray-300"
            >
              <Facebook className="w-8 h-8" />
            </Link>
            <Link
              href="https://instagram.com/realrealtywithlauren?igshid=MjEwN2IyYWYwYw=="
              target="_blank"
              className="text-white hover:text-gray-300"
            >
              <Instagram className="w-8 h-8" />
            </Link>
            <Link href="mailto:realrealtywithlauren@gmail.com" className="text-white hover:text-gray-300">
              <Mail className="w-8 h-8" />
            </Link>
          </div>
          <p className="mt-6 text-sm">Premier Sotheby's International Realty</p>
        </div>
      </div>
    </section>
  )
}

function MarketTrendsSection() {
  return (
    <section id="trends" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl md:text-2xl font-serif text-brand-primary max-w-3xl mx-auto mb-8">
          Did you know that median single-family sales prices are expected to continue to increase by 6% in 2025?
        </p>
        <div className="relative max-w-5xl mx-auto">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Collage of modern home interiors"
            width={1000}
            height={500}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-auto" preserveAspectRatio="none">
              <path
                d="M 5 40 Q 25 10, 45 25 T 85 15 L 95 5"
                stroke="#012169"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function PropertyWorthSection() {
  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1920')" }}
    >
      <div className="container mx-auto px-4 text-center bg-black/30 py-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">What's your Property Worth?</h2>
        <div className="max-w-2xl mx-auto bg-white/90 p-4 rounded-full shadow-lg">
          <form className="flex items-center">
            <label htmlFor="property-address" className="font-semibold text-brand-primary pl-4 pr-2">
              Property Address:
            </label>
            <Input
              id="property-address"
              type="text"
              placeholder="Enter your address to find out..."
              className="flex-grow bg-transparent border-none focus:ring-0 text-lg"
            />
            <Button type="submit" className="bg-brand-secondary text-white rounded-full px-6">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function LaurenFeaturedListings() {
  return (
    <section id="featured" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-12">
          LAUREN'S FEATURED LISTINGS
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredListings.map((listing, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.type}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                />
                <Link
                  href={listing.tourLink}
                  className="absolute top-4 right-4 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
                >
                  VIRTUAL TOUR
                </Link>
              </div>
              <p className="font-semibold">{listing.address}</p>
              <p className="text-brand-secondary">{listing.type}</p>
              <p className="text-2xl font-bold text-brand-primary mt-2">{listing.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FindHomeSection() {
  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=300&width=1920')" }}
    >
      <div className="container mx-auto px-4 text-center bg-black/30 py-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Find Your Next Home</h2>
        <div className="max-w-2xl mx-auto bg-white/90 p-4 rounded-full shadow-lg">
          <form className="flex items-center">
            <label htmlFor="search-home" className="font-semibold text-brand-primary pl-4 pr-2">
              Search:
            </label>
            <Input
              id="search-home"
              type="text"
              placeholder="City, Neighborhood, Address, MLS #"
              className="flex-grow bg-transparent border-none focus:ring-0 text-lg"
            />
            <Button type="submit" className="bg-brand-secondary text-white rounded-full px-6">
              Go
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function RecentSalesSection() {
  return (
    <section id="sales" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-12">LAUREN'S RECENT SALES</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentSales.map((sale, index) => (
            <div key={index} className="text-center">
              <Image
                src={sale.image || "/placeholder.svg"}
                alt={sale.type}
                width={300}
                height={200}
                className="rounded-lg shadow-lg w-full object-cover aspect-[3/2] mb-4"
              />
              <p className="font-bold text-brand-primary">{sale.price}</p>
              <p className="font-semibold">{sale.type}</p>
              <p className="text-brand-secondary">{sale.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyLaurenSection() {
  return (
    <section id="why-choose-me" className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">WHAT MAKES LAUREN DIFFERENT?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Florida inlet"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
          <div className="space-y-6 text-lg">
            <p>Lauren is a top producing agent on a team of over 85 agents.</p>
            <p>Lauren has successfully double represented multiple buyer/sellers.</p>
            <p>Lauren has found Buyers in less than 24 hours for luxury listings.</p>
            <p>Lauren cares MORE about your endorsement than a check.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClientReviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary text-center mb-12">
          WHAT CLIENTS SAY
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clientReviews.map((review, index) => (
            <Card key={index} className="bg-white p-6 shadow-lg">
              <CardContent className="p-0">
                <p className="text-brand-black mb-4 italic">"{review.text}"</p>
                <p className="font-bold font-serif text-brand-primary">{review.name}</p>
                <p className="text-sm text-brand-secondary">{review.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function NaplesMapSection() {
  return (
    <section id="map" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary text-center mb-4">
          NAPLES NEIGHBORHOOD MAP
        </h2>
        <p className="text-center text-brand-secondary mb-12">
          Click on the neighborhood names to see the homes for sale in each Neighborhood.
        </p>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Map of Naples, Florida"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Pelican Bay</h3>
              <p>
                This upscale community is known for its luxurious homes and access to the beach. Pelican Bay features
                beautiful design and landscaping, along with amenities like private beach access, dining, and
                recreational facilities.
              </p>
            </div>
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Autumn Woods</h3>
              <p>
                A family-friendly neighborhood, Autumn Woods features single-family homes and a strong sense of
                community. Residents enjoy amenities like walking trails, a clubhouse, a community pool, and proximity
                to top-rated schools and parks.
              </p>
            </div>
            {/* Add more neighborhoods as needed */}
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Old Naples</h3>
              <p>
                Characterized by charming, historic architecture, Old Naples offers a vibrant atmosphere with boutique
                shops, restaurants, and art galleries. It's close to the beach and features stunning waterfront views.
              </p>
            </div>
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Grey Oaks</h3>
              <p>
                An upscale golf community, Grey Oaks features luxurious homes nestled among picturesque landscapes. It
                boasts three championship golf courses, a clubhouse, and a variety of recreational amenities, catering
                to an active lifestyle.
              </p>
            </div>
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Lely Resort</h3>
              <p>
                Known for its resort-style living, Lely Resort boasts a mix of single-family homes, condos, and golf
                courses. The community offers numerous amenities, including a spa, fitness center, and tennis courts,
                while also being close to nature preserves.
              </p>
            </div>
            <div>
              <h3 className="font-bold font-serif text-brand-primary mb-1">Imperial Golf Estates</h3>
              <p>
                This golf community offers a mix of residential options, including single-family homes and villas.
                Residents enjoy easy access to golf courses, tennis courts, and proximity to shopping and dining, all
                while maintaining a serene suburban feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReadyToHireSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Ready to Hire Me as Your Agent?</h2>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
            I would love the opportunity to interview with you and your family to see if I'm the right fit to sell your
            home or to advocate for you to buy one.
          </p>

          <div className="mb-8">
            <p className="text-lg mb-4 font-semibold">Schedule a consultation with me:</p>
            <Link href="mailto:realrealtywithlauren@gmail.com" className="inline-block">
              <Mail className="w-16 h-16 p-4 bg-white text-brand-primary rounded-full hover:bg-gray-200 transition-colors" />
            </Link>
          </div>

          <div className="space-y-2 text-lg">
            <p className="font-semibold">Vanderbilt</p>
            <p>325 Vanderbilt Beach Road, Naples FL 34108</p>
            <p>Office (847) 714-3014 | Cell (847) 714-3014</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-serif mb-8">LAUREN WITTMAN</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-primary bg-transparent font-semibold"
            >
              LIST YOUR HOME
            </Button>
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-200 font-semibold">
              BUY A HOME
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewFeaturedListingsCarousel() {
  return (
    <section id="new-featured" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary text-center mb-12">
          Featured Listings
        </h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {newFeaturedListings.map((listing) => (
              <CarouselItem key={listing.mls} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden rounded-lg">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.address}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <p className="font-bold text-2xl">{listing.price}</p>
                        <p className="text-sm">{listing.address}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  )
}

function InstagramFeedSection() {
  return <InstagramFeed beholdId={process.env.NEXT_PUBLIC_BEHOLD_ID || "your-behold-id"} />
}

function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">GET IN TOUCH</h3>
            <div className="space-y-1">
              <p className="font-semibold">Vanderbilt</p>
              <p>325 Vanderbilt Beach Road</p>
              <p>Naples FL 34108</p>
              <p>Office (847) 714-3014</p>
              <p>Cell (847) 714-3014</p>
              <p>Email: realrealtywithlauren@gmail.com</p>
              <p>Instagram: @realrealtywithlauren</p>
            </div>
            <p className="mt-4 text-sm">Premier Sotheby's International Realty</p>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-6">
            <Link
              href="https://www.facebook.com/lauren.wittman.52/"
              target="_blank"
              className="text-white hover:text-gray-300"
            >
              <Facebook className="w-8 h-8" />
            </Link>
            <Link
              href="https://instagram.com/realrealtywithlauren?igshid=MjEwN2IyYWYwYw=="
              target="_blank"
              className="text-white hover:text-gray-300"
            >
              <Instagram className="w-8 h-8" />
            </Link>
            <Link href="mailto:realrealtywithlauren@gmail.com" className="text-white hover:text-gray-300">
              <Mail className="w-8 h-8" />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-8 pt-8 text-center text-xs text-gray-300">
          <p>
            All information is deemed reliable but not guaranteed and should be independently reviewed and verified.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Image src="/placeholder.svg?height=50&width=50" alt="Realtor logo" width={40} height={40} />
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Equal Housing Opportunity logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
