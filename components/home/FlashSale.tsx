import Link from "next/link";
import { StarRating } from "@/components/ui/StarRating";

const flashProducts = [
  { name: "AirBeat Pro Earbuds", price: 4999, original: 7999, rating: 4.4, reviews: 2150, discount: 38, emoji: "🎧", slug: "airbeat-pro-earbuds" },
  { name: "BoomBox Mini Speaker", price: 2999, original: 4999, rating: 4.3, reviews: 842, discount: 40, emoji: "🔊", slug: "boombox-mini-speaker" },
  { name: "Essential Cotton T-Shirt", price: 899, original: 1499, rating: 4.3, reviews: 780, discount: 40, emoji: "👕", slug: "essential-cotton-tshirt" },
  { name: "FitTrack Smart Band", price: 2499, original: 3999, rating: 4.2, reviews: 560, discount: 38, emoji: "⌚", slug: "fittrack-smart-band" },
  { name: "FlexCharge Power Bank", price: 1899, original: 2999, rating: 4.4, reviews: 1340, discount: 37, emoji: "🔋", slug: "flexcharge-power-bank" },
  { name: "PowerHub 65W Charger", price: 2499, original: 3999, rating: 4.7, reviews: 1830, discount: 38, emoji: "⚡", slug: "powerhub-65w-charger" },
];

export function FlashSale() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, rgba(99,102,241,0.05) 50%, var(--bg-primary) 100%)" }}
      aria-labelledby="flash-sale-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xl" aria-hidden="true">
              ⚡
            </div>
            <div>
              <h2 id="flash-sale-heading" className="text-2xl font-bold text-[var(--text-primary)]">Flash Sale</h2>
              <p className="text-sm text-[var(--text-muted)]">Limited time deals — grab them fast</p>
            </div>
          </div>
          <Link href="/deals" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
            All deals →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {flashProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="product-card glass rounded-2xl overflow-hidden group"
              aria-label={`${product.name}, ₹${product.price.toLocaleString()}, ${product.discount}% off`}
            >
              {/* Image area */}
              <div className="relative h-36 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{product.emoji}</span>
                <span className="absolute top-2 left-2 badge-sale text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  -{product.discount}%
                </span>
              </div>

              {/* Info */}
              <div className="p-3 space-y-2">
                <p className="text-xs font-medium text-[var(--text-primary)] leading-tight line-clamp-2">{product.name}</p>
                <StarRating rating={product.rating} />
                <div>
                  <p className="text-sm font-bold text-gradient">₹{product.price.toLocaleString()}</p>
                  <p className="text-xs line-through text-[var(--text-muted)]">₹{product.original.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
