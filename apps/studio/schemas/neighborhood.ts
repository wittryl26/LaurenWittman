import { defineField, defineType } from "sanity"

export const neighborhood = defineType({
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96, } }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "mainImage", title: "Main Image", type: "image" }),
  ],
})
