import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

// Sanity queries
export const queries = {
  // Get all content for the homepage
  homepage: `*[_type == "homepage"][0]{
    hero {
      title,
      subtitle,
      backgroundVideo,
      ctaButtons[]{
        text,
        link,
        style
      }
    },
    about {
      title,
      content,
      image,
      profileImage,
      contactInfo {
        phone,
        cell,
        email,
        address,
        city,
        state,
        zip,
        facebook,
        instagram
      }
    },
    marketTrends {
      title,
      description,
      image,
      percentage
    },
    featuredListings[]->{
      _id,
      address,
      price,
      type,
      images,
      mlsNumber,
      virtualTourLink,
      bedrooms,
      bathrooms,
      squareFootage
    },
    recentSales[]->{
      _id,
      address,
      price,
      type,
      images,
      details,
      bedrooms,
      bathrooms
    },
    testimonials[]->{
      _id,
      clientName,
      clientRole,
      content,
      rating
    },
    whyChooseMe {
      title,
      image,
      points[]
    },
    neighborhoods[]->{
      _id,
      name,
      description
    }
  }`,

  // Get all listings
  listings: `*[_type == "listing"] | order(_createdAt desc) {
    _id,
    address,
    price,
    type,
    images,
    mlsNumber,
    bedrooms,
    bathrooms,
    squareFootage,
    description,
    virtualTourLink,
    status,
    featured
  }`,

  // Get navigation items
  navigation: `*[_type == "navigation"][0]{
    items[]{
      title,
      href
    }
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0]{
    siteName,
    siteDescription,
    logo,
    favicon,
    socialMedia {
      facebook,
      instagram,
      email
    },
    contact {
      phone,
      cell,
      email,
      address
    },
    seo {
      metaTitle,
      metaDescription,
      keywords
    }
  }`,
}

// Live preview queries for Sanity Studio
export const previewQueries = {
  homepage: queries.homepage,
  listings: queries.listings,
  navigation: queries.navigation,
  siteSettings: queries.siteSettings,
}
