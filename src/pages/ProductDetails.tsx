import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Beef, ArrowRight, Share2, Check } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Product = Tables<"products">;
type Category = Tables<"categories">;

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { addItem, items, updateQuantity } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setProduct(data);
        if (data.category_id) {
          const { data: cat } = await supabase
            .from("categories")
            .select("*")
            .eq("id", data.category_id)
            .single();
          if (cat) setCategory(cat);
        }
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const cartQty = product
    ? items.find((i) => i.productId === product.id)?.quantity || 0
    : 0;

  const handleAdd = () => {
    if (!product) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      imageUrl: product.image_url,
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: product?.name, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="section-padding text-center min-h-[60vh] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center min-h-[60vh] flex items-center justify-center flex-col gap-4">
          <Beef className="w-16 h-16 text-muted-foreground/30" />
          <p className="text-xl text-muted-foreground">المنتج غير موجود</p>
          <Link to="/products">
            <Button variant="outline" className="gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة للمنتجات
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-rtl py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
            {category && (
              <>
                <span>/</span>
                <Link to="/products" className="hover:text-primary transition-colors">{category.name}</Link>
              </>
            )}
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Beef className="w-20 h-20 text-muted-foreground/20" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {category && (
                <span className="text-sm text-primary font-semibold mb-2">{category.name}</span>
              )}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-primary">{product.price} ج.م</span>
                <span className="text-muted-foreground">/ {product.unit}</span>
              </div>

              {product.description && (
                <div className="mb-6">
                  <h3 className="font-bold text-foreground mb-2">التفاصيل</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              )}

              <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-border">
                {cartQty === 0 ? (
                  <Button size="lg" className="w-full gap-2 text-base" onClick={handleAdd}>
                    <Plus className="w-5 h-5" /> أضف للسلة
                  </Button>
                ) : (
                  <div className="flex items-center justify-center gap-4 bg-muted rounded-xl p-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateQuantity(product.id, cartQty - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-black text-2xl w-8 text-center">{cartQty}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateQuantity(product.id, cartQty + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                <Button variant="outline" className="gap-2" onClick={handleShare}>
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  {copied ? "تم نسخ الرابط" : "مشاركة المنتج"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
