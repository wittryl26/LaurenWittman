import { defineField, defineType } from "sanity"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "clientName", title: "Client Name", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
  ],
})
