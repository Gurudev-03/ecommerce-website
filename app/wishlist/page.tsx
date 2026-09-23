import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
        <div className="glass rounded-3xl p-12 max-w-md w-full text-center space-y-5">
          <p className="text-6xl" aria-hidden="true">♡</p>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Your wishlist is empty</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Save items you love and come back to them anytime.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/products" className="btn-primary py-3 rounded-full text-sm font-semibold text-white text-center z-10 relative">
              Explore Products
            </Link>
            <Link href="/login" className="btn-ghost py-3 rounded-full text-sm font-semibold text-center">
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
