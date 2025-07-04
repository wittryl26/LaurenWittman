export const listing = {
  name: "listing",
  title: "Property Listing",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "type",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Single Family Home", value: "single-family" },
          { title: "Condo", value: "condo" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Luxury Home", value: "luxury" },
          { title: "Waterfront", value: "waterfront" },
          { title: "Commercial", value: "commercial" },
        ],
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "mlsNumber",
      title: "MLS Number",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    { name: "bedrooms", title: "Bedrooms", type: "number" },
    { name: "bathrooms", title: "Bathrooms", type: "number" },
    { name: "squareFootage", title: "Square Footage", type: "number" },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
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
          { title: "Off Market", value: "off-market" },
        ],
      },
      initialValue: "active",
    },
    {
      name: "featured",
      title: "Featured Listing",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "saleDate",
      title: "Sale Date",
      type: "date",
      hidden: ({ document }: any) => document?.status !== "sold",
    },
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "price",
      media: "images.0",
    },
    prepare(selection: any) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: subtitle ? `$${subtitle.toLocaleString()}` : "No price set",
      }
    },
  },
}
