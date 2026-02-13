import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";

const Checkout = () => {
  const { items, subtotal, deliveryFee, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  if (items.length === 0 && !success) {
    return (
      <Layout>
        <div className="container-rtl section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">السلة فارغة</h1>
          <Button onClick={() => navigate("/products")}>تصفح المنتجات</Button>
        </div>
      </Layout>
    );
  }

  if (success) {
    return (
      <Layout>
        <div className="container-rtl section-padding text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">تم إرسال طلبك عبر واتساب!</h1>
          <p className="text-muted-foreground mb-6">هنتواصل معاك في أقرب وقت لتأكيد الطلب</p>
          <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
        </div>
      </Layout>
    );
  }

  const buildWhatsAppMessage = () => {
    let msg = `🥩 *طلب جديد من جزارة الغربية*\n\n`;
    msg += `👤 الاسم: ${form.name}\n`;
    msg += `📞 التليفون: ${form.phone}\n`;
    msg += `📍 العنوان: ${form.address}\n`;
    if (form.notes) msg += `📝 ملاحظات: ${form.notes}\n`;
    msg += `\n━━━━━━━━━━━━━━\n`;
    msg += `🛒 *تفاصيل الطلب:*\n\n`;
    items.forEach((item) => {
      msg += `• ${item.name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} ج.م\n`;
    });
    msg += `\n━━━━━━━━━━━━━━\n`;
    msg += `💰 المجموع: ${subtotal.toFixed(2)} ج.م\n`;
    msg += `🚚 التوصيل: ${deliveryFee} ج.م\n`;
    msg += `✅ *الإجمالي: ${total.toFixed(2)} ج.م*`;
    return encodeURIComponent(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast({ title: "خطأ", description: "يرجى ملء جميع الحقول المطلوبة", variant: "destructive" });
      return;
    }
    const waMsg = buildWhatsAppMessage();
    window.open(`https://wa.me/201289898489?text=${waMsg}`, "_blank");
    clearCart();
    setSuccess(true);
    toast({ title: "تم إرسال طلبك بنجاح عبر واتساب!" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-rtl max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">إتمام الطلب</h1>
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader><CardTitle className="text-lg">بيانات التوصيل</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>الاسم بالكامل</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>رقم التليفون</Label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>العنوان بالتفصيل</Label>
                  <Textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required rows={3} />
                </div>
                <div className="space-y-2">
                  <Label>ملاحظات (اختياري)</Label>
                  <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={2} />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader><CardTitle className="text-lg">طريقة الطلب</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-3 rounded-lg border bg-muted">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span className="font-medium">الطلب عبر واتساب</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    هيتم إرسال تفاصيل طلبك لينا على واتساب وهنتواصل معاك لتأكيد الطلب
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-lg">ملخص الطلب</CardTitle></CardHeader>
                <CardContent className="space-y-2">
                  {items.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>{(item.price * item.quantity).toFixed(2)} ج.م</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2 space-y-1">
                    <div className="flex justify-between text-sm"><span>المجموع:</span><span>{subtotal.toFixed(2)} ج.م</span></div>
                    <div className="flex justify-between text-sm"><span>التوصيل:</span><span>{deliveryFee} ج.م</span></div>
                    <div className="flex justify-between font-bold text-lg"><span>الإجمالي:</span><span>{total.toFixed(2)} ج.م</span></div>
                  </div>
                  <Button type="submit" size="lg" className="w-full mt-4 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    إرسال الطلب عبر واتساب
                  </Button>
                  <div className="text-center mt-2">
                    <span className="text-sm text-muted-foreground">أو اتصل بينا مباشرة</span>
                    <Button variant="outline" size="sm" className="w-full mt-2 gap-2" asChild>
                      <a href="tel:19026"><Phone className="w-4 h-4" /> الخط الساخن 19026</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
