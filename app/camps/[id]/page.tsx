import ImageCarousel from "@/components/common/ImageCarousel";
import Footer from "@/components/common/Footer";
import Link from "next/link";

type Camp = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  featured?: boolean;
  images?: string[];
};

const CAMPS: Camp[] = [
  {
    id: "pelo",
    name: "Wilderness Pelo",
    description:
      "Intimate camp with prime wildlife viewing and traditional service.",
    image: "/images/wilderness-pelo.svg",
    price: 450,
    location: "Okavango Delta",
    rating: 4.8,
    featured: true,
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/pelo_2015-06-33e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/pelo_2015-06-14e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-197e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-199e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-200e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-206e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_26.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_13.jpg",
    ],
  },
  {
    id: "savuti",
    name: "Wilderness Savuti",
    description: "Savuti's rich predator sightings and floodplain dynamics.",
    image:
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti.jpg",
    price: 550,
    location: "Savuti",
    rating: 4.9,
    featured: true,
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756723752182sleep-outsavuti-botswana-07-25-tc-42.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756723752183sleep-outsavuti-botswana-07-25-tc-37.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756724173303tent-savuti-botswana-07-25tc-39.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756724555221untamed-botswana-07-25-tc-15.JPG",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756817733916gamedrive-savuti-botswana-07-25-tc-62.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti_3.JPG",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Savuti051e.jpg",
    ],
  },
  {
    id: "chitabe",
    name: "Wilderness Chitabe",
    description: "Classic big-game viewing with exclusive access.",
    image: "/images/wilderness-chitabe.svg",
    price: 500,
    location: "Chitabe",
    rating: 4.7,
    featured: false,
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_2.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_3.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_4.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_5.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/127_chitabe__sundowners_tcunniffe.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/1745569748991_Chitabe-Interiors-Okavango-Botswana-04-25-S.dePina-7_resize.jpg",
    ],
  },
  {
    id: "kings-pool",
    name: "Wilderness Kings Pool",
    description: "Waterhole sightings and private-guided walks.",
    // use the provided S3 images; first image will be used as the primary image
    image:
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg",
    price: 620,
    location: "Linyanti",
    rating: 4.9,
    featured: true,
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_2.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_3.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/11_kingspool_massage_0031.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/5_kingspool_bushbreakfast_004.jpg",
    ],
  },
];

function getCamp(id: string) {
  return CAMPS.find((c) => c.id === id);
}

export default async function CampPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const p = await params;
  const camp = getCamp(p.id);

  if (!camp) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Camp not found</h2>
          <p className="text-white/70 mt-2">We couldn&apos;t find that camp.</p>
          <div className="mt-4">
            <Link href="/camps" className="underline">
              Back to camps
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{camp.name}</h1>
          <Link href="/camps" className="text-sm text-white/70 underline">
            ← Back
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageCarousel
              images={
                camp.images && camp.images.length ? camp.images : [camp.image]
              }
              alt={camp.name}
            />
          </div>

          <aside className="space-y-4">
            <div className="p-4 bg-[var(--card)] rounded-md border border-[var(--border)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">${camp.price}</div>
                  <div className="text-sm text-white/70">per person</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{camp.location}</div>
                  <div className="text-sm text-white/60">
                    Rating: {camp.rating.toFixed(1)}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="w-full px-4 py-2 rounded-md bg-[var(--accent)] text-[var(--accent-foreground)]">
                  Book Now
                </button>
              </div>
            </div>

            <div className="p-4 bg-[var(--card)] rounded-md border border-[var(--border)]">
              <h3 className="font-semibold mb-2">About this camp</h3>
              <p className="text-white/70 text-sm">{camp.description}</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
