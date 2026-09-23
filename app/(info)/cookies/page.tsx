export default function CookiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Cookie Policy</h1>
        <p className="text-[var(--text-muted)] mt-2">Last updated: January 2026</p>
      </div>
      {[
        { title: "What Are Cookies", body: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your experience." },
        { title: "Essential Cookies", body: "Required for the site to function. Includes session management, cart persistence, and authentication. Cannot be disabled." },
        { title: "Analytics Cookies", body: "Help us understand how visitors interact with the site. Data is anonymised. You can opt out via browser settings." },
        { title: "Preference Cookies", body: "Remember your settings like language and currency so you don't have to re-enter them on each visit." },
        { title: "Managing Cookies", body: "You can control cookies through your browser settings. Disabling essential cookies may affect site functionality." },
      ].map((s) => (
        <div key={s.title} className="glass rounded-2xl p-5 space-y-2">
          <h2 className="font-bold text-[var(--text-primary)]">{s.title}</h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
