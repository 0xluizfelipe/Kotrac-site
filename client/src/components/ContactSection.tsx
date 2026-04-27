import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereco',
      value: 'Avenida Teixeira de Castro, 660 - Bonsucesso, RJ',
    },
    {
      icon: Clock,
      label: 'Horario de Atendimento',
      value: 'Segunda a sexta - 07h30 as 17h00',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(21) 2573-6833 / (21) 97043-0627',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'luiz.marques@kotrac.com.br',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins' }}>
            Solicite um <span className="text-orange-600">orcamento</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Entre em contato com nossa equipe tecnica. Atendemos com agilidade e oferecemos analise especializada para cada demanda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins' }}>
                Informacoes de Contato
              </h3>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-600">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{info.label}</h4>
                    <p className="text-gray-300 mt-1">{info.value}</p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 mb-3">Prefere conversar por WhatsApp?</p>
              <a
                href="https://wa.me/5521999124699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300"
              >
                INICIAR CONVERSA
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-800 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins' }}>
              Envie sua mensagem
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Preencha o formulario e nossa equipe retornara em ate 1 dia util.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-white mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-2 border-b-2 border-blue-600 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-white mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Razao social ou nome"
                  required
                  className="w-full px-4 py-2 border-b-2 border-blue-600 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contato@suaempresa.com.br"
                  required
                  className="w-full px-4 py-2 border-b-2 border-blue-600 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-white mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full px-4 py-2 border-b-2 border-blue-600 focus:border-orange-600 focus:outline-none transition-colors bg-transparent text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva o componente, a falha observada e a urgencia do atendimento..."
                  rows={4}
                  required
                  className="w-full px-4 py-2 border-b-2 border-blue-600 focus:border-orange-600 focus:outline-none transition-colors bg-transparent resize-none text-white placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg mt-6"
              >
                {submitted ? 'Mensagem Enviada!' : 'ENVIAR MENSAGEM'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
