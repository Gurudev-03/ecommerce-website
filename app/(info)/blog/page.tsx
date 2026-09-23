export default function BlogPage() {
  const posts = [
    { title: "Top 10 gadgets to buy in 2026", date: "Sep 20, 2026", cat: "Tech", emoji: "📱" },
    { title: "How to choose the right laptop", date: "Sep 15, 2026", cat: "Guides", emoji: "💻" },
    { title: "Style your home on a budget", date: "Sep 10, 2026", cat: "Home", emoji: "🏠" },
    { title: "Fitness gear worth investing in", date: "Sep 5, 2026", cat: "Sports", emoji: "🏋️" },
    { title: "Best wireless earbuds compared", date: "Aug 28, 2026", cat: "Audio", emoji: "🎧" },
    { title: "Skincare essentials for beginners", date: "Aug 20, 2026", cat: "Beauty", emoji: "✨" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Blog</h1>
        <p className="text-[var(--text-muted)] mt-2">Tips, guides, and product highlights</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.title} className="product-card glass rounded-2xl overflow-hidden cursor-pointer">
            <div className="h-28 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center text-5xl" aria-hidden="true">
              {post.emoji}
            </div>
            <div className="p-4 space-y-1">
              <p className="text-[10px] font-bold text-indigo-400 uppercase">{post.cat}</p>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{post.title}</p>
              <p className="text-xs text-[var(--text-muted)]">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
