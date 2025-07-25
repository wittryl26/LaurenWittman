import { Card, CardContent } from "@repo/ui/card";
import Image from "next/image";

const mockFeed = [
  { id: 1, src: "/placeholder.svg?height=300&width=300", alt: "Instagram post 1" },
  { id: 2, src: "/placeholder.svg?height=300&width=300", alt: "Instagram post 2" },
  { id: 3, src: "/placeholder.svg?height=300&width=300", alt: "Instagram post 3" },
  { id: 4, src: "/placeholder.svg?height=300&width=300", alt: "Instagram post 4" },
];

export function InstagramFeed() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Follow Us on Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {mockFeed.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-0">
              <Image
                src={post.src || "/placeholder.svg"}
                alt={post.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
