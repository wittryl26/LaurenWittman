import { createClient } from "contentful"

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
})

// Contentful content types
export interface ContentfulListing {
  fields: {
    address: string
    price: number
    propertyType: string
    images: any[]
    mlsNumber: string
    bedrooms?: number
    bathrooms?: number
    squareFootage?: number
    description?: string
    virtualTourLink?: string
    status: "active" | "sold" | "pending"
  }
}

export interface ContentfulTestimonial {
  fields: {
    clientName: string
    clientRole: string
    testimonialText: string
    rating: number
  }
}

export interface ContentfulHomepage {
  fields: {
    heroTitle: string
    heroSubtitle: string
    aboutContent: string
    contactPhone: string
    contactEmail: string
  }
}

// Contentful API functions
export const contentfulQueries = {
  // Get homepage content
  getHomepage: async (): Promise<ContentfulHomepage | null> => {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: "homepage",
        limit: 1,
      })
      return (entries.items[0] as ContentfulHomepage) || null
    } catch (error) {
      console.error("Error fetching homepage:", error)
      return null
    }
  },

  // Get all active listings
  getListings: async (): Promise<ContentfulListing[]> => {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: "listing",
        "fields.status": "active",
        order: "-sys.createdAt",
      })
      return entries.items as ContentfulListing[]
    } catch (error) {
      console.error("Error fetching listings:", error)
      return []
    }
  },

  // Get testimonials
  getTestimonials: async (): Promise<ContentfulTestimonial[]> => {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: "testimonial",
        order: "-sys.createdAt",
      })
      return entries.items as ContentfulTestimonial[]
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      return []
    }
  },

  // Get recent sales
  getRecentSales: async (): Promise<ContentfulListing[]> => {
    try {
      const entries = await contentfulClient.getEntries({
        content_type: "listing",
        "fields.status": "sold",
        order: "-sys.updatedAt",
        limit: 6,
      })
      return entries.items as ContentfulListing[]
    } catch (error) {
      console.error("Error fetching recent sales:", error)
      return []
    }
  },
}
