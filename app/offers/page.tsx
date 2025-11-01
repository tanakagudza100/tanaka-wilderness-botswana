import Footer from "@/components/common/Footer";

const OFFERS = [
  {
    id: "summer-25",
    title: "Summer 25% Off",
    description: "Save 25% on selected dates.",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Package",
    description: "Private dinners and romantic activities.",
  },
];

export default function OffersPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-24">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Exclusive Offers</h1>
        <p className="text-white/70 max-w-3xl mb-8">
          Special packages and seasonal promotions curated for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {OFFERS.map((o) => (
            <div
              key={o.id}
              className="p-6 bg-slate-900/50 border border-white/10 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{o.title}</h3>
              <p className="text-white/70">{o.description}</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
