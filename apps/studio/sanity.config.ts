import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "lauren_wittman_website",
  title: "Lauren Wittman Real Estate",

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage")
              .child(
                S.document().schemaType("homepage").documentId("homepage")
              ),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document().schemaType("siteSettings").documentId("siteSettings")
              ),
            S.listItem()
              .title("Navigation")
              .child(
                S.document().schemaType("navigation").documentId("navigation")
              ),
            S.divider(),
            S.documentTypeList("listing").title("Property Listings"),
            S.documentTypeList("testimonial").title("Client Testimonials"),
            S.documentTypeList("neighborhood").title("Neighborhoods"),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        preview: "/",
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
