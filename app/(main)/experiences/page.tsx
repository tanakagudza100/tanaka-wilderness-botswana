import Image from "next/image";
import ImageCarousel from "@/components/common/ImageCarousel";
import Footer from "@/components/common/Footer";

const CAMPS = [
  {
    id: "pelo",
    name: "Wilderness Pelo",
    hero: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`,
    experiences: [
      {
        id: "pelo-game-drive",
        title: "Early Morning Game Drive",
        description:
          "Head out just before sunrise with experienced guides to find lions, leopards and grazing herds as the light softens across the floodplain. Drives are tailored to animal movement and seasonality.",
        location: "Okavango Delta channels and floodplains",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-33e.jpg`,
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-14e.jpg`,
        ],
      },
      {
        id: "pelo-mokoro",
        title: "Mokoro (Canoe) Excursion",
        description:
          "Glide silently through the Delta channels in a traditional mokoro and discover birdlife, frogs and elusive waterbucks – a peaceful counterpoint to game drives.",
        location: "Shallow channels near camp",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo.jpg`,
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/jao_reserve_2015-06-197e.jpg`,
        ],
      },
      {
        id: "pelo-birding",
        title: "Birdwatching & Photography",
        description:
          "Pelo’s mosaic of water and woodland attracts a rich variety of birds; guided walks let you get close for photography and identification with an expert naturalist.",
        location: "Riverine trees and reedbeds",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/jao_reserve_2015-06-199e.jpg`,
        ],
      },
    ],
  },

  {
    id: "savuti",
    name: "Wilderness Savuti",
    hero: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/Wilderness+Savuti.jpg`,
    experiences: [
      {
        id: "savuti-predator",
        title: "Predator-focused Game Drives",
        description:
          "Savuti is famous for its predators: spend the day tracking lion, hyena and wild dog activity with expert trackers who know the best vantage points.",
        location: "Savuti Channel and open plains",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756817733916gamedrive-savuti-botswana-07-25-tc-62.jpg`,
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/Wilderness+Savuti_1.jpg`,
        ],
      },
      {
        id: "savuti-sleepout",
        title: "Star-lit Sleep-outs",
        description:
          "Spend the night under the stars on an elevated sleep-out platform and listen to the night chorus — an intimate way to experience nocturnal wildlife.",
        location: "Elevated sleep-out deckings around camp",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756723752182sleep-outsavuti-botswana-07-25-tc-42.jpg`,
        ],
      },
      {
        id: "savuti-birding",
        title: "Unique Birding Safaris",
        description:
          "Savuti hosts both water-associated and dry-woodland species. Morning walks and drives with a local guide reveal seasonal migrants and resident raptors.",
        location: "Riverine pockets and mopane woodlands",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/Wilderness+Savuti_3.JPG`,
        ],
      },
    ],
  },

  {
    id: "chitabe",
    name: "Wilderness Chitabe",
    hero: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg`,
    experiences: [
      {
        id: "chitabe-biggame",
        title: "Big-game Drives",
        description:
          "Access private channels and floodplains for close big-game viewing: elephants, buffalo and frequent leopard sightings make Chitabe memorable.",
        location: "Private concession routes",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_2.jpg`,
        ],
      },
      {
        id: "chitabe-sundowners",
        title: "Sundowners & Panoramic Views",
        description:
          "Enjoy classic African sundowners at high vantage points as the sun melts into the delta — a perfect photographic moment.",
        location: "Sundowner outlooks near camp",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/127_chitabe__sundowners_tcunniffe.jpg`,
        ],
      },
      {
        id: "chitabe-walks",
        title: "Guided Bush Walks",
        description:
          "Experience the smaller scale of the bush on foot with an armed ranger — track spoor, insects and plant life while learning traditional uses.",
        location: "Bush trails surrounding camp",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/1745569748991_Chitabe-Interiors-Okavango-Botswana-04-25-S.dePina-7_resize.jpg`,
        ],
      },
    ],
  },

  {
    id: "kings-pool",
    name: "Wilderness Kings Pool",
    hero: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg`,
    experiences: [
      {
        id: "kings-waterhole",
        title: "Waterhole Wildlife Viewing",
        description:
          "Kings Pool’s waterholes are magnets for wildlife during the dry season — watch elephants, hippo and predators gather in a cinematic natural tableau.",
        location: "Main waterholes and hides",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_2.jpg`,
        ],
      },
      {
        id: "kings-spa",
        title: "Spa & Bush Breakfast",
        description:
          "Combine relaxation and safari: morning bush breakfasts and spa treatments by the pool make Kings Pool restorative after long drives.",
        location: "Camp grounds and pool area",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/11_kingspool_massage_0031.jpg`,
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/5_kingspool_bushbreakfast_004.jpg`,
        ],
      },
      {
        id: "kings-walks",
        title: "Private Guided Walks",
        description:
          "Short guided walks give a different perspective on the ecosystem — great for families and those who prefer a paced, intimate experience.",
        location: "Linyanti floodplain edges",
        images: [
          `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_3.jpg`,
        ],
      },
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <div className="bg-gradient-to-b from-[#2b2116] via-[#3b2b1f] to-[#0f1724] text-white min-h-screen pt-24 relative overflow-hidden">
      {/* Subtle background wildlife image */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <Image
          src={CAMPS[1].hero}
          alt="wildlife background"
          fill
          className="object-cover"
        />
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Experiences & Journeys
          </h1>
          <p className="max-w-3xl mx-auto text-white/80">
            Explore curated safari experiences across Wilderness Pelo, Savuti,
            Chitabe and Kings Pool — from predator-focused game drives to serene
            mokoro excursions. Each journey is designed to immerse you in the
            wild.
          </p>
        </header>

        {CAMPS.map((camp) => (
          <section key={camp.id} className="mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-[#3b2414]/60 to-[#1f1510]/40">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                <div className="lg:col-span-1 relative h-64 lg:h-auto">
                  <ImageCarousel
                    images={[camp.hero, ...(camp.experiences[0].images || [])]}
                    alt={camp.name}
                    fit="cover"
                  />
                </div>

                <div className="lg:col-span-2 p-6">
                  <h2 className="text-2xl font-bold mb-2">{camp.name}</h2>
                  <p className="text-white/80 mb-4">
                    Discover signature experiences at {camp.name}. Pick
                    activities that suit your pace — from action-packed drives
                    to relaxed birding and cultural moments.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {camp.experiences.map((exp) => (
                      <article
                        key={exp.id}
                        className="bg-[rgba(255,255,255,0.03)] p-4 rounded-md border border-white/5 flex flex-col"
                      >
                        <div className="h-36 w-full mb-3 bg-slate-800 rounded-md overflow-hidden flex items-center justify-center">
                          <Image
                            src={exp.images[0]}
                            alt={exp.title}
                            width={600}
                            height={400}
                            className="object-contain w-full h-full p-2"
                          />
                        </div>

                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-white/70 text-sm my-2 flex-1">
                          {exp.description}
                        </p>
                        <div className="text-sm text-white/60 mb-3">
                          Location: {exp.location}
                        </div>
                        <div className="flex gap-2">
                          <a
                            href="#"
                            className="inline-block px-3 py-2 bg-amber-500 text-black rounded-md font-medium"
                          >
                            Book Now
                          </a>
                          <a
                            href="#"
                            className="inline-block px-3 py-2 border border-white/10 rounded-md text-white/90"
                          >
                            Learn More
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
// (duplicate block removed) The file now contains a single, complete
// ExperiencesPage default export above. No further changes required.
