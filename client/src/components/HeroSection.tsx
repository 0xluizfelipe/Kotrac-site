import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden pt-20 pb-32">
      {/* Diagonal SVG Divider */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="600" fill="url(#grid)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-full">
                ESPECIALISTAS EM HIDRAULICA MOBIL DESDE 1985
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Poppins' }}>
              Solucoes em <span className="text-orange-500">Hidraulica</span> Mobil
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Ha quatro decadas, a Kotrac oferece servicos especializados de manutencao e recuperacao de componentes hidraulicos. Diagnostico preciso, agilidade no atendimento e comprometimento com a continuidade operacional de sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contato"
                className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                SOLICITAR ORCAMENTO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                CONHECA NOSSOS SERVICOS
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-bold text-orange-500">40</p>
                <p className="text-sm text-gray-400">Anos de Mercado</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">1985</p>
                <p className="text-sm text-gray-400">Fundacao</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">100%</p>
                <p className="text-sm text-gray-400">Equipe Especializada</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663341279725/9QvvMEMsV2AiNNwohZPYeQ/kotrac-hero-pump-GeCoetVvotjFp7hvjKa5jo.webp"
              alt="Bomba Hidraulica de Precisao"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
