import Link from "next/link";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { prisma } from "@/lib/prisma";

async function getProducts() {
  try {
    return await prisma.product.findMany({
      where: { status: "ACTIVE", isFeatured: true },
      include: { images: { orderBy: { position: "asc" }, take: 1 }, category: true },
      orderBy: { salesCount: "desc" },
      take: 8,
    });
  } catch {
    return [];
  }
}

const fallbackProducts = [
  { id: "1", name: "Nova X Pro 5G", slug: "nova-x-pro-5g", basePrice: "39999", salePrice: "32999", rating: 4.7, reviewCount: 1284, isFeatured: true, isFlashSale: true, brand: "Nova", emoji: "📱" },
  { id: "2", name: "AeroBook 14 Laptop", slug: "aerobook-14-laptop", basePrice: "69999", salePrice: "58999", rating: 4.5, reviewCount: 623, isFeatured: true, isFlashSale: true, brand: "Aero", emoji: "💻" },
  { id: "3", name: "PulseFit Smart Watch", slug: "pulsefit-smart-watch", basePrice: "9999", salePrice: "6499", rating: 4.5, reviewCount: 1330, isFeatured: true, isFlashSale: true, brand: "PulseFit", emoji: "⌚" },
  { id: "4", name: "UltraView 27 4K Monitor", slug: "ultraview-27-4k-monitor", basePrice: "39999", salePrice: "31999", rating: 4.6, reviewCount: 351, isFeatured: true, isFlashSale: false, brand: "UltraView", emoji: "🖥️" },
  { id: "5", name: "GameCore Controller", slug: "gamecore-wireless-controller", basePrice: "4999", salePrice: "3499", rating: 4.6, reviewCount: 920, isFeatured: true, isFlashSale: true, brand: "GameCore", emoji: "🎮" },
  { id: "6", name: "GlowCare Skin Kit", slug: "glowcare-skin-kit", basePrice: "2499", salePrice: "1799", rating: 4.5, reviewCount: 650, isFeatured: true, isFlashSale: false, brand: "GlowCare", emoji: "✨" },
  { id: "7", name: "UrbanFlex Running Shoes", slug: "urbanflex-running-shoes", basePrice: "5999", salePrice: "3999", rating: 4.4, reviewCount: 1125, isFeatured: true, isFlashSale: false, brand: "UrbanFlex", emoji: "👟" },
  { id: "8", name: "SmartHome WiFi Camera", slug: "smarthome-wifi-camera", basePrice: "4999", salePrice: "3299", rating: 4.4, reviewCount: 980, isFeatured: true, isFlashSale: false, brand: "SmartHome", emoji: "📷" },
];

export async function FeaturedProducts() {
  const dbProducts = await getProducts();
  const hasDB = dbProducts.length > 0;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="featured-heading">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 id="featured-heading" className="text-2xl font-bold text-[var(--text-primary)]">Featured Products</h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">Handpicked by our team</p>
        </div>
        <Link href="/products" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hasDB
          ? dbProducts.map((p) => {
              const sale = p.salePrice ? Number(p.salePrice) : Number(p.basePrice);
              const base = Number(p.basePrice);
              const discount = p.salePrice ? Math.round(((base - sale) / base) * 100) : 0;
              return (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="product-card glass rounded-2xl overflow-hidden group"
                  aria-label={`${p.name}, ₹${sale.toLocaleString()}`}
                >
                  <div className="relative h-48 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                    {p.images[0] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.images[0].url} alt={p.images[0].altText ?? p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🛍️</span>
                    )}
                    <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                      {p.isFlashSale && <Badge variant="flash" />}
                      {discount > 0 && <Badge variant="sale" />}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-[var(--text-muted)]">{p.brand}</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                    <StarRating rating={p.rating} count={p.reviewCount} />
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gradient">₹{sale.toLocaleString()}</span>
                      {p.salePrice && <span className="text-xs line-through text-[var(--text-muted)]">₹{base.toLocaleString()}</span>}
                      {discount > 0 && <span className="text-xs font-bold text-emerald-400">{discount}% off</span>}
                    </div>
                    <button className="w-full btn-primary rounded-xl py-2 text-xs font-semibold text-white z-10 relative" aria-label={`Add ${p.name} to cart`}>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })
          : fallbackProducts.map((p) => {
              const sale = Number(p.salePrice);
              const base = Number(p.basePrice);
              const discount = Math.round(((base - sale) / base) * 100);
              return (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="product-card glass rounded-2xl overflow-hidden group"
                  aria-label={`${p.name}, ₹${sale.toLocaleString()}`}
                >
                  <div className="relative h-48 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{p.emoji}</span>
                    <div className="absolute top-2 left-2 flex gap-1">
                      {p.isFlashSale && <Badge variant="flash" />}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-[var(--text-muted)]">{p.brand}</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2">{p.name}</p>
                    <StarRating rating={p.rating} count={p.reviewCount} />
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gradient">₹{sale.toLocaleString()}</span>
                      <span className="text-xs line-through text-[var(--text-muted)]">₹{base.toLocaleString()}</span>
                      <span className="text-xs font-bold text-emerald-400">{discount}% off</span>
                    </div>
                    <button className="w-full btn-primary rounded-xl py-2 text-xs font-semibold text-white z-10 relative" aria-label={`Add ${p.name} to cart`}>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
}
