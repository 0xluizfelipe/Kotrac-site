import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/photo_AQADGAxrG9GrgUd-_2a8005a9.jpg"
                alt="Kotrac Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400">
              Especialistas em hidraulica mobil desde 1985. Qualidade, precisao e confiabilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'Poppins' }}>Links Rapidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Servicos</a></li>
              <li><a href="#galeria" className="hover:text-orange-500 transition-colors">Galeria</a></li>
              <li><a href="#contato" className="hover:text-orange-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'Poppins' }}>Servicos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Bombas Hidraulicas</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Cilindros Hidraulicos</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Valvulas Modulares</a></li>
              <li><a href="#servicos" className="hover:text-orange-500 transition-colors">Solucoes Customizadas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'Poppins' }}>Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">(21) 2573-6833</p>
                  <p className="text-gray-400">(21) 97043-0627</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400">luiz.marques@kotrac.com.br</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-xs">Av. Teixeira de Castro, 660 - Bonsucesso, RJ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Kotrac. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0">Desenvolvido com precisao e excelencia tecnica</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
