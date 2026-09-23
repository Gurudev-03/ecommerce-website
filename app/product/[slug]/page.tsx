import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarRating } from "@/components/ui/StarRating";
import { prisma } from "@/lib/prisma";

const catalog: Record<string, { name: string; brand: string; base: number; sale: number; rating: number; reviews: number; cat: string; emoji: string; desc: string; features: string[] }> = {
  "nova-x-pro-5g": { name: "Nova X Pro 5G", brand: "Nova", base: 39999, sale: 32999, rating: 4.7, reviews: 1284, cat: "Mobiles", emoji: "📱", desc: "Premium 5G smartphone with a high-resolution display, powerful processor and advanced camera system.", features: ["6.7\" AMOLED 120Hz", "108MP Triple Camera", "5000mAh Battery", "5G Connectivity", "256GB Storage"] },
  "pixelmax-ultra-5g": { name: "PixelMax Ultra 5G", brand: "PixelMax", base: 44999, sale: 36999, rating: 4.6, reviews: 947, cat: "Mobiles", emoji: "📱", desc: "Flagship-inspired smartphone with a bright AMOLED display and long-lasting battery.", features: ["6.8\" AMOLED", "50MP Main Camera", "4800mAh Battery", "5G", "128GB Storage"] },
  "aerobook-14-laptop": { name: "AeroBook 14 Laptop", brand: "Aero", base: 69999, sale: 58999, rating: 4.5, reviews: 623, cat: "Electronics", emoji: "💻", desc: "Slim everyday laptop designed for productivity, study and entertainment.", features: ["14\" FHD IPS", "Intel Core i5", "16GB RAM", "512GB SSD", "10hr Battery"] },
  "ultraview-27-4k-monitor": { name: "UltraView 27 4K Monitor", brand: "UltraView", base: 39999, sale: 31999, rating: 4.6, reviews: 351, cat: "Electronics", emoji: "🖥️", desc: "27-inch 4K monitor with sharp visuals for creators, gamers and professionals.", features: ["27\" 4K UHD", "144Hz Refresh", "IPS Panel", "HDR400", "USB-C & HDMI"] },
  "airbeat-pro-earbuds": { name: "AirBeat Pro Earbuds", brand: "AirBeat", base: 7999, sale: 4999, rating: 4.4, reviews: 2150, cat: "Audio", emoji: "🎧", desc: "Wireless earbuds with active noise cancellation and a compact charging case.", features: ["Active Noise Cancellation", "30hr Total Battery", "IPX5 Water Resistant", "Fast Charging", "Touch Controls"] },
  "boombox-mini-speaker": { name: "BoomBox Mini Speaker", brand: "BoomBox", base: 4999, sale: 2999, rating: 4.3, reviews: 842, cat: "Audio", emoji: "🔊", desc: "Portable Bluetooth speaker with powerful sound and long battery life.", features: ["360° Sound", "20hr Battery", "IPX7 Waterproof", "Bluetooth 5.2", "Built-in Mic"] },
  "pulsefit-smart-watch": { name: "PulseFit Smart Watch", brand: "PulseFit", base: 9999, sale: 6499, rating: 4.5, reviews: 1330, cat: "Wearables", emoji: "⌚", desc: "Smart watch with activity tracking, notifications and health-focused features.", features: ["Heart Rate Monitor", "SpO2 Tracking", "GPS Built-in", "7-Day Battery", "100+ Sport Modes"] },
  "fittrack-smart-band": { name: "FitTrack Smart Band", brand: "FitTrack", base: 3999, sale: 2499, rating: 4.2, reviews: 560, cat: "Wearables", emoji: "⌚", desc: "Lightweight fitness band with activity and sleep tracking.", features: ["Step Counter", "Sleep Tracking", "14-Day Battery", "Water Resistant", "Notification Alerts"] },
  "urbanflex-running-shoes": { name: "UrbanFlex Running Shoes", brand: "UrbanFlex", base: 5999, sale: 3999, rating: 4.4, reviews: 1125, cat: "Fashion", emoji: "👟", desc: "Lightweight running shoes designed for daily training and active lifestyles.", features: ["Breathable Mesh", "Cushioned Sole", "Anti-Slip Grip", "Lightweight 280g", "Available in 6 colors"] },
  "essential-cotton-tshirt": { name: "Essential Cotton T-Shirt", brand: "Essential", base: 1499, sale: 899, rating: 4.3, reviews: 780, cat: "Fashion", emoji: "👕", desc: "Soft cotton oversized t-shirt designed for casual everyday wear.", features: ["100% Pure Cotton", "Oversized Fit", "Pre-shrunk fabric", "Durable print", "8 color options"] },
  "chefpro-air-fryer": { name: "ChefPro Digital Air Fryer", brand: "ChefPro", base: 8999, sale: 5999, rating: 4.6, reviews: 1432, cat: "Home & Kitchen", emoji: "🍳", desc: "Large-capacity digital air fryer designed for quick and convenient cooking.", features: ["5.5L Capacity", "Digital Display", "8 Preset Modes", "360° Air Circulation", "Dishwasher Safe"] },
  "blendmaster-smart-mixer": { name: "BlendMaster Smart Mixer", brand: "BlendMaster", base: 6999, sale: 4499, rating: 4.2, reviews: 512, cat: "Home & Kitchen", emoji: "🥤", desc: "High-performance kitchen mixer for smoothies, sauces and everyday cooking.", features: ["750W Motor", "6 Speed Settings", "2L Jar", "Stainless Steel Blades", "Quiet Operation"] },
  "glowcare-skin-kit": { name: "GlowCare Skin Essentials Kit", brand: "GlowCare", base: 2499, sale: 1799, rating: 4.5, reviews: 650, cat: "Beauty", emoji: "✨", desc: "Daily personal-care kit designed for a simple skincare routine.", features: ["Cleanser 150ml", "Toner 100ml", "Moisturizer 50ml", "Dermatologist Tested", "Paraben Free"] },
  "gamecore-wireless-controller": { name: "GameCore Wireless Controller", brand: "GameCore", base: 4999, sale: 3499, rating: 4.6, reviews: 920, cat: "Gaming", emoji: "🎮", desc: "Responsive wireless controller for comfortable gaming sessions.", features: ["2.4GHz Wireless", "20hr Battery", "Vibration Feedback", "Cross-Platform", "Programmable Buttons"] },
  "gamestation-rgb-keyboard": { name: "GameStation RGB Keyboard", brand: "GameStation", base: 6999, sale: 4999, rating: 4.5, reviews: 740, cat: "Gaming", emoji: "⌨️", desc: "Mechanical gaming keyboard with RGB lighting and programmable controls.", features: ["Mechanical Switches", "Per-Key RGB", "Anti-Ghosting", "Detachable Cable", "Wrist Rest Included"] },
  "powerhub-65w-charger": { name: "PowerHub 65W GaN Charger", brand: "PowerHub", base: 3999, sale: 2499, rating: 4.7, reviews: 1830, cat: "Accessories", emoji: "⚡", desc: "Compact multi-device charger with fast charging support.", features: ["65W Total Output", "3 Ports (2C+1A)", "GaN Technology", "Universal Compatibility", "Foldable Plug"] },
  "flexcharge-power-bank": { name: "FlexCharge Power Bank", brand: "FlexCharge", base: 2999, sale: 1899, rating: 4.4, reviews: 1340, cat: "Accessories", emoji: "🔋", desc: "Portable power bank for smartphones and everyday devices.", features: ["10000mAh", "22.5W Fast Charge", "Dual Output", "LED Indicator", "Compact Design"] },
  "progrip-sports-backpack": { name: "ProGrip Sports Backpack", brand: "ProGrip", base: 2999, sale: 1999, rating: 4.3, reviews: 420, cat: "Sports", emoji: "🎒", desc: "Durable sports backpack with multiple compartments for daily use.", features: ["30L Capacity", "Laptop Pocket 15\"", "Water-Resistant", "Padded Straps", "Reflective Strips"] },
  "smarthome-wifi-camera": { name: "SmartHome Wi-Fi Camera", brand: "SmartHome", base: 4999, sale: 3299, rating: 4.4, reviews: 980, cat: "Electronics", emoji: "📷", desc: "Compact indoor security camera with app-based monitoring.", features: ["1080p Full HD", "Night Vision 10m", "Motion Detection", "2-Way Audio", "Cloud Storage"] },
};

