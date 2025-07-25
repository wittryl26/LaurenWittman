import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string" }),
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "phone", title: "Office Phone", type: "string" },
        { name: "cell", title: "Cell Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "address", title: "Full Address", type: "text" },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "integrations",
      title: "Third-party Integrations",
      type: "object",
      fields: [{ name: "beholdId", title: "Behold Instagram Widget ID", type: "string" }],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
  ],
})
