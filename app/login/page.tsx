import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm space-y-6">
          {/* Card */}
          <div className="glass rounded-3xl p-8 space-y-6">
            {/* Logo */}
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Welcome back</h1>
              <p className="text-sm text-[var(--text-muted)]">Sign in to your SuperCommerce account</p>
            </div>

            <form className="space-y-4" aria-label="Sign in form">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-[var(--text-secondary)]">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-xs font-medium text-[var(--text-secondary)]">Password</label>
                  <Link href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full bg-white/5 border border-[var(--border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3.5 rounded-xl font-semibold text-sm text-white z-10 relative"
              >
                Sign In
              </button>
            </form>

            <div className="relative flex items-center gap-3">
              <div className="flex-1 h-px bg-[var(--border-glass)]" />
              <span className="text-xs text-[var(--text-muted)]">or</span>
              <div className="flex-1 h-px bg-[var(--border-glass)]" />
            </div>

            {/* Security note */}
            <div className="glass rounded-xl p-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">🔒</span>
              <p className="text-xs text-[var(--text-muted)]">256-bit SSL encrypted. Your data is always protected.</p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)]">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
