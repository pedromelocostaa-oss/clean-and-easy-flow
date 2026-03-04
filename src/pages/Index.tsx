import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, Droplets, Shield, Truck, RefreshCw, ShowerHead, Clock, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import productHero from "@/assets/product-hero.jpg";
import problemSection from "@/assets/problem-section.jpg";
import productCenter from "@/assets/product-center.jpg";
import installation from "@/assets/installation.jpg";
import productDetail from "@/assets/product-detail.jpg";
import bideJetClean from "@/assets/bide-jet-clean.webp";

const CTAButton = ({ children, variant = "cta" as const, className = "" }: {children: React.ReactNode;variant?: "cta" | "cta-outline";className?: string;}) =>
<Link to="/produto/jet-clean">
    <Button variant={variant} size="lg" className={className}>
      {children}
    </Button>
  </Link>;


// ─── SECTION 1: HERO ───
const HeroSection = () =>
<section className="bg-surface-soft py-16 md:py-24">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium text-primary font-display">
            ✨ Mais de 6.247 bundas já amam o Jet Clean.
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Higiene com água. Mais conforto, mais autonomia.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            O bidê de acoplar que você instala em minutos e transforma a rotina no banheiro — sem esforço e sem complicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton>Quero o meu <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
            <CTAButton variant="cta-outline">Ver detalhes</CTAButton>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span>⚡ Instalação em 8 minutos</span>
            <span>🚽 Compatível com 97% dos vasos do Brasil</span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
          src={productHero}
          alt="Jet Clean instalado em vaso sanitário"
          className="rounded-2xl shadow-card max-w-full h-auto" />
        
        </div>
      </div>
    </div>
  </section>;


// ─── SECTION 2: PROBLEMATIZAÇÃO ───
const ProblemSection = () =>
<section className="py-20 md:py-28 bg-surface-soft">
    <div className="container max-w-4xl text-center space-y-8">
      {/* Kicker */}
      <p className="text-xs font-bold tracking-widest uppercase text-destructive">
        O PROBLEMA QUE NINGUÉM FALA
      </p>

      {/* Headline */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        Papel e chuveirinho não te limpam de verdade
      </h2>

      {/* Subheadline */}
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
        Pense assim: se você sujasse a mão, usaria só papel pra limpar? Então por que aceitar isso na parte mais sensível do corpo?
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Card 1 - Papel */}
        <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 text-left">
          <span className="text-2xl">🧻</span>
          <h3 className="font-display font-bold text-lg text-foreground mt-3 mb-4">Papel Higiênico</h3>
          <ul className="space-y-3">
            {[
          "Espalha mais do que limpa",
          "Causa irritação com o uso frequente",
          "Gera desperdício e entope encanamento",
          "Você usaria papel pra limpar gordura da mão?"].
          map((text, i) =>
          <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-destructive font-bold text-sm">✕</span>
                <span className="text-muted-foreground text-sm">{text}</span>
              </li>
          )}
          </ul>
        </div>

        {/* Card 2 - Chuveirinho */}
        <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 text-left">
          <span className="text-2xl">🚿</span>
          <h3 className="font-display font-bold text-lg text-foreground mt-3 mb-4">Chuveirinho Higiênico</h3>
          <ul className="space-y-3">
            {[
          "Molha o banheiro inteiro",
          "Exige malabarismo pra usar direito",
          "Difícil controlar a pressão da água"].
          map((text, i) =>
          <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 text-destructive font-bold text-sm">✕</span>
                <span className="text-muted-foreground text-sm">{text}</span>
              </li>
          )}
          </ul>
        </div>
      </div>

      {/* Pill alert */}
      <div className="pt-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm text-muted-foreground">
          ⚠️ Existe uma forma melhor. E é mais simples do que você imagina.
        </span>
      </div>

      {/* CTA */}
      <CTAButton>Conhecer a solução <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
    </div>
  </section>;


