export default function TermsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Terms of Service</h1>
        <p className="text-[var(--text-muted)] mt-2">Last updated: January 2026</p>
      </div>
      {[
        { title: "Acceptance of Terms", body: "By accessing or using SuperCommerce, you agree to be bound by these Terms of Service. If you disagree with any part, you may not use our platform." },
        { title: "User Accounts", body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorised use." },
        { title: "Orders & Payments", body: "All orders are subject to availability. Prices may change without notice. Payment must be completed at checkout. We reserve the right to cancel orders due to pricing errors or fraud." },
        { title: "Prohibited Activities", body: "You may not use our platform for illegal activities, fraud, harassment, or distribution of harmful content. Violations will result in immediate account termination." },
        { title: "Intellectual Property", body: "All content, trademarks, and designs on SuperCommerce are owned by us or our licensors. Unauthorised use is prohibited." },
        { title: "Limitation of Liability", body: "SuperCommerce is not liable for indirect, incidental, or consequential damages arising from your use of the platform to the fullest extent permitted by law." },
      ].map((s) => (
        <div key={s.title} className="glass rounded-2xl p-5 space-y-2">
          <h2 className="font-bold text-[var(--text-primary)]">{s.title}</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
