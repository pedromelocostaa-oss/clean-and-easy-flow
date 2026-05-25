import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/Layout";
import StickyCartBar from "@/components/StickyCartBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import productHero from "@/assets/product-hero.jpg";
import productDetail from "@/assets/product-detail.jpg";
import productCenter from "@/assets/product-center.jpg";
import installation from "@/assets/installation.jpg";
import bideJetClean from "@/assets/bide-jet-clean.webp";
import productGallery2 from "@/assets/product-gallery-2.png";
import productGallery3 from "@/assets/product-gallery-3.png";

// ── Shared helpers ──────────────────────────────────────────
const Stars = ({ count = 5, color = "hsl(var(--vacuei-star))", size = 14 }: { count?: number; color?: string; size?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M12 2l2.9 6.9 7.6.6-5.8 5 1.8 7.4L12 18l-6.5 4 1.8-7.4-5.8-5 7.6-.6z" />
      </svg>
    ))}
  </div>
);

const CTABtn = ({
  children,
  hot = false,
  sub,
  href = "/produto/jet-clean",
  full = false,
}: {
  children: React.ReactNode;
  hot?: boolean;
  sub?: string;
  href?: string;
  full?: boolean;
}) => (
  <Link to={href}>
    <button
      className={`font-body font-extrabold text-[15px] lg:text-base px-6 lg:px-7 py-4 lg:py-5 rounded-full border-none cursor-pointer inline-flex justify-between items-center gap-4 ${full ? "w-full" : ""} ${hot ? "bg-vacuei-pop text-vacuei-pop-text" : "bg-vacuei-ink text-vacuei-paper"}`}
      style={{ boxShadow: '4px 4px 0 hsl(var(--vacuei-ink))' }}
    >
      <span className="flex flex-col items-start">
        <span>{children}</span>
        {sub && <span className="text-[10px] font-semibold opacity-85 tracking-wide mt-0.5">{sub}</span>}
      </span>
      <ArrowRight className="w-5 h-5 flex-shrink-0" />
    </button>
  </Link>
);

const GhostBtn = ({ children, href = "/produto/jet-clean" }: { children: React.ReactNode; href?: string }) => (
  <Link to={href}>
    <button className="font-body font-bold text-[14px] lg:text-[15px] px-6 lg:px-7 py-[14px] lg:py-[17px] rounded-full bg-transparent text-vacuei-ink border-[1.5px] border-vacuei-ink cursor-pointer">
      {children}
    </button>
  </Link>
);

const Kicker = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <span className={`font-body font-bold text-[11px] lg:text-[12px] tracking-[0.2em] uppercase ${light ? "text-vacuei-mint" : "text-vacuei-pop"}`}>
    {children}
  </span>
);

// ── 00 · PROMO STRIP (handled in Header) ─────────────────

// ── 02 · HERO ─────────────────────────────────────────────
const HeroSection = () => (
  <section className="bg-vacuei-bg relative overflow-hidden">
    {/* Decorative squiggle */}
    <svg
      className="absolute top-12 right-10 lg:top-16 lg:right-16 opacity-80 pointer-events-none"
      width="120" height="60"
      viewBox="0 0 160 80" fill="none"
      stroke="hsl(var(--vacuei-pop))" strokeWidth="5" strokeLinecap="round"
    >
      <path d="M3 40 Q22 8 40 40 T76 40 T112 40 T148 40" />
    </svg>

    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] pt-10 pb-16 lg:pt-14 lg:pb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
      {/* Left col */}
      <div>
        {/* Social proof pill */}
        <div
          className="inline-flex items-center gap-3 mb-6 lg:mb-7 bg-vacuei-paper border-[1.5px] border-vacuei-ink px-3 py-2 rounded-full"
        >
          <div className="flex">
            {['M','J','A','C','L'].map((c, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-[1.5px] border-vacuei-paper flex items-center justify-center font-display text-[10px]"
                style={{
                  background: ['hsl(var(--vacuei-mint))','hsl(var(--vacuei-pop))','hsl(var(--vacuei-star))','hsl(var(--vacuei-ink))','hsl(var(--vacuei-bg))'][i],
                  color: i === 4 ? 'hsl(var(--vacuei-ink))' : 'hsl(var(--vacuei-paper))',
                  marginLeft: i ? '-10px' : '0',
                }}
              >{c}</div>
            ))}
          </div>
          <Stars size={13} />
          <span className="font-body font-extrabold text-[13px] text-vacuei-ink">4,8</span>
          <span className="font-body font-semibold text-[13px] text-vacuei-ink-soft">· 847 avaliações</span>
        </div>

        <h1
          className="font-display text-[52px] leading-[0.92] tracking-[-0.025em] text-vacuei-ink lg:text-[92px] lg:leading-[0.93] lg:tracking-[-0.03em] m-0"
        >
          Higiene<br />
          com água.<br />
          <span style={{ color: 'hsl(var(--vacuei-pop))' }}>Sem drama.</span>
        </h1>

        <p className="font-body font-medium text-[15px] lg:text-[19px] leading-relaxed text-vacuei-ink-soft mt-5 lg:mt-6 max-w-[480px]">
          O bidê de acoplar que você instala em 8 min e nunca mais quer voltar pro papel.{" "}
          <span className="font-marker font-bold text-[22px] lg:text-[28px] leading-none" style={{ color: 'hsl(var(--vacuei-pop))' }}>
            Tchau, papelzinho.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-7 lg:mt-8">
          <CTABtn hot sub="12× R$15 · Frete grátis">Comprar Jet Clean · R$179</CTABtn>
          <GhostBtn>Ver como funciona</GhostBtn>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap gap-6 lg:gap-9 mt-9 lg:mt-10 pt-6 lg:pt-7 border-t-[1.5px] border-dashed border-vacuei-ink">
          {[
            { l: '8 min', s: 'pra instalar' },
            { l: '97%', s: 'dos vasos compatíveis' },
            { l: '30 dias', s: 'pra testar' },
            { l: '4,8★', s: 'em 847 reviews' },
          ].map((t) => (
            <div key={t.l}>
              <div className="font-display text-[24px] lg:text-[28px] text-vacuei-ink leading-none">{t.l}</div>
              <div className="font-body text-[12px] lg:text-[12px] text-vacuei-ink-soft font-medium mt-1.5">{t.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right col — product image */}
      <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
        <div
          className="bg-vacuei-mint border-[1.5px] border-vacuei-ink rounded-[32px] overflow-hidden relative"
          style={{ boxShadow: '8px 8px 0 hsl(var(--vacuei-ink))' }}
        >
          <div className="aspect-[4/5]">
            <img
              src={productHero}
              alt="Jet Clean instalado"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Price sticker */}
        <div
          className="absolute -top-5 -right-5 lg:-top-6 lg:-right-6 bg-vacuei-pop text-vacuei-pop-text rounded-full border-2 border-vacuei-ink flex flex-col items-center justify-center w-[110px] h-[110px] lg:w-[130px] lg:h-[130px]"
          style={{ transform: 'rotate(8deg)', boxShadow: '5px 5px 0 hsl(var(--vacuei-ink))' }}
        >
          <span className="font-body font-extrabold text-[9px] lg:text-[10px] tracking-[0.14em]">POR APENAS</span>
          <span className="font-display text-[28px] lg:text-[32px] leading-none mt-1">R$179</span>
          <span className="font-body font-bold text-[9px] lg:text-[10px] mt-1">ou 12× R$15</span>
        </div>

        {/* In-stock pill */}
        <div
          className="absolute -bottom-4 left-6 bg-vacuei-paper border-[1.5px] border-vacuei-ink px-4 py-2.5 rounded-full inline-flex items-center gap-2"
          style={{ boxShadow: '3px 3px 0 hsl(var(--vacuei-ink))' }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: 'hsl(var(--vacuei-mint-deep))', boxShadow: '0 0 0 4px hsl(var(--vacuei-mint-deep) / 0.2)' }}
          />
          <span className="font-body font-extrabold text-[11px] lg:text-[12px] text-vacuei-ink tracking-[0.02em]">
            EM ESTOQUE · ENVIO EM 24H
          </span>
        </div>

        {/* Tag floating */}
        <div
          className="absolute top-10 -left-5 bg-vacuei-ink text-vacuei-paper font-body font-extrabold text-[11px] tracking-[0.08em] px-3.5 py-2.5 rounded-lg"
          style={{ transform: 'rotate(-6deg)', boxShadow: '3px 3px 0 hsl(var(--vacuei-pop))' }}
        >
          DUPLO BICO · AJUSTÁVEL
        </div>
      </div>
    </div>
  </section>
);

