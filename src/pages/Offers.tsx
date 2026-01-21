import Layout from "@/components/layout/Layout";
import { Flame, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import offerImage from "@/assets/special-offer.jpg";

const offers = [
  {
    id: 1,
    title: "عرض الأسرة الكبير",
    description: "3 كيلو لحم بلدي + كيلو كفتة + كيلو كباب",
    oldPrice: "950 ج",
    newPrice: "749 ج",
    badge: "الأكثر طلبًا",
    savings: "وفّر 200 ج",
  },
  {
    id: 2,
    title: "عرض المشويات المشكلة",
    description: "صينية مشويات مشكلة (ريش + كباب + كفتة) - 2 كيلو",
    oldPrice: "550 ج",
    newPrice: "449 ج",
    badge: "عرض جديد",
    savings: "وفّر 100 ج",
  },
  {
    id: 3,
    title: "عرض العزومة الكبيرة",
    description: "5 كيلو لحم متنوع + صينية كفتة كيلو + صينية كباب كيلو",
    oldPrice: "1400 ج",
    newPrice: "1099 ج",
    badge: "أفضل قيمة",
    savings: "وفّر 300 ج",
  },
  {
    id: 4,
    title: "عرض الستيك",
    description: "2 كيلو شرائح ستيك مميزة",
    oldPrice: "500 ج",
    newPrice: "399 ج",
    badge: "محدود",
    savings: "وفّر 100 ج",
  },
  {
    id: 5,
    title: "عرض الريش",
    description: "2 كيلو ريش بتلو فاخرة",
    oldPrice: "600 ج",
    newPrice: "499 ج",
    badge: "عرض خاص",
    savings: "وفّر 100 ج",
  },
  {
    id: 6,
    title: "عرض الغداء اليومي",
    description: "كيلو لحم بلدي + نص كيلو كفتة",
    oldPrice: "380 ج",
    newPrice: "299 ج",
    badge: "يومي",
    savings: "وفّر 80 ج",
  },
];

const Offers = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-hero py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-rtl text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold text-charcoal rounded-full px-4 py-2 mb-4">
            <Flame className="w-5 h-5" />
            <span className="font-bold">عروض حصرية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">عروض اليوم</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            وفّر أكتر مع عروضنا المميزة - عروض متجددة كل أسبوع
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gold">
            <Clock className="w-5 h-5" />
            <span>العروض متاحة حتى نفاذ الكمية</span>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="relative h-48 bg-gradient-hero">
                  <img
                    src={offerImage}
                    alt={offer.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                        {offer.badge}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-md">
                    {offer.savings}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black text-primary">{offer.newPrice}</span>
                    <span className="text-muted-foreground line-through">{offer.oldPrice}</span>
                  </div>
                  <Button variant="cta" className="w-full" asChild>
                    <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      اطلب الآن
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-rtl">
          <div className="bg-gradient-dark rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                عايز عرض خاص؟
              </h2>
              <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
                اتصل بينا وهنعملك عرض مخصوص على حسب احتياجك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Offers;
