import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";

const allProducts = [
  { id: "1", name: "Nova X Pro 5G", slug: "nova-x-pro-5g", brand: "Nova", base: 39999, sale: 32999, rating: 4.7, reviews: 1284, isFlashSale: true, emoji: "📱", cat: "mobiles" },
  { id: "19", name: "PixelMax Ultra 5G", slug: "pixelmax-ultra-5g", brand: "PixelMax", base: 44999, sale: 36999, rating: 4.6, reviews: 947, isFlashSale: false, emoji: "📱", cat: "mobiles" },
  { id: "2", name: "AeroBook 14 Laptop", slug: "aerobook-14-laptop", brand: "Aero", base: 69999, sale: 58999, rating: 4.5, reviews: 623, isFlashSale: true, emoji: "💻", cat: "electronics" },
  { id: "4", name: "UltraView 27 4K Monitor", slug: "ultraview-27-4k-monitor", brand: "UltraView", base: 39999, sale: 31999, rating: 4.6, reviews: 351, isFlashSale: false, emoji: "🖥️", cat: "electronics" },
  { id: "18", name: "SmartHome WiFi Camera", slug: "smarthome-wifi-camera", brand: "SmartHome", base: 4999, sale: 3299, rating: 4.4, reviews: 980, isFlashSale: false, emoji: "📷", cat: "electronics" },
  { id: "9", name: "UrbanFlex Running Shoes", slug: "urbanflex-running-shoes", brand: "UrbanFlex", base: 5999, sale: 3999, rating: 4.4, reviews: 1125, isFlashSale: false, emoji: "👟", cat: "fashion" },
  { id: "10", name: "Essential Cotton T-Shirt", slug: "essential-cotton-tshirt", brand: "Essential", base: 1499, sale: 899, rating: 4.3, reviews: 780, isFlashSale: true, emoji: "👕", cat: "fashion" },
  { id: "5", name: "AirBeat Pro Earbuds", slug: "airbeat-pro-earbuds", brand: "AirBeat", base: 7999, sale: 4999, rating: 4.4, reviews: 2150, isFlashSale: true, emoji: "🎧", cat: "audio" },
  { id: "6", name: "BoomBox Mini Speaker", slug: "boombox-mini-speaker", brand: "BoomBox", base: 4999, sale: 2999, rating: 4.3, reviews: 842, isFlashSale: true, emoji: "🔊", cat: "audio" },
  { id: "3", name: "PulseFit Smart Watch", slug: "pulsefit-smart-watch", brand: "PulseFit", base: 9999, sale: 6499, rating: 4.5, reviews: 1330, isFlashSale: true, emoji: "⌚", cat: "wearables" },
  { id: "16", name: "FitTrack Smart Band", slug: "fittrack-smart-band", brand: "FitTrack", base: 3999, sale: 2499, rating: 4.2, reviews: 560, isFlashSale: true, emoji: "⌚", cat: "wearables" },
  { id: "7", name: "GameCore Controller", slug: "gamecore-wireless-controller", brand: "GameCore", base: 4999, sale: 3499, rating: 4.6, reviews: 920, isFlashSale: true, emoji: "🎮", cat: "gaming" },
  { id: "8", name: "GameStation RGB Keyboard", slug: "gamestation-rgb-keyboard", brand: "GameStation", base: 6999, sale: 4999, rating: 4.5, reviews: 740, isFlashSale: false, emoji: "⌨️", cat: "gaming" },
  { id: "11", name: "ChefPro Air Fryer", slug: "chefpro-air-fryer", brand: "ChefPro", base: 8999, sale: 5999, rating: 4.6, reviews: 1432, isFlashSale: true, emoji: "🍳", cat: "home-kitchen" },
  { id: "12", name: "BlendMaster Mixer", slug: "blendmaster-smart-mixer", brand: "BlendMaster", base: 6999, sale: 4499, rating: 4.2, reviews: 512, isFlashSale: false, emoji: "🥤", cat: "home-kitchen" },
  { id: "13", name: "GlowCare Skin Kit", slug: "glowcare-skin-kit", brand: "GlowCare", base: 2499, sale: 1799, rating: 4.5, reviews: 650, isFlashSale: false, emoji: "✨", cat: "beauty" },
  { id: "14", name: "PowerHub 65W Charger", slug: "powerhub-65w-charger", brand: "PowerHub", base: 3999, sale: 2499, rating: 4.7, reviews: 1830, isFlashSale: true, emoji: "⚡", cat: "accessories" },
  { id: "15", name: "FlexCharge Power Bank", slug: "flexcharge-power-bank", brand: "FlexCharge", base: 2999, sale: 1899, rating: 4.4, reviews: 1340, isFlashSale: true, emoji: "🔋", cat: "accessories" },
  { id: "17", name: "ProGrip Sports Backpack", slug: "progrip-sports-backpack", brand: "ProGrip", base: 2999, sale: 1999, rating: 4.3, reviews: 420, isFlashSale: false, emoji: "🎒", cat: "sports" },
];

