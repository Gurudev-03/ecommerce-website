import Link from "next/link";

const faqs = [
  { q: "How do I track my order?", a: "Go to Track Order page and enter your order ID. You'll get real-time updates." },
  { q: "What is the return policy?", a: "We offer a 30-day easy return policy on all products. Items must be unused and in original packaging." },
  { q: "How do I cancel an order?", a: "Orders can be cancelled within 24 hours of placement from your order history." },
  { q: "Are my payments secure?", a: "Yes. All transactions use 256-bit SSL encryption and PCI-compliant payment processing." },
  { q: "When will I receive my order?", a: "Metro cities: 1–2 days. Other cities: 3–5 days. Free delivery on orders above ₹999." },
  { q: "How do I contact support?", a: "Email us at support@supercommerce.in or use our live chat available Mon–Sat, 9am–9pm." },
];

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Help Center</h1>
        <p className="text-[var(--text-muted)] mt-2">Find answers to common questions</p>
      </div>
      <div className="space-y-3">
        {faqs.map((item) => (
          <div key={item.q} className="glass rounded-2xl p-5 space-y-2">
            <p className="font-semibold text-[var(--text-primary)]">{item.q}</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 text-center space-y-3">
        <p className="font-semibold text-[var(--text-primary)]">Still need help?</p>
        <Link href="/contact" className="btn-primary inline-block px-6 py-3 rounded-full text-sm font-semibold text-white z-10 relative">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
