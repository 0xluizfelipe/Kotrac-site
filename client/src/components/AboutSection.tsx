import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      title: 'Diagnostico tecnico preciso',
      description: 'Identificamos a causa raiz da falha para garantir uma solucao definitiva, evitando reincidencias e custos adicionais.',
    },
    {
      title: 'Agilidade operacional',
      description: 'Nossa equipe atua com foco na reducao do tempo de parada, minimizando o impacto na produtividade do cliente.',
    },
    {
      title: 'Atendimento personalizado',
      description: 'Cada demanda e analisada individualmente, com proposta tecnica adequada as necessidades especificas de cada operacao.',
    },
    {
      title: 'Qualidade assegurada',
      description: 'Todos os servicos sao executados com rigoroso controle de qualidade, do diagnostico a entrega final do componente.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-workshop-SzZCcmJnkBvZcN8o3FjYJh.webp"
              alt="Oficina Tecnica Kotrac"
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
                Tradicao e <span className="text-orange-600">excelencia</span> em hidraulica mobil
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fundada em 1985, a Kotrac consolidou-se como referencia em manutencao e desenvolvimento de solucoes para recuperacao de componentes hidraulicos no Rio de Janeiro. Contamos com uma equipe de profissionais altamente capacitados e estrutura tecnica para atender demandas de diferentes portes e segmentos.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-block px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              FALE COM NOSSA EQUIPE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
