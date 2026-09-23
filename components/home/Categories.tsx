import Link from "next/link";

const categories = [
  { name: "Mobiles", slug: "mobiles", emoji: "📱", color: "from-blue-600/20 to-cyan-600/20", border: "border-blue-500/20" },
  { name: "Electronics", slug: "electronics", emoji: "💻", color: "from-purple-600/20 to-violet-600/20", border: "border-purple-500/20" },
  { name: "Fashion", slug: "fashion", emoji: "👗", color: "from-pink-600/20 to-rose-600/20", border: "border-pink-500/20" },
  { name: "Home & Kitchen", slug: "home-kitchen", emoji: "🏠", color: "from-orange-600/20 to-amber-600/20", border: "border-orange-500/20" },
  { name: "Gaming", slug: "gaming", emoji: "🎮", color: "from-green-600/20 to-emerald-600/20", border: "border-green-500/20" },
  { name: "Audio", slug: "audio", emoji: "🎧", color: "from-indigo-600/20 to-blue-600/20", border: "border-indigo-500/20" },
  { name: "Wearables", slug: "wearables", emoji: "⌚", color: "from-teal-600/20 to-cyan-600/20", border: "border-teal-500/20" },
  { name: "Beauty", slug: "beauty", emoji: "✨", color: "from-fuchsia-600/20 to-pink-600/20", border: "border-fuchsia-500/20" },
];

export function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="categories-heading">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 id="categories-heading" className="text-2xl font-bold text-[var(--text-primary)]">Shop by Category</h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">Find exactly what you&apos;re looking for</p>
        </div>
        <Link href="/products" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className={`category-card glass rounded-2xl p-4 flex flex-col items-center gap-2 text-center border ${cat.border} hover:border-indigo-500/40`}
            aria-label={`Browse ${cat.name}`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl`} aria-hidden="true">
              {cat.emoji}
            </div>
            <span className="text-xs font-medium text-[var(--text-secondary)] leading-tight">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
