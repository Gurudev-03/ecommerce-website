const stats = [
  { value: "2M+", label: "Happy Customers", icon: "😊" },
  { value: "10K+", label: "Products", icon: "📦" },
  { value: "99.9%", label: "Uptime", icon: "⚡" },
  { value: "4.9★", label: "Average Rating", icon: "⭐" },
];

const security = [
  { icon: "🔒", title: "256-bit SSL", desc: "All data encrypted end-to-end" },
  { icon: "🛡️", title: "Fraud Protection", desc: "Zero liability on unauthorized charges" },
  { icon: "🔐", title: "Secure Auth", desc: "Multi-factor authentication support" },
  { icon: "📋", title: "PCI Compliant", desc: "Bank-level payment security" },
];

export function TrustSection() {
  return (
    <section className="py-16 border-y border-[var(--border-glass)]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <div className="text-3xl" aria-hidden="true">{stat.icon}</div>
              <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
              <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Security banner */}
        <div className="glass rounded-3xl p-8" style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)" }}>
          <div className="text-center mb-8">
            <h2 id="trust-heading" className="text-2xl font-bold text-[var(--text-primary)]">Your Security is Our Priority</h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 max-w-lg mx-auto">
              Every transaction on SuperCommerce is protected by enterprise-grade security infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {security.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl" aria-hidden="true">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
