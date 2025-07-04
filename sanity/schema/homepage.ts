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
          initialValue: "BRINGING COASTAL LIVING CLOSER TO HOME!",
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
          options: {
            accept: "video/*",
          },
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
                {
                  name: "style",
                  title: "Button Style",
                  type: "string",
                  options: {
                    list: [
                      { title: "Primary", value: "primary" },
                      { title: "Secondary", value: "secondary" },
                    ],
                  },
                },
              ],
            },
          ],
          initialValue: [
            { text: "FREE HOME EVALUATION", link: "#evaluation", style: "secondary" },
            { text: "BUY A HOME", link: "#buy", style: "primary" },
          ],
        },
      ],
    },
    {
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "ABOUT LAUREN:",
        },
        {
          name: "content",
          title: "About Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "profileImage",
          title: "Profile Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "contactInfo",
          title: "Contact Information",
          type: "object",
          fields: [
            { name: "phone", title: "Office Phone", type: "string" },
            { name: "cell", title: "Cell Phone", type: "string" },
            { name: "email", title: "Email", type: "string" },
            { name: "address", title: "Address", type: "string" },
            { name: "city", title: "City", type: "string" },
            { name: "state", title: "State", type: "string" },
            { name: "zip", title: "ZIP Code", type: "string" },
            { name: "facebook", title: "Facebook URL", type: "url" },
            { name: "instagram", title: "Instagram URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "marketTrends",
      title: "Market Trends Section",
      type: "object",
      fields: [
        { name: "title", title: "Section Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "percentage", title: "Growth Percentage", type: "number" },
        { name: "image", title: "Trends Image", type: "image" },
      ],
    },
    {
      name: "whyChooseMe",
      title: "Why Choose Me Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
          initialValue: "WHAT MAKES LAUREN DIFFERENT?",
        },
        { name: "image", title: "Section Image", type: "image" },
        {
          name: "points",
          title: "Key Points",
          type: "array",
          of: [{ type: "string" }],
          initialValue: [
            "Lauren is a top producing agent on a team of over 85 agents.",
            "Lauren has successfully double represented multiple buyer/sellers.",
            "Lauren has found Buyers in less than 24 hours for luxury listings.",
            "Lauren cares MORE about your endorsement than a check.",
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
    {
      name: "neighborhoods",
      title: "Featured Neighborhoods",
      type: "array",
      of: [{ type: "reference", to: [{ type: "neighborhood" }] }],
    },
  ],
  preview: {
    select: {
      title: "hero.title",
    },
    prepare(selection: any) {
      return {
        title: "Homepage Content",
      }
    },
  },
}