// ─── SECTION 3: APRESENTAÇÃO ───
const ProductIntroSection = () =>
<section className="py-20 md:py-28">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            A evolução que seu trono precisa 👑
          </h2>
          <p className="text-muted-foreground text-lg">
            O Jet Clean, um produto da Evacuei, é um bidê de acoplar instalado em 8 minutos no seu vaso sanitário. Ele usa um jato de água direcionado para uma higienização eficiente — de forma prática, econômica e simples.
          </p>
          <div className="space-y-4 pt-2">
            {[
          { emoji: "🚿", text: "Limpeza com água, direto onde você precisa" },
          { emoji: "⏰", text: "Instalação em até 8 minutos, sem ferramentas especiais" },
          { emoji: "🇧🇷", text: "Compatível com 97% dos vasos sanitários do Brasil" }].
          map((item, i) =>
          <div key={i} className="bg-surface-elevated rounded-xl p-5 shadow-soft items-center justify-center flex flex-row gap-[10px] bg-muted">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-sm text-foreground font-medium">{item.text}</p>
              </div>
          )}
          </div>
          <CTAButton>Quero o meu Jet Clean <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
        <div className="flex justify-center">
          <img
          src={bideJetClean}
          alt="Jet Clean instalado no vaso sanitário"
          className="rounded-2xl shadow-card max-w-md w-full h-auto object-cover" />
        
        </div>
      </div>
    </div>
  </section>;


