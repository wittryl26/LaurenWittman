export const testimonial = {
  name: "testimonial",
  title: "Client Testimonial",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "clientRole",
      title: "Client Role",
      type: "string",
      options: {
        list: [
          { title: "Buyer", value: "buyer" },
          { title: "Seller", value: "seller" },
          { title: "Buyer & Seller", value: "both" },
        ],
      },
    },
    {
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "clientRole",
      description: "content",
    },
    prepare(selection: any) {
      const { title, subtitle, description } = selection
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : "Client",
        description: description ? description.substring(0, 100) + "..." : "",
      }
    },
  },
}
