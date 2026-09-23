import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm space-y-6">
          <div className="glass rounded-3xl p-8 space-y-6">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Create account</h1>
              <p className="text-sm text-[var(--text-muted)]">Join SuperCommerce today</p>
            </div>

            <form className="space-y-4" aria-label="Create account form">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-[var(--text-secondary)]">Full Name</label>
                <input id="name" type="text" placeholder="Your name" autoComplete="name"
                  className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-[var(--text-secondary)]">Email</label>
                <input id="email" type="email" placeholder="you@example.com" autoComplete="email"
                  className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="password" className="text-xs font-medium text-[var(--text-secondary)]">Password</label>
                <input id="password" type="password" placeholder="Min 8 characters" autoComplete="new-password"
                  className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <button type="submit" className="w-full btn-primary py-3.5 rounded-xl font-semibold text-sm text-white z-10 relative">
                Create Account
              </button>
            </form>

            <div className="glass rounded-xl p-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">🔒</span>
              <p className="text-xs text-[var(--text-muted)]">Your personal data is always encrypted and secure.</p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)]">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Sign in</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
