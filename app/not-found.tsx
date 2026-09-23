import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6">
        <p className="text-8xl font-extrabold text-gradient">404</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Page not found</h1>
        <p className="text-sm text-[var(--text-muted)] max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3">
          <Link href="/" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold text-white z-10 relative">
            Go Home
          </Link>
          <Link href="/products" className="btn-ghost px-6 py-3 rounded-full text-sm font-semibold">
            Browse Products
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
