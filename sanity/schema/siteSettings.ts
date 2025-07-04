export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "Lauren Wittman - Premier Sotheby's International Realty",
    },
    {
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      initialValue: "South Florida Real Estate Expert - Bringing Coastal Living Closer to Home",
    },
    {
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "email", title: "Email", type: "string" },
      ],
    },
    {
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "phone", title: "Office Phone", type: "string" },
        { name: "cell", title: "Cell Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "address", title: "Full Address", type: "text" },
      ],
    },
    {
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text" },
        { name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] },
      ],
    },
    {
      name: "integrations",
      title: "Third-party Integrations",
      type: "object",
      fields: [
        { name: "beholdId", title: "Behold Instagram Widget ID", type: "string" },
        { name: "googleAnalytics", title: "Google Analytics ID", type: "string" },
        { name: "facebookPixel", title: "Facebook Pixel ID", type: "string" },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      }
    },
  },
}
