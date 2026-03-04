import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Truck, Shield, RefreshCw } from "lucide-react";
import Layout from "@/components/Layout";
import productHero from "@/assets/product-hero.jpg";

const ProductJetClean = () => {
  return (
    <Layout>
      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-elevated border-t border-border p-3 md:hidden">
        <Button variant="cta-large" size="lg" className="h-14 text-base">
          Adicionar ao Carrinho — R$ 297 <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <section className="py-8 md:py-16 pb-28 md:pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Imagem do produto */}
            <div className="bg-surface-soft rounded-2xl overflow-hidden">
              <img
                src={productHero}
                alt="Jet Clean — Ducha Higiênica da Evacuei"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Informações do produto */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest uppercase font-display">EVACUEI</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">
                  Ducha Higiênica Jet Clean
                </h1>
              </div>

              {/* Preço */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-price font-display">R$ 297</span>
                <span className="text-lg text-price-old line-through">R$ 397</span>
                <span className="bg-discount/10 text-discount text-sm font-bold px-2 py-0.5 rounded">-25%</span>
              </div>

              <p className="text-muted-foreground">
                Transforme sua rotina de higiene com o Jet Clean. Mais limpeza, mais conforto, menos desperdício. Instalação simples e resultado imediato.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {[
                  "Jato de água ajustável",
                  "Instalação sem ferramentas especiais",
                  "Compatível com a maioria dos vasos",
                  "Material durável e de alta qualidade",
                  "Design slim e discreto",
                  "Fácil de limpar",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-success flex items-center justify-center">
                      <Check className="h-3 w-3 text-success-foreground" />
                    </span>
                    <span className="text-foreground font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Desktop */}
              <div className="hidden md:block">
                <Button variant="cta-large" size="lg" className="h-14 text-lg">
                  Adicionar ao Carrinho — R$ 297 <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Truck, label: "Frete Grátis" },
                  { icon: Shield, label: "Garantia 1 Ano" },
                  { icon: RefreshCw, label: "30 dias p/ trocar" },
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                    <badge.icon className="h-6 w-6 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* O que vem na caixa */}
              <div className="bg-surface-soft rounded-xl p-6 border border-border">
                <h3 className="font-display font-bold text-foreground mb-3">O que vem na caixa</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1x Jet Clean Ducha Higiênica</li>
                  <li>• 1x Mangueira de conexão</li>
                  <li>• 1x Adaptador T</li>
                  <li>• 1x Manual de instalação</li>
                  <li>• Fita vedante</li>
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
