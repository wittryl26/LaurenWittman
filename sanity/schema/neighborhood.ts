export const neighborhood = {
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Neighborhood Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Neighborhood Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featured",
      title: "Featured Neighborhood",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "averagePrice",
      title: "Average Home Price",
      type: "number",
    },
    {
      name: "amenities",
      title: "Key Amenities",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "averagePrice",
      media: "image",
    },
    prepare(selection: any) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: subtitle ? `Avg: $${subtitle.toLocaleString()}` : "No price data",
      }
    },
  },
}
