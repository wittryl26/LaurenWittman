import { defineField, defineType } from "sanity"

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Homepage",
      readOnly: true,
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "content", title: "About Content", type: "array", of: [{ type: "block" }] },
        { name: "profileImage", title: "Profile Image", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "marketTrends",
      title: "Market Trends Section",
      type: "object",
      fields: [{ name: "description", title: "Description", type: "text" }],
    }),
    defineField({
      name: "whyChooseMe",
      title: "Why Choose Me Section",
      type: "object",
      fields: [
        { name: "title", title: "Section Title", type: "string" },
        { name: "image", title: "Section Image", type: "image" },
        { name: "points", title: "Key Points", type: "array", of: [{ type: "string" }] },
      ],
    }),
    defineField({
      name: "featuredListings",
      title: "Featured Listings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "listing" }] }],
    }),
    defineField({
      name: "recentSales",
      title: "Recent Sales",
      type: "array",
      of: [{ type: "reference", to: [{ type: "listing" }] }],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: { type: "testimonial" } }],
    }),
    defineField({
      name: "neighborhoods",
      title: "Featured Neighborhoods",
      type: "array",
      of: [{ type: "reference", to: [{ type: "neighborhood" }] }],
    }),
  ],
})
