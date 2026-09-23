import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";

async function getProducts() {
  try {
    return await prisma.product.findMany({
      where: { status: "ACTIVE" },
      include: { images: { take: 1 }, category: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    return [];
  }
}

const fallback = [
  { id: "1", name: "Nova X Pro 5G", slug: "nova-x-pro-5g", brand: "Nova", basePrice: "39999", salePrice: "32999", rating: 4.7, reviewCount: 1284, isFlashSale: true, emoji: "📱", cat: "Mobiles" },
  { id: "2", name: "AeroBook 14 Laptop", slug: "aerobook-14-laptop", brand: "Aero", basePrice: "69999", salePrice: "58999", rating: 4.5, reviewCount: 623, isFlashSale: true, emoji: "💻", cat: "Electronics" },
  { id: "3", name: "PulseFit Smart Watch", slug: "pulsefit-smart-watch", brand: "PulseFit", basePrice: "9999", salePrice: "6499", rating: 4.5, reviewCount: 1330, isFlashSale: true, emoji: "⌚", cat: "Wearables" },
  { id: "4", name: "UltraView 27 4K Monitor", slug: "ultraview-27-4k-monitor", brand: "UltraView", basePrice: "39999", salePrice: "31999", rating: 4.6, reviewCount: 351, isFlashSale: false, emoji: "🖥️", cat: "Electronics" },
  { id: "5", name: "AirBeat Pro Earbuds", slug: "airbeat-pro-earbuds", brand: "AirBeat", basePrice: "7999", salePrice: "4999", rating: 4.4, reviewCount: 2150, isFlashSale: true, emoji: "🎧", cat: "Audio" },
  { id: "6", name: "BoomBox Mini Speaker", slug: "boombox-mini-speaker", brand: "BoomBox", basePrice: "4999", salePrice: "2999", rating: 4.3, reviewCount: 842, isFlashSale: true, emoji: "🔊", cat: "Audio" },
  { id: "7", name: "GameCore Controller", slug: "gamecore-wireless-controller", brand: "GameCore", basePrice: "4999", salePrice: "3499", rating: 4.6, reviewCount: 920, isFlashSale: true, emoji: "🎮", cat: "Gaming" },
  { id: "8", name: "GameStation RGB Keyboard", slug: "gamestation-rgb-keyboard", brand: "GameStation", basePrice: "6999", salePrice: "4999", rating: 4.5, reviewCount: 740, isFlashSale: false, emoji: "⌨️", cat: "Gaming" },
  { id: "9", name: "UrbanFlex Running Shoes", slug: "urbanflex-running-shoes", brand: "UrbanFlex", basePrice: "5999", salePrice: "3999", rating: 4.4, reviewCount: 1125, isFlashSale: false, emoji: "👟", cat: "Fashion" },
  { id: "10", name: "Essential Cotton T-Shirt", slug: "essential-cotton-tshirt", brand: "Essential", basePrice: "1499", salePrice: "899", rating: 4.3, reviewCount: 780, isFlashSale: true, emoji: "👕", cat: "Fashion" },
  { id: "11", name: "ChefPro Air Fryer", slug: "chefpro-air-fryer", brand: "ChefPro", basePrice: "8999", salePrice: "5999", rating: 4.6, reviewCount: 1432, isFlashSale: true, emoji: "🍳", cat: "Home & Kitchen" },
  { id: "12", name: "BlendMaster Smart Mixer", slug: "blendmaster-smart-mixer", brand: "BlendMaster", basePrice: "6999", salePrice: "4499", rating: 4.2, reviewCount: 512, isFlashSale: false, emoji: "🥤", cat: "Home & Kitchen" },
  { id: "13", name: "GlowCare Skin Kit", slug: "glowcare-skin-kit", brand: "GlowCare", basePrice: "2499", salePrice: "1799", rating: 4.5, reviewCount: 650, isFlashSale: false, emoji: "✨", cat: "Beauty" },
  { id: "14", name: "PowerHub 65W Charger", slug: "powerhub-65w-charger", brand: "PowerHub", basePrice: "3999", salePrice: "2499", rating: 4.7, reviewCount: 1830, isFlashSale: true, emoji: "⚡", cat: "Accessories" },
  { id: "15", name: "FlexCharge Power Bank", slug: "flexcharge-power-bank", brand: "FlexCharge", basePrice: "2999", salePrice: "1899", rating: 4.4, reviewCount: 1340, isFlashSale: true, emoji: "🔋", cat: "Accessories" },
  { id: "16", name: "FitTrack Smart Band", slug: "fittrack-smart-band", brand: "FitTrack", basePrice: "3999", salePrice: "2499", rating: 4.2, reviewCount: 560, isFlashSale: true, emoji: "⌚", cat: "Wearables" },
  { id: "17", name: "ProGrip Sports Backpack", slug: "progrip-sports-backpack", brand: "ProGrip", basePrice: "2999", salePrice: "1999", rating: 4.3, reviewCount: 420, isFlashSale: false, emoji: "🎒", cat: "Sports" },
  { id: "18", name: "SmartHome WiFi Camera", slug: "smarthome-wifi-camera", brand: "SmartHome", basePrice: "4999", salePrice: "3299", rating: 4.4, reviewCount: 980, isFlashSale: false, emoji: "📷", cat: "Electronics" },
  { id: "19", name: "PixelMax Ultra 5G", slug: "pixelmax-ultra-5g", brand: "PixelMax", basePrice: "44999", salePrice: "36999", rating: 4.6, reviewCount: 947, isFlashSale: false, emoji: "📱", cat: "Mobiles" },
];

export default async function ProductsPage() {
  const db = await getProducts();
  const hasDB = db.length > 0;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <div className="border-b border-[var(--border-glass)]" style={{ background: "var(--bg-secondary)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">All Products</h1>
            <p className="text-[var(--text-muted)] mt-1">{hasDB ? db.length : fallback.length} products available</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
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
                        <p className="text-[10px] text-[var(--text-muted)]">{p.category.name}</p>
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
              : fallback.map((p) => {
                  const sale = Number(p.salePrice);
                  const base = Number(p.basePrice);
                  const discount = Math.round(((base - sale) / base) * 100);
                  return (
                    <Link key={p.id} href={`/product/${p.slug}`} className="product-card glass rounded-2xl overflow-hidden group">
                      <div className="relative h-44 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{p.emoji}</span>
                        {p.isFlashSale && <div className="absolute top-2 left-2"><Badge variant="flash" /></div>}
                      </div>
                      <div className="p-3 space-y-1.5">
                        <p className="text-[10px] text-[var(--text-muted)]">{p.cat}</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                        <StarRating rating={p.rating} count={p.reviewCount} />
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gradient">₹{sale.toLocaleString()}</span>
                          <span className="text-xs text-emerald-400 font-bold">{discount}% off</span>
                        </div>
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
