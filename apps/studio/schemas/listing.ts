import { defineField, defineType } from "sanity"

export const listing = defineType({
  name: "listing",
  title: "Property Listing",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({ name: "address", title: "Address", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "bedrooms", title: "Bedrooms", type: "number" }),
    defineField({ name: "bathrooms", title: "Bathrooms", type: "number" }),
    defineField({ name: "details", title: "Short Details (e.g. 4 Beds | 2 Baths)", type: "string" }),
    defineField({ name: "virtualTourLink", title: "Virtual Tour Link", type: "url" }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood",
      type: "reference",
      to: { type: "neighborhood" },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
})
