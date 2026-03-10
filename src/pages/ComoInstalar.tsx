import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Droplets, Settings, Shield, CheckCircle2, Timer } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  {
    number: 1,
    icon: Droplets,
    title: "Conecte a mangueira ao vaso sanitário",
    description: [
      "Feche o registro de água e remova o assento do vaso. Desconecte a mangueira flexível existente da caixa acoplada.",
      "Localize o adaptador T que vem no kit. Conecte a mangueira existente na lateral do adaptador e rosqueie o topo do adaptador na caixa acoplada. Aperte com a mão — não use força excessiva.",
      "Conecte a mangueira flexível fornecida no kit na saída inferior do adaptador T. Novamente, aperte com cuidado para não danificar a rosca.",
    ],
    tip: "Use fita veda-rosca nas conexões para garantir vedação perfeita.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Conecte a ducha à mangueira",
    description: [
      "Conecte a outra ponta da mangueira flexível de aço na entrada de água do Jet Clean. Gire suavemente no sentido anti-horário até encaixar.",
      "Se a mangueira girar apenas uma vez e parar, pode ser que a rosca esteja cruzada. Desrosqueie e tente novamente alinhando corretamente.",
    ],
    tip: "Se necessário, use fita veda-rosca para uma vedação perfeita.",
  },
  {
    number: 3,
    icon: Wrench,
    title: "Encaixe o Jet Clean no vaso",
    description: [
      "Posicione o Jet Clean sobre o vaso sanitário, entre o assento e o vaso.\n Dependendo do modelo, você terá flanges ajustáveis — alinhe-os com os furos de fixação do assento.",
      "Certifique-se de que o bico esteja centralizado e o mais próximo possível da parte traseira do vaso, sem encostar na louça. Ajuste a posição do bico pelo console do aparelho.",
    ],
  },
  {
    number: 4,
    icon: Shield,
    title: "Recoloque o assento do vaso",
    description: [
      "Posicione o assento sobre o Jet Clean e passe os parafusos pelos flanges ajustáveis e pelos furos de montagem do vaso.",
      "Aperte os parafusos girando no sentido horário. Segure a porca por baixo para maior firmeza. Não aperte demais para não danificar a louça.",
    ],
  },
  {
    number: 5,
    icon: CheckCircle2,
    title: "Teste de vazamento e primeiro uso",
    description: [
      "Abra o registro de água e verifique todas as conexões. Se não houver vazamentos, está pronto! Caso haja algum vazamento, verifique se a borracha de vedação está bem posicionada e se as roscas estão alinhadas.",
      "NÃO acione o jato antes de sentar. Comece girando o botão de pressão bem devagar — a pressão da água residencial é forte. Vá ajustando aos poucos até encontrar a regulagem ideal para você.",
    ],
    tip: "Comece SEMPRE com a pressão no mínimo e vá aumentando aos poucos.",
  },
];

const ComoInstalar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="container text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface-elevated text-primary text-sm font-semibold px-5 py-2 rounded-full mb-6 shadow-sm border border-border">
            <Wrench className="h-4 w-4" />
            Guia de Instalação
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Como instalar o Jet Clean
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-xl mx-auto leading-relaxed">
            Instalação simples, sem ferramentas especiais. Siga os 5 passos abaixo e em menos de 08 minutos seu Jet Clean estará pronto para uso.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Timer, label: "Menos de 8 min" },
              { icon: Wrench, label: "Sem ferramentas" },
              { icon: CheckCircle2, label: "5 passos simples" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 bg-surface-elevated border border-border rounded-xl px-5 py-3 shadow-sm">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
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
                      <Icon className="h-5 w-5 text-muted" />
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
                          <span className="text-lg mt-0.5">💡</span>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            <span className="font-semibold">Dica:</span> {step.tip}
                          </p>
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
              Pronto! Comece a usar seu Jet Clean
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Agora que você já sabe como instalar, garanta o seu e transforme sua higiene pessoal.
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

export default ComoInstalar;
