import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { MarqueeBar } from "@/components/home/MarqueeBar";
import { Categories } from "@/components/home/Categories";
import { FlashSale } from "@/components/home/FlashSale";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <Categories />
        <FlashSale />
        <FeaturedProducts />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
