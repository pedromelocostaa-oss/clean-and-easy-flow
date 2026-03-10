import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HandHelping, Droplets, Target, Sparkles, Wind, Hand } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  {
    number: 1,
    icon: HandHelping,
    emoji: "🚽",
    title: "Faça seu negócio",
    description: [
      "Sente-se normalmente no vaso sanitário e faça o que precisa. Não tenha vergonha de espirrar!",
      "O Jet Clean é ótimo não só para a higiene após as necessidades, mas também para limpar toda a região após o treino, antes e depois do sexo e durante a menstruação.",
      "Os modelos mais modernos possuem protetores higiênicos para os bicos e até função de autolimpeza antes e depois do uso, garantindo que você esteja sempre usando água limpa.",
    ],
  },
  {
    number: 2,
    icon: Target,
    emoji: "🎯",
    title: "Aponte o pulverizador",
    description: [
      "Cada corpo é único. Pode ser preciso um pouco de experimentação para que a água acerte o ponto certo. Tente sentar no meio e na frente do assento enquanto inclina o corpo para frente e para trás para testar o ângulo da água.",
      "O Jet Clean possui um regulador de jato para direcionar o fluxo de água e um botão para aumentar a pressão. Comece com uma pressão baixa e aumente gradualmente até que o jato esteja perfeitamente angulado.",
    ],
    tip: "NÃO acione o jato antes de sentar no vaso!",
  },
  {
    number: 3,
    icon: Droplets,
    emoji: "💦",
    title: "Lave seu bumbum",
    description: [
      "Mantenha uma posição confortável com os joelhos levemente elevados para relaxar os músculos. Incline-se lentamente para a frente e para trás enquanto ajusta a pressão.",
      "Lave por 5 a 30 segundos, evitando a pressão máxima. A temperatura da água fica a seu critério — use água fria ou morna conforme preferir.",
      "Lavar com o Jet Clean remove 99% das partículas residuais, muito mais do que o papel higiênico consegue. Resultado: higiene real e mais conforto no dia a dia.",
    ],
    highlight: "Remove 99% das partículas residuais",
  },
  {
    number: 4,
    icon: Wind,
    emoji: "✨",
    title: "Seque com leves batidinhas",
    description: [
      "Seu bumbum está brilhando! E agora? Embora deixar secar naturalmente seja uma opção, o mais prático é secar com leves batidinhas usando uma toalha pequena (reservada só para isso) ou alguns quadradinhos de papel higiênico.",
      "Use movimentos suaves — sem esfregar. Como você já está limpo, o papel será usado apenas para secar, e não para limpar.",
    ],
  },
  {
    number: 5,
    icon: Hand,
    emoji: "🧼",
    title: "Lave as mãos",
    description: [
      "Essa etapa não muda! Embora suas mãos fiquem muito mais limpas do que se você tivesse usado apenas papel higiênico, lavar as mãos impede que partículas e bactérias sejam transferidas para suas mãos e celular.",
      "As superfícies do banheiro ainda contêm germes. Lave bem as mãos com água e sabão por pelo menos 20 segundos. Pronto — higiene completa!",
    ],
    tip: "Lave por pelo menos 20 segundos com água e sabão.",
  },
];

const ComoUsar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="container text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface-elevated text-primary text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-sm border border-border">
            <Sparkles className="h-4 w-4" />
            Guia de Uso
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Como usar o Jet Clean
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-xl mx-auto leading-relaxed">
            Depois que você aprender a lavar a região íntima com o Jet Clean, nunca mais vai querer usar apenas papel higiênico. Siga os 5 passos abaixo.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative bg-surface-elevated border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex gap-5 md:gap-6 items-start">
                    {/* Step indicator */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center shadow-cta">
                        {step.number}
                      </div>
                      <span className="text-2xl">{step.emoji}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">
                        {step.title}
                      </h2>
                      <div className="space-y-3">
                        {step.description.map((paragraph, j) => (
                          <p key={j} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Tip callout */}
                      {step.tip && (
                        <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-4 py-3 mt-2">
                          <span className="text-lg mt-0.5">⚠️</span>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            <span className="font-semibold">Importante:</span> {step.tip}
                          </p>
                        </div>
                      )}

                      {/* Highlight stat */}
                      {step.highlight && (
                        <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 rounded-xl px-4 py-2 mt-2">
                          <Sparkles className="h-4 w-4" />
                          <span className="text-sm font-semibold">{step.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 flex items-center gap-2">
                    {steps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          idx <= i ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-border rounded-2xl p-8 md:p-12 text-center">
            <div className="text-4xl mb-4">🚿</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Agora que você já sabe como usar, garanta o seu Jet Clean e transforme sua higiene pessoal.
            </p>
            <Link to="/produto/jet-clean" className="inline-block mt-6">
              <Button variant="cta-large" size="lg" className="h-14 text-lg max-w-sm">
                Quero o meu Jet Clean <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComoUsar;
