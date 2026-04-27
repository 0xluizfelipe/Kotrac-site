import { Zap, Gauge, Sliders, Droplets, Cylinder, Wrench } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Bombas Hidraulicas',
      description: 'Manutencao, revisao completa e recuperacao de bombas hidraulicas de pistao, engrenagem e palheta, com restauracao das especificacoes originais de pressao e vazao.',
      icon: Zap,
    },
    {
      number: '02',
      title: 'Motores Hidraulicos',
      description: 'Diagnostico aprofundado e recuperacao de motores hidraulicos de diferentes tipos e fabricantes, para aplicacoes moveis, agricolas e de construcao pesada.',
      icon: Gauge,
    },
    {
      number: '03',
      title: 'Comandos Hidraulicos',
      description: 'Manutencao especializada em comandos hidraulicos, blocos de controle e sistemas de direcionamento, garantindo precisao e confiabilidade operacional.',
      icon: Sliders,
    },
    {
      number: '04',
      title: 'Valvulas Modulares',
      description: 'Recuperacao de valvulas modulares e cartuchos insertaveis de todos os fabricantes, com substituicao de componentes internos e testes de funcionamento.',
      icon: Droplets,
    },
    {
      number: '05',
      title: 'Cilindros Hidraulicos',
      description: 'Manutencao completa em cilindros hidraulicos mobil, incluindo troca de retentores, retificacao de hastes, substituicao de buchas e vedacoes.',
      icon: Cylinder,
    },
    {
      number: '06',
      title: 'Solucoes Customizadas',
      description: 'Desenvolvimento de solucoes tecnicas personalizadas para demandas especificas, com analise de engenharia e proposta adaptada a realidade operacional de cada cliente.',
      icon: Wrench,
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
            Nossas <span className="text-orange-600">especialidades</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cobertura completa em sistemas hidraulicos mobil, com profissionais altamente capacitados para cada tipo de componente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-l-4 border-orange-600 shadow-md hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-orange-600 opacity-20" style={{ fontFamily: 'Poppins' }}>
                    {service.number}
                  </span>
                  <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins' }}>
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
