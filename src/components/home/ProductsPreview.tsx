import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import meatImage from "@/assets/fresh-meat.jpg";
import grillImage from "@/assets/grilled-meat.jpg";
import trayImage from "@/assets/meat-tray.jpg";
import marinatedImage from "@/assets/marinated-meat.jpg";

const categories = [
  {
    id: 1,
    title: "لحوم طازة",
    description: "لحم بلدي طازة بجميع التقطيعات",
    image: meatImage,
    price: "من 150 ج/كيلو",
  },
  {
    id: 2,
    title: "مشويات جاهزة",
    description: "كباب وكفتة وريش محضرة طازة",
    image: grillImage,
    price: "من 180 ج/كيلو",
  },
  {
    id: 3,
    title: "صواني وعروض",
    description: "صواني جاهزة للعائلة والعزومات",
    image: trayImage,
    price: "من 300 ج",
  },
  {
    id: 4,
    title: "لحوم متبّلة",
    description: "جاهزة للشوي في البيت",
    image: marinatedImage,
    price: "من 170 ج/كيلو",
  },
];

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-rtl">
        <SectionHeader
          title="منتجاتنا"
          subtitle="تشكيلة متنوعة من اللحوم الطازة والمشويات اللذيذة"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to="/products"
              className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3 left-3">
                  <span className="inline-block bg-gold text-charcoal text-xs font-bold px-2 py-1 rounded-md">
                    {category.price}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <Link to="/products">
              شوف كل المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
