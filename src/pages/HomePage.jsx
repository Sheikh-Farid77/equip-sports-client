import CategorySection from "../components/CategorySection";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import ProductSection from "../components/ProductSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductSection />
      <CategorySection />
      <ImageGrid />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
