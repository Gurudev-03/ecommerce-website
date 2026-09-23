import Link from "next/link";

export function Footer() {
  const links: Record<string, { label: string; href: string }[]> = {
    Shop: [
      { label: "Electronics", href: "/category/electronics" },
      { label: "Fashion", href: "/category/fashion" },
      { label: "Gaming", href: "/category/gaming" },
      { label: "Beauty", href: "/category/beauty" },
      { label: "Sports", href: "/category/sports" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    Support: [
      { label: "Help Center", href: "/help" },
      { label: "Track Order", href: "/track" },
      { label: "Returns", href: "/returns" },
      { label: "Contact Us", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="border-t border-[var(--border-glass)] mt-20" role="contentinfo">
      {/* Trust bar */}
      <div className="bg-white/[0.02] py-6 border-b border-[var(--border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🔒", label: "256-bit SSL Encryption", sub: "Bank-level security" },
            { icon: "🚚", label: "Free Delivery", sub: "On orders over ₹999" },
            { icon: "↩️", label: "Easy Returns", sub: "30-day return policy" },
            { icon: "⭐", label: "Verified Reviews", sub: "100% authentic ratings" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item.label}</p>
                <p className="text-xs text-[var(--text-muted)]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-gradient">SuperCommerce</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Premium shopping experience with unmatched security and curation.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-glass)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} SuperCommerce. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {["VISA", "MC", "UPI", "EMI"].map((method) => (
              <span
                key={method}
                className="glass px-2 py-1 rounded text-[10px] font-bold text-[var(--text-muted)]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
