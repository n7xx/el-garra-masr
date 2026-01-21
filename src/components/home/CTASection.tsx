import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-rtl">
        <div className="bg-gradient-dark rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              جاهز تطلب؟
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              اتصل بينا دلوقتي أو ابعتلنا على واتساب وهنوصلك طلبك في أسرع وقت
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="tel:+201234567890">
                  <Phone className="w-6 h-6" />
                  اتصل الآن
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  واتساب
                </a>
              </Button>
            </div>

            <p className="text-secondary-foreground/60 text-sm mt-6">
              متاحين يوميًا من 8 صباحًا - 12 منتصف الليل
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
