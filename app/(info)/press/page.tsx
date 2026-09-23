export default function PressPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Press</h1>
        <p className="text-[var(--text-muted)] mt-2">News and media resources</p>
      </div>
      <div className="glass rounded-2xl p-6 space-y-2">
        <p className="font-semibold text-[var(--text-primary)]">Media Enquiries</p>
        <p className="text-sm text-[var(--text-secondary)]">For press enquiries, interviews, or brand assets contact us at <span className="text-indigo-400">press@supercommerce.in</span></p>
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Recent News</h2>
        {[
          { title: "SuperCommerce crosses 2 million customers", date: "March 2026" },
          { title: "Introducing flash deals — real-time savings for everyone", date: "February 2026" },
          { title: "SuperCommerce launches AI-powered shopping recommendations", date: "January 2026" },
        ].map((n) => (
          <div key={n.title} className="glass rounded-2xl p-5 space-y-1">
            <p className="font-semibold text-[var(--text-primary)]">{n.title}</p>
            <p className="text-xs text-[var(--text-muted)]">{n.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
