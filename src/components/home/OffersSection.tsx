import { Link } from "react-router-dom";
import { Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import meatKhodar from "@/assets/meat-khodar-380.jpg";
import meat380 from "@/assets/meat-380.jpg";
import beefsteak from "@/assets/beefsteak-420.jpg";

const offers = [
  {
    id: 1,
    title: "لحمة خضار",
    description: "لحم بلدي طازة مقطع للخضار",
    price: "380 جنيه/كيلو",
    image: meatKhodar,
    badge: "عرض مميز",
  },
  {
    id: 2,
    title: "لحمة مليس",
    description: "لحم بلدي بدون عظم",
    price: "380 جنيه/كيلو",
    image: meat380,
    badge: "الأكثر طلبًا",
  },
  {
    id: 3,
    title: "بفتيك",
    description: "شرائح بفتيك مميزة",
    price: "420 جنيه/كيلو",
    image: beefsteak,
    badge: "جودة ممتازة",
  },
];

const OffersSection = () => {
  return (
    <section className="section-padding bg-gradient-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-rtl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold text-charcoal rounded-full px-4 py-2 mb-4">
            <Flame className="w-5 h-5" />
            <span className="font-bold">أسعار اليوم</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            أسعار لحوم الغربية
          </h2>
          <p className="text-white/80 text-lg">
            أفضل الأسعار مع أعلى جودة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                    {offer.badge}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/80 mb-3">{offer.description}</p>
                <span className="text-2xl font-black text-gold">{offer.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/offers">
              شوف كل الأسعار
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
