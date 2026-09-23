export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Contact Us</h1>
        <p className="text-[var(--text-muted)] mt-2">We&apos;re here to help</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: "📧", title: "Email", desc: "support@supercommerce.in", sub: "Reply within 24 hours" },
          { icon: "💬", title: "Live Chat", desc: "Available 9am – 9pm", sub: "Mon – Sat" },
          { icon: "📞", title: "Phone", desc: "1800-123-4567", sub: "Toll free" },
        ].map((c) => (
          <div key={c.title} className="glass rounded-2xl p-5 text-center space-y-2">
            <div className="text-3xl" aria-hidden="true">{c.icon}</div>
            <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
            <p className="text-sm text-[var(--text-secondary)]">{c.desc}</p>
            <p className="text-xs text-[var(--text-muted)]">{c.sub}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Send a message</h2>
        <form className="space-y-4" aria-label="Contact form">
          <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
          <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
          <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors resize-none" />
          <button type="submit" className="btn-primary px-8 py-3 rounded-full text-sm font-semibold text-white z-10 relative">Send Message</button>
        </form>
      </div>
    </div>
  );
}
