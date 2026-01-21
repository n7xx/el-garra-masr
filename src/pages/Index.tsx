import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import OffersSection from "@/components/home/OffersSection";
import DeliverySection from "@/components/home/DeliverySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <OffersSection />
      <DeliverySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
