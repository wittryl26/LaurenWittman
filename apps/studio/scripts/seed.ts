import { createClient } from "@sanity/client";
import { v4 as uuidv4 } from "uuid";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: "2024-07-01",
});

async function seedData() {
  console.log("Starting to seed data...");

  const transaction = client.transaction();

  // Create Neighborhoods
  const neighborhoods = [
    { _type: "neighborhood", _id: `neighborhood-${uuidv4()}`, name: "Beverly Hills" },
    { _type: "neighborhood", _id: `neighborhood-${uuidv4()}`, name: "Malibu" },
  ];
  neighborhoods.forEach((doc) => transaction.createOrReplace(doc));

  // Create Testimonials
  const testimonials = [
    {
      _type: "testimonial",
      _id: `testimonial-${uuidv4()}`,
      quote: "Lauren found us our dream home. The process was seamless!",
      author: "John & Jane Doe",
      location: "Beverly Hills",
    },
    {
      _type: "testimonial",
      _id: `testimonial-${uuidv4()}`,
      quote: "An absolute professional. Highly recommended for luxury properties.",
      author: "Sam Smith",
      location: "Malibu",
    },
  ];
  testimonials.forEach((doc) => transaction.createOrReplace(doc));

  // Create Listings
  const listings = [
    {
      _type: "listing",
      _id: `listing-${uuidv4()}`,
      title: "Modern Villa in Beverly Hills",
      price: 12500000,
      address: "123 Rodeo Drive, Beverly Hills, CA",
      neighborhood: { _type: "reference", _ref: neighborhoods[0]._id },
    },
    {
      _type: "listing",
      _id: `listing-${uuidv4()}`,
      title: "Oceanfront Estate in Malibu",
      price: 25000000,
      address: "456 Pacific Coast Highway, Malibu, CA",
      neighborhood: { _type: "reference", _ref: neighborhoods[1]._id },
    },
  ];
  listings.forEach((doc) => transaction.createOrReplace(doc));

  // Create Homepage
  const homepage = {
    _type: "homepage",
    _id: "homepage",
    heroTitle: "Lauren Wittman",
    heroSubtitle: "Your Premier Luxury Real Estate Agent",
    featuredListings: listings.map((l) => ({ _type: "reference", _ref: l._id })),
    testimonials: testimonials.map((t) => ({ _type: "reference", _ref: t._id })),
  };
  transaction.createOrReplace(homepage);

  // Create Site Settings
  const siteSettings = {
    _type: "siteSettings",
    _id: "siteSettings",
    siteTitle: "Lauren Wittman Real Estate",
  };
  transaction.createOrReplace(siteSettings);

  // Create Navigation
  const navigation = {
    _type: "navigation",
    _id: "navigation",
    mainNav: [
      { _key: uuidv4(), label: "Listings", url: "/listings" },
      { _key: uuidv4(), label: "About", url: "/about" },
      { _key: uuidv4(), label: "Contact", url: "/contact" },
    ],
  };
  transaction.createOrReplace(navigation);

  const result = await transaction.commit();
  console.log("Data seeded successfully!", result);
}

seedData().catch((err) => {
  console.error("Error seeding data:", err);
  process.exit(1);
});
