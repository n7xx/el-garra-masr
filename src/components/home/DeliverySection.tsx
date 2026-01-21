import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "سيدي جابر",
  "سموحة",
  "العصافرة",
  "المنتزه",
  "الأنفوشي",
  "محرم بك",
  "كرموز",
  "العجمي",
  "المندرة",
  "جليم",
  "رشدي",
  "كامب شيزار",
];

const DeliverySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-rtl">
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">خدمة التوصيل</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                نوصلك لحد البيت
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                توصيل سريع لجميع مناطق الإسكندرية. اطلب دلوقتي واستلم في أسرع وقت!
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-foreground mb-3">المناطق اللي بنوصلها:</h3>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href="tel:+201234567890">
                    <Phone className="w-5 h-5" />
                    اتصل للطلب
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    اطلب واتساب
                  </a>
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-muted min-h-[300px] lg:min-h-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109375.65772649!2d29.86180839999999!3d31.2000682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع جزارة الغربية في الإسكندرية"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