// ── 03 · PRESS BAND ───────────────────────────────────────
const PressBand = () => {
  const press = ['FOLHA DE S.PAULO', 'ÉPOCA', 'ESTADÃO', 'UOL', 'EXAME', 'GLOBO RURAL'];
  return (
    <section className="bg-vacuei-paper py-5 border-b border-vacuei-ink/20">
      <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] flex items-center gap-6 lg:gap-9">
        <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase text-vacuei-ink flex-shrink-0 pr-6 lg:pr-8 border-r border-vacuei-ink/25">
          VISTO EM
        </span>
        <div className="flex flex-1 items-center gap-4 lg:gap-0 lg:justify-between flex-wrap overflow-hidden">
          {press.map((p) => (
            <span
              key={p}
              className="font-display text-[14px] lg:text-[18px] text-vacuei-ink tracking-[-0.01em]"
              style={{ opacity: 0.45 }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── 04 · MARQUEE ──────────────────────────────────────────
const MarqueeSection = () => {
  const items = ['CHEGA DE PAPEL', '✺', 'OI, ÁGUA', '✺', 'TCHAU, IRRITAÇÃO', '✺', 'OLÁ, AUTONOMIA', '✺', 'HIGIENE DE VERDADE', '✺'];
  const repeated = [...items, ...items, ...items];
  return (
    <section
      className="bg-vacuei-pop overflow-hidden py-4 lg:py-5"
      style={{ borderTop: '1.5px solid hsl(var(--vacuei-ink))', borderBottom: '1.5px solid hsl(var(--vacuei-ink))' }}
    >
      <div className="flex gap-8 lg:gap-9 whitespace-nowrap animate-marquee-slow">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="font-display text-vacuei-pop-text text-[18px] lg:text-[26px] tracking-[0.02em]"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

// ── 05 · PROBLEMA ─────────────────────────────────────────
const ProblemSection = () => (
  <section className="bg-vacuei-paper py-12 lg:py-[100px]">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
      <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-14">
        <Kicker>O problema</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4 lg:mt-5">
          Papel não limpa.{" "}
          <span className="font-marker font-bold text-[36px] lg:text-[56px]" style={{ color: 'hsl(var(--vacuei-pop))' }}>
            Chuveirinho
          </span>
          <br />molha o banheiro todo.
        </h2>
        <p className="font-body font-medium text-[15px] lg:text-[18px] text-vacuei-ink-soft leading-relaxed mt-5">
          Se você sujasse a mão com gordura, usaria só papel? Então por que aceitar isso na parte mais sensível do corpo?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {[
          {
            label: 'PAPEL HIGIÊNICO',
            subtitle: 'Esfregar não é limpar',
            items: ['Espalha mais que limpa, irrita a pele', 'Causa fissuras com uso frequente', 'Gera desperdício e entope encanamento', 'Não funciona pra quem tem mobilidade reduzida'],
          },
          {
            label: 'CHUVEIRINHO HIGIÊNICO',
            subtitle: 'Banheiro inundado',
            items: ['Molha o banheiro inteiro a cada uso', 'Pressão difícil de controlar com precisão', 'Exige malabarismo pra acertar o ângulo', 'Inviável pra idosos e PCDs sozinhos'],
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-vacuei-bg border-[1.5px] border-vacuei-ink rounded-[20px] lg:rounded-[24px] p-7 lg:p-9 relative"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vacuei-ink)) ' }}
          >
            <div
              className="absolute top-6 right-6 w-10 h-10 lg:w-11 lg:h-11 bg-vacuei-pop border-[1.5px] border-vacuei-ink rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="hsl(var(--vacuei-paper))" strokeWidth="3" fill="none">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </div>
            <Kicker>{card.label}</Kicker>
            <h3 className="font-display text-[24px] lg:text-[32px] text-vacuei-ink mt-3 pr-12">{card.subtitle}</h3>
            <ul className="mt-5 space-y-0">
              {card.items.map((t, j) => (
                <li
                  key={j}
                  className="font-body text-[13px] lg:text-[15px] text-vacuei-ink-soft font-medium py-3 flex gap-2.5 items-start"
                  style={{ borderTop: j ? '1px dashed hsl(var(--vacuei-ink) / 0.25)' : 'none' }}
                >
                  <span className="text-vacuei-pop font-extrabold text-lg leading-none mt-[-1px]">×</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── 06 · PRODUTO / SOLUÇÃO ────────────────────────────────
const ProductSection = () => (
  <section className="bg-vacuei-ink py-12 lg:py-[100px]">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div className="relative">
        <div
          className="rounded-[20px] lg:rounded-[24px] overflow-hidden border-[1.5px] border-vacuei-mint"
          style={{ boxShadow: '8px 8px 0 hsl(var(--vacuei-pop))' }}
        >
          <img
            src={productDetail}
            alt="Jet Clean detalhe"
            className="w-full block object-cover aspect-[4/3]"
          />
        </div>
        <div
          className="absolute -bottom-4 left-6 bg-vacuei-pop text-vacuei-pop-text font-body font-extrabold text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-full border-[1.5px] border-vacuei-ink"
          style={{ boxShadow: '3px 3px 0 hsl(var(--vacuei-ink))' }}
        >
          Duplo bico · Ajustável
        </div>
      </div>

      <div>
        <Kicker light>A solução</Kicker>
        <h2 className="font-display text-[48px] lg:text-[84px] leading-[0.93] tracking-[-0.025em] text-vacuei-paper mt-4 mb-0">
          Conheça o<br />
          <span style={{ color: 'hsl(var(--vacuei-mint))' }}>Jet Clean.</span>
        </h2>
        <p className="font-body font-medium text-[15px] lg:text-[18px] leading-relaxed mt-5 lg:mt-6" style={{ color: '#C9D4E8' }}>
          O bidê de acoplar da Vacuei. Instala entre o vaso e o assento em 8 minutos. Um jato de água preciso, na pressão que você definir.{" "}
          <span className="font-marker font-bold text-[22px] lg:text-[28px] leading-none" style={{ color: 'hsl(var(--vacuei-mint))' }}>
            Simples assim.
          </span>
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0">
          {[
            { n: '01', t: 'Limpeza com água, direto onde precisa' },
            { n: '02', t: 'Instala em 8 min, sem ferramentas' },
            { n: '03', t: 'Compatível com 97% dos vasos do BR' },
            { n: '04', t: 'Duplo bico ajustável, pressão progressiva' },
          ].map((b, i) => (
            <div
              key={b.n}
              className="flex gap-3 items-start py-3.5"
              style={{ borderTop: '1px solid hsl(var(--vacuei-mint) / 0.3)' }}
            >
              <span className="font-display text-[20px] lg:text-[22px] leading-none pt-0.5" style={{ color: 'hsl(var(--vacuei-mint))' }}>{b.n}</span>
              <span className="font-body font-semibold text-[13px] lg:text-[15px] text-vacuei-paper leading-snug">{b.t}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CTABtn hot={false} sub="R$179 · 12× R$15 sem juros">Quero meu Jet Clean</CTABtn>
        </div>
      </div>
    </div>
  </section>
);

// ── 07 · COMPARATIVO ──────────────────────────────────────
const ComparisonSection = () => {
  const rows = [
    { f: 'Limpa com água, de verdade', p: false, c: true, b: true, j: true },
    { f: 'Instala sem obra e sem encanador', p: true, c: true, b: false, j: true },
    { f: 'Preço acessível', p: '★ baixo', c: '★ baixo', b: 'R$3.000+', j: 'R$179' },
    { f: 'Não molha o banheiro inteiro', p: true, c: false, b: true, j: true },
    { f: 'Autonomia pra idoso e PCD', p: false, c: false, b: true, j: true },
    { f: 'Discreto, não polui visualmente', p: true, c: false, b: false, j: true },
  ];

  const Cell = ({ val, hl = false }: { val: boolean | string; hl?: boolean }) => {
    if (val === true) return <span className="font-display text-[18px] lg:text-[22px]" style={{ color: 'hsl(var(--vacuei-mint-deep))' }}>✓</span>;
    if (val === false) return <span className="font-display text-[18px] lg:text-[22px] text-vacuei-pop">×</span>;
    return <span className={`font-body font-extrabold text-[12px] lg:text-[13px] ${hl ? "text-vacuei-pop" : "text-vacuei-ink"}`}>{val as string}</span>;
  };

  return (
    <section className="bg-vacuei-bg py-12 lg:py-[100px]">
      <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
        <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-14">
          <Kicker>Comparativo</Kicker>
          <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
            Por que{" "}
            <span className="font-marker font-bold text-[36px] lg:text-[56px]" style={{ color: 'hsl(var(--vacuei-pop))' }}>
              não
            </span>{" "}
            <br className="hidden lg:block" />o jeito antigo?
          </h2>
          <p className="font-body font-medium text-[15px] lg:text-[18px] text-vacuei-ink-soft leading-relaxed mt-4">
            Já testou todas as opções? A gente comparou pra você.
          </p>
        </div>

        <div
          className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[20px] lg:rounded-[24px] overflow-hidden mx-auto max-w-[980px]"
          style={{ boxShadow: '8px 8px 0 hsl(var(--vacuei-ink))' }}
        >
          {/* Header row */}
          <div className="grid border-vacuei-ink" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.1fr' }}>
            <div className="bg-vacuei-ink px-4 lg:px-6 py-4 lg:py-[22px]">
              <span className="font-body font-bold text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-vacuei-paper">Critério</span>
            </div>
            {['Papel', 'Chuveirinho', 'Bidê fixo'].map((t) => (
              <div key={t} className="bg-vacuei-ink px-2 lg:px-3 py-4 lg:py-[22px] text-center border-l border-vacuei-paper/20">
                <span className="font-body font-extrabold text-[10px] lg:text-[12px] tracking-[0.04em]" style={{ color: '#C9D4E8' }}>{t.toUpperCase()}</span>
              </div>
            ))}
            <div
              className="flex flex-col items-center justify-center px-2 lg:px-3 py-3 lg:py-[14px] text-center"
              style={{ background: 'hsl(var(--vacuei-pop))' }}
            >
              <span className="font-display text-[16px] lg:text-[20px] leading-none text-vacuei-pop-text">JET CLEAN</span>
              <span className="font-body font-bold text-[9px] lg:text-[10px] tracking-[0.08em] text-vacuei-pop-text mt-1">VACUEI</span>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              className="grid items-center border-t border-vacuei-ink/15"
              style={{
                gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.1fr',
                background: i % 2 ? 'hsl(var(--vacuei-bg) / 0.4)' : 'transparent',
              }}
            >
              <div className="px-4 lg:px-6 py-4 lg:py-5">
                <span className="font-body font-bold text-[12px] lg:text-[15px] text-vacuei-ink">{r.f}</span>
              </div>
              <div className="px-2 lg:px-4 py-4 text-center border-l border-vacuei-ink/10"><Cell val={r.p} /></div>
              <div className="px-2 lg:px-4 py-4 text-center border-l border-vacuei-ink/10"><Cell val={r.c} /></div>
              <div className="px-2 lg:px-4 py-4 text-center border-l border-vacuei-ink/10"><Cell val={r.b} /></div>
              <div className="px-2 lg:px-4 py-4 text-center" style={{ background: 'hsl(var(--vacuei-pop) / 0.12)' }}>
                <Cell val={r.j} hl />
              </div>
            </div>
          ))}
        </div>

        <p className="font-marker font-bold text-[24px] lg:text-[32px] text-center mt-8 lg:mt-9" style={{ color: 'hsl(var(--vacuei-pop))' }}>
          Spoiler: o Jet Clean ganha.
        </p>
      </div>
    </section>
  );
};

// ── 08 · COMO FUNCIONA ────────────────────────────────────
const HowItWorksSection = () => (
  <section className="bg-vacuei-paper py-12 lg:py-[100px]" id="como-funciona">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
      <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
        <Kicker>Simples assim</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
          3 passos.<br />Não tem segredo.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        {[
          { n: '1', t: 'Senta', d: 'Você usa seu vaso como sempre fez. Nada muda na sua rotina.', bg: 'hsl(var(--vacuei-bg))', isHot: false },
          { n: '2', t: 'Aperta', d: 'Aciona a alavanca ao lado do vaso. Jato preciso, na pressão que você quiser.', bg: 'hsl(var(--vacuei-pop))', isHot: true },
          { n: '3', t: 'Acabou', d: 'Realmente limpo. Pode seguir a vida.', bg: 'hsl(var(--vacuei-mint))', isHot: false },
        ].map((s, i) => (
          <div
            key={s.n}
            className="border-[1.5px] border-vacuei-ink rounded-[20px] lg:rounded-[24px] p-8 lg:p-9 relative"
            style={{ background: s.bg, boxShadow: '4px 4px 0 hsl(var(--vacuei-ink))' }}
          >
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-[1.5px] border-vacuei-ink flex items-center justify-center font-display text-[36px] lg:text-[44px]"
              style={{
                background: i === 1 ? 'hsl(var(--vacuei-paper))' : 'hsl(var(--vacuei-ink))',
                color: i === 1 ? 'hsl(var(--vacuei-pop))' : 'hsl(var(--vacuei-paper))',
              }}
            >
              {s.n}
            </div>
            <h3
              className="font-display text-[28px] lg:text-[32px] mt-5 mb-2 leading-none"
              style={{ color: s.isHot ? 'hsl(var(--vacuei-pop-text))' : 'hsl(var(--vacuei-ink))' }}
            >
              {s.t}
            </h3>
            <p
              className="font-body font-medium text-[14px] lg:text-[16px] leading-relaxed"
              style={{ color: s.isHot ? 'hsl(var(--vacuei-pop-text))' : 'hsl(var(--vacuei-ink-soft))', opacity: s.isHot ? 0.95 : 0.85 }}
            >
              {s.d}
            </p>
          </div>
        ))}
      </div>

      <p className="font-marker font-bold text-[22px] lg:text-[32px] text-center mt-10 lg:mt-12" style={{ color: 'hsl(var(--vacuei-pop))' }}>
        Você sente a diferença no primeiro uso.
      </p>
    </div>
  </section>
);

// ── 09 · COMPATIBILIDADE ──────────────────────────────────
const CompatibilitySection = () => (
  <section className="bg-vacuei-bg py-12 lg:py-[100px]">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div>
        <Kicker>Compatibilidade</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
          Serve no<br />
          <span className="font-marker font-bold text-[36px] lg:text-[56px]" style={{ color: 'hsl(var(--vacuei-pop))' }}>seu</span> vaso?
        </h2>
        <p className="font-body font-medium text-[15px] lg:text-[18px] text-vacuei-ink-soft leading-relaxed mt-5">
          Compatível com <strong className="text-vacuei-ink">97% dos vasos brasileiros</strong>. Inclusive Deca, Celite, Icasa, Roca, Incepa e mais.
        </p>
        <div className="flex flex-wrap gap-2 mt-5 lg:mt-6">
          {['Deca', 'Celite', 'Icasa', 'Roca', 'Incepa', 'Eternit', 'Hervy', 'Logasa', 'Ferrum'].map((b) => (
            <span
              key={b}
              className="font-body font-bold text-[12px] lg:text-[13px] text-vacuei-ink bg-vacuei-paper border-[1.5px] border-vacuei-ink px-3.5 py-2 rounded-full inline-flex items-center gap-1.5"
            >
              <span className="font-extrabold" style={{ color: 'hsl(var(--vacuei-mint-deep))' }}>✓</span>
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Measurement widget */}
      <div
        className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[20px] lg:rounded-[24px] p-7 lg:p-8"
        style={{ boxShadow: '6px 6px 0 hsl(var(--vacuei-ink))' }}
      >
        <span className="font-body font-bold text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-vacuei-ink">
          VERIFIQUE EM 30 SEGUNDOS
        </span>
        <h3 className="font-display text-[22px] lg:text-[26px] text-vacuei-ink mt-3 mb-6">
          Meça 3 distâncias do seu vaso
        </h3>
        <div className="flex flex-col gap-0">
          {[
            { l: 'A', m: 'Largura do assento', v: 'até 38 cm' },
            { l: 'B', m: 'Distância dos parafusos', v: '14–18 cm' },
            { l: 'C', m: 'Entrada de água', v: 'rosca padrão 1/2"' },
          ].map((item, i) => (
            <div
              key={item.l}
              className="flex items-center gap-4 py-4"
              style={{ borderTop: i > 0 ? '1px dashed hsl(var(--vacuei-ink) / 0.25)' : 'none' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-display text-[15px] text-vacuei-pop-text flex-shrink-0"
                style={{ background: 'hsl(var(--vacuei-pop))' }}
              >
                {item.l}
              </div>
              <div className="flex-1">
                <div className="font-body font-bold text-[14px] text-vacuei-ink">{item.m}</div>
                <div className="font-body font-bold text-[12px] mt-0.5" style={{ color: 'hsl(var(--vacuei-mint-deep))' }}>{item.v}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="block mt-5">
          <button
            className="w-full bg-vacuei-ink text-vacuei-paper font-body font-extrabold text-[13px] lg:text-[14px] py-3.5 rounded-full border-none cursor-pointer flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M3 21l1.5-5A8 8 0 1112 20H4z" />
            </svg>
            Tirar dúvida no WhatsApp
          </button>
        </a>
      </div>
    </div>
  </section>
);

// ── 10 · INSTALAÇÃO ───────────────────────────────────────
const InstallSection = () => (
  <section className="bg-vacuei-mint py-12 lg:py-[100px]">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div
        className="rounded-[20px] lg:rounded-[24px] overflow-hidden border-[1.5px] border-vacuei-ink"
        style={{ boxShadow: '6px 6px 0 hsl(var(--vacuei-ink))' }}
      >
        <img
          src={installation}
          alt="Instalação do Jet Clean"
          className="w-full block object-cover aspect-[4/3]"
          loading="lazy"
        />
      </div>

      <div>
        <Kicker>Instalação</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
          8 minutos.<br />Sem encanador.
        </h2>
        <p className="font-body font-medium text-[15px] lg:text-[17px] text-vacuei-ink-soft leading-relaxed mt-4 mb-7">
          O Jet Clean foi pensado para ser simples: sem ferramentas especiais e compatível com a maioria dos vasos sanitários.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: '🔧', t: 'Sem encanador' },
            { icon: '🚽', t: '97% dos vasos' },
            { icon: '🔒', t: 'Encaixe seguro' },
            { icon: '📘', t: 'Manual incluso' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[16px] p-4 flex items-center gap-3"
              style={{ boxShadow: '3px 3px 0 hsl(var(--vacuei-ink))' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-body font-bold text-[13px] lg:text-[14px] text-vacuei-ink">{item.t}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTABtn hot>Comprar agora · R$179</CTABtn>
        </div>
      </div>
    </div>
  </section>
);

// ── 11 · PARA QUEM É ──────────────────────────────────────
const ForWhoSection = () => (
  <section className="bg-vacuei-bg py-12 lg:py-[100px]">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
      <div className="text-center mb-10 lg:mb-14">
        <Kicker>Para todos</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
          Quem precisa do<br className="hidden lg:block" /> Jet Clean?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
        {[
          {
            title: 'Todo mundo',
            desc: 'Se você usa banheiro, você vai querer o Jet Clean. Papel nunca limpou de verdade — água, sim.',
            bg: 'bg-vacuei-paper',
          },
          {
            title: 'Autonomia',
            desc: 'Idosos e pessoas com mobilidade reduzida ganham independência real no banheiro, sem precisar de ajuda.',
            bg: 'bg-vacuei-ink',
          },
          {
            title: 'Família toda',
            desc: 'Uma instalação. Toda a família usa. Crianças, adultos, avós — sem complicação, sem malabarismo.',
            bg: 'bg-vacuei-paper',
          },
        ].map((card, i) => (
          <div
            key={i}
            className={`${card.bg} border-[1.5px] border-vacuei-ink rounded-[20px] lg:rounded-[24px] p-8 lg:p-10 flex flex-col`}
            style={{ boxShadow: '4px 4px 0 hsl(var(--vacuei-ink))' }}
          >
            {/* Lifestyle placeholder */}
            <div
              className="w-full aspect-square rounded-[12px] mb-6 flex items-center justify-center border border-vacuei-ink/20"
              style={{ background: i === 1 ? 'hsl(var(--vacuei-mint) / 0.15)' : 'hsl(var(--vacuei-bg-alt))' }}
            >
              <span
                className="font-body font-bold text-[12px] tracking-[0.1em] uppercase opacity-40"
                style={{ color: i === 1 ? 'hsl(var(--vacuei-paper))' : 'hsl(var(--vacuei-ink))' }}
              >
                Foto lifestyle
              </span>
            </div>
            <h3
              className="font-display text-[22px] lg:text-[28px] mb-2"
              style={{ color: i === 1 ? 'hsl(var(--vacuei-paper))' : 'hsl(var(--vacuei-ink))' }}
            >
              {card.title}
            </h3>
            <p
              className="font-body font-medium text-[13px] lg:text-[14px] leading-relaxed"
              style={{ color: i === 1 ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-ink-soft))' }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── 12 · AVALIAÇÕES ───────────────────────────────────────
const reviews = [
  { name: 'Maria Aparecida', loc: 'Belo Horizonte · MG', age: 68, date: 'há 12 dias', tag: 'Idosos', t: 'Nunca pensei que algo tão simples fosse fazer tanta diferença na minha vida. Tenho 68 anos e sempre tive dificuldade pra me higienizar direito. Com o Jet Clean, voltei a me sentir limpa e independente. Meu filho instalou pra mim em 10 minutos.', tone: 'paper' as const, stars: 5, withPhoto: true },
  { name: 'Carlos Eduardo', loc: 'São Paulo · SP', age: 42, date: 'há 5 dias', tag: 'Instalei sozinho', t: 'Instalei em menos de 10 minutos. Sem encanador, sem ferramenta. Comprei meio cético mas hoje minha família toda usa e ninguém quer voltar pro papel. Pressão é ajustável, design é discreto, fácil de limpar.', tone: 'mint' as const, stars: 5, withPhoto: false },
  { name: 'José Ricardo', loc: 'Recife · PE', age: 74, date: 'há 1 mês', tag: 'PCD', t: 'Uso cadeira de rodas há 14 anos. O chuveirinho era um pesadelo — molhava o banheiro inteiro e eu não conseguia controlar. O Jet Clean me devolveu a dignidade no banheiro. Devia ser política pública.', tone: 'navy' as const, stars: 5, withPhoto: true },
  { name: 'Ana Paula Souza', loc: 'Curitiba · PR', age: 55, date: 'há 3 semanas', tag: 'Idosos', t: 'Comprei pro meu pai, que tem 81 anos e mobilidade reduzida. Ele ficou muito mais confortável e seguro no banheiro. Recomendo demais pra quem cuida de alguém na mesma situação.', tone: 'paper' as const, stars: 5, withPhoto: false },
  { name: 'Fernanda Costa', loc: 'Porto Alegre · RS', age: 38, date: 'há 8 dias', tag: 'Instalei sozinho', t: 'Achei que ia ser difícil — falsa expectativa. Veio com tudo na caixa, manual ilustrado bem feito. Em 12 minutos estava funcionando. Pressão dá pra regular do mais suave ao mais forte.', tone: 'paper' as const, stars: 5, withPhoto: true },
  { name: 'Roberto Almeida', loc: 'Salvador · BA', age: 51, date: 'há 2 semanas', tag: 'Estética', t: 'Minha maior preocupação era estética — banheiro pequeno, não queria mais um cabo de fora. O Jet Clean é discreto de verdade. Depois de instalado quase não aparece.', tone: 'paper' as const, stars: 4, withPhoto: false },
];

const ReviewsSection = () => {
  const dist = [
    { s: 5, pct: 78 },
    { s: 4, pct: 16 },
    { s: 3, pct: 4 },
    { s: 2, pct: 1 },
    { s: 1, pct: 1 },
  ];
  const stats = [
    { v: '98%', l: 'recomendaria pra um amigo' },
    { v: '94%', l: 'instalou sozinho, sem ajuda' },
    { v: '96%', l: 'sentiu diferença no 1º uso' },
    { v: '93%', l: 'compraria de novo' },
  ];
  const filters = ['Tudo (847)', '★ Verificadas (812)', 'Com foto (218)', 'Idosos/PCDs (134)', 'Instalei sozinho (594)', 'Mais recentes'];

  return (
    <section className="bg-vacuei-bg py-12 lg:py-[100px]">
      <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
        <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-14">
          <Kicker>Avaliações</Kicker>
          <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
            847 pessoas já{" "}
            <span className="font-marker font-bold text-[36px] lg:text-[56px]" style={{ color: 'hsl(var(--vacuei-pop))' }}>
              escreveram
            </span>.
          </h2>
          <p className="font-body font-medium text-[15px] lg:text-[17px] text-vacuei-ink-soft mt-4">
            A gente não fala mais. Quem usa fala.
          </p>
        </div>

        {/* Rating cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1.2fr] gap-4 lg:gap-5 mb-8 lg:mb-10">
          {/* Big rating */}
          <div
            className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[18px] lg:rounded-[20px] p-7 lg:p-8 flex flex-col justify-center"
            style={{ boxShadow: '6px 6px 0 hsl(var(--vacuei-ink))' }}
          >
            <div className="font-display text-[72px] lg:text-[110px] leading-[0.85] tracking-[-0.04em] text-vacuei-ink">4,8</div>
            <div className="mt-3"><Stars size={20} /></div>
            <div className="font-body text-[12px] lg:text-[13px] text-vacuei-ink-soft font-medium mt-3">847 avaliações verificadas</div>
            <div className="font-body font-bold text-[11px] lg:text-[12px] mt-1" style={{ color: 'hsl(var(--vacuei-mint-deep))' }}>nota média desde 2024</div>
          </div>

          {/* Distribution */}
          <div
            className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[18px] lg:rounded-[20px] p-7 lg:p-8 flex flex-col justify-center"
            style={{ boxShadow: '6px 6px 0 hsl(var(--vacuei-ink))' }}
          >
            <span className="font-body font-bold text-[10px] tracking-[0.2em] uppercase text-vacuei-ink">DISTRIBUIÇÃO POR ESTRELAS</span>
            <div className="mt-4 flex flex-col gap-2.5">
              {dist.map((d) => (
                <div key={d.s} className="flex items-center gap-3">
                  <span className="font-body font-bold text-[12px] text-vacuei-ink w-7 flex items-center gap-1">
                    {d.s}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="hsl(var(--vacuei-star))">
                      <path d="M12 2l2.9 6.9 7.6.6-5.8 5 1.8 7.4L12 18l-6.5 4 1.8-7.4-5.8-5 7.6-.6z" />
                    </svg>
                  </span>
                  <div className="flex-1 h-2.5 bg-vacuei-bg rounded-full overflow-hidden border border-vacuei-ink/15">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${d.pct}%`,
                        background: d.s >= 4
                          ? 'hsl(var(--vacuei-mint-deep))'
                          : d.s === 3
                          ? 'hsl(var(--vacuei-star))'
                          : 'hsl(var(--vacuei-pop))',
                      }}
                    />
                  </div>
                  <span className="font-body font-bold text-[11px] text-vacuei-ink-soft w-8 text-right">{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.v}
                className="bg-vacuei-paper border-[1.5px] border-vacuei-ink rounded-[14px] p-4 lg:p-[18px]"
              >
                <div className="font-display text-[26px] lg:text-[30px] leading-none" style={{ color: 'hsl(var(--vacuei-pop))' }}>{s.v}</div>
                <div className="font-body text-[11px] lg:text-[11.5px] text-vacuei-ink-soft font-medium mt-2 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 flex-wrap mb-7">
          {filters.map((f, i) => (
            <button
              key={f}
              className="font-body font-bold text-[12px] lg:text-[13px] px-3.5 lg:px-4 py-2 lg:py-2.5 rounded-full border-[1.5px] border-vacuei-ink cursor-pointer"
              style={{
                background: i === 0 ? 'hsl(var(--vacuei-ink))' : 'hsl(var(--vacuei-paper))',
                color: i === 0 ? 'hsl(var(--vacuei-paper))' : 'hsl(var(--vacuei-ink))',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {reviews.map((q, i) => (
            <div
              key={i}
              className="border-[1.5px] border-vacuei-ink rounded-[18px] p-5 lg:p-6 flex flex-col gap-3.5"
              style={{
                background: q.tone === 'navy' ? 'hsl(var(--vacuei-ink))' : q.tone === 'mint' ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-paper))',
                boxShadow: '5px 5px 0 hsl(var(--vacuei-ink))',
                color: q.tone === 'navy' ? 'hsl(var(--vacuei-paper))' : 'hsl(var(--vacuei-ink))',
              }}
            >
              <div className="flex justify-between items-center">
                <Stars
                  count={q.stars}
                  color={q.tone === 'navy' ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-star))'}
                  size={14}
                />
                <span
                  className="font-body font-bold text-[9px] lg:text-[9.5px] tracking-[0.06em] uppercase flex items-center gap-1"
                  style={{ color: q.tone === 'navy' ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-mint-deep))' }}
                >
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  COMPRA VERIFICADA
                </span>
              </div>

              <span
                className="inline-block font-body font-bold text-[10px] lg:text-[10.5px] px-2.5 py-1 rounded-full tracking-[0.04em]"
                style={{
                  background: q.tone === 'navy' ? 'hsl(var(--vacuei-mint) / 0.15)' : 'hsl(var(--vacuei-bg))',
                  color: q.tone === 'navy' ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-ink))',
                  border: `1px solid ${q.tone === 'navy' ? 'hsl(var(--vacuei-mint) / 0.4)' : 'hsl(var(--vacuei-ink) / 0.2)'}`,
                }}
              >
                {q.tag}
              </span>

              <p
                className="font-body font-medium text-[13px] lg:text-[14px] leading-relaxed flex-1"
                style={{ color: 'inherit', opacity: 0.9 }}
              >
                "{q.t}"
              </p>

              {q.withPhoto && (
                <div className="flex gap-1.5">
                  {[0, 1].map((k) => (
                    <div
                      key={k}
                      className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex-shrink-0 border border-vacuei-ink/25 flex items-center justify-center"
                      style={{ background: 'hsl(var(--vacuei-bg))' }}
                    >
                      <span className="font-body text-[8px] text-vacuei-ink-soft opacity-50">Foto</span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className="flex items-center gap-2.5 pt-3"
                style={{ borderTop: `1px solid ${q.tone === 'navy' ? 'hsl(var(--vacuei-mint) / 0.25)' : 'hsl(var(--vacuei-ink) / 0.15)'}` }}
              >
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-display text-[14px]"
                  style={{
                    background: q.tone === 'navy' ? 'hsl(var(--vacuei-mint))' : 'hsl(var(--vacuei-ink))',
                    color: q.tone === 'navy' ? 'hsl(var(--vacuei-ink))' : 'hsl(var(--vacuei-paper))',
                  }}
                >
                  {q.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body font-extrabold text-[13px] leading-none" style={{ color: 'inherit' }}>
                    {q.name}, {q.age}
                  </div>
                  <div className="font-body text-[11px] mt-0.5 opacity-60" style={{ color: 'inherit' }}>{q.loc}</div>
                </div>
                <span className="font-body text-[11px] opacity-60 flex-shrink-0" style={{ color: 'inherit' }}>{q.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* UGC band */}
        <div className="mt-12 lg:mt-14">
          <div className="flex justify-between items-baseline mb-4">
            <div>
              <span className="font-body font-bold text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-vacuei-ink">FOTOS DE CLIENTES</span>
              <h3 className="font-display text-[22px] lg:text-[28px] text-vacuei-ink mt-2">Banheiros reais com Jet Clean</h3>
            </div>
            <span className="font-body text-[12px] lg:text-[13px] text-vacuei-ink-soft font-medium">218 fotos enviadas</span>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-2.5">
            {[0,1,2,3,4,5].map((k) => (
              <div
                key={k}
                className="aspect-square rounded-xl overflow-hidden border border-vacuei-ink/25 flex items-center justify-center"
                style={{ background: ['hsl(var(--vacuei-bg))','hsl(var(--vacuei-mint))','hsl(var(--vacuei-paper))','hsl(var(--vacuei-bg))','hsl(var(--vacuei-mint))','hsl(var(--vacuei-paper))'][k] }}
              >
                <span className="font-body text-[9px] text-vacuei-ink-soft opacity-40 tracking-[0.1em] uppercase">UGC 0{k+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 lg:mt-12">
          <button
            className="bg-vacuei-paper text-vacuei-ink border-[1.5px] border-vacuei-ink font-body font-extrabold text-[14px] lg:text-[15px] px-7 lg:px-8 py-4 lg:py-[18px] rounded-full cursor-pointer inline-flex items-center justify-center gap-4"
            style={{ boxShadow: '4px 4px 0 hsl(var(--vacuei-ink))' }}
          >
            Ver todas as 847 avaliações
            <ArrowRight className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

// ── 13 · RISK REVERSAL ────────────────────────────────────
const TrustSection = () => {
  const items = [
    { kind: 'guarantee', t: '30 dias pra testar', d: 'Não rolou? Devolve. A gente reembolsa 100%, sem letra miúda.' },
    { kind: 'truck', t: 'Frete grátis BR', d: 'Acima de R$199. Envio em 24h úteis, em estoque agora.' },
    { kind: 'lock', t: 'Pagamento seguro', d: 'SSL · Pix · Cartão até 12× · Boleto · Mercado Pago.' },
    { kind: 'whatsapp', t: 'Suporte humano', d: 'Atendimento em PT-BR no WhatsApp, segunda a sábado.' },
  ];

  const Icon = ({ kind }: { kind: string }) => {
    const p = { stroke: 'hsl(var(--vacuei-paper))', strokeWidth: 1.5, fill: 'none' as const };
    if (kind === 'guarantee') return <svg width="32" height="32" viewBox="0 0 24 24" {...p}><path d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4z"/><path d="M8 12l3 3 5-5"/></svg>;
    if (kind === 'truck') return <svg width="32" height="32" viewBox="0 0 24 24" {...p}><path d="M3 16V6h11v10M14 9h4l3 4v3h-7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>;
    if (kind === 'lock') return <svg width="32" height="32" viewBox="0 0 24 24" {...p}><rect x="4" y="11" width="16" height="11" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    return <svg width="32" height="32" viewBox="0 0 24 24" {...p}><path d="M3 21l1.5-5A8 8 0 1112 20H4z"/></svg>;
  };

  return (
    <section className="bg-vacuei-ink py-12 lg:py-[80px]">
      <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px]">
        <div className="text-center max-w-[760px] mx-auto mb-10 lg:mb-12">
          <Kicker light>Compre sem medo</Kicker>
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[0.94] tracking-[-0.02em] text-vacuei-paper mt-4">
            Risco zero.{" "}
            <span style={{ color: 'hsl(var(--vacuei-mint))' }}>Garantia total.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {items.map((it) => (
            <div
              key={it.kind}
              className="rounded-[18px] lg:rounded-[20px] p-5 lg:p-7"
              style={{ border: '1.5px solid hsl(var(--vacuei-mint) / 0.35)' }}
            >
              <Icon kind={it.kind} />
              <div className="font-display text-[18px] lg:text-[22px] text-vacuei-paper mt-4 mb-2 leading-tight">{it.t}</div>
              <div className="font-body text-[12px] lg:text-[13.5px] font-medium leading-relaxed" style={{ color: '#C9D4E8' }}>{it.d}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {['VISA', 'MASTER', 'ELO', 'AMEX', 'PIX', 'BOLETO', 'MERCADO PAGO'].map((p) => (
            <span
              key={p}
              className="font-body font-extrabold text-[10px] lg:text-[10.5px] tracking-[0.08em] text-vacuei-ink bg-vacuei-paper px-3 py-1.5 rounded"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── 14 · FAQ ──────────────────────────────────────────────
const faqs = [
  { q: 'Serve no meu vaso sanitário?', a: 'Compatível com 97% dos vasos brasileiros — Deca, Celite, Icasa, Roca, Incepa e mais. Se quiser conferir antes, manda foto + medidas pro WhatsApp e a gente responde em minutos.' },
  { q: 'É difícil de instalar? Preciso de encanador?', a: 'Não. Cerca de 8 minutos, sem ferramenta especial. Você instala entre o vaso e o assento, conecta na entrada de água com o adaptador incluso e ajusta a pressão. Manual ilustrado vem na caixa.' },
  { q: 'Quanto custa e como posso pagar?', a: 'R$179 à vista, ou 12× R$15 sem juros. Aceitamos Pix (com 5% off à vista), cartão de crédito (até 12× sem juros), boleto e Mercado Pago.' },
  { q: 'Quanto demora pra chegar?', a: 'Em estoque · enviamos em 24h úteis. Capitais BR recebem em 3–5 dias úteis · interior em 5–10 dias úteis. Frete grátis acima de R$199.' },
  { q: 'Posso devolver se não gostar?', a: '30 dias de garantia de satisfação. Se não te agradar por qualquer motivo, a gente reembolsa 100% do valor pago. Sem letra miúda, sem perguntas.' },
  { q: 'O que vem na caixa?', a: 'O Jet Clean (duplo bico) + adaptador de pressão + mangueira + conexões + manual ilustrado passo-a-passo.' },
  { q: 'É higiênico? Como eu limpo o aparelho?', a: 'Bicos retráteis protegidos quando não em uso · auto-limpeza acionada antes de cada jato. Limpeza externa com pano e sabão neutro, como qualquer item do banheiro.' },
  { q: 'Consome muita água?', a: 'Pouquíssima — cerca de 0,5 a 1 litro por uso, bem menos do que o tempo médio de chuveirinho. A pressão é regulada por você na alavanca lateral.' },
];

const FAQSection = () => (
  <section className="bg-vacuei-paper py-12 lg:py-[100px]" id="faq">
    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
      <div className="lg:sticky lg:top-28 self-start">
        <Kicker>Tira-dúvidas</Kicker>
        <h2 className="font-display text-[40px] lg:text-[64px] leading-[0.94] tracking-[-0.02em] text-vacuei-ink mt-4">
          FAQ<br />
          <span className="font-marker font-bold text-[36px] lg:text-[56px]" style={{ color: 'hsl(var(--vacuei-pop))' }}>
            rapidinho.
          </span>
        </h2>
        <p className="font-body font-medium text-[14px] lg:text-[16px] text-vacuei-ink-soft leading-relaxed mt-4 mb-7">
          Ainda tem dúvida? Fala com a gente no WhatsApp — respondemos em minutos.
        </p>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-vacuei-ink text-vacuei-paper font-body font-extrabold text-[13px] px-5 py-3.5 rounded-full border-none cursor-pointer flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M3 21l1.5-5A8 8 0 1112 20H4z" />
            </svg>
            Falar no WhatsApp
          </button>
        </a>
      </div>

      <Accordion type="single" collapsible className="space-y-0">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-t-[1.5px] border-b-0 border-vacuei-ink/30 last:border-b-[1.5px]"
          >
            <AccordionTrigger className="font-body font-extrabold text-[14px] lg:text-[16px] text-vacuei-ink hover:no-underline py-5 lg:py-[22px] text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body font-medium text-[13px] lg:text-[14px] text-vacuei-ink-soft pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

// ── 15 · FINAL CTA ────────────────────────────────────────
const FinalCTASection = () => (
  <section
    className="py-16 lg:py-[110px] relative overflow-hidden"
    style={{ background: 'hsl(var(--vacuei-pop))' }}
  >
    {/* Decorative squiggles */}
    <svg className="absolute top-8 left-8 opacity-30" width="100" height="50" viewBox="0 0 160 80" fill="none" stroke="hsl(var(--vacuei-ink))" strokeWidth="4" strokeLinecap="round">
      <path d="M3 40 Q22 8 40 40 T76 40 T112 40 T148 40" />
    </svg>
    <svg className="absolute bottom-8 right-8 opacity-30" width="100" height="50" viewBox="0 0 160 80" fill="none" stroke="hsl(var(--vacuei-ink))" strokeWidth="4" strokeLinecap="round">
      <path d="M3 40 Q22 8 40 40 T76 40 T112 40 T148 40" />
    </svg>

    <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] text-center relative z-10">
      <h2
        className="font-display leading-[0.9] tracking-[-0.025em] text-[52px] lg:text-[100px] lg:text-[124px]"
        style={{ color: 'hsl(var(--vacuei-pop-text))' }}
      >
        Papel nunca<br />mais.
      </h2>
      <p
        className="font-body font-medium text-[15px] lg:text-[19px] leading-relaxed mt-5 lg:mt-6 max-w-[480px] mx-auto"
        style={{ color: 'hsl(var(--vacuei-pop-text) / 0.85)' }}
      >
        Experimente o Jet Clean por 30 dias. Se não gostar, devolvemos 100%.
      </p>
      <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/produto/jet-clean">
          <button
            className="font-body font-extrabold text-[16px] lg:text-[18px] px-8 lg:px-10 py-5 lg:py-6 rounded-full bg-vacuei-ink text-vacuei-paper border-none cursor-pointer inline-flex items-center gap-4"
            style={{ boxShadow: '5px 5px 0 hsl(var(--vacuei-ink) / 0.4)' }}
          >
            <span className="flex flex-col items-start">
              <span>Comprar Jet Clean · R$179</span>
              <span className="text-[11px] font-semibold opacity-75 mt-0.5">ou 12× R$15 · Frete grátis</span>
            </span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </Link>
      </div>
      <p className="font-body font-medium text-[12px] lg:text-[13px] mt-5" style={{ color: 'hsl(var(--vacuei-pop-text) / 0.65)' }}>
        30 dias pra testar · Envio em 24h · Suporte no WhatsApp
      </p>
    </div>
  </section>
);

// ── PAGE ──────────────────────────────────────────────────
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PressBand />
      <MarqueeSection />
      <ProblemSection />
      <ProductSection />
      <ComparisonSection />
      <HowItWorksSection />
      <CompatibilitySection />
      <InstallSection />
      <ForWhoSection />
      <ReviewsSection />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
      <StickyCartBar />
    </Layout>
  );
};

export default Index;
