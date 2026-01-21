import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    location: "سيدي جابر",
    rating: 5,
    text: "أفضل جزارة في إسكندرية بجد! اللحمة طازة جداً والخدمة ممتازة. التوصيل سريع ودايماً بيوصلوا في الميعاد.",
  },
  {
    id: 2,
    name: "سارة أحمد",
    location: "سموحة",
    rating: 5,
    text: "المشويات عندهم تحفة! الكباب والكفتة طعمهم مميز جداً. أنصح الكل يجربوا صينية المشويات المشكلة.",
  },
  {
    id: 3,
    name: "محمد عبدالله",
    location: "المنتزه",
    rating: 5,
    text: "بقالي سنين بتعامل معاهم والجودة ثابتة دايماً. الأسعار كويسة جداً مقارنة بالجودة اللي بتاخدها.",
  },
  {
    id: 4,
    name: "نورهان خالد",
    location: "جليم",
    rating: 5,
    text: "خدمة العملاء عندهم رائعة جداً! دايماً بيساعدوني أختار قطع اللحمة المناسبة للأكلة اللي هعملها.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-rtl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-2 mb-4">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">آراء عملائنا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            ليه عملاءنا بيحبونا؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            آراء حقيقية من عملاء جربوا منتجاتنا وخدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-gold fill-gold" 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-sm border border-border">
            <div className="flex -space-x-2 space-x-reverse">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">
                    {["أ", "س", "م", "ن"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-foreground">+500</span>
              <span className="text-muted-foreground"> عميل سعيد</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