async function getDBProduct(slug: string) {
  try {
    return await prisma.product.findUnique({
      where: { slug },
      include: { images: true, category: true, variants: { include: { inventory: true } } },
    });
  } catch {
    return null;
  }
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const db = await getDBProduct(slug);
  const fb = catalog[slug];

  if (!db && !fb) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-5xl" aria-hidden="true">😕</p>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Product not found</h1>
          <Link href="/products" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold text-white z-10 relative">
            Browse Products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const name = db?.name ?? fb!.name;
  const brand = db?.brand ?? fb!.brand;
  const salePrice = db?.salePrice ? Number(db.salePrice) : fb!.sale;
  const basePrice = db ? Number(db.basePrice) : fb!.base;
  const rating = db?.rating ?? fb!.rating;
  const reviewCount = db?.reviewCount ?? fb!.reviews;
  const description = db?.description ?? fb!.desc;
  const catName = db?.category.name ?? fb!.cat;
  const emoji = fb?.emoji ?? "🛍️";
  const discount = Math.round(((basePrice - salePrice) / basePrice) * 100);
  const features = fb?.features ?? [];
  const imageUrl = db?.images?.[0]?.url ?? null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[var(--text-primary)] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[var(--text-primary)] truncate max-w-[200px]">{name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image */}
            <div className="glass rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)" }}>
              {imageUrl
                ? <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                : <span className="text-[120px]" aria-hidden="true">{emoji}</span>}
              {discount > 0 && (
                <div className="absolute top-4 left-4 badge-sale text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{discount}%
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-5">
              <div>
                <p className="text-sm text-indigo-400 font-medium">{brand} · {catName}</p>
                <h1 className="text-3xl font-extrabold text-[var(--text-primary)] mt-1">{name}</h1>
              </div>

              <div className="flex items-center gap-3">
                <StarRating rating={rating} count={reviewCount} />
                <span className="text-xs text-[var(--text-muted)]">Verified reviews</span>
              </div>

              <div className="flex items-end gap-3">
                <span className="text-4xl font-extrabold text-gradient">₹{salePrice.toLocaleString()}</span>
                {discount > 0 && (
                  <>
                    <span className="text-lg line-through text-[var(--text-muted)]">₹{basePrice.toLocaleString()}</span>
                    <span className="text-sm font-bold text-emerald-400">{discount}% off</span>
                  </>
                )}
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>

              {features.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Key Features</p>
                  <ul className="space-y-1.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: "🔒", label: "Secure Payment" },
                  { icon: "🚚", label: "Fast Delivery" },
                  { icon: "↩️", label: "Easy Returns" },
                ].map((b) => (
                  <div key={b.label} className="glass rounded-xl p-3 text-center">
                    <div className="text-xl" aria-hidden="true">{b.icon}</div>
                    <p className="text-[10px] text-[var(--text-muted)] mt-1">{b.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <button className="flex-1 btn-primary py-3.5 rounded-full font-semibold text-white z-10 relative text-sm">
                  Add to Cart
                </button>
                <button className="btn-ghost px-5 py-3.5 rounded-full text-sm font-semibold" aria-label="Add to wishlist">
                  ♡
                </button>
              </div>

              <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                In stock · Usually ships within 24 hours
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
