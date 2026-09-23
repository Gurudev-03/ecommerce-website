import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden grid-bg"
      aria-label="Hero section"
    >
      {/* Radial glows */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="space-y-8">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"
                aria-hidden="true"
              />
              <span className="text-[var(--text-secondary)]">
                10,000+ products live now
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-[var(--text-primary)]">Shop the</span>
              <br />
              <span className="text-gradient">Future</span>
              <br />
              <span className="text-[var(--text-primary)]">of Commerce</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Curated premium products, military-grade security, and a
              next-generation experience. Every purchase is protected end-to-end.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold text-center z-10 relative inline-block"
              >
                Explore Products
              </Link>
              <Link
                href="/deals"
                className="btn-ghost px-8 py-3.5 rounded-full text-base font-semibold text-center inline-block"
              >
                ⚡ Flash Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-2">
              {[
                { value: "4.9★", label: "Avg Rating" },
                { value: "2M+", label: "Happy Customers" },
                { value: "100%", label: "Secure Checkout" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card stack */}
          <div
            className="hidden lg:flex justify-center items-center relative h-[460px]"
            aria-hidden="true"
          >
            {/* Background card */}
            <div
              className="absolute w-72 h-96 glass rounded-3xl"
              style={{
                transform: "rotate(6deg) translate(30px, 20px)",
                background: "rgba(139,92,246,0.06)",
                border: "1px solid rgba(139,92,246,0.15)",
              }}
            />
            {/* Mid card */}
            <div
              className="absolute w-72 h-96 glass rounded-3xl"
              style={{
                transform: "rotate(-3deg) translate(-20px, 10px)",
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            />
            {/* Front card */}
            <div
              className="relative w-72 rounded-3xl overflow-hidden animated-border float"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Product mock */}
              <div className="h-52 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-6xl">📱</div>
                  <p className="text-xs text-[var(--text-muted)]">Nova X Pro 5G</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      Nova X Pro 5G
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">Nova · 5G Smartphone</p>
                  </div>
                  <span className="badge-sale text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    -18%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gradient">₹32,999</span>
                  <span className="text-sm line-through text-[var(--text-muted)]">
                    ₹39,999
                  </span>
                </div>
                <div className="w-full btn-primary rounded-xl py-2.5 text-sm font-semibold text-white text-center z-10 relative">
                  Add to Cart
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-8 right-4 glass rounded-2xl px-3 py-2 text-xs font-semibold"
              style={{ border: "1px solid rgba(16,185,129,0.3)", color: "#10b981" }}
            >
              ✓ Verified Seller
            </div>
            <div
              className="absolute bottom-12 left-4 glass rounded-2xl px-3 py-2 text-xs font-semibold text-[var(--text-secondary)]"
            >
              🔒 Secured Payment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
