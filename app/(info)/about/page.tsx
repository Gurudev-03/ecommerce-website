export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">About SuperCommerce</h1>
        <p className="text-[var(--text-muted)] mt-2">Building the future of online shopping</p>
      </div>
      <div className="glass rounded-2xl p-6 space-y-4">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          SuperCommerce is a next-generation ecommerce platform built with security, performance, and customer experience at its core. We curate premium products across every category — from the latest smartphones to everyday essentials.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Every transaction on our platform is protected by 256-bit SSL encryption and multi-layer fraud prevention. We believe that great shopping starts with trust.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "2M+", label: "Customers" },
          { value: "10K+", label: "Products" },
          { value: "500+", label: "Brands" },
          { value: "4.9★", label: "Avg Rating" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-4 text-center">
            <p className="text-2xl font-extrabold text-gradient">{s.value}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
