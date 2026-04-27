export default function TimelineSection() {
  const milestones = [
    {
      year: '1985',
      title: 'Fundacao',
      description: 'A Kotrac e fundada no Rio de Janeiro com a missao de oferecer servicos tecnicos especializados em componentes hidraulicos mobil, atendendo as demandas crescentes do setor.',
    },
    {
      year: '2000',
      title: 'Expansao',
      description: 'Ampliacao do portfolio de servicos com a incorporacao de recuperacao de cilindros hidraulicos de grande porte e desenvolvimento de solucoes customizadas para clientes moveis.',
    },
    {
      year: '2025',
      title: '40 Anos',
      description: 'Quatro decadas de mercado consolidam a Kotrac como referencia em hidraulica mobil no Rio de Janeiro, com equipe especializada e compromisso continuo com a excelencia tecnica.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
            40 anos de <span className="text-orange-600">tradicao</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Acompanhe a evolucao da Kotrac ao longo de quatro decadas de inovacao e comprometimento com excelencia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-600 to-orange-400 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                  {/* Content - Alternating sides */}
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <p className="text-orange-600 font-bold text-sm mb-2">MARCO IMPORTANTE</p>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      <p className="text-3xl font-bold text-orange-600" style={{ fontFamily: 'Poppins' }}>
                        {milestone.year}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-6 z-10">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-white font-bold text-2xl">{index + 1}</span>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 && <div className="hidden md:block"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
