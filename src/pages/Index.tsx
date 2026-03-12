import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Droplets, Shield, ShowerHead, Clock, Wrench, Star, Users, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bideJetClean from "@/assets/bide-jet-clean.webp";

const CTAButton = ({
  children,
  variant = "cta" as const,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "cta" | "cta-outline";
  className?: string;
}) => (
  <Link to="/produto/jet-clean">
    <Button variant={variant} size="lg" className={className}>
      {children}
    </Button>
  </Link>
);

// ─── SECTION 1: HERO ───
const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-primary/5 py-20 md:py-32">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_60%)]" />
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-surface-elevated border border-border rounded-full px-4 py-2 shadow-sm">
            <div className="flex -space-x-1.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-surface-elevated flex items-center justify-center">
                  <Users className="h-3 w-3 text-primary" />
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">+6.247 bundas limpas</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />
              ))}
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
            Higiene com água.
            <br />
            <span className="text-primary">Mais conforto, mais autonomia.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            O bidê de acoplar que você instala em minutos e transforma a rotina no banheiro — sem esforço e sem complicação.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton className="h-14 text-base px-8">
              Quero o meu <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton variant="cta-outline" className="h-14 text-base px-8">
              Ver detalhes
            </CTAButton>
          </div>

          {/* Quick facts */}
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { icon: Clock, text: "Instalação em 8 min" },
              { icon: Shield, text: "Garantia 30 dias" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
          <img
            alt="Jet Clean instalado em vaso sanitário"
            className="relative rounded-2xl shadow-card max-w-full h-auto"
            src="/lovable-uploads/290a2ef6-671b-42a8-9e56-1543ea2948e6.png"
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── SECTION 2: PROBLEMATIZAÇÃO ───
const ProblemSection = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-5xl text-center space-y-10">
      <div className="space-y-5">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-destructive bg-destructive/8 px-4 py-1.5 rounded-full">
          O PROBLEMA QUE NINGUÉM FALA
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Papel e chuveirinho não te limpam de verdade
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Pense assim: se você sujasse a mão, usaria só papel pra limpar? Então por que aceitar isso na parte mais sensível do corpo?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            emoji: "🧻",
            title: "Papel Higiênico",
            items: [
              "Espalha mais do que limpa",
              "Causa irritação com o uso frequente",
              "Gera desperdício e entope encanamento",
              "Você usaria papel pra limpar gordura da mão?",
            ],
          },
          {
            emoji: "🚿",
            title: "Chuveirinho Higiênico",
            items: [
              "Molha o banheiro inteiro",
              "Exige malabarismo pra usar direito",
              "Difícil controlar a pressão da água",
            ],
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-destructive/15 bg-gradient-to-b from-destructive/[0.04] to-transparent p-7 text-left hover:border-destructive/25 transition-colors"
          >
            <span className="text-3xl">{card.emoji}</span>
            <h3 className="font-display font-bold text-lg text-foreground mt-3 mb-5">{card.title}</h3>
            <ul className="space-y-3.5">
              {card.items.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <span className="text-destructive font-bold text-xs">✕</span>
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-5 pt-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-5 py-2.5 text-sm text-foreground font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          Existe uma forma melhor. E é mais simples do que você imagina.
        </div>
        <div className="block">
          <CTAButton>
            Conhecer a solução <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </div>
  </section>
);

// ─── SECTION 3: APRESENTAÇÃO ───
const ProductIntroSection = () => (
  <section className="py-20 md:py-28 bg-surface-soft">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
              Conheça o Jet Clean
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
              A evolução que seu trono precisa 👑
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O Jet Clean, um produto da VACUEI, é um bidê de acoplar instalado em 8 minutos no seu vaso sanitário. Ele usa um jato de água direcionado para uma higienização eficiente — de forma prática, econômica e simples. instalado em 8 minutos no seu vaso sanitário. Ele usa um jato de água direcionado para uma higienização eficiente — de forma prática, econômica e simples.
          </p>
          <div className="space-y-3">
            {[
              { emoji: "🚿", text: "Limpeza com água, direto onde você precisa" },
              { emoji: "⏰", text: "Instalação em até 8 minutos, sem ferramentas especiais" },
              { emoji: "🇧🇷", text: "Compatível com 97% dos vasos sanitários do Brasil" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-surface-elevated rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <p className="text-sm text-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <CTAButton>
            Quero o meu Jet Clean <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-primary/8 to-transparent rounded-3xl blur-2xl" />
          <img
            src={bideJetClean}
            alt="Jet Clean instalado no vaso sanitário"
            className="relative rounded-2xl shadow-card max-w-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── SECTION 4: POR QUE ESCOLHER ───
const WhyChooseSection = () => {
  const items = [
    { emoji: "💧", title: "Higiene verdadeira", desc: "Papel espalha. Água remove. Não é opinião — é lavagem versus fricção seca." },
    { emoji: "⏰", title: "Instalação em até 8 minutos", desc: "Sem obra. Você instala entre o vaso e o assento em poucos minutos." },
    { emoji: "🚽", title: "Compatível com 97% dos vasos", desc: "Regulagens pensadas para encaixar na maioria dos modelos do Brasil." },
    { emoji: "✨", title: "Discreto e moderno", desc: "Depois de instalado, fica quase invisível no seu banheiro." },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-14">
        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
            Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Por que escolher o Jet Clean?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pensado para ser simples, eficiente e discreto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-5">
            {items.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-surface-elevated p-7 space-y-3 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              alt="Jet Clean no vaso"
              className="shadow-card max-w-[320px] w-full h-auto rounded-2xl"
              src="/lovable-uploads/8f265d34-a69d-4877-873c-ddc8a0d6e1d0.png"
            />
          </div>
          <div className="space-y-5">
            {items.slice(2, 4).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-surface-elevated p-7 space-y-3 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <CTAButton>
            Ver preço e detalhes <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

// ─── SECTION 5: COMO FUNCIONA ───
const HowItWorksSection = () => (
  <section className="py-20 md:py-28 bg-surface-soft">
    <div className="container">
      <div className="text-center space-y-4 mb-14">
        <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
          Simples assim
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Como funciona na prática
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {[
            { step: "1", emoji: "👑", text: "Você senta e usa seu trono como sempre fez, sem mudar nada" },
            { step: "2", emoji: "🚿", text: "Agora que está mais leve, basta apertar o botão ao lado do vaso e um jato de água preciso vai fazer a limpeza!" },
            { step: "3", emoji: "✅", text: "Agora que está REALMENTE limpo, pode seguir sua vida tranquilamente" },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 bg-surface-elevated rounded-xl p-5 border border-border/50 shadow-sm"
            >
              <span className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                {item.step}
              </span>
              <div className="pt-1">
                <p className="text-foreground text-base leading-relaxed">
                  {item.text} {item.emoji}
                </p>
              </div>
            </div>
          ))}
          <p className="text-muted-foreground italic pl-1">
            Simples. Rápido. E você sente a diferença no primeiro uso.
          </p>
          <CTAButton>
            Quero testar o Jet Clean <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
        <div className="flex justify-center">
          <img
            alt="Instalação do Jet Clean"
            className="rounded-2xl shadow-card max-w-full h-auto"
            src="/lovable-uploads/4d4d79ca-1617-4280-a46b-25e01c236cdf.png"
          />
        </div>
      </div>
    </div>
  </section>
);

// ─── SECTION 6: INSTALAÇÃO REFORÇO ───
const InstallationSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center relative">
          <div className="absolute -inset-4 bg-gradient-to-bl from-primary/8 to-transparent rounded-3xl blur-2xl" />
          <img
            alt="Detalhe do Jet Clean instalado"
            className="relative rounded-2xl shadow-card max-w-full h-auto"
            src="/lovable-uploads/b5abf592-5db6-4d6a-bd63-14593e41b464.png"
          />
        </div>
        <div className="space-y-7">
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
              Instalação Fácil
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Em 8 minutos você muda o futuro do seu bumbum.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O Jet Clean foi pensado para ser simples: sem ferramentas especiais e compatível com a maioria dos vasos sanitários.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "🧰", text: "Sem encanador" },
              { emoji: "🚽", text: "Maioria dos vasos" },
              { emoji: "🔒", text: "Encaixe seguro" },
              { emoji: "📘", text: "Manual incluso" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-surface-soft rounded-xl p-4 border border-border/50"
              >
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <CTAButton>
            Comprar agora <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </div>
  </section>
);

// ─── SECTION 7: PARA QUEM É ───
const ForWhoSection = () => (
  <section className="py-20 md:py-28 bg-surface-soft">
    <div className="container text-center space-y-12">
      <div className="space-y-4">
        <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
          Para todos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Perfeito para quem precisa de mais conforto e autonomia.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { emoji: "👵", title: "Idosos", desc: "Mais independência no banheiro, com menos esforço." },
          { emoji: "🦾", title: "Mobilidade reduzida", desc: "Menos movimento, mais praticidade." },
          { emoji: "✨", title: "Quem preza por higiene completa", desc: "Limpeza com água, sem improviso." },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-surface-elevated rounded-2xl p-8 shadow-sm border border-border/50 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-5xl block mb-4">{card.emoji}</span>
            <h3 className="font-display font-semibold text-lg text-foreground">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
      <CTAButton>
        Quero o meu <ArrowRight className="ml-1 h-4 w-4" />
      </CTAButton>
    </div>
  </section>
);

// ─── SECTION 8: DEPOIMENTOS ───
const TestimonialsSection = () => {
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
    { name: "Thiago Souza, 29 anos", text: "Comprei por curiosidade e virou item essencial. Quando viajo e não tenho, sinto falta. Já presenteei dois amigos.", rating: 5 },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 320 + 20;
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
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 md:py-28">
      <div className="text-center space-y-12">
        <div className="container space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Quem usa, não volta atrás. 💬
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          onTouchStart={() => { isPaused.current = true; }}
          onTouchEnd={() => { isPaused.current = false; }}
        >
          <div className="flex gap-5 px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] w-max">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-surface-elevated rounded-2xl p-6 shadow-sm border border-border/50 text-left w-[320px] flex-shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[hsl(var(--star))] text-[hsl(var(--star))]" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-xs">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <CTAButton>
            Quero sentir isso também <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
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
    { q: "Como funciona frete e prazo de entrega?", a: "O frete e o prazo aparecem no checkout / página do produto com base no seu CEP. [Confirmar política de frete grátis se aplicável]" },
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-soft">
      <div className="container max-w-3xl space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-primary">
            Dúvidas?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Perguntas frequentes 🤔
          </h2>
        </div>

        <div className="text-center">
          <CTAButton>
            Ver o Jet Clean <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-surface-elevated rounded-xl px-6 border border-border/50 shadow-sm"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center pt-4">
          <CTAButton>
            Quero o meu Jet Clean <ArrowRight className="ml-1 h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  );
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
    </Layout>
  );
};

export default Index;
