import CampCard from "./CampCard";

interface Camp {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  featured?: boolean;
}

interface FeaturedCampsProps {
  camps: Camp[];
}

export default function FeaturedCamps({ camps }: FeaturedCampsProps) {
  const featured = camps.filter((c) => c.featured).slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Featured Camps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((camp) => (
            <CampCard key={camp.id} {...camp} />
          ))}
        </div>
      </div>
    </section>
  );
}
