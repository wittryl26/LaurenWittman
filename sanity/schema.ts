// Sanity Schema Definitions
export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Hero Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Hero Subtitle",
          type: "string",
        },
        {
          name: "backgroundVideo",
          title: "Background Video",
          type: "file",
        },
        {
          name: "ctaButtons",
          title: "CTA Buttons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "text", title: "Button Text", type: "string" },
                { name: "link", title: "Button Link", type: "string" },
                { name: "style", title: "Button Style", type: "string", options: { list: ["primary", "secondary"] } },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        { name: "title", title: "Section Title", type: "string" },
        { name: "content", title: "About Content", type: "array", of: [{ type: "block" }] },
        { name: "image", title: "Profile Image", type: "image" },
        {
          name: "contactInfo",
          title: "Contact Information",
          type: "object",
          fields: [
            { name: "phone", title: "Phone", type: "string" },
            { name: "email", title: "Email", type: "string" },
            { name: "facebook", title: "Facebook URL", type: "url" },
            { name: "instagram", title: "Instagram URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "featuredListings",
      title: "Featured Listings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "listing" }] }],
    },
    {
      name: "recentSales",
      title: "Recent Sales",
      type: "array",
      of: [{ type: "reference", to: [{ type: "listing" }] }],
    },
    {
      name: "testimonials",
      title: "Client Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    },
  ],
}

export const listing = {
  name: "listing",
  title: "Property Listing",
  type: "document",
  fields: [
    { name: "address", title: "Address", type: "string" },
    { name: "price", title: "Price", type: "number" },
    { name: "type", title: "Property Type", type: "string" },
    { name: "images", title: "Images", type: "array", of: [{ type: "image" }] },
    { name: "mlsNumber", title: "MLS Number", type: "string" },
    { name: "bedrooms", title: "Bedrooms", type: "number" },
    { name: "bathrooms", title: "Bathrooms", type: "number" },
    { name: "squareFootage", title: "Square Footage", type: "number" },
    { name: "description", title: "Description", type: "array", of: [{ type: "block" }] },
    { name: "virtualTourLink", title: "Virtual Tour Link", type: "url" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Sold", value: "sold" },
          { title: "Pending", value: "pending" },
        ],
      },
    },
  ],
}

export const testimonial = {
  name: "testimonial",
  title: "Client Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string" },
    { name: "role", title: "Client Role", type: "string" },
    { name: "content", title: "Testimonial Content", type: "text" },
    { name: "rating", title: "Rating", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
  ],
}

export const navigation = {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "href", title: "Link", type: "string" },
          ],
        },
      ],
    },
  ],
}