// ─── SECTION 4: POR QUE ESCOLHER ───
const WhyChooseSection = () => {
  const leftItems = [
  { title: "Higiene verdadeira", desc: "Papel espalha. Água remove. Não é opinião — é lavagem versus fricção seca." },
  { title: "Instalação em até 8 minutos", desc: "Sem obra. Você instala entre o vaso e o assento em poucos minutos." }];

  const rightItems = [
  { title: "Compatível com 97% dos vasos", desc: "Regulagens pensadas para encaixar na maioria dos modelos do Brasil." },
  { title: "Discreto e moderno", desc: "Depois de instalado, fica quase invisível no seu banheiro." }];


  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {leftItems.map((item, i) =>
            <div key={i} className="text-right md:text-right">
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <img

              alt="Jet Clean no vaso"
              className="shadow-card max-w-[280px] w-full h-auto rounded-2xl border-solid" src="/lovable-uploads/8f265d34-a69d-4877-873c-ddc8a0d6e1d0.png" />
            
          </div>
          <div className="space-y-8">
            {rightItems.map((item, i) =>
            <div key={i}>
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-10">
          <CTAButton>Ver preço e detalhes <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
      </div>
    </section>);

};

// ─── SECTION 5: COMO FUNCIONA ───
const HowItWorksSection = () =>
<section className="py-16 md:py-24 bg-surface-soft">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        Como funciona na prática
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {[
        { step: "1", text: "Instale o Jet Clean entre o vaso e o assento." },
        { step: "2", text: "Conecte na entrada de água com o adaptador." },
        { step: "3", text: "Ajuste a pressão e use quando precisar." }].
        map((item) =>
        <div key={item.step} className="flex items-start gap-4">
              <span className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                {item.step}
              </span>
              <p className="text-foreground text-lg pt-1.5">{item.text}</p>
            </div>
        )}
          <p className="text-muted-foreground italic">
            Simples. Rápido. E você sente a diferença no primeiro uso.
          </p>
          <CTAButton>Quero testar o Jet Clean <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
        <div className="flex justify-center">
          <img
          src={installation}
          alt="Instalação do Jet Clean"
          className="rounded-2xl shadow-card max-w-full h-auto" />
        
        </div>
      </div>
    </div>
  </section>;


// ─── SECTION 6: INSTALAÇÃO REFORÇO ───
const InstallationSection = () =>
<section className="py-16 md:py-24">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
          src={productDetail}
          alt="Detalhe do Jet Clean instalado"
          className="rounded-2xl shadow-card max-w-full h-auto" />
        
        </div>
        <div className="space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Em 8 minutos você muda o futuro do seu bumbum.
          </h2>
          <p className="text-muted-foreground text-lg">
            O Jet Clean foi pensado para ser simples: sem ferramentas especiais e compatível com a maioria dos vasos sanitários.
          </p>
          <ul className="space-y-3">
            {[
          "🧰 Sem necessidade de encanador",
          "🚽 Compatível com a maioria dos vasos",
          "🔒 Encaixe prático e seguro",
          "📘 Manual de instalação incluso"].
          map((text, i) =>
          <li key={i} className="text-foreground">{text}</li>
          )}
          </ul>
          <CTAButton>Comprar agora <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
      </div>
    </div>
  </section>;


// ─── SECTION 7: PARA QUEM É ───
const ForWhoSection = () =>
<section className="py-16 md:py-24 bg-surface-soft">
    <div className="container text-center space-y-10">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
        Perfeito para quem precisa de mais conforto e autonomia.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
      { emoji: "👵", title: "Idosos", desc: "Mais independência no banheiro, com menos esforço." },
      { emoji: "🦿", title: "Mobilidade reduzida", desc: "Menos movimento, mais praticidade." },
      { emoji: "✨", title: "Quem preza por higiene completa", desc: "Limpeza com água, sem improviso." }].
      map((card, i) =>
      <div key={i} className="bg-surface-elevated rounded-2xl p-8 shadow-card text-center">
            <span className="text-4xl">{card.emoji}</span>
            <h3 className="font-display font-semibold text-lg text-foreground mt-4">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{card.desc}</p>
          </div>
      )}
      </div>
      <CTAButton>Quero o meu <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
    </div>
  </section>;


// ─── SECTION 8: DEPOIMENTOS ───
const TestimonialsSection = () => {
  // Nota interna: substituir por depoimentos reais dos clientes
  const testimonials = [
  { name: "Maria Aparecida, 68 anos", text: "Nunca pensei que algo tão simples ia fazer tanta diferença. Me sinto mais limpa e mais independente no banheiro. Não preciso mais pedir ajuda.", rating: 5 },
  { name: "Carlos Eduardo, 42 anos", text: "Instalei sozinho em menos de 10 minutos. A sensação de limpeza é incomparável com papel. Minha família toda já usa e ninguém quer voltar atrás.", rating: 5 },
  { name: "Ana Paula, 55 anos", text: "Comprei pro meu pai que tem dificuldade de mobilidade. Ele ficou muito mais confortável e independente. Recomendo demais!", rating: 5 },
  { name: "Roberto Almeida, 37 anos", text: "Tinha medo de não servir no meu vaso, mas encaixou perfeitamente. A compatibilidade é real — serviu de primeira sem nenhum ajuste.", rating: 5 },
  { name: "Fernanda Costa, 61 anos", text: "Achei que ia ser difícil de instalar, mas foi tão simples que minha neta de 16 anos ajudou. Zero complicação, zero encanador.", rating: 5 },
  { name: "José Ricardo, 74 anos", text: "Uso cadeira de rodas e o chuveirinho era um pesadelo. Com o Jet Clean, consigo me higienizar sozinho. Devolveu minha dignidade.", rating: 5 },
  { name: "Patrícia Mendes, 33 anos", text: "No começo estranhei a ideia, mas depois do primeiro uso entendi o hype. É outra sensação de limpeza. Papel nunca mais.", rating: 5 },
  { name: "Luiz Fernando, 50 anos", text: "Minha preocupação era a estética — achei que ia ficar feio no banheiro. Mas é super discreto, quase não aparece. Design muito bem pensado.", rating: 5 },
  { name: "Dona Cláudia, 72 anos", text: "Tenho artrite e segurar o chuveirinho era muito difícil. O Jet Clean resolveu meu problema. Agora é só sentar e acionar. Simples assim.", rating: 5 },
  { name: "Thiago Souza, 29 anos", text: "Comprei por curiosidade e virou item essencial. Quando viajo e não tenho, sinto falta. Já presenteei dois amigos.", rating: 5 }];


  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 300 + 24; // card width + gap
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (isPaused.current || !container) return;
      currentIndex++;
      if (currentIndex >= testimonials.length - 3) {
        currentIndex = 0;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: currentIndex * cardWidth, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24">
      <div className="text-center space-y-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground container">
          Quem usa, não volta atrás. 💬
        </h2>
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={() => {isPaused.current = true;}}
          onMouseLeave={() => {isPaused.current = false;}}
          onTouchStart={() => {isPaused.current = true;}}
          onTouchEnd={() => {isPaused.current = false;}}>
          
          <div className="flex gap-6 px-[max(1rem,calc((100vw-1280px)/2+1rem))] w-max">
            {testimonials.map((t, i) =>
            <div key={i} className="bg-surface-elevated rounded-2xl p-6 shadow-card text-left w-[300px] flex-shrink-0">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) =>
                <span key={j} style={{ color: 'hsl(45, 93%, 47%)' }}>★</span>
                )}
                </div>
                <p className="text-foreground italic mb-4">"{t.text}"</p>
                <p className="text-sm font-semibold text-muted-foreground">— {t.name}</p>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <CTAButton>Quero sentir isso também <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
      </div>
    </section>);

};

