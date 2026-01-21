import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/common/SectionHeader";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import meatImage from "@/assets/fresh-meat.jpg";
import grillImage from "@/assets/grilled-meat.jpg";
import trayImage from "@/assets/meat-tray.jpg";
import marinatedImage from "@/assets/marinated-meat.jpg";

const categories = [
  {
    id: "fresh-meat",
    title: "اللحوم الطازة",
    description: "لحوم بلدي طازة من أجود المصادر، متوفرة بجميع التقطيعات حسب طلبك",
    products: [
      { name: "لحم بتلو", price: "180 ج/كيلو", image: meatImage },
      { name: "لحم ضاني", price: "200 ج/كيلو", image: meatImage },
      { name: "لحم كندوز", price: "160 ج/كيلو", image: meatImage },
      { name: "لحم رأس عصفور", price: "220 ج/كيلو", image: meatImage },
      { name: "ريش بتلو", price: "280 ج/كيلو", image: meatImage },
      { name: "موزة بتلو", price: "200 ج/كيلو", image: meatImage },
    ],
  },
  {
    id: "grilled",
    title: "المشويات الجاهزة",
    description: "مشويات طازة محضرة بأيدي خبراء، جاهزة للأكل مباشرة",
    products: [
      { name: "كباب", price: "200 ج/كيلو", image: grillImage },
      { name: "كفتة", price: "180 ج/كيلو", image: grillImage },
      { name: "ريش مشوية", price: "320 ج/كيلو", image: grillImage },
      { name: "شيش طاووق", price: "160 ج/كيلو", image: grillImage },
      { name: "ممبار", price: "150 ج/كيلو", image: grillImage },
      { name: "نيفا مشوية", price: "180 ج/كيلو", image: grillImage },
    ],
  },
  {
    id: "trays",
    title: "الصواني والعروض العائلية",
    description: "صواني جاهزة مناسبة للعائلات والعزومات بأسعار مميزة",
    products: [
      { name: "صينية مشويات مشكل (2 كيلو)", price: "450 ج", image: trayImage },
      { name: "صينية لحم بالخضار", price: "350 ج", image: trayImage },
      { name: "عرض الأسرة (4 كيلو)", price: "599 ج", image: trayImage },
      { name: "صينية ريش (كيلو)", price: "320 ج", image: trayImage },
    ],
  },
  {
    id: "marinated",
    title: "اللحوم المتبّلة",
    description: "لحوم متبّلة جاهزة للشوي في البيت بتتبيلات مميزة",
    products: [
      { name: "كباب متبّل", price: "190 ج/كيلو", image: marinatedImage },
      { name: "كفتة متبّلة", price: "170 ج/كيلو", image: marinatedImage },
      { name: "شرائح ستيك متبّلة", price: "220 ج/كيلو", image: marinatedImage },
      { name: "أجنحة دجاج متبّلة", price: "120 ج/كيلو", image: marinatedImage },
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
            تشكيلة متنوعة من اللحوم الطازة والمشويات اللذيذة بأفضل الأسعار
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-gold text-charcoal text-sm font-bold px-3 py-1 rounded-md">
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
      <section className="section-padding bg-gradient-hero">
        <div className="container-rtl text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">عايز تطلب؟</h2>
          <p className="text-white/90 mb-8">اتصل بينا دلوقتي أو ابعتلنا على واتساب</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+201234567890">
                <Phone className="w-5 h-5" />
                اتصل الآن
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
