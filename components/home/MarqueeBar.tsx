const items = [
  "⚡ Free Delivery on orders ₹999+",
  "🔒 256-bit SSL Encryption",
  "🌟 10,000+ Verified Products",
  "↩️ 30-Day Easy Returns",
  "💳 No-Cost EMI Available",
  "🏆 2M+ Happy Customers",
  "🚀 Same-Day Delivery in Metro Cities",
  "✅ 100% Authentic Products",
];

export function MarqueeBar() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-[var(--border-glass)] py-2.5"
      style={{ background: "rgba(99,102,241,0.05)" }}
      aria-label="Site highlights"
      role="marquee"
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-8 text-sm text-[var(--text-secondary)] whitespace-nowrap"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="text-[var(--text-muted)] ml-8" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