const categoryNames: Record<string, string> = {
  mobiles: "Mobiles",
  electronics: "Electronics",
  fashion: "Fashion",
  audio: "Audio",
  wearables: "Wearables",
  gaming: "Gaming",
  "home-kitchen": "Home & Kitchen",
  beauty: "Beauty",
  accessories: "Accessories",
  sports: "Sports",
};

async function getDBProducts(slug: string) {
  try {
    return await prisma.product.findMany({
      where: { status: "ACTIVE", category: { slug } },
      include: { images: { take: 1 } },
      orderBy: { salesCount: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const db = await getDBProducts(slug);
  const hasDB = db.length > 0;
  const filtered = allProducts.filter((p) => p.cat === slug);
  const displayCount = hasDB ? db.length : filtered.length;
  const catName = categoryNames[slug] ?? slug;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b border-[var(--border-glass)]" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-[var(--text-primary)] transition-colors">Products</Link>
              <span>/</span>
              <span className="text-[var(--text-primary)]">{catName}</span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">{catName}</h1>
            <p className="text-[var(--text-muted)] mt-1">{displayCount} products</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {displayCount === 0 ? (
            <div className="text-center py-24 space-y-4">
              <p className="text-5xl" aria-hidden="true">🔍</p>
              <p className="text-lg font-semibold text-[var(--text-primary)]">No products in this category yet</p>
              <p className="text-sm text-[var(--text-muted)]">Check back soon or browse all products</p>
              <Link href="/products" className="btn-primary inline-block px-6 py-2.5 rounded-full text-sm font-semibold text-white z-10 relative mt-2">
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {hasDB
                ? db.map((p) => {
                    const sale = p.salePrice ? Number(p.salePrice) : Number(p.basePrice);
                    const base = Number(p.basePrice);
                    const discount = p.salePrice ? Math.round(((base - sale) / base) * 100) : 0;
                    return (
                      <Link key={p.id} href={`/product/${p.slug}`} className="product-card glass rounded-2xl overflow-hidden group">
                        <div className="relative h-44 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                          {p.images[0]
                            ? <img src={p.images[0].url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            : <span className="text-5xl" aria-hidden="true">🛍️</span>}
                          {p.isFlashSale && <div className="absolute top-2 left-2"><Badge variant="flash" /></div>}
                        </div>
                        <div className="p-3 space-y-1.5">
                          <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                          <StarRating rating={p.rating} count={p.reviewCount} />
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gradient">₹{sale.toLocaleString()}</span>
                            {discount > 0 && <span className="text-xs text-emerald-400 font-bold">{discount}% off</span>}
                          </div>
                        </div>
                      </Link>
                    );
                  })
                : filtered.map((p) => {
                    const discount = Math.round(((p.base - p.sale) / p.base) * 100);
                    return (
                      <Link key={p.id} href={`/product/${p.slug}`} className="product-card glass rounded-2xl overflow-hidden group">
                        <div className="relative h-44 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                          <span className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{p.emoji}</span>
                          {p.isFlashSale && <div className="absolute top-2 left-2"><Badge variant="flash" /></div>}
                        </div>
                        <div className="p-3 space-y-1.5">
                          <p className="text-[10px] text-[var(--text-muted)]">{p.brand}</p>
                          <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                          <StarRating rating={p.rating} count={p.reviews} />
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gradient">₹{p.sale.toLocaleString()}</span>
                            <span className="text-xs text-emerald-400 font-bold">{discount}% off</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
