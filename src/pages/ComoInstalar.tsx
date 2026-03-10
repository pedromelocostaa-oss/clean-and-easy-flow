import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import installationImg from "@/assets/installation.jpg";

const steps = [
  {
    number: 1,
    title: "Conecte a mangueira ao vaso sanitário",
    description: [
      "Feche o registro de água e remova o assento do vaso. Desconecte a mangueira flexível existente da caixa acoplada.",
      "Localize o adaptador T que vem no kit. Conecte a mangueira existente na lateral do adaptador e rosqueie o topo do adaptador na caixa acoplada. Aperte com a mão — não use força excessiva.",
      "Conecte a mangueira flexível fornecida no kit na saída inferior do adaptador T. Novamente, aperte com cuidado para não danificar a rosca.",
    ],
  },
  {
    number: 2,
    title: "Conecte a ducha à mangueira",
    description: [
      "Conecte a outra ponta da mangueira flexível de aço na entrada de água do Jet Clean. Gire suavemente no sentido anti-horário até encaixar.",
      "Se a mangueira girar apenas uma vez e parar, pode ser que a rosca esteja cruzada. Desrosqueie e tente novamente alinhando corretamente. Use fita veda-rosca se necessário para uma vedação perfeita.",
    ],
  },
  {
    number: 3,
    title: "Encaixe o Jet Clean no vaso",
    description: [
      "Posicione o Jet Clean sobre o vaso sanitário, entre o assento e a louça. Dependendo do modelo, você terá flanges ajustáveis — alinhe-os com os furos de fixação do assento.",
      "Certifique-se de que o bico esteja centralizado e o mais próximo possível da parte traseira do vaso, sem encostar na louça. Ajuste a posição do bico pelo console do aparelho.",
    ],
  },
  {
    number: 4,
    title: "Recoloque o assento do vaso",
    description: [
      "Posicione o assento sobre o Jet Clean e passe os parafusos pelos flanges ajustáveis e pelos furos de montagem do vaso.",
      "Aperte os parafusos girando no sentido horário. Segure a porca por baixo para maior firmeza. Não aperte demais para não danificar a louça.",
    ],
  },
  {
    number: 5,
    title: "Teste de vazamento e primeiro uso",
    description: [
      "Abra o registro de água e verifique todas as conexões. Se não houver vazamentos, está pronto! Caso haja algum vazamento, verifique se a borracha de vedação está bem posicionada e se as roscas estão alinhadas.",
      "NÃO acione o jato antes de sentar. Comece girando o botão de pressão bem devagar — a pressão da água residencial é forte. Vá ajustando aos poucos até encontrar a regulagem ideal para você.",
    ],
  },
];

const ComoInstalar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Wrench className="h-4 w-4" />
            Guia de Instalação
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Como instalar o Jet Clean
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Instalação simples, sem ferramentas especiais. Siga os 5 passos abaixo e em menos de 15 minutos seu Jet Clean estará pronto para uso.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border hidden md:block" />
                )}

                <div className="flex gap-5 items-start">
                  {/* Step number */}
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
              Pronto! Comece a usar seu Jet Clean 🚿
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
