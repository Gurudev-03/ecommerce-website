export default function TrackOrderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Track Your Order</h1>
        <p className="text-[var(--text-muted)] mt-2">Enter your order ID to get real-time updates</p>
      </div>
      <div className="glass rounded-2xl p-6 space-y-4">
        <form className="space-y-4" aria-label="Track order form">
          <div className="space-y-1.5">
            <label htmlFor="orderid" className="text-xs font-medium text-[var(--text-secondary)]">Order ID</label>
            <input id="orderid" type="text" placeholder="e.g. SC-20260001" className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-[var(--text-secondary)]">Email used to place order</label>
            <input id="email" type="email" placeholder="you@example.com" className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <button type="submit" className="btn-primary px-8 py-3 rounded-full text-sm font-semibold text-white z-10 relative">Track Order</button>
        </form>
      </div>
      <div className="glass rounded-2xl p-5 flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">📦</span>
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">Sign in for faster tracking</p>
          <p className="text-xs text-[var(--text-muted)]">Access all your orders in one place from your account dashboard.</p>
        </div>
      </div>
    </div>
  );
}
