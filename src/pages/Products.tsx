import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import meatSlices from "@/assets/meat-slices.jpg";
import sausages from "@/assets/sausages.jpg";
import meat380 from "@/assets/meat-380.jpg";
import beefsteak from "@/assets/beefsteak-420.jpg";
import kabab from "@/assets/kabab-420.jpg";
import meatKhodar from "@/assets/meat-khodar-380.jpg";
import ketf from "@/assets/ketf-350.jpg";
import sogo2 from "@/assets/sogo2-330.jpg";
import shopTeam from "@/assets/shop-team.jpg";

const categories = [
  {
    id: "fresh-meat",
    title: "اللحوم الطازة",
    description: "لحوم بلدي طازة من أجود المصادر، متوفرة بجميع التقطيعات حسب طلبك",
    products: [
      { name: "لحمة مليس (بدون عظم)", price: "380 جنيه/كيلو", image: meat380 },
      { name: "لحمة خضار", price: "380 جنيه/كيلو", image: meatKhodar },
      { name: "كتف", price: "350 جنيه/كيلو", image: ketf },
      { name: "بفتيك", price: "420 جنيه/كيلو", image: beefsteak },
      { name: "كباب حلة", price: "420 جنيه/كيلو", image: kabab },
      { name: "لحم تقطيع", price: "380 جنيه/كيلو", image: meatSlices },
    ],
  },
  {
    id: "processed",
    title: "المنتجات المصنعة",
    description: "منتجات لحوم مصنعة طازة بوصفات مميزة",
    products: [
      { name: "سجق", price: "330 جنيه/كيلو", image: sogo2 },
      { name: "سجق بلدي", price: "330 جنيه/كيلو", image: sausages },
      { name: "كفتة", price: "320 جنيه/كيلو", image: shopTeam },
      { name: "برجر فراخ", price: "320 جنيه/كيلو", image: shopTeam },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-hero py-12 lg:py-16">
        <div className="container-rtl text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">منتجاتنا</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            ملوك اللحمة البلدي في مصر - تشكيلة متنوعة من اللحوم الطازة بأفضل الأسعار
          </p>
        </div>
      </section>

      {/* Products Sections */}
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="section-padding odd:bg-background even:bg-muted"
        >
          <div className="container-rtl">
            <SectionHeader title={category.title} subtitle={category.description} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-brand-blue text-white text-sm font-bold px-3 py-1 rounded-md">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-gradient-blue">
        <div className="container-rtl text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">عايز تطلب؟</h2>
          <p className="text-white/90 mb-8">اتصل بينا دلوقتي أو ابعتلنا على واتساب</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:19026">
                <Phone className="w-5 h-5" />
                الخط الساخن 19026
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