// ─── SECTION 9: FAQ ───
const FAQSection = () => {
  const faqs = [
  { q: "O Jet Clean serve no meu vaso?", a: "Sim — ele foi pensado para ser compatível com a grande maioria dos vasos no Brasil (até 97%). Se você tiver um modelo muito fora do padrão, confira as medidas na página do produto ou fale com a gente no WhatsApp para confirmar antes de comprar." },
  { q: "É difícil de instalar? Preciso de encanador?", a: "Não. A instalação é simples e leva cerca de 8 minutos, sem necessidade de ferramentas especiais. Você instala entre o vaso e o assento e conecta na entrada de água usando o adaptador." },
  { q: "O que vem na caixa?", a: "Você recebe o Jet Clean e os itens necessários para instalar (ex.: adaptador, conexão e manual). A lista completa aparece na página do produto em \"O que vem na caixa\"." },
  { q: "Como eu uso no dia a dia?", a: "Depois de instalado, é só acionar o jato de água e ajustar a intensidade conforme seu conforto. A ideia é ser prático e rápido — sem malabarismo no banheiro." },
  { q: "Consome muita água?", a: "Em geral, o uso é controlado e dura poucos segundos, com ajuste de intensidade. [Estimativa real a inserir aqui]" },
  { q: "E a pressão da água, dá pra ajustar?", a: "Sim, o uso é feito com controle/ajuste de intensidade para você escolher o nível de conforto. [Especificação técnica editável]" },
  { q: "Fica aparecendo? Estraga a estética do banheiro?", a: "Não. O design é discreto e, depois de instalado, fica quase invisível. A ideia é melhorar a higiene sem \"poluir\" o banheiro." },
  { q: "É higiênico? Como eu limpo o Jet Clean?", a: "É simples: limpeza externa com pano e sabão neutro, e cuidados básicos de higiene como qualquer item do banheiro. [Se houver recurso de auto-limpeza/bico retrátil, inserir aqui]" },
  { q: "Posso devolver se não gostar?", a: "Sim — você tem uma política de troca/devolução. [Prazos e regras editáveis: \"X dias para trocar\", \"Garantia de X meses\"]" },
  { q: "Como funciona frete e prazo de entrega?", a: "O frete e o prazo aparecem no checkout / página do produto com base no seu CEP. [Confirmar política de frete grátis se aplicável]" }];


  return (
    <section className="py-16 md:py-24 bg-surface-soft">
      <div className="container max-w-3xl space-y-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
          Perguntas frequentes 🤔
        </h2>
        <div className="text-center">
          <CTAButton>Ver o Jet Clean <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) =>
          <AccordionItem key={i} value={`faq-${i}`} className="bg-surface-elevated rounded-xl px-6 border-none shadow-soft">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
        <div className="text-center pt-4">
          <CTAButton>Quero o meu Jet Clean <ArrowRight className="ml-1 h-4 w-4" /></CTAButton>
        </div>
      </div>
    </section>);

};

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ProductIntroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <InstallationSection />
      <ForWhoSection />
      <TestimonialsSection />
      <FAQSection />
    </Layout>);

};

export default Index;