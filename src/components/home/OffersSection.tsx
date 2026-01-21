import { Link } from "react-router-dom";
import { Flame, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import offerImage from "@/assets/special-offer.jpg";

const offers = [
  {
    id: 1,
    title: "عرض الأسرة",
    description: "3 كيلو لحم بلدي + كيلو كفتة",
    oldPrice: "750 ج",
    newPrice: "599 ج",
    badge: "الأكثر طلبًا",
  },
  {
    id: 2,
    title: "عرض المشويات",
    description: "صينية مشويات مشكلة (ريش + كباب + كفتة)",
    oldPrice: "450 ج",
    newPrice: "349 ج",
    badge: "عرض جديد",
  },
  {
    id: 3,
    title: "عرض العزومة",
    description: "5 كيلو لحم متنوع + صينية كفتة",
    oldPrice: "1100 ج",
    newPrice: "899 ج",
    badge: "وفر أكتر",
  },
];

const OffersSection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-rtl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold text-charcoal rounded-full px-4 py-2 mb-4">
            <Flame className="w-5 h-5" />
            <span className="font-bold">عروض حصرية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            عروض اليوم
          </h2>
          <p className="text-white/80 text-lg">
            وفر أكتر مع عروضنا المميزة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-white/80 mb-4">{offer.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-gold">{offer.newPrice}</span>
                <span className="text-white/50 line-through">{offer.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/offers">
              شوف كل العروض
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
