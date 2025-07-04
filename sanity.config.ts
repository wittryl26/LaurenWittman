import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { presentationTool } from "sanity/presentation"
import { schemaTypes } from "./sanity/schema"

export default defineConfig({
  name: "lauren-wittman-website",
  title: "Lauren Wittman Real Estate Website",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Homepage").child(S.document().schemaType("homepage").documentId("homepage")),
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem().title("Navigation").child(S.document().schemaType("navigation").documentId("navigation")),
            S.divider(),
            S.listItem().title("Property Listings").child(S.documentTypeList("listing").title("Property Listings")),
            S.listItem()
              .title("Client Testimonials")
              .child(S.documentTypeList("testimonial").title("Client Testimonials")),
            S.listItem().title("Neighborhoods").child(S.documentTypeList("neighborhood").title("Neighborhoods")),
          ]),
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        preview: "/api/preview",
        draftMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
