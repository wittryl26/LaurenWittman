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
      initialValue: [
        { title: "About Lauren", href: "#about" },
        { title: "Market Trends", href: "#trends" },
        { title: "Featured Listings", href: "#featured" },
        { title: "Recent Sales", href: "#sales" },
        { title: "Why Choose Me", href: "#why-choose-me" },
        { title: "Client Reviews", href: "#reviews" },
        { title: "Naples Map", href: "#map" },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Navigation",
      }
    },
  },
}
