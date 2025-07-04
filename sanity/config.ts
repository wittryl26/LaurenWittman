import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { presentationTool } from "sanity/presentation"
import { schemaTypes } from "./schema"

export default defineConfig({
  name: "lauren-wittman-website",
  title: "Lauren Wittman Real Estate Website",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    deskTool(),
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

  document: {
    // Live editing configuration
    productionUrl: async (prev, context) => {
      const { document } = context
      const url = new URL("/api/preview", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")

      if (document._type === "homepage") {
        url.pathname = "/"
      } else if (document._type === "listing") {
        url.pathname = `/listings/${document.slug?.current || document._id}`
      }

      return url.toString()
    },
  },
})
