import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
