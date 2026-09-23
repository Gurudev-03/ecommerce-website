export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] mt-2">Last updated: January 2026</p>
      </div>
      {[
        { title: "Information We Collect", body: "We collect information you provide (name, email, address, payment details) and usage data (pages visited, products viewed) to improve your shopping experience." },
        { title: "How We Use Your Data", body: "Your data is used to process orders, send delivery updates, personalise recommendations, and improve our platform. We never sell your data to third parties." },
        { title: "Data Security", body: "All data is encrypted using 256-bit SSL. Payment information is processed via PCI-compliant gateways and never stored on our servers." },
        { title: "Cookies", body: "We use essential cookies for site functionality and optional analytics cookies to understand usage patterns. You can manage preferences in your browser settings." },
        { title: "Your Rights", body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support@supercommerce.in." },
        { title: "Contact", body: "For privacy queries contact our Data Protection Officer at privacy@supercommerce.in." },
      ].map((s) => (
        <div key={s.title} className="glass rounded-2xl p-5 space-y-2">
          <h2 className="font-bold text-[var(--text-primary)]">{s.title}</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
