export default function ReturnsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Returns & Refunds</h1>
        <p className="text-[var(--text-muted)] mt-2">Hassle-free 30-day return policy</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: "📦", step: "1", title: "Initiate return", desc: "Go to your orders, select the item and click Return." },
          { icon: "🚚", step: "2", title: "Schedule pickup", desc: "Our courier will pick up the item from your doorstep." },
          { icon: "💳", step: "3", title: "Refund processed", desc: "Refund to your original payment method within 5–7 days." },
        ].map((s) => (
          <div key={s.step} className="glass rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">{s.icon}</span>
              <span className="text-xs font-bold text-indigo-400">Step {s.step}</span>
            </div>
            <p className="font-semibold text-[var(--text-primary)]">{s.title}</p>
            <p className="text-sm text-[var(--text-secondary)]">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 space-y-3">
        <h2 className="font-bold text-[var(--text-primary)]">Policy Details</h2>
        {[
          "Returns accepted within 30 days of delivery.",
          "Items must be unused, unwashed, and in original packaging.",
          "Electronics must include all original accessories.",
          "Refunds processed within 5–7 business days.",
          "Free return pickup for all orders.",
        ].map((point) => (
          <div key={point} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            <span className="text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}
