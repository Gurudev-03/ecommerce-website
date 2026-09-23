import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";

const deals = [
  { id: "1", name: "AirBeat Pro Earbuds", slug: "airbeat-pro-earbuds", brand: "AirBeat", base: 7999, sale: 4999, rating: 4.4, reviews: 2150, emoji: "🎧", cat: "Audio", ends: "2h 45m" },
  { id: "2", name: "BoomBox Mini Speaker", slug: "boombox-mini-speaker", brand: "BoomBox", base: 4999, sale: 2999, rating: 4.3, reviews: 842, emoji: "🔊", cat: "Audio", ends: "4h 12m" },
  { id: "3", name: "Essential Cotton T-Shirt", slug: "essential-cotton-tshirt", brand: "Essential", base: 1499, sale: 899, rating: 4.3, reviews: 780, emoji: "👕", cat: "Fashion", ends: "1h 30m" },
  { id: "4", name: "FitTrack Smart Band", slug: "fittrack-smart-band", brand: "FitTrack", base: 3999, sale: 2499, rating: 4.2, reviews: 560, emoji: "⌚", cat: "Wearables", ends: "6h 00m" },
  { id: "5", name: "FlexCharge Power Bank", slug: "flexcharge-power-bank", brand: "FlexCharge", base: 2999, sale: 1899, rating: 4.4, reviews: 1340, emoji: "🔋", cat: "Accessories", ends: "3h 20m" },
  { id: "6", name: "PowerHub 65W Charger", slug: "powerhub-65w-charger", brand: "PowerHub", base: 3999, sale: 2499, rating: 4.7, reviews: 1830, emoji: "⚡", cat: "Accessories", ends: "5h 00m" },
  { id: "7", name: "Nova X Pro 5G", slug: "nova-x-pro-5g", brand: "Nova", base: 39999, sale: 32999, rating: 4.7, reviews: 1284, emoji: "📱", cat: "Mobiles", ends: "12h 00m" },
  { id: "8", name: "ChefPro Air Fryer", slug: "chefpro-air-fryer", brand: "ChefPro", base: 8999, sale: 5999, rating: 4.6, reviews: 1432, emoji: "🍳", cat: "Home & Kitchen", ends: "8h 30m" },
  { id: "9", name: "AeroBook 14 Laptop", slug: "aerobook-14-laptop", brand: "Aero", base: 69999, sale: 58999, rating: 4.5, reviews: 623, emoji: "💻", cat: "Electronics", ends: "24h 00m" },
  { id: "10", name: "PulseFit Smart Watch", slug: "pulsefit-smart-watch", brand: "PulseFit", base: 9999, sale: 6499, rating: 4.5, reviews: 1330, emoji: "⌚", cat: "Wearables", ends: "10h 15m" },
  { id: "11", name: "GameCore Controller", slug: "gamecore-wireless-controller", brand: "GameCore", base: 4999, sale: 3499, rating: 4.6, reviews: 920, emoji: "🎮", cat: "Gaming", ends: "7h 45m" },
  { id: "12", name: "UrbanFlex Running Shoes", slug: "urbanflex-running-shoes", brand: "UrbanFlex", base: 5999, sale: 3999, rating: 4.4, reviews: 1125, emoji: "👟", cat: "Fashion", ends: "9h 00m" },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div
          className="border-b border-[var(--border-glass)] relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(239,68,68,0.1) 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-red-400 pulse-dot" aria-hidden="true" />
              <span className="text-[var(--text-secondary)]">Live deals — updating in real time</span>
            </div>
            <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-2">
              ⚡ Flash Deals
            </h1>
            <p className="text-[var(--text-muted)]">Massive discounts, limited time. Don&apos;t miss out.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {deals.map((p) => {
              const discount = Math.round(((p.base - p.sale) / p.base) * 100);
              return (
                <Link key={p.id} href={`/product/${p.slug}`} className="product-card glass rounded-2xl overflow-hidden group">
                  <div className="relative h-44 bg-gradient-to-br from-orange-900/20 to-red-900/20 flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{p.emoji}</span>
                    <div className="absolute top-2 left-2"><Badge variant="flash" /></div>
                    <div className="absolute bottom-2 right-2 glass rounded-lg px-2 py-1 text-xs font-bold text-orange-400">
                      ⏱ {p.ends}
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-[10px] text-[var(--text-muted)]">{p.cat} · {p.brand}</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                    <StarRating rating={p.rating} count={p.reviews} />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gradient">₹{p.sale.toLocaleString()}</span>
                      <span className="text-xs line-through text-[var(--text-muted)]">₹{p.base.toLocaleString()}</span>
                    </div>
                    <div className="w-full rounded-full h-1.5 bg-white/10">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                        style={{ width: `${discount}%` }}
                        role="progressbar"
                        aria-label={`${discount}% discount`}
                      />
                    </div>
                    <p className="text-xs font-bold text-orange-400">{discount}% OFF</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
