import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, RefreshCw, ChevronLeft, ChevronRight, Star, Package, Droplets, Wrench, Eye } from "lucide-react";

const testimonials = [
  { name: "Maria Aparecida, 68 anos", text: "Nunca pensei que algo tão simples ia fazer tanta diferença. Me sinto mais limpa e mais independente no banheiro.", rating: 5 },
  { name: "Carlos Eduardo, 42 anos", text: "Instalei sozinho em menos de 10 minutos. A sensação de limpeza é incomparável com papel. Minha família toda já usa.", rating: 5 },
  { name: "Ana Paula, 55 anos", text: "Comprei pro meu pai que tem dificuldade de mobilidade. Ele ficou muito mais confortável e independente. Recomendo demais!", rating: 5 },
  { name: "Roberto Almeida, 37 anos", text: "Tinha medo de não servir no meu vaso, mas encaixou perfeitamente. Serviu de primeira sem nenhum ajuste.", rating: 5 },
  { name: "Fernanda Costa, 61 anos", text: "Achei que ia ser difícil de instalar, mas foi tão simples que minha neta de 16 anos ajudou. Zero complicação.", rating: 5 },
  { name: "José Ricardo, 74 anos", text: "Uso cadeira de rodas e o chuveirinho era um pesadelo. Com o Jet Clean, consigo me higienizar sozinho.", rating: 5 },
  { name: "Patrícia Mendes, 33 anos", text: "No começo estranhei a ideia, mas depois do primeiro uso entendi o hype. Papel nunca mais.", rating: 5 },
  { name: "Thiago Souza, 29 anos", text: "Comprei por curiosidade e virou item essencial. Quando viajo e não tenho, sinto falta.", rating: 5 },
];
import Layout from "@/components/Layout";
import gallery1 from "@/assets/product-gallery-1.webp";
import gallery2 from "@/assets/product-gallery-2.png";
import gallery3 from "@/assets/product-gallery-3.png";
import gallery4 from "@/assets/product-gallery-4.png";
import gallery5 from "@/assets/product-gallery-5.png";
import gallery6 from "@/assets/product-gallery-6.png";
import gallery7 from "@/assets/product-gallery-7.png";
import gallery8 from "@/assets/product-gallery-8.png";
import gallery9 from "@/assets/product-gallery-9.png";

const galleryImages = [
  gallery1, gallery4, gallery7, gallery8, gallery9, gallery2, gallery3, gallery6,
];

const ProductJetClean = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goNext = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const goPrev = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <Layout>
      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-elevated/95 backdrop-blur-sm border-t border-border p-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-xl font-bold text-price font-display">R$ 297</span>
            <span className="text-xs text-price-old line-through ml-2">R$ 397</span>
          </div>
          <Button variant="cta-large" size="lg" className="h-12 text-sm flex-1 max-w-[200px]">
            Comprar agora <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <section className="py-6 md:py-12 pb-28 md:pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1.5">
            <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Jet Clean</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
            {/* Galeria de imagens */}
            <div className="space-y-3">
              <div className="relative bg-surface-soft rounded-2xl overflow-hidden cursor-pointer select-none aspect-square">
                <img
                  src={galleryImages[currentImage]}
                  alt={`Jet Clean — Foto ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-surface-elevated/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-surface-elevated shadow-md transition-all"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-surface-elevated/90 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-surface-elevated shadow-md transition-all"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-foreground/60 backdrop-blur-sm text-background text-xs font-medium px-3 py-1 rounded-full">
                  {currentImage + 1} / {galleryImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-shrink-0 w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      i === currentImage
                        ? "border-primary ring-2 ring-primary/20 scale-105"
                        : "border-border/50 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações do produto */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase font-display">EVACUEI</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Ducha Higiênica Jet Clean
                </h1>
                {/* Reviews summary */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">4.9 (127 avaliações)</span>
                </div>
              </div>

              {/* Preço */}
              <div className="bg-surface-soft rounded-xl p-5 border border-border/50">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-price font-display">R$ 297</span>
                  <span className="text-lg text-price-old line-through">R$ 397</span>
                  <span className="bg-discount/10 text-discount text-xs font-bold px-2.5 py-1 rounded-full">-25%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ou 12x de R$ 24,75 sem juros
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Transforme sua rotina de higiene com o Jet Clean. Mais limpeza, mais conforto, menos desperdício. Instalação simples e resultado imediato.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { icon: Droplets, text: "Jato de água ajustável" },
                  { icon: Wrench, text: "Instalação sem ferramentas" },
                  { icon: Shield, text: "Material durável" },
                  { icon: Eye, text: "Design slim e discreto" },
                  { icon: Check, text: "Compatível com maioria dos vasos" },
                  { icon: Check, text: "Fácil de limpar" },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-1.5">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-success/15 flex items-center justify-center">
                      <benefit.icon className="h-3 w-3 text-success" />
                    </span>
                    <span className="text-foreground text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Desktop */}
              <div className="hidden md:block space-y-3">
                <Button variant="cta-large" size="lg" className="h-14 text-lg">
                  Adicionar ao Carrinho — R$ 297 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Garantia 30 dias", desc: "Satisfação garantida" },
                  { icon: RefreshCw, label: "30 dias p/ trocar", desc: "Sem burocracia" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-surface-soft rounded-xl p-4 border border-border/50"
                  >
                    <badge.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-foreground block">{badge.label}</span>
                      <span className="text-[11px] text-muted-foreground">{badge.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* O que vem na caixa */}
              <div className="bg-surface-soft rounded-xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-bold text-foreground">O que vem na caixa</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "1x Jet Clean Ducha Higiênica",
                    "1x Mangueira de conexão",
                    "1x Adaptador T",
                    "1x Manual de instalação",
                    "Fita vedante",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductJetClean;
