import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, HandHelping } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  {
    number: 1,
    title: "Faça seu negócio",
    description: [
      "Sente-se normalmente no vaso sanitário e faça o que precisa. Não tenha vergonha de espirrar!",
      "O Jet Clean é ótimo não só para a higiene após as necessidades, mas também para limpar toda a região após o treino, antes e depois do sexo e durante a menstruação.",
      "Os modelos mais modernos possuem protetores higiênicos para os bicos e até função de autolimpeza antes e depois do uso, garantindo que você esteja sempre usando água limpa.",
    ],
  },
  {
    number: 2,
    title: "Aponte o pulverizador",
    description: [
      "Cada corpo é único. Pode ser preciso um pouco de experimentação para que a água acerte o ponto certo. Tente sentar no meio e na frente do assento enquanto inclina o corpo para frente e para trás para testar o ângulo da água.",
      "O Jet Clean possui um regulador de jato para direcionar o fluxo de água e um botão para aumentar a pressão. Comece com uma pressão baixa e aumente gradualmente até que o jato esteja perfeitamente angulado.",
      "Importante: NÃO acione o jato antes de sentar no vaso!",
    ],
  },
  {
    number: 3,
    title: "Lave seu bumbum",
    description: [
      "Mantenha uma posição confortável com os joelhos levemente elevados para relaxar os músculos. Incline-se lentamente para a frente e para trás enquanto ajusta a pressão.",
      "Lave por 5 a 30 segundos, evitando a pressão máxima. A temperatura da água fica a seu critério — use água fria ou morna conforme preferir.",
      "Lavar com o Jet Clean remove 99% das partículas residuais, muito mais do que o papel higiênico consegue. Resultado: higiene real e mais conforto no dia a dia.",
    ],
  },
  {
    number: 4,
    title: "Seque com leves batidinhas",
    description: [
      "Seu bumbum está brilhando! E agora? Embora deixar secar naturalmente seja uma opção, o mais prático é secar com leves batidinhas usando uma toalha pequena (reservada só para isso) ou alguns quadradinhos de papel higiênico.",
      "Use movimentos suaves — sem esfregar. Como você já está limpo, o papel será usado apenas para secar, e não para limpar.",
    ],
  },
  {
    number: 5,
    title: "Lave as mãos",
    description: [
      "Essa etapa não muda! Embora suas mãos fiquem muito mais limpas do que se você tivesse usado apenas papel higiênico, lavar as mãos impede que partículas e bactérias sejam transferidas para suas mãos e celular.",
      "As superfícies do banheiro ainda contêm germes. Lave bem as mãos com água e sabão por pelo menos 20 segundos. Pronto — higiene completa!",
    ],
  },
];

const ComoUsar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <HandHelping className="h-4 w-4" />
            Guia de Uso
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Como usar o Jet Clean
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Depois que você aprender a lavar a região íntima com o Jet Clean, nunca mais vai querer usar apenas papel higiênico. Siga os 5 passos abaixo.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border hidden md:block" />
                )}

                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center shadow-cta">
                    {step.number}
                  </div>

                  <div className="flex-1 space-y-3">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {step.title}
                    </h2>
                    <div className="space-y-3">
                      {step.description.map((paragraph, j) => (
                        <p key={j} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-20 bg-surface-soft border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Pronto para começar? 🚿
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
