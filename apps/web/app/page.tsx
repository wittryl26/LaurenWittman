import { client } from "@repo/lib/sanity";
import { Header } from "@/components/header";
import { InstagramFeed } from "@/components/instagram-feed";
import { urlForImage } from "@repo/lib/image";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";
import { Card, CardContent } from "@repo/ui/card";

async function getHomepageData() {
  const query = `*[_type == "homepage"][0]{
    heroTitle,
    heroSubtitle,
    heroImage,
    featuredListings[]->{
      _id,
      title,
      price,
      mainImage,
      address
    },
    testimonials[]->{
      _id,
      quote,
      author,
      location
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const homepage = await getHomepageData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="relative w-full h-[70vh] text-white">
        {homepage.heroImage && (
          <Image
            src={urlForImage(homepage.heroImage).url() || "/placeholder.svg"}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            {homepage.heroTitle || "Find Your Dream Home"}
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            {homepage.heroSubtitle ||
              "Discover luxury properties with Lauren Wittman."}
          </p>
          <Button className="mt-8">Explore Listings</Button>
        </div>
      </div>

      <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Listings
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {homepage.featuredListings?.map((listing: any) => (
              <CarouselItem
                key={listing._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 flex-col">
                      {listing.mainImage && (
                        <Image
                          src={urlForImage(listing.mainImage).url() || "/placeholder.svg"}
                          alt={listing.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="text-xl font-semibold">
                          {listing.title}
                        </h3>
                        <p className="text-gray-600">{listing.address}</p>
                        <p className="text-lg font-bold mt-2">
                          ${new Intl.NumberFormat().format(listing.price)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="w-full py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {homepage.testimonials?.map((testimonial: any) => (
            <Card key={testimonial._id} className="p-6">
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <p className="text-right font-semibold mt-4">
                - {testimonial.author}
              </p>
              <p className="text-right text-sm text-gray-500">
                {testimonial.location}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <InstagramFeed />
    </main>
  );
}
